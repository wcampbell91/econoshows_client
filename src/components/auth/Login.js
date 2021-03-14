import React from "react"
import { Link } from "react-router-dom"
import { Form, Container, Button } from "react-bootstrap"


const Login = props => {
    const username = React.createRef()
    const password = React.createRef()
    const invalidDialog = React.createRef()

    const handleLogin = (e) => {
        e.preventDefault();
        
        return fetch("http://localhost:8000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                username: username.current.value,
                password: password.current.value
            })
        })
            .then(res => res.json())
            .then(res => {
                if("valid" in res && res.valid && "token" in res) {
                    localStorage.setItem("token", res.token)
                    localStorage.setItem("user_id", res.id)
                    res.band_id ? localStorage.setItem("band_id", res.band_id) : localStorage.setItem("venue_id", res.venue_id)
                    
                    res.band_id ? props.history.push(`/bands/${res.band_id}`) : props.history.push(`/venues/${res.venue_id}`)
                }
                else {
                    invalidDialog.current.showModal()
                }
            })
    }

    return (
        <Container className="justify-content-center">

            <dialog className="dialog dialog--auth" ref={invalidDialog}>
                <div>Email or password was not valid.</div>
                <Button variant="danger" onClick={e => invalidDialog.current.close()}>Close</Button>
            </dialog>

            <Form className="col-6 offset-3" onSubmit={handleLogin}>
                <h2>EconoShows</h2>
                <h3>Login</h3>
                <Form.Group controlId="email">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" ref={username} required />
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={password} required/>
                </Form.Group>
                <Button type="submit"> Sign In</Button>
            </Form>
            <div className="justify-content-center" style={{
                textAlign: "center"
            }}>
                <Link to="/register" className="">Not a member yet?</Link>
            </div>
        </Container>
    )
}

export default Login
