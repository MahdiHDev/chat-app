import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AllRoutes from './components/AllRoutes';

function App() {
    // const [count, setCount] = useState(0);

    return (
        <BrowserRouter>
            <AllRoutes />
        </BrowserRouter>
    );
}

export default App;
