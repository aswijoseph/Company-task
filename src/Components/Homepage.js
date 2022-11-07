import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Homepage(){
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">&nbsp;</div>
                <div className="col-lg-6">
                <ul className="menu_list">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Protfolio</Link></li>
                    <li><Link to="/">About Us</Link></li>
                    <li><Link to="/">Contact Us</Link></li>
                    <li><Link to="/">Login</Link></li>
                </ul>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-lg-6 mt-5">
                    <img src={'logo192.png'} className="logo" alt="ani"/>
                </div>
                <div className="col-lg-6">
                    <p className="heading">Shopping online</p>
                    <p className="descr">
                    Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or visual presentation. Lorem ipsum is derived from the Latin "dolorem ipsum" roughly translated as "pain itself."
                    </p>
                    <Link to="/"><button className="tempbtn">Login</button></Link>
                </div>
            </div>
        </div>
        </>
    )
}