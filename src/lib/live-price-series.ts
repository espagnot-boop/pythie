/** Synthetic daily median rent (€/mo) for Lyon 6e — demo series with realistic volatility. */
export const livePriceMeta = {
  title: "2-bed median rent · Lyon 6e",
  sources: "SeLoger · LeBonCoin · PAP",
  cadence: "Poll every 6h",
  unit: "€/mo",
};

type LivePricePoint = {
  index: number;
  date: string;
  price: number;
  axisLabel: string;
};

function buildSeries(): LivePricePoint[] {
  const out: LivePricePoint[] = [];
  const start = new Date(2026, 0, 6);
  let price = 1416;

  for (let i = 0; i < 84; i++) {
    const d = new Date(start);
    d.setDate(d.getDate() + i);

    const seasonal = Math.sin((i / 84) * Math.PI * 2) * 16;
    const weekly = Math.sin((i / 7) * Math.PI * 2) * 5;
    const listingGap = i >= 48 && i <= 55 ? -9 : 0;
    const promoWeek = i >= 22 && i <= 25 ? -14 : 0;
    const rng = (((i * 7919 + 104729) % 1000) / 1000 - 0.5) * 20;
    const target = 1412 + seasonal + weekly + listingGap + promoWeek + rng;

    price = Math.round(Math.min(1494, Math.max(1336, price * 0.35 + target * 0.65)));

    const axisLabel =
      i % 12 === 0 || i === 83
        ? d.toLocaleDateString("en-GB", { day: "numeric", month: "short" })
        : "";

    out.push({
      index: i,
      date: d.toISOString().slice(0, 10),
      price,
      axisLabel,
    });
  }

  return out;
}

export const livePriceSeries = buildSeries();

export function livePriceStats(points: LivePricePoint[]) {
  const prices = points.map((p) => p.price);
  const current = prices[prices.length - 1] ?? 0;
  const window = prices.slice(-30);
  const prior = window[0] ?? current;
  const changePct = prior ? ((current - prior) / prior) * 100 : 0;
  const low = Math.min(...prices);
  const high = Math.max(...prices);

  return { current, changePct, low, high };
}
