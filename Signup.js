import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';

export default function Signup(){

    const handlesubmit = async(event) => {
        event.preventDefault();
        var datastring = new FormData(event.target);
       
        var name=document.getElementById('name').value;
        var password=document.getElementById('password').value;
        var phonenumber=document.getElementById('phone').value;
        var email=document.getElementById('email').value;
        if(name === '' || name === null){
            alert('enter name');
        }
        else if(password === '' || password === null){
            alert('enter password');
        }
        else if(phonenumber === '' || phonenumber === null)
        {
            alert('enter a valid number');
    }
    else if(email === '' || email === null){
        alert('enter your email');
    }
    else{

    const config = {     
        headers: { 'enctype': 'multipart/form-data' }
    }
     
               await axios.post('http://localhost:3004/Signup',datastring,config)
                .then(function(res){
                    if(res.data.status === 'Signup_Error'){
                        alert('Signup_Error');
                        window.location.reload();
                    }
                    else if(res.data.status === 'Signin_Error'){
                        alert('Signin_Error');
                        window.location.reload();
                    }
                    else if(res.data.status === 'Signup_successfully'){
                        alert('Signup_Successfully');
                        window.location.href="/";
                    }
                })
                .catch(function(err){
                    console.log(err);
                })
        
        
            }}
        

    return(
        <>
        <div className="container div4">
            <div className="row">
                <div className="col-lg-3">&nbsp;</div>
                <div className="col-lg-6">
                <div className="table-responsive">
                <form onSubmit={handlesubmit}>
                <table className="table table-hover table2">
                    <thead>
                        <tr>
                            <th colSpan={2}>Signup</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Role</td>
                            <td>
                                <select name="role" id="role" className="form-control">
                                    <option value="">--choose--</option>
                                    <option value="PROJECT_MANAGER">PROJECT MANAGER</option>
                                    <option value="TEAM_LEADER">TEAM LEADER</option>
                                    <option value="DEVELOPERS">DEVELOPERS</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td><input type="text" name="name" id="name" placeholder="Name"
                            className="form-control"/></td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>
                                <input type="email" name="email" id="email" placeholder='Email'
                                className='form-control'/>
                            </td>
                        </tr>
                        <tr>
                            <td>Phone</td>
                            <td>
                                <input type="number" name="phone" id="phone" placeholder='Phone Number'
                                className="form-control"/>
                            </td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>
                                <input type="text" name="address" id="address" placeholder='Address'
                                className="form-control"/>
                            </td>
                        </tr>
                        <tr>
                            <td>Password</td>
                            <td>
                                <input type="password" name="password" id="password" placeholder='Password'
                                className="form-control"/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Link to="/">
                                    <button type="button" name="data_send" id="data_send"
                                    className="btn btn-outline-success ">
                                        Sign-in
                                    </button>
                                </Link>
                            </td>
                            <td>
                                <button type="submit" name="data_submit" id="data_submit"
                                className="btn btn-outline-primary">
                                    Sign-up
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </form>
                </div>
                </div>
                <div className="col-lg-3">&nbsp;</div>
            </div>
        </div>
        </>
    )
    }
    
