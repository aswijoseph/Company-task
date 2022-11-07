import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

export default function Signup(){


    const login_page = () => {

        let register = document.getElementById('register');
        let login = document.getElementById('login_page');

        register.style = "opacity:0;display:none;";
        login.style = "opacity:1;display:block;";

    }

    const register_page = () => {
        let register = document.getElementById('register');
        let login = document.getElementById('login_page');

        register.style = "opacity:1;display:block;";
        login.style = "opacity:0;display:none;";   
    }

    const homepage = () => {
        window.location.href= "./homepage";
    }

    

    return(
        <>
        <div className="data_center_0">

        <div className="row mt-5">
            <div className="col-lg-6">
            <button type="button" id="data_login" name="data_login" value="login" className="btn btn-primary"
            onClick={login_page}>Login Page</button>
            </div>
            <div className="col-lg-6">
            <button type="button" id="data_signup" name="data_signup" value="signup" className="btn btn-danger"
            onClick={register_page}>Register Page</button>
            </div>
        </div>

        <div className="row mt-4" id="login_page">
            <div className="col-lg-12 mt-2">
                <p className="text-center title_head">Login</p>
            </div>
            <div className="col-lg-12">
                <input type="email" name="username" id="username" className="input_control" placeholder="Email" required/>
            </div>
            <div className="col-lg-12 mt-3">
                <input type="password" name="password" id="password" className="input_control" placeholder="Password" required/>
            </div>
            <div className="col-lg-12 mt-5">
            <button type="button" id="data_login" name="data_login" value="login" className="btn btn-primary"
            onClick={homepage}>Login Now</button>
            </div>
        </div>

        <div className="row mt-4" id="register">
            <div className="col-lg-12 mt-2">
                <p className="text-center title_head">Register</p>
            </div>
            <div className="col-lg-12">
                <input type="text" name="username" id="username" className="input_control" placeholder="Email"/>
            </div>
            <div className="col-lg-12 mt-3">
                <input type="password" name="password" id="password" className="input_control" placeholder="Username"/>
            </div>
            <div className="col-lg-12 mt-3">
                <input type="password" name="password" id="password" className="input_control" placeholder="Password"/>
            </div>
            <div className="col-lg-12 mt-3">
                <input type="password" name="password" id="password" className="input_control" placeholder="About"/>
            </div>
            <div className="col-lg-12 mt-5">
            <button type="button" id="data_login" name="data_login" value="login" className="btn btn-primary"
            onClick={login_page}>Register Now</button>
            </div>
        </div>

        </div>
        </>
    )
}