"use client"

import { ChangeEvent, FormEvent, useState } from "react"

interface FormValues {
  name: string,
  email: string,
  password: string
}

export default function RegisterForm() {
  const [formValues, setFormValues] = useState<FormValues>({ name: '', email: '', password: '' });
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {

    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formValues);
  }

  return (
    <form method="POST" onSubmit={handleSubmit}>
      <fieldset className="form-group">
        <input
          className="form-control form-control-lg"
          type="text"
          placeholder="name"
          name="name"
          value={formValues.name}
          onChange={handleInputChange}
          autoComplete="username"
          />
      </fieldset>
      <fieldset className="form-group">
        <input
          className="form-control form-control-lg"
          type="text"
          placeholder="Email"
          name="email"
          value={formValues.email}
          onChange={handleInputChange}
          autoComplete="email"
          />
      </fieldset>
      <fieldset className="form-group">
        <input
          className="form-control form-control-lg"
          type="password"
          placeholder="Password"
          name="password"
          value={formValues.password}
          onChange={handleInputChange}
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