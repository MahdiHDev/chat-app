import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card from '../components/Card';

const SignUp = () => {
    const [formValue, setFormValue] = useState({
        name: '',
        email: '',
        mobile: '',
        password: '',
        confirmPassword: '',
    });

    // const [error, setError] = useState('');

    const handleInput = (e) => {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (
            formValue.password === '' ||
            formValue.password !== formValue.confirmPassword
        ) {
            // setError('Passwords do not match!');
            toast.error('Passwords do not match!');
            return;
        } else {
            console.log('Form submitted', formValue);

            // TODO: Send data to the backend here
            try {
                const response = await axios.post(
                    'http://localhost:3000/auth/signup',
                    formValue,
                    { withCredentials: true }
                );

                if (response.status === 200) {
                    toast.success(
                        'Login successful! Redirecting to the homepage...'
                    );
                    // navigate('/');
                }
                console.log(response.data);
            } catch (err) {
                console.log(err.message);
            }
        }

        // Clear error and proceed with signup logic
        // setError('');
    };

    return (
        <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
            <Card className="w-screen md:w-96 bg-gray-100" title="Sign Up">
                <form
                    onSubmit={handleSubmit}
                    className="space-y-4 flex flex-col text-sm"
                >
                    <input
                        type="text"
                        name="name"
                        value={formValue.name}
                        className="border p-2 rounded-sm border-gray-400 outline-gray-500"
                        placeholder="Username"
                        onChange={handleInput}
                    />
                    <input
                        type="email"
                        name="email"
                        value={formValue.email}
                        className="border p-2 rounded-sm border-gray-400 outline-gray-500"
                        placeholder="Email"
                        onChange={handleInput}
                    />
                    <input
                        type="text"
                        name="mobile"
                        value={formValue.mobile}
                        className="border p-2 rounded-sm border-gray-400 outline-gray-500"
                        placeholder="Mobile Number"
                        onChange={handleInput}
                    />
                    <input
                        type="password"
                        name="password"
                        value={formValue.password}
                        className="border p-2 rounded-sm border-gray-400 outline-gray-500"
                        placeholder="Password"
                        onChange={handleInput}
                    />
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formValue.confirmPassword}
                        className="border p-2 rounded-sm border-gray-400 outline-gray-500"
                        placeholder="Confirm Password"
                        onChange={handleInput}
                    />
                    <input
                        className="border p-2 rounded-sm border-gray-400 outline-gray-500"
                        type="file"
                    />

                    <button
                        type="submit"
                        className="w-full bg-gray-800 text-white p-2 rounded-sm"
                    >
                        Submit
                    </button>
                </form>
                <div className="text-sm py-2">
                    Already have an account?{' '}
                    <Link
                        to="/login"
                        className="text-green-500 hover:underline hover:text-gray-500"
                    >
                        Please Login
                    </Link>
                </div>
            </Card>

            <ToastContainer />
        </div>
    );
};

export default SignUp;
