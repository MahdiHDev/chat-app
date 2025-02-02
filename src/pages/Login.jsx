import { Link } from 'react-router-dom';
import Card from '../components/Card';

const Login = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
            <Card className="w-96" title="Login">
                <form action="" className="space-y-4 flex flex-col text-sm">
                    <input
                        type="text"
                        name="email"
                        className="border p-2 rounded-sm border-gray-400  outline-gray-500"
                        placeholder="Enter Email or Phone Number"
                    />
                    <input
                        type="password"
                        name="password"
                        className="border p-2 rounded-sm border-gray-400  outline-gray-500"
                        placeholder="Enter Password"
                    />
                </form>
                <button
                    type="submit"
                    className="w-full bg-gray-800 text-white p-2 rounded-sm mt-4"
                >
                    Submit
                </button>

                <div className="text-sm py-2">
                    Don&apos;t have an account.{' '}
                    <Link
                        to="/sign-up"
                        className="text-green-500 hover:underline hover:text-gray-500"
                    >
                        Please Sign UP
                    </Link>
                </div>
            </Card>
        </div>
    );
};

export default Login;
