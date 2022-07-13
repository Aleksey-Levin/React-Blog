import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate} from "react-router-dom";

const Login = () => {
    const [fields, setFields] = React.useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate();

    const onSubmit = async (event) =>{
        event.preventDefault();

        const resp = await fetch('');
        if(resp.ok){
            navigate('/profile');
        }
        else{
            alert('Ошибка! Неверный логин или пароль');
        }
    }

    const handleChangeInput = (event) =>{
        setFields({
            ...fields,
            [event.target.name]: event.target.value
        })
    }

    return (
        <div>
            <Form className={'login-form'}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name={'email'} onChange={handleChangeInput} type="email" placeholder="Введите E-mail" value={fields.email} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control name={'email'} onChange={handleChangeInput} type="password" placeholder="Password" value={fields.password}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Login;