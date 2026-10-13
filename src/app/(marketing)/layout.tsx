import { NavBar } from "@/components/landing/nav";
import { IndexRail } from "@/components/landing/index-rail";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      <IndexRail />
      <main>{children}</main>
    </>
  );
}
