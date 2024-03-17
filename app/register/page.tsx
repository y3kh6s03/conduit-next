import RegisterIndex from "../features/register/register.index";

export default function Register() {
  return (
    <>
      <RegisterIndex />
    </>
  )
}
// formの入力を受け取る
// その受け取った情報を載せて、APIに送信する
// そのAPIからのレスポンスによって
// 登録できていなかったらエラーを表示して、再入力を要求
// 登録に成功していたら、Home画面にリダイレクトをする