import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AllRoutes from "./components/AllRoutes";

function App() {
    return (
        <BrowserRouter>
            <AllRoutes />
        </BrowserRouter>
    );
}

export default App;
