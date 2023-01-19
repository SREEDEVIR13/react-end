import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Layout from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import './UserLogin.css';

function TestLogin() {
    const initialValues = { username: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [response, setResponse] = useState(false);
    const navigate = useNavigate();
    const submitHandler = (e) => {
        setIsSubmit(true);
        navigate("/register");
    }
    const submitForgotHandler = (e) => {
        setIsSubmit(true);
        navigate("/forgot");
    }
    const handleChange = (e) => {
        console.log(e.target);
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        console.log("handlechange:",formValues);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };
    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);
    const validate = (values) => {
        const errors = {};

        if (!values.username) {
            errors.username = "username is required";
        }
        if (!values.password) {
            errors.password = "password is required";
        }
        return errors;
    };
    const handleApi = () => {
        console.log(formValues);
        axios.post('https://localhost:7149/api/Login', formValues)
            .then((result) => {
                console.log(result)
                if (result.data) {
                    console.log(result.data)
                    localStorage.setItem('token', result.data.Output);
                    localStorage.setItem('userid', result.data.userId);
                    //navigate("/home-page");
                    window.location.reload();
                }
            })
            .catch(error => {
                console.log(error)
            });
    };
    return (
        <>
            <Layout>
                <body className="login-body">
                    <section class="side">
                        <img src="../../images/img.svg" alt="" />
                    </section>

                    <section class="main">
                        <div class="login-container">
                            <p class="title">Welcome back</p>
                            <div class="separator"></div>
                            <p class="welcome-message">Please, provide login credential to proceed and have access to all our services</p>

                            <form class="login-form" onSubmit={handleSubmit}>
                                <div class="form-control">
                                    <input className="login-input" type="text" placeholder="Username" name="username"
                                        value={formValues.username}
                                        onChange={handleChange} />
                                    <i class="fas fa-user"></i>
                                </div>
                                <div class="form-control">
                                    <input className="login-input" type="password" placeholder="Password" name="password"
                                        value={formValues.password}
                                        onChange={handleChange} />
                                    <i class="fas fa-lock"></i>

                                </div>

                                <button class="submit" onClick={handleApi}>Login</button>
                            </form>
                        </div>
                    </section>
                </body>

                <Footer />
            </Layout>

        </>
    )
}
export default TestLogin;