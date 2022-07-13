import React from 'react';
import {Nav} from "react-bootstrap";
import {Link, useLocation} from "react-router-dom";

const Header = () => {
    let {pathname} = useLocation();
    return (
        <div className="header">
            <Link to={'/home'}><h2>React Blog</h2></Link>
            <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link to="/home" as={Link} active={pathname.includes('/home')}>Главная</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link to="/about" as={Link} active={pathname.includes('/about')}>Обо мне</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link to="/login" as={Link} active={pathname.includes('/login')}>Войти</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
};

export default Header;