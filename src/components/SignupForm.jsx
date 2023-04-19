import { useState } from "react"
import { initializeApp } from "firebase/app"
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

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

export default function SignupForm(){
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [user, setUser] = useState()

const handleSignup = async (e) => {
  e.preventDefault()
  const results = await createUserWithEmailAndPassword(auth, email, password)
    .catch(alert)
  setUser(results.user)
}

const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider()
  const results = await signInWithPopup(auth, provider)
  .catch(alert)
  setUser(results.user)
}

  return (
    <>
      <Form onSubmit={handleSignup}>

        <Form.Group className="mb-3">
          <Form.Label>Email Address</Form.Label>
          <Form.Control 
          type="email"
          placeholder="Enter Email" 
          value={email}
          onChange={e => setEmail(e.target.value)}/>
          <Form.Text>We'll never share your email with anyone else.</Form.Text>     
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password"
            placeholder="Enter Password" 
            value={password}
            onChange={e => setPassword(e.target.value)}/>
            <Form.Text>Never share your password with anyone else.</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Button variant="danger" 
          size="lg"
          type="submit">Sign Up</Button>
        </Form.Group>
      </Form>
      <Button onClick={signInWithGoogle} variant="dark" size="lg">Sign in with Google</Button>
    </>
    )
}