import { Button } from "react-bootstrap"
import Login from "./Login"
import Signup from "./Signup"
import { useState } from "react"

export default function Home(){

    const [isMember, setIsMember] = useState(false)

    return (
        <>
        {
            (isMember)
            ? <Login />
            : <Signup />
        }

        <Button onClick={ () => setIsMember(!isMember)}>
            Switch Form
        </Button>
        </>
    )
}