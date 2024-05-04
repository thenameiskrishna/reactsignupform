import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SIgn_img2 from './SIgn_img2'

const Home = () => {

    const history = useNavigate();

    const [inpval, setInpval] = useState({
        name: "",
        email: "",
        date: "",
        password: ""
    })

   

    const [data,setData] = useState([]);
    console.log(inpval);

    const getdata = (e) => {
        // console.log(e.target.value);


        const { value, name } = e.target;
        // console.log(value,name);


        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })

    }

    const addData = (e) => {
        e.preventDefault();

        const { name, email, date, password } = inpval;

        if (name === "") {
            toast.error('Please input your Name',{
                position: "top-center",
            });
        } else if (email === "") {
             toast.error('Please input your Email',{
                position: "top-center",
            });
        } else if (!email.includes("@")) {
             toast.error('Please Enter valid Email address',{
                position: "top-center",
            });
        } else if (date === "") {
             toast.error('Please input your DOB',{
                position: "top-center",
            });
        } else if (password === "") {
             toast.error('Password is Requred',{
                position: "top-center",
            });
        } else if (password.length <5) {
             toast.error('Password is too short! Please enter more then five character.',{
                position: "top-center",
            });
        } else {
            console.log("Data added succesfully");
            history("/login")
            localStorage.setItem("userkishan",JSON.stringify([...data,inpval]));

        }

    }

    return (
        <>
            <div className="container mt-3">
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-6'>Create Your Account</h3>
                        <Form >
                            <Form.Group className="mb-2 col-lg-6" controlId="formBasicEmail">
                            <Form.Label>Enter Your Name:-</Form.Label>

                                <Form.Control type="text" name='name' onChange={getdata} placeholder="Enter Your Name" />
                            </Form.Group>
                            <Form.Group className="mb-2 col-lg-6" controlId="formBasicEmail">
                            
                            <Form.Label>Enter Your Email:-</Form.Label>
                                <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-2 col-lg-6" controlId="formBasicEmail">
                            
                            <Form.Label>Enter Your Date of Birth:-</Form.Label>
                                <Form.Control onChange={getdata} name='date' type="date" />
                            </Form.Group>
                            <Form.Label>Create Password:-</Form.Label>
                            <Form.Group className="mb-2 col-lg-6" controlId="formBasicPassword">

                                <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" className='col-lg-6' onClick={addData}  type="submit">
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-2'>Already Have an Account ? <span><NavLink to="/login">Login in here!</NavLink></span></p>
                    </div>
                    <SIgn_img2 />
                </section>
                <ToastContainer />
            </div>
        </>
    )
}

export default Home