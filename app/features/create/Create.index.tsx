import CreateForm from "./Create.form";

export default function CreateIndex() {
  return (
    <div className="editor-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-xs-12">
            <ul className="error-messages">
              <li>That title is required</li>
            </ul>
            <CreateForm />
          </div>
        </div>
      </div>
    </div>
  )
}