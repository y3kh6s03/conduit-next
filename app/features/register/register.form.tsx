"use client"
import axios from "axios"
import { useRouter } from "next/navigation"

export default function RegisterForm() {
  const router = useRouter()
  const handleSubmit = async (formData: FormData) => {
    const rawFormData = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password')
    }
    const res = await axios.post('/api/register', { data: rawFormData })
    const token = res.data;
    if(token){
      localStorage.setItem('token', token);
      router.push('/')
    }
  }

  return (
    <form action={handleSubmit}>
      <fieldset className="form-group">
        <input
          className="form-control form-control-lg"
          type="text"
          placeholder="name"
          name="name"
          autoComplete="username"
        />
      </fieldset>
      <fieldset className="form-group">
        <input
          className="form-control form-control-lg"
          type="text"
          placeholder="Email"
          name="email"
          autoComplete="email"
        />
      </fieldset>
      <fieldset className="form-group">
        <input
          className="form-control form-control-lg"
          type="password"
          placeholder="Password"
          name="password"
          autoComplete="current-password"
        />
      </fieldset>
      <button className="btn btn-lg btn-primary pull-xs-right"
        type="submit"
      >
        Sign up
      </button>
    </form>
  )
}