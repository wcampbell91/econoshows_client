import React from "react"
import { Link } from "react-router-dom"

const Login = props => {
    const email = React.createRef()
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
                username: email.current.value,
                password: password.current.value
            })
        })
            .then(res => res.json())
            .then(res => {
                if("valid" in res && res.valid && "token" in res) {
                    localStorage.setItem("token", res.token)
                    localStorage.setItem("user_id", res.id)
                    props.history.push("/")
                }
                else {
                    invalidDialog.current.showModal()
                }
            })
    }
    // return ()
}

export default Login
