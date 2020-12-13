import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import logo from '../../images/logo.png';


const Header = () => {
    return (
        <div>
            <div className="container-fluid bg-dark">
                <div className="row d-flex justify-content-between">
                    <div className="col-2">
                        <img className="w-50" src={logo} alt=""/>
                    </div>
                    <div className="col-auto m-auto">
                         <input className="input-field" placeholder="Search.." type="text"/>
                    </div>
                    <div className="col-3 sign-in my-auto ">
                        <a className="text-white font-weight-bold" href="https://fontawesome.com/v4.7.0/icon/search">Sign in</a>
                    </div>
                </div>

            </div>
            

        </div>
 
    );
};

export default Header;