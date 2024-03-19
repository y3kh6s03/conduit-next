"use client"

import axios from "axios"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function CreateForm() {
  const [errorMsg, setErrorMsg] = useState<string>('')
  const router = useRouter()
  const handleArticleInput = async (formData: FormData) => {
    const tagList = formData.get('tag')
    const tagLists: string[] | null = typeof tagList === 'string' ? tagList?.split(' ') : ['']
    const token = localStorage.getItem('token');
    const article = {
      article: {
        title: formData.get('title'),
        description: formData.get('description'),
        body: formData.get('body'),
        tagList: tagLists,
        token: token
      }
    }
    try {
      const res = await axios.post('/api/create', article);
      console.log(res.data)
    } catch (e) {
      console.log(e)
      setErrorMsg('失敗しちゃったw')
    }
  }
  return (
    <form action={handleArticleInput}>
      <span>{errorMsg}</span>
      <fieldset>
        <fieldset className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Article Title"
            name="title"
          />
        </fieldset>
        <fieldset className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="What's this article about?"
            name="description"
          />
        </fieldset>
        <fieldset className="form-group">
          <textarea
            className="form-control"
            rows={8}
            placeholder="Write your article (in markdown)"
            defaultValue={""}
            name="body"
          />
        </fieldset>
        <fieldset className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter tags"
            name="tag"
            required
          />
          <div className="tag-list">
            <span className="tag-default tag-pill">
              {" "}
              <i className="ion-close-round" /> tag{" "}
            </span>
          </div>
        </fieldset>
        <button
          className="btn btn-lg pull-xs-right btn-primary"
          type="submit"
        >
          Publish Article
        </button>
      </fieldset>
    </form>
  )
}