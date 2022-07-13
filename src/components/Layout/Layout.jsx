import React, {useEffect} from 'react';
import Header from "../Header/Header";
import {Footer} from "../Footer/Footer";
import {Outlet, useNavigate} from 'react-router-dom';
const Layout = () => {
    const navigate = useNavigate();

    useEffect(()=>{
        navigate('/home')
    },[])
    return (
        <>
            <Header/>
            <div className="content">
                <Outlet/>
            </div>
            <Footer/>
        </>
    );
};

export default Layout;