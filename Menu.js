import {Link} from 'react-router-dom';
import './dash.css';

export default function Menu(){
    return(
        <><div className='mt'>
        <div className="container mt-5 ">
            <div className="row">
                <div className="col-lg-12">
                    <div className="table-responsive">
                        <table className="table  table-bordered mt">
                            <thead>
                                <tr>
                                    <th>project management</th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr><td>Details</td></tr>
                                <tr><td><Link to="/Adash">Dashboard</Link></td></tr>
                                <tr><td><Link to="/Aemp">Add Employee</Link></td></tr>
                                <tr><td><Link to="/Ptask">Add Issues</Link></td></tr>
                                <tr><td><Link to="/">about</Link></td></tr>
                                <tr><td><Link to="/">Back</Link></td></tr>
                                <tr><td><Link to="/">Home</Link></td></tr>
                                <tr><td><Link to="/">feedback</Link></td></tr>
                                <tr><td><Link to="/">Help</Link></td></tr>
                                <tr><td><Link to="/">contact us</Link></td></tr>
                                <tr><td><Link to="/">logout</Link></td></tr>
                               
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}