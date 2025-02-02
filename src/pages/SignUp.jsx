import { Link } from 'react-router-dom';
import Card from '../components/Card';

const SignUp = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 ">
            <Card className="w-96 bg-white" title="Sign Up">
                <form action="" className="space-y-4 flex flex-col text-sm">
                    <input
                        type="text"
                        name="username"
                        className="border p-2 rounded-sm border-gray-400  outline-gray-500"
                        placeholder="Username"
                    />
                    <input
                        type="email"
                        name="email"
                        className="border p-2 rounded-sm border-gray-400  outline-gray-500"
                        placeholder="Email"
                    />
                    <input
                        type="text"
                        name="mobile"
                        className="border p-2 rounded-sm border-gray-400  outline-gray-500"
                        placeholder="Mobile Number"
                    />
                    <input
                        type="password"
                        name="password"
                        className="border p-2 rounded-sm border-gray-400  outline-gray-500"
                        placeholder="Password"
                    />
                    <input
                        type="password"
                        name="confirmpassword"
                        className="border p-2 rounded-sm border-gray-400  outline-gray-500"
                        placeholder="Confirm Password"
                    />
                    <input
                        className="border p-2 rounded-sm border-gray-400  outline-gray-500"
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
                    Already have an account.{' '}
                    <Link
                        to="/login"
                        className="text-green-500 hover:underline hover:text-gray-500"
                    >
                        Please Login
                    </Link>
                </div>
            </Card>
        </div>
    );
};

export default SignUp;
