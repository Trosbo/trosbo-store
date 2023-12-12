import { NextResponse } from "next/server";

export async function GET(req: Request) {
  console.log(`req ${req}`);

  return NextResponse.json(
    { prod: "baka" },
    {
      status: 200,
    },
  );
}

