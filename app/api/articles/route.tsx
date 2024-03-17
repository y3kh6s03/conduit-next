import { NextResponse } from "next/server";

export async function GET() {
  const CONDUIT_URL: string | undefined = process.env.CONDUIT_BASE_APIURL
  if (CONDUIT_URL === undefined) {
    return NextResponse.json("URLが見つかりませんでした")
  }
  try {
    const res = await fetch(`${CONDUIT_URL}`);
    const data = await res.json();
    return NextResponse.json(data);
  } catch (e) {
    const error = new Error("失敗！")
    console.log(error)
    return NextResponse.json(error)
  }
}