import Portfolio from "@/components/portfolio/Portfolio";
import { getPortfolioData } from "../../lib/actions/portfolio";

export default async function Home() {
  const portfolioData = await getPortfolioData();

  return <Portfolio data={portfolioData} />;
}