import React from 'react';
import { useForm } from 'react-hook-form';
import './Contact.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { IoMdCall } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const isAlpha = /^[A-Za-z]+$/g;

  const sendFormData = async (data) => {
   toast.success('Data submitted successfully');
  };

  return (
    <div >
      <ToastContainer />
      <br />
      <br />
      {/* Contact Info Section */}
      <div
        id="formid"
        style={{
          padding: '20px',
          fontFamily: 'Arial, sans-serif',
          background: 'linear-gradient(135deg, #1e3c72, #2a5298)',
          color: 'white',
          borderRadius: '8px',
        }}
      >
        <div
          id="topicon"
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          <span style={{ display: 'flex', alignItems: 'center', fontSize: '18px', color: 'white' }}>
            <IoMdCall style={{ marginRight: '8px' }} /> 8109837757
          </span>
          
          <span style={{ display: 'flex', alignItems: 'center', fontSize: '18px', color: 'white' }}>
            <SiGmail style={{ marginRight: '8px' }} /> jaishrivastava0111@gmail.com
          </span>
        </div>
      </div>

      {/* Form Section */}
      <br>
      </br>
      <br>
      </br>
      <form
        className="form"
        onSubmit={handleSubmit(sendFormData)}
        style={{
          marginTop: '20px',
          backgroundColor: '#ffffff',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(252, 250, 250, 0.52)',
        }}
      >
        <h3 style={{ color: '#2b5876', textAlign: 'center' }}>Discuss Work Opportunities</h3>

        {/* Name Input */}
        <div style={{ marginBottom: '10px' }}>
          <input
            type="text"
            placeholder="Name"
            name="fullname"
            style={{
              width: '80%',
              padding: '10px',
              fontSize: '16px',
              borderRadius: '4px',
              border: '1px solid #ddd',
            }}
            {
              ...register('fullname', {
                required: { value: true, message: 'Fullname is mandatory' },
                minLength: { value: 4, message: 'Fullname must have at least 4 characters' },
                maxLength: { value: 10, message: 'Fullname must not exceed 10 characters' },
                pattern: { value: isAlpha, message: 'Fullname must contain only alphabets' },
              })
            }
          />
        </div>
        <div className="message" style={{ color: 'red', marginBottom: '10px' }}>
          {errors.fullname?.message}
        </div>

        {/* Mobile Input */}
        <div style={{ marginBottom: '10px' }}>
          <input
            type="text"
            placeholder="Mobile"
            name="mobile"
            style={{
              width: '80%',
              padding: '10px',
              fontSize: '16px',
              borderRadius: '4px',
              border: '1px solid #ddd',
            }}
            {
              ...register('mobile', {
                required: { value: true, message: 'Mobile number is mandatory' },
                minLength: { value: 10, message: 'Mobile number must have at least 10 digits' },
                maxLength: { value: 10, message: 'Mobile number must not exceed 10 digits' },
              })
            }
          />
        </div>
        <div className="message" style={{ color: 'red', marginBottom: '10px' }}>
          {errors.mobile?.message}
        </div>

        {/* Submit Button */}
        <div style={{ textAlign: 'center', }}>
          <button
            type="submit"
            style={{
              width: '60%',
              padding: '10px 20px',
              fontSize: '16px',
              background: '#2b5876',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              margin: 'auto',
            }}
          >
            Submit
          </button>
        </div>
      </form>

      {/* Social Icons Section */}
      <div className="cicons" style={{ marginTop: '10px', textAlign: 'center',  background: 'linear-gradient(135deg, #1e3c72, #2a5298)', width: '' }}>
        <Link
          className="linkicons"
          to="https://www.linkedin.com/in/anupam-shrivastava-56ab52224/"
          target="_blank"
          style={{ margin: '10px  10px 10px 0px', color: '#C5A467', fontSize: '30px' }}
        >
          <FaLinkedin />
        </Link>
        <Link
          className="linkicons"
          to="https://github.com/Anupams69/"
          target="_blank"
          style={{ margin: '10px 10px 10px 0px', color: '#171515', fontSize: '30px' }}
        >
          <FaGithub />
        </Link>
        <Link
          className="linkicons"
          to="mailto:jaishrivastava0111@gmail.com"
          style={{ margin: '10px 10px 10px 0px', color: '#ea4335', fontSize: '30px' }}
        >
          <SiGmail />
        </Link>
      </div>
    </div>
  );
}

export default Contact;
