import React from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'

const Welcome = () => {

    const history = useNavigate();

return (
    <div style={{ backgroundColor: '#f8f9fa', padding: '50px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
    <h1>Welcome to My Website</h1>
    <p>
        Hii, I am <h4>Kishan Chauhan</h4> I made a website design of a simple login signup page using React.js, I used here React bootstrap for
        making this fron-end I used here Javascript and Local Storage to store data of a user who register here and that info will be saved in local storage which should be important for login.
        Please look once. this attractive design.
    </p>
    <p>
        <Button className='btn btn-primary' onClick={()=>history("/")} style={{ marginRight: '10px' }}>Register</Button>
        <Button className='btn btn-primary' onClick={()=>history("/login")} style={{ marginRight: '10px' }}>Login</Button>
    </p>
    <div style={{ marginTop: '50px', fontSize: '14px' }}>
        <p>
        © 2024 Your Website. All rights reserved.
        </p>
        <p>
        <h6>Privacy Policy | Terms of Service | Contact Us</h6>
        </p>
    </div>
    </div>
);
};
export default Welcome;
