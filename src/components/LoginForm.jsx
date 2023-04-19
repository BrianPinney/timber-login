import Form from "react-bootstrap/Form"
import { initializeApp } from "firebase/app"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import Button from "react-bootstrap/Button"
import { useState } from "react"

const firebaseConfig = {
  apiKey: "AIzaSyBhXdYjRhYeiC0CKsKqVSW41X0_jfXj5v8",
  authDomain: "timber-login-bp.firebaseapp.com",
  projectId: "timber-login-bp",
  storageBucket: "timber-login-bp.appspot.com",
  messagingSenderId: "25985121571",
  appId: "1:25985121571:web:b254cd5986c41fb0dd6096"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)


export default function LoginForm(){
const [email, setEmail] = useState()
const [password, setPassword] = useState()
const [user, setUser] = useState()

const handleLogin = async (e) => {
  e.preventDefault()
  const response = await signInWithEmailAndPassword(auth, email, password)
  .catch(err => console.error(err))
  setUser(response.user)
}

if(user) {
  return <h2>Welcome User {user.uid}</h2>
}

  return (
    <>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3">
          <Form.Label>Email Address</Form.Label>
          <Form.Control 
          type="email"
          placeholder="Enter Email" 
          onChange={ e => setEmail(e.target.value)}
          value={email}/>
          <Form.Text>We'll never share your email with anyone else.</Form.Text>     
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password"
            placeholder="Enter Password" 
            onChange={e => setPassword(e.target.value)}
            value={password}/>
            <Form.Text>Never share your password with anyone else.</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Button variant="danger" 
          size="lg"
          type="submit">Login</Button>
        </Form.Group>
      </Form>
    </>
    )
}