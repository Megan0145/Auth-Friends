import React from 'react';

export default function Login(props){
    return(
        <div>
            <form>
                <input placeholder='Username' />
                <input placeholder='Password' />
                <button>Submit</button>
            </form>
        </div>
    );
}