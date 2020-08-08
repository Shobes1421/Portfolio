import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Header() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 myName'>
                    <h1>David Shober</h1>
                </div>

                <div className='"col-xs-12 col-sm-12 col-md-6 col-lg-8 col-xl-8 navHeader'>
                    <span className="navbar-brand mr-2 h1 text-dark navlink"><Link to="/about">About</Link></span>
                    <span className="navbar-brand mr-2 h1 text-dark navlink"><Link to="/portfolio">Portfolio</Link></span>
                    <span className="navbar-brand ml h1 text-dark navlink"><Link to="/contact">Contact</Link></span>
                </div>
                
            </div>
        </div>
    )
}
            




export default Header;