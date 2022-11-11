import Header from './Header';
import Menu from './Menu';
import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export default function Adash(){
    const [Userdetails,setuserdetails]=useState([]);

    useEffect(()=>{
        axios.get('http://localhost:3004/users')
        .then(function(res){
            setuserdetails(res.data);
            <select name="assign_to" id="assign_to" class="form-control"/>
        
            }
        )})
        
    
    return(
        <>
        <Header />
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    
                 <Menu />
                </div>
            </div>
        </div>
        </>
    );
}