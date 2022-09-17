import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

function Login() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
   const router  = useRouter()
  
  const userSignIn = async(e)=>{
    e.preventDefault()
    const res =  await fetch(`https://dummyjson.com/auth/login`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email:"kminchelle@qq.com",
        password:"0lelplR"
      })
    })

    const res2 = await res.json()
    if(res2.error){
     console.log("error")
    }else{
       console.log("sucess",res2)
       router.push('/login')
    }

 }

  return (
    <div style={{padding:"100px"}}>
    <Form onSubmit={(e)=>userSignIn(e)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default Login