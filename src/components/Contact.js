import React from 'react'

function Contact() {
  return (
    <div className='contact'>
      <h3 className='bold'><a href="mailto:eat@tinroof.cafe">EAT@TINROOF.CAFE</a></h3>
      <h3 className='bold'>KAREN</h3>
      <p className='contact-tel'><a href="tel:+254 (0) 748259066">+254 (0) 748259066</a></p>
      <h3 className='bold'>LANGATA</h3>
      <p className='contact-tel'><a href="tel:+254 (0) 748259066">+254 (0) 748259066</a></p>
      <form className='contact-form'>
        <p>Or please use the form below for enquiries and we'll get back to you as soon as possible.</p>
        <div className='name-section input-group'>
        <p>Name(required)</p>
        <div className='name-inputs'>
          <div className='first-name'>
        <label>First Name</label>
        <input type='text'></input>
        </div>
        <div className='last-name'>
        <label>Last Name</label>
        <input type='text'></input>
        </div>
        </div>
        </div>
        <div className='email-section'>
        <label>Email Address(required)</label>
        <input type='email'></input>
        </div>
        <div className='subject-section'>
        <label>Subject(required)</label>
        <input type="text"></input>
        </div>
        <div className='message-section'>
        <label>Message(required)</label>
        <textarea></textarea>
        </div>
        <button type='submit'>SUBMIT</button>
        
      </form>
    </div>
  )
}

export default Contact