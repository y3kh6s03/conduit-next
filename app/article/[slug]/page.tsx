import ArticleIndex from "@/app/features/article/Article.index";
import { createContext } from "react";

export default function Article({ params }: { params: { slug: string } }){
  return(
    <ArticleIndex params={params}/>
  )
}