import Header from './Header';
import Menu from './Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {useState,useEffect} from 'react';

export default function Aemp(){

    var userid = localStorage.getItem('username');
    

    const handlesubmit = async(event) => {
        event.preventDefault();
        var datastring = new FormData(event.target);
        var config = {headers:{'enctype':'multipart/form-data'}};

        await axios.post('http://localhost:3004/Aemp',datastring,config)
              .then(function(res){
                if(res.data.status === 'inserted'){
                    alert('inserted');
                    window.location.reload();
                }
                else{
                    alert('Not inserted');
                    window.location.reload();
                }
              })
              .catch(function(err){
                alert(err);
              })

    }

   

    return(
        <>
        <Header />
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                <Menu />
                </div>
                <div className="col-lg-7">
                <form onSubmit={handlesubmit}>
                    <div className="table-responsive mt-5">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th colSpan={2}>Add Employee</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Employee Name</td>
                                    <td>
                                        <input type="hidden" name="userid" id="userid"
                                         value={userid}/>
                                        <input type="text" name="name" id="name" className="form-control" /></td>
                                </tr>
                               <tr><td>Employee Id</td>
                                <td><input type="text" name="empid" id="empid" className="form-control" /></td>
                                </tr>
                                <tr><td>password</td>
                                    <td><input type="text" name="empassword" id="empassword" className="form-control" /></td>
                                </tr>
                                <tr>
                                <td>phone</td>
                                <td><input type="text" name="emphone" id="emphone" className="form-control" /></td>
                                </tr>

                                <tr>
                                <td>Email</td>
                                <td><input type="text" name="empemail" id="empemail" className="form-control" /></td>
                                </tr>

                                <tr>
                                <td>Role</td>
                                <td>
                                    <select name="role" id="role" className='form-control'>
                                        <option value="">--choose--</option>
                                        <option value="TEAM_LEADER">TEAM LEADER</option>
                                        <option value="DEVELOPER">DEVELOPER</option>
                                    </select>
                                </td>
                                </tr>

                                <tr>
                                    <td>&nbsp;</td>
                                    <td>
                                        <button type="submit" name="data_submit" id="data_submit"
                                        value="submit" className="btn btn-outline-primary">
                                            Create
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </form>
                
                </div>
            </div>
            
        </div>
        </>
    );
}