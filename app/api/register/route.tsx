import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const REGISTER_URL = process.env.CONDUIT_BASE_APIURL + 'users/';
  const reqData = await req.json();
  const res = await axios.post(REGISTER_URL, {
    user: {
      username: reqData.data.name,
      email: reqData.data.email,
      password: reqData.data.password
    }
  });
  const token = res.data.user.token
  return NextResponse.json(token);
}