import { Route, Routes } from "react-router-dom";

import Home from "../Paginas/Home/Home";




function Rotas(){
    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>}></Route>


        </Routes>
        
        
        
        </>
    )
}

export default Rotas