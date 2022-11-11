import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


export default function Signin(){

    localStorage.clear();

    const handlesubmit=async(event)=>{
        event.preventDefault();
        var datastring = new FormData(event.target);
        var config = {headers:{'enctype':'multipart/form-data'}};
            
        var username=document.getElementById('username').value;
        var password=document.getElementById('password').value;
        if(username === '' || username === null){
            alert('enter username');
        }
        else if(password === '' || password === null){
            alert('enter password');
        }
        else{
             axios.post('http://localhost:3004/Signin',datastring,config)
                      .then(function(res){
                        if(res.data.status === 'username_error'){
                            alert('username_error');
                            window.location.reload();
                        }
                        else if(res.data.status === 'Invalid_Login'){

                            alert('Invalid Login');
                            window.location.reload();
                        }
                        else if(res.data.status === 'Login_Successfully'){
                             if(res.data.role === 'PROJECT_MANAGER'){
                                let id = res.data.id;
                                localStorage.setItem('user_id',id);
                                alert('project manager Logined');
                                window.location.href='/Adash';
                            }
                            else if(res.data.role === 'TEAM_LEADER'){
                                let id = res.data.id;
                                localStorage.setItem('user_id',id);
                                alert('team leader Logined');
                                window.location.href='/Aemp';
                            }
                            else if(res.data.role === 'DEVELOPERS'){
                                let id = res.data.id;
                                localStorage.setItem('user_id',id);
                                alert('developer Logined');
                                window.location.href='/Aemp';
                            }
                            else{
                                alert('Invalid Login');
                                window.location.reload();
                            }
                        }
                      })
                      .catch(function(res){
                        alert(res);
                        window.location.reload();
                      })

            }

        
        
    }

    return(
        <>
 
        
        <div className='div1'>
            
              
        
        
        <form onSubmit={handlesubmit}>
        <div className='container'>
            <div className='row'>
              <div className='col-lg-4'>  
                    <div className='table-responsive'>
                    
                        <table className='table table-hover div2'>
                            <thead>
                                
                                    <center><tr><th colSpan={2}>Login</th></tr></center>
                                
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Username</td>
                                    <td>
                                        <input type="text" name="username" id="username" className='form-control'/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Password</td>
                                    <td>
                                        <input type="password" name="password" id="password" className='form-control'/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link to="/Signup">
                                            <button type="button" name="data_send" id="data_send" value="send_data"
                                            class="btn btn-outline-success but1">
                                                Sign-up
                                            </button>
                                        </Link>
                                    </td>
                                    <td>
                                        
                                        <button type="submit" name="data_submit" id="data_submit" value="submit"
                                        class="btn btn-outline-primary but" >
                                            Sign-in
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div></div>
            </div></form>
    </div> <div>
           
           
                            </div>

        </>
    );
}