import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import ErrorPage from "../pages/ErrorPage"

export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage/>} />
                <Route path='*' element={<ErrorPage/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router