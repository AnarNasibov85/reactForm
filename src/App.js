import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import './app.css';

const App = () => {
  return (
    <div className='container'>
      <div className='brand-box'>
        <h1>Qeydiyyat Formu</h1>
        <p>React derslerinde her kese ugurlar</p>
      </div>
      <div className='magic-form'>
        <Formik
          initialValues={{
            name: '',
            email: '',
            agree: false,
            favoriteColor: '',
          }}
          validationSchema={Yup.object({
            name: Yup.string().required('ad bosh ola bilmez'),
            email: Yup.string().email().required('Email bosh ola bilmez'),
            agree: Yup.bool().oneOf([true], 'sertleri qebul etmelisen'),
            favoriteColor: Yup.string()
              .required('her kesin sevdiyi bir reng var')
              .oneOf(['red', 'blue', 'green']),
          })}
          onSubmit={(values, { resetForm, setSubmitting }) => {
            console.log(values);
            setTimeout(() => {
              setSubmitting(false);
              resetForm();
            }, 2000);
          }}
        >
          {({
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleSubmit,
          handleReset,
          handleChange,
          }) => (
            <form className='magic-form' onSubmit={handleSubmit}>
              <h3>Qeydiyyat</h3>
              <label htmlFor='name'>Ad</label>
              <input
                id='name'
                type='text'
                placeholder='Anar....'
                className='input'
                value={values.name}
                onChange={handleChange}
              />
              {errors.name && touched.name && (
                <div className='input-feedback'>{errors.name}</div>
              )}
              <label htmlFor='email' className='topMargin'>Email</label>
              <input
                id='email'
                type='email'
                placeholder='anar000@gmail.com'
                className='input'
                value={values.email}
                onChange={handleChange}
              />
            
              <label
                htmlFor='favoriteColor'
                className='topMargin'
              >
                sevdiyin reng
              </label>
              <select
                id='favoriteColor'
                value={values.favoriteColor}
                onChange={handleChange}
                style={{
                  marginTop: 10,
                  width: '150px',
                  padding: '10px 15px',
                  outline: 'none',
                }}
              >
                <option
                  value=''
                  label='reng sec'
                />
                <option
                  value='red'
                  label='qirmizi'
                />
                <option
                  value='blue'
                  label='mavi'
                />
                <option
                  value='green'
                  label='yashil'
                />
              </select>
              {errors.favoriteColor && touched.favoriteColor && (
                <div className='input-feedback'>{errors.favoriteColor}</div>
              )}
              <div className='checkbox topMargin'>
                <input
                  id='agree'
                  type='checkbox'
                  checked={values.agree}
                  onChange={handleChange}
                />

                <label
                  htmlFor='agree'
                  className='checkbox-label'
                >
                  shertleri oxudum qebul edirem
                </label>
              </div>
                {errors.agree && touched.email && (
                <div className='input-feedback'>{errors.agree}</div>
              )}
              <button
                type='submit'
                disabled={!dirty || isSubmitting}
              >
                qeydiyyat
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default App;
