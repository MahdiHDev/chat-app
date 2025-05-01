import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import ProtectedRouter from "./ProtectedRouter";

const AllRoutes = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <ProtectedRouter>
                        <Home />
                    </ProtectedRouter>
                }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
        </Routes>
    );
};

export default AllRoutes;
