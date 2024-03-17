import type { Article } from "./Article.index"
export default function ArticleActions(article: { article: Article | undefined }) {
  return (
    <div className="article-actions">
      <div className="article-meta">
        <a href="profile.html">
          <img src="http://i.imgur.com/Qr71crq.jpg" />
        </a>
        <div className="info">
          <a href="" className="author">
            {article.article?.author}
          </a>
          <span className="date">{article.article?.created_at}</span>
        </div>
        <button className="btn btn-sm btn-outline-secondary">
          <i className="ion-plus-round" />
          &nbsp; {`Follow ${article.article?.author}`}
        </button>
        &nbsp;
        <button className="btn btn-sm btn-outline-primary">
          <i className="ion-heart" />
          &nbsp; Favorite Article <span className="counter">(29)</span>
        </button>
        <button className="btn btn-sm btn-outline-secondary">
          <i className="ion-edit" /> Edit Article
        </button>
        <button className="btn btn-sm btn-outline-danger">
          <i className="ion-trash-a" /> Delete Article
        </button>
      </div>
    </div>
  )
}