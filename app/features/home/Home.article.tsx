"use client"
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react"

interface articles {
    body: string,
    created_at: string,
    description: string,
    id: number,
    slug: string,
    title: string,
    updated_at: string,
    user_id: number
}

export default function HomeArticle() {
  const [test, setTest] = useState<articles[]>();
  useEffect(() => {
    const test = async () => {
      const data = await axios.get('/api/articles')
      setTest(data.data);
      console.log(data.data)
    }
    test()
  }, [])

  return (
    <div className="article-preview">
      {
        test?.map((item)=>{
          return(
            <>
            <h1>{item.title}</h1>
            </>
          )
        })
      }
      <div className="article-meta">
        <a href="/profile/eric-simons">
          <img src="http://i.imgur.com/Qr71crq.jpg" />
        </a>
        <div className="info">
          <a href="/profile/eric-simons" className="author">
            Eric Simons
          </a>
          <span className="date">January 20th</span>
        </div>
        <button className="btn btn-outline-primary btn-sm pull-xs-right">
          <i className="ion-heart" /> 29
        </button>
      </div>
      <a
        href="/article/how-to-build-webapps-that-scale"
        className="preview-link"
      >
        <h1>How to build webapps that scale</h1>
        <p>This is the description for the post.</p>
        <span>Read more...</span>
        <ul className="tag-list">
          <li className="tag-default tag-pill tag-outline">realworld</li>
          <li className="tag-default tag-pill tag-outline">
            implementations
          </li>
        </ul>
      </a>
    </div>
  )
}