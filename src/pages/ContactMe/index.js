import React, { useState } from 'react';

function ContactMe() {
  const [formData, setFormData] = useState({ userName: '', userEmail: '', userMessage: '' });

  const [errorText, setErrorText] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const { userName, userEmail, userMessage } = formData;

  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    margin: '20px',
  };

  const formStyle = {
    border: '1px solid #ddd',
    padding: '20px',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
  };

  const labelStyle = {
    fontWeight: 'bold',
    marginBottom: '8px',
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    marginBottom: '16px',
    borderRadius: '3px',
    border: '1px solid #ccc',
    marginTop: '10px'
  };

  const textAreaStyle = {
    width: '100%',
    padding: '8px',
    marginBottom: '16px',
    borderRadius: '3px',
    border: '1px solid #ccc',
    resize: 'vertical',
  
  };

  const errorTextStyle = {
    color: 'red',
  };

  const buttonStyle = {
    backgroundColor: '#9DC08B',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
  };

  const validateEmail = (email) => {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!errorText) {
      setFormData({ [e.target.name]: e.target.value });
    }
  };

  const handleInputChange = (e) => {
    if (e.target.name === 'userEmail') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorText('Invalid email.');
        setButtonDisabled(true);
      } else {
        setErrorText('');
        setButtonDisabled(false);
      }
    } else {
      if (!e.target.value.length) {
        setErrorText(`${e.target.name} is required.`);
        setButtonDisabled(true);
      } else {
        setErrorText('');
        setButtonDisabled(false);
      }
    }
  };

  return (
    <section className="content" style={containerStyle}>
      <div id="contact" className="section-title">
        <h2>Contact Form</h2>
      </div>
      <div className="main-content">
        <form id="contact-form" onSubmit={handleFormSubmit} style={formStyle}>
          <div>
            <label htmlFor="userName" style={labelStyle}>Name:</label>
            <input type="text" name="userName" defaultValue={userName} style={inputStyle} onBlur={handleInputChange} />
          </div>
          <div>
            <label htmlFor="userEmail" style={labelStyle}>Email address:</label>
            <input type="email" name="userEmail" defaultValue={userEmail} style={inputStyle} onBlur={handleInputChange} />
          </div>
          <div>
            <label htmlFor="userMessage" style={labelStyle}>Message:</label>
            <textarea name="userMessage" rows="5" defaultValue={userMessage} style={textAreaStyle} onBlur={handleInputChange} />
          </div>
          {errorText && (
            <div>
              <p className="error-text">{errorText}</p>
            </div>
          )}
          <div className='btn-div'>
            <button type="submit" style={buttonStyle} disabled={buttonDisabled}>Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactMe;
