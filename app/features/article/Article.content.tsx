import type { Article } from "./Article.index"
export default function ArticleContent(article: { article: Article | undefined }) {
  return (
    <div className="row article-content">
      <div className="col-md-12">
        <p>
          {article.article?.title}
        </p>
        <h2 id="introducing-ionic">{article.article?.body}</h2>
        <p>{article.article?.description}</p>
        <ul className="tag-list">
          {article.article?.tagList.map((tag) => {
            return (
              <>
                <li key={tag} className="tag-default tag-pill tag-outline">{tag}</li>
              </>
            )
          })}
        </ul>
      </div>
    </div>
  )
}