import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request: Request){
  const LOGIN_URL = process.env.CONDUIT_BASE_APIURL + 'users/login'
  const reqData = await request.json()
  console.log(reqData.email)
  const res = await axios.post(LOGIN_URL,{
    user:{
      email: reqData.email,
      password: reqData.password
    }
  })
  const token = res.data.user.token;
  return NextResponse.json(token)
}

