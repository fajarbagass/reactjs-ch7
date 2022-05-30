import {
    Form,
    Button,
    Container
} from "react-bootstrap";
import { useEffect, useState } from "react";
import { GoogleLogin } from '@react-oauth/google';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';

function Login() {
    const [ email, setEmail] = useState("");
    const [ isLoggedIn, setIsLoggedIn] = useState(false);
    const token = localStorage.getItem('token');

    useEffect(() => {
        token ? setIsLoggedIn(true) : setIsLoggedIn(false)
    }, [token])

    // useEffect(() => {

    // }, [isLoggedIn])

    function handleSubmit(e) {
        fetch('http://localhost:3001/api/v1/auth/login',{
            method: "POST",
            body: { email }
        }).then((response) => {
            return response.json()
        }).then((result) => {
            localStorage.setItem('token', result.token);
        })
        console.log("udah login");
    }

    function handleLogout(params) {
        setIsLoggedIn(false)
        localStorage.removeItem('token')
        window.location.reload();
        console.log("di refresh");
    }

    return (
        <div>
            <NavBar />
            <Container className="py-5">
            {!isLoggedIn ? (
                <div>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value = {email} />
                        </Form.Group>
                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>
                    <GoogleLogin
                        onSuccess={credentialResponse => {
                            console.log(credentialResponse);
                            localStorage.setItem('token', credentialResponse.credential);
                            setIsLoggedIn(true);
                        }}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                        useOneTap
                    />
                </div>
                ) : (
                    <Container className="text-center">
                        <h3>Anda Sudah Login</h3>
                        <p>Silahkan klik Logout untuk keluar dari akun</p>
                        <Button variant="primary" onClick={handleLogout}>Logout</Button>
                    </Container>
                )}
            </Container>
            <Footer />
        </div>
    )
}

export default Login;