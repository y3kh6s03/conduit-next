import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const req = await request.json();
  const token = req.article.token;
  const CREATE_URL = process.env.CONDUIT_BASE_APIURL + 'articles'
  const article = {
    article: {
      title: req.article.title,
      description: req.article.description,
      body: req.article.body,
      tagList: req.article.tagList
    }
  }
  // const headers = {headers:{"Authorization": `Bearer ${token}`}}
  const res = await axios.post(CREATE_URL, article, { headers: { "Authorization": `Bearer ${token}` } })
  return NextResponse.json(res.data)
}

// {"article":{"title":"How to train your dragon", "description":"Ever wonder how?", "body":"Very carefully.", "tagList":["training", "dragons"]}}

// export async function POST(request: Request){
//   const CREATE_URL = process.env.CONDUIT_BASE_APIURL + 'articles'
//   const res = await axios.post(CREATE_URL,{});
//   return NextResponse.json(res.data)
// }