import React, { useRef } from 'react';
import axios from 'axios';

export default function Login(props){
    const userNameRef = useRef(null);
    const passwordRef = useRef(null);

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(userNameRef, passwordRef);
    }

    return(
        <div>
            <form>
                <input ref={userNameRef} placeholder='Username' type='text' />
                <input ref={passwordRef} placeholder='Password' type='text' />
                <button onClick={onSubmit} >Submit</button>
            </form>
        </div>
    );
}