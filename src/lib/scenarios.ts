export type DemoScenario = {
  id: string;
  question: string;
  answer: string;
  chart: { label: string; value: number }[];
};

export const scenarios: Record<string, DemoScenario> = {
  lyon: {
    id: "lyon",
    question: "What is the average price of a 2-bed in Lyon, by neighborhood?",
    answer:
      "Average 2-bed in Lyon: €4,989/m². Std dev €620. 312 listings across 14 neighborhoods.",
    chart: [
      { label: "Presqu'île", value: 6200 },
      { label: "Part-Dieu", value: 5100 },
      { label: "Croix-Rousse", value: 4800 },
      { label: "Guillotière", value: 4200 },
      { label: "Vaise", value: 3900 },
    ],
  },
  shrink: {
    id: "shrink",
    question: "Which products shrank quantity without lowering price?",
    answer: "12 of 48 tracked SKUs. Average price-per-kilo up 9.4%.",
    chart: [
      { label: "Cereal", value: 11 },
      { label: "Chocolate", value: 9 },
      { label: "Soap", value: 7 },
      { label: "Coffee", value: 6 },
      { label: "Pasta", value: 5 },
    ],
  },
  competitor: {
    id: "competitor",
    question: "Did my competitor change prices this week?",
    answer: "31 prices changed out of 240 SKUs tracked. Median increase +2.1%.",
    chart: [
      { label: "Mon", value: 4 },
      { label: "Tue", value: 7 },
      { label: "Wed", value: 3 },
      { label: "Thu", value: 12 },
      { label: "Fri", value: 5 },
    ],
  },
  data: {
    id: "data",
    question: "Which data jobs pay best in Île-de-France this week?",
    answer: "Range €420–€890/day. Median €610 across 38 public postings.",
    chart: [
      { label: "75", value: 890 },
      { label: "92", value: 720 },
      { label: "93", value: 610 },
      { label: "94", value: 520 },
      { label: "78", value: 480 },
    ],
  },
};

export const defaultScenarioId = "lyon";
