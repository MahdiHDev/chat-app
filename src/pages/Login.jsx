import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Card from "../components/Card";
import { useChat } from "../context/ChatContext";

const Login = () => {
    const { setUser } = useChat();
    const [formValue, setFormValue] = useState({
        emailOrMobile: "",
        password: "",
    });

    const navigate = useNavigate();

    const handleInput = (e) => {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:3000/auth/login",
                formValue,
                { withCredentials: true }
            );

            if (response.status === 200) {
                toast.success(
                    "Login successful! Redirecting to the homepage..."
                );
                localStorage.setItem(
                    "user",
                    JSON.stringify(response.data.user)
                );
                localStorage.setItem(
                    "token",
                    JSON.stringify(response.data.token)
                );
                setUser(() => response.data.user);
                navigate("/");
            }
            console.log(response.data);
        } catch (err) {
            console.log(err.message);
        }
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
            <Card
                className="w-screen md:w-96 bg-gray-100 md:bg-white"
                title="Login"
            >
                <form
                    action=""
                    className="space-y-4 flex flex-col text-sm"
                    onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        value={formValue.emailOrMobile}
                        onChange={handleInput}
                        name="emailOrMobile"
                        className="border p-2 rounded-sm border-gray-400  outline-gray-500"
                        placeholder="Enter Email or Phone Number"
                    />
                    <input
                        type="password"
                        value={formValue.password}
                        onChange={handleInput}
                        name="password"
                        className="border p-2 rounded-sm border-gray-400  outline-gray-500"
                        placeholder="Enter Password"
                    />
                    <button
                        type="submit"
                        className="w-full bg-gray-800 text-white p-2 rounded-sm"
                    >
                        Submit
                    </button>
                </form>

                <div className="text-sm py-2">
                    Don&apos;t have an account.{" "}
                    <Link
                        to="/sign-up"
                        className="text-green-500 hover:underline hover:text-gray-500"
                    >
                        Please Sign UP
                    </Link>
                </div>
            </Card>

            <ToastContainer />
        </div>
    );
};

export default Login;
