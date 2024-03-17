import RegisterForm from "./register.form";

export default function RegisterIndex() {
  return (
    <>
      <div className="auth-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign up</h1>
              <p className="text-xs-center">
                <a href="/login">Have an account?</a>
              </p>
              <ul className="error-messages">
                <li>That email is already taken</li>
              </ul>
              <RegisterForm />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}