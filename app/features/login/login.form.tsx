"use client"

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
  const [errorMsg, setErrorMsg]=useState<string>('');
  const router = useRouter()
  const handleSubmit = async (formData: FormData) => {
    const loginInput = {
      email: formData.get('email'),
      password: formData.get('password')
    }
    try{
      const res = await axios.post('/api/login', loginInput);
      const token = res.data
      localStorage.setItem('token', token);
      router.push('/');
    }catch(e){
      console.log(e);
      const error = '認証に失敗しました。'
      setErrorMsg(error);
    }
  }
  return (
    <form action={handleSubmit}>
      <span>{errorMsg}</span>
      <fieldset className="form-group">
        <input
          className="form-control form-control-lg"
          type="text"
          placeholder="Email"
          autoComplete="email"
          name="email"
        />
      </fieldset>
      <fieldset className="form-group">
        <input
          className="form-control form-control-lg"
          type="password"
          placeholder="Password"
          autoComplete="password"
          name="password"
        />
      </fieldset>
      <button className="btn btn-lg btn-primary pull-xs-right">
        Sign in
      </button>
    </form>
  )
}