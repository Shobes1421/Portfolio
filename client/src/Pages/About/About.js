import React from 'react';

import './styles.css';


const About = () => (
    <div className='container-fluid'>
        <h1 className='aboutMeHeader'>
            About Me
        </h1>
        <div className='row'>
            <div className='col-4'>
                <img src={require('../../assets/images/IMG_0029.jpg')} alt="Me pic"/>
            </div>
            <div className='col-8'>
                <p>
                My name is David Shober, I'm currently working at BioFire Diognostics LLC.  "BioFire creates Comprehensive panels that take out the guess work, giving laboratories and healthcare providers a higher probability of identifying pathogens associated with infectious disease.
                Designed with the syndromic approach in mind, each panel combines a broad grouping of probable pathogenic causes into a single, rapid test."" I've worked for BioFire for two and a half years now. I currently live in Lake Point Utah,  I've lived here a little over a year.
                </p>
                <p>
                My goal is to make a career change into web development, I really enjoy making web applications from scratch and seeing what I can create. Although very challenging, seeing the end result of a web application completed from start to finish is exciting. 
                </p>

            </div>

        </div>
    </div>
)


export default About;