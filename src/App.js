import React from "react";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import {About} from "./pages/About";
import Post from "./pages/Post";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./components/Layout/Layout";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

function App() {

    return (
        <>
            <Routes>
                <Route path = '/' element={<Layout/>}>
                    <Route path = '/home' element={<Home/>}/>
                    <Route path = '/about' element={<About/>}/>
                    <Route path = '/login' element={<Login/>}/>
                    <Route path = '/profile' element={<Profile/>}/>
                    <Route path = '/post/:id' element={<Post/>}/>
                    <Route path = '*' element={<ErrorPage/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
