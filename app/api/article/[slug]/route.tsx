import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { pathname } = new URL(request.url);
  const pathSegments = pathname.split('/');
  const slug = pathSegments[pathSegments.length - 1];
  const CONDUIT_ARTICLE_URL: string | undefined = process.env.CONDUIT_BASE_APIURL + 'articles/' + slug;
  try {
    const data = await axios.get(CONDUIT_ARTICLE_URL)
    return NextResponse.json(data.data.article);
  } catch (e) {
    const error = new Error("失敗！")
    console.log(error)
    return NextResponse.json(error)
  }
}

// slugが付いたURLリクエストがくる
// そのリクエストに対して、slugを取得する必要がある
// じゃあその処理はどこになる？
// article.indexからからslugをつけたurlに送信したくなる
// 今の現状はルートがおかしいことが課題
// APIが被ってしまっているから、サーバー再度で情報を取得するURLと表示するためのURLが一緒になっていることがややこしくなっている