import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

import LoginForm from "./LoginForm";

export default function Login(){

    return (
        <Container>
         <Row>
          <Col className="mx-4 my-4 p-3 rounded-4 login-container">
           <LoginForm />
          </Col>
         </Row>
        </Container>
    )
}