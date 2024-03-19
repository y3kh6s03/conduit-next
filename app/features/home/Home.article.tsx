"use client"
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react"

interface User {
  id: number,
  username: string
}
interface articles {
  body: string,
  created_at: string,
  description: string,
  id: number,
  slug: string,
  title: string,
  updated_at: string,
  user: User,
  user_id: number
}

export default function HomeArticle() {
  const [test, setTest] = useState<articles[]>();
  useEffect(() => {
    const test = async () => {
      const data = await axios.get('/api/articles')
      setTest(data.data);
    }
    test()
  }, [])

  return (
    <div className="article-preview">
      {
        test?.map((item,index) => {
          return (
            <div key={item.slug + index}>
              <div className="article-meta">
                <a href="/profile/eric-simons">
                  <img src="http://i.imgur.com/Qr71crq.jpg" />
                </a>
                <div className="info">
                  <a href="/profile/eric-simons" className="author">
                    {item.user.username}
                  </a>
                  <span className="date">{item.created_at}</span>
                </div>
                <button className="btn btn-outline-primary btn-sm pull-xs-right">
                  <i className="ion-heart" /> 29
                </button>
              </div>
              <a
                href={`/article/${item.slug}`}
                className="preview-link"
              >
                <h1>{item.title}</h1>
                <p>{item.description}</p>
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
        })
      }
    </div>
  )
}