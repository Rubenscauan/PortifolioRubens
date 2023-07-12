import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../components/Home'
import Barra from "./Barra";
const MainPage = () => {
    return(
        <BrowserRouter>
            <Barra/>
            <div>
                <Routes>
                    <Route path = '/' element = {<Home/>}/> 
                </Routes>

            </div>
        </BrowserRouter>
    )
}

export default MainPage;