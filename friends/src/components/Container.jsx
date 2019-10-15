import React from 'react';
import Login from './Login';
import Friends from './Friends';
import { Route, Link, withRouter, Redirect } from 'react-router-dom';

export default function Container(props){
    return(
        <div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/friends'>Friends</Link>
            </nav>
           <main>
               <Route exact path='/' component={Login}/>
               <Route exact path='/friends' component={Friends}/>
           </main>
        </div>
    );
}