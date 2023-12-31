import React,{useRef} from 'react'
import "./JoinNow.css"
import emailjs from '@emailjs/browser'
const JoinNow = () => {
    
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs
        .sendForm(
          "service_p553vsf",
          "template_1cf1oxf",
          form.current,
          "T8WrIm19VgQ4LcB7D"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    };

  return (
    
    <div className='Join' id="join-us">
      <div className="left-j">
        <hr/>
      <div>
        <span className='stroke-text'> READY TO</span>
        <span> LEVEL UP</span>
      </div>
      <div>
        <span>YOUR BODY</span>
        <span className='stroke-text'> WITH US?</span>
      </div>
      </div>
      <div className='right'>
        <form  ref={form}  action='' className='email-container' onSubmit={sendEmail}>
            <input type='email' name="user_email" placeholder="Enter your Email address"/> 
            <button className='btn btn-j'>Join Now</button>
        </form>
      </div>
    </div>
  )
}

export default JoinNow
