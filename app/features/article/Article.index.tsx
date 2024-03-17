"use client"
import ArticleContent from "@/app/features/article/Article.content";
import ArticleActions from "@/app/features/article/Article.actions";
import ArticleComments from "@/app/features/article/Article.comments";
import { useEffect, useState } from "react";
import axios from "axios";
import ArticleBanner from "@/app/features/article/Article.banner";

export interface Article {
    author: string
    body: string
    created_at: string
    description: string
    favorited: boolean
    favoritesCount: number
    id: number
    slug: string
    tagList: []
    title: string
    updated_at: string
    user_id: number
}

export default function ArticleIndex(params: { params: { slug: string } }) {
  const [article, setArticle] = useState<Article>();
  useEffect(() => {
    const getArticle = async () => {
      const json = await axios.get(`/api/article/${params.params.slug}`)
      const article = json.data;
      console.log(article);
      setArticle(article);
    }
    getArticle();
  }, [])
  return (
    <div className="article-page">
      <ArticleBanner article={article} />
      <div className="container page">
        <ArticleContent article={article}/>
        <hr />
        <ArticleActions article={article}/>
        <ArticleComments article={article}/>
      </div>
    </div>

  )
}