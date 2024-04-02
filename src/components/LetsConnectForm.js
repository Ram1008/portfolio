import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import CenterImage from './assets/CenterImage';
import Button from './assets/Button';
import Styles from './LetsConnectForm.module.css';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required').max(100),
  email: Yup.string().email('Invalid email').required('Email is required').max(100),
  message: Yup.string().required('Message is required').max(1000, 'Message is too long'),
});

const initialValues = {
  name: '',
  email: '',
  message: '',
};

const LetsConnectForm = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission here
    setTimeout(()=>{
      console.log(values);
      setSubmitting(false);
    }, 2000)
    
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.centerImage} >
              <CenterImage/>
      </div>
      <div className={Styles.tagLine}>
      Gratitude in every byte – Thanks for reaching out let's thrive together! 
      </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
                <div className={Styles.details}>
                  <div >
                    <div>
                    <label className={Styles.labelField} htmlFor="name">Name</label>
                    </div>
                    <Field className={Styles.detailsField} type="text" id="name" name="name" />
                    <ErrorMessage className={Styles.errorMessage} name="name" component="div"  />
                  </div>

                  <div>
                    <div>
                      <label className={Styles.labelField} htmlFor="email">Email</label>
                    </div>
                    <Field className={Styles.detailsField} type="email" id="email" name="email" />
                    <ErrorMessage className={Styles.errorMessage} name="email" component="div"  />
                  </div>
                </div>

                <div  className={Styles.message}>
                  <div>
                  <label className={Styles.labelField} htmlFor="message">Message</label>
                  </div>
                  <Field className={Styles.messageField} as="textarea" id="message" name="message" />
                  <ErrorMessage className={Styles.errorMessage} name="message" component="div"  />
                </div>
                <div className={Styles.buttonWrapper}>
                  <Button click={handleSubmit} name='Submit' type="submit" disabled={isSubmitting} />
                </div>
            </Form>
          )}
        </Formik>
    </div>
  )
}

export default LetsConnectForm;
