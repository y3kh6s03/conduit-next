import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  const CONDUIT_URL: string | undefined = process.env.CONDUIT_BASE_APIURL + 'articles/'
  if (CONDUIT_URL === undefined) {
    return NextResponse.json("URLが見つかりませんでした")
  }
  try {
    const res = await axios.get(`${CONDUIT_URL}`);
    const data = res.data
    return NextResponse.json(data);
  } catch (e) {
    const error = new Error("失敗！")
    console.log(error)
    return NextResponse.json(error)
  }
}