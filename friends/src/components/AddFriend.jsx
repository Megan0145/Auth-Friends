import React, { useRef } from 'react';

export default function AddFriend(props) {
    const nameRef = useRef();
    const ageRef = useRef();
    const emailRef = useRef();


    return(
        <div>
            <form>
                <input placeholder='Name' ref={nameRef} type='text' />
                <input placeholder='Age' ref={ageRef} type='text' />
                <input placeholder='Email' ref={emailRef} type='text' />
                <button>Add Friend</button>
            </form>
        </div>
    );
}