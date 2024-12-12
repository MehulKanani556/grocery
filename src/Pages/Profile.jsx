import React, { useState } from 'react'
import '../CSS/Sidebar.css'
import '../CSS/Profile.css'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

const Profile = () => {


  const [isEditing, setIsEditing] = useState(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    phone: Yup.string().required('Mobile Number is required').matches(/^[0-9]+$/, 'Must be a number').min(10, 'Must be at least 10 digits').max(15, 'Must be at most 15 digits'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    address: Yup.string().required('Address is required'),
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };



  return (
    <>
      <div className="col-12  pe-md-5 V_marg px-3 px-sm-4 px-md-0 ">
        <div className="V_information">
          <div className="pt-md-3 d-flex align-items-center justify-content-between">
            <h2 className=" pb-4 py-md-4">Account Information</h2>
            <button
              className="offcanvas-btn"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasWithBothOptions"
              aria-controls="offcanvasWithBothOptions"
            >
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
          <Formik
            initialValues={{
              name: '',
              phone: '',
              email: '',
              address: ''
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log('Saved information:', values);
              setIsEditing(false); // Set to false after saving
              // Handle save logic here, e.g., API call
            }}
          >
            {({ isSubmitting, setFieldValue }) => (
              <Form className="form position-relative w-100">
                <div className="mb-3 d-flex">
                  <div className="w-100">
                    <label htmlFor="nameInput" className="form-label">Name</label>
                    <Field
                      type="text"
                      className="form-control border-0"
                      id="nameInput"
                      name="name"
                      placeholder="Enter Name"
                      disabled={!isEditing}
                      onChange={(e) => {
                        setFieldValue("name", e.target.value); // Update Formik state
                      }}
                    />
                    <ErrorMessage name="name" component="div" className="text-danger" />
                  </div>
                  <button className="V_btn_profile_edit" id="editButton" type="button" onClick={handleEditClick}>
                    Edit
                  </button>
                </div>
                <div className="mb-3">
                  <label htmlFor="phoneInput" className="form-label">Mobile Number</label>
                  <Field
                    type="text"
                    className="form-control border-0"
                    id="phoneInput"
                    name="phone"
                    placeholder="Enter Number"
                    disabled={!isEditing}
                    onChange={(e) => {
                      setFieldValue("phone", e.target.value); // Update Formik state
                    }}
                  />
                  <ErrorMessage name="phone" component="div" className="text-danger" />
                </div>
                <div className="mb-3">
                  <label htmlFor="emailInput" className="form-label">Email</label>
                  <Field
                    type="email"
                    className="form-control border-0"
                    id="emailInput"
                    name="email"
                    placeholder="Enter Email"
                    disabled={!isEditing}
                    onChange={(e) => {
                      setFieldValue("email", e.target.value); // Update Formik state
                    }}
                  />
                  <ErrorMessage name="email" component="div" className="text-danger" />
                </div>
                <div className="mb-3">
                  <label htmlFor="addressInput" className="form-label">Address</label>
                  <Field
                    as="textarea"
                    className="form-control border-0"
                    id="addressInput"
                    name="address"
                    rows="1"
                    placeholder="Enter Address"
                    disabled={!isEditing}
                    onChange={(e) => {
                      setFieldValue("address", e.target.value); // Update Formik state
                    }}
                  />
                  <ErrorMessage name="address" component="div" className="text-danger" />
                </div>

                <button
                  className="V_btn_profile_save position-absolute"
                  id="saveButton"
                  type="submit"
                  disabled={isSubmitting || !isEditing}
                >
                  Save
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  )
}

export default Profile