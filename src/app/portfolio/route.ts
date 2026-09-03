import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";
import { getPortfolioData } from "../../../lib/actions/portfolio";

export async function GET(request: NextRequest) {
  const email = request.nextUrl.searchParams.get("email");
  if (!email) {
    return NextResponse.json(
      { error: "Email parameter is required" },
      { status: 400 }
    );
  }

  const user = await prisma.users.findUnique({
    where: { email },
  });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const userPortfolio = await getPortfolioData();

  return NextResponse.json({
    message: `Hello from the portfolio route! Email: ${email}`,
    portfolio: userPortfolio,
  });
}