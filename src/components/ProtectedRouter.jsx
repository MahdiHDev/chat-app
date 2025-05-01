// import { useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { useChat } from "../context/ChatContext";

// const ProtectedRouter = ({ children }) => {
//     const { user } = useChat();
//     const navigate = useNavigate();
//     const location = useLocation();

//     useEffect(() => {
//         if (!user) {
//             navigate("/login", { replace: true, state: { from: location } });
//         }
//     }, [user, navigate, location]);

//     if (!user) return null; // prevent rendering until redirect

//     return children;
// };

// export default ProtectedRouter;

import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useChat } from "../context/ChatContext";

const ProtectedRouter = ({ children }) => {
    const { user, loading } = useChat();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (!loading && !user) {
            navigate("/login", { replace: true, state: { from: location } });
        }
    }, [user, loading, navigate, location]);

    if (!user) return null; // avoids flashing

    return children;
};

export default ProtectedRouter;
