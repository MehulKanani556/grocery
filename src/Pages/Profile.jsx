import React, { useEffect, useState } from 'react'
import '../CSS/Sidebar.css'
import '../CSS/Profile.css'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const BaseUrl = process.env.REACT_APP_BASEURL;

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState(null);

  const userId = localStorage.getItem('userId');
  const token = localStorage.getItem('token');

  const fetchData = async () => {
    try {
      const response = await axios.get(`${BaseUrl}/api/getUser/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserData(response.data.data);
    } catch (error) {
      console.error('Data Fetching Error:', error);
    }
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    mobileNo: Yup.string().required('Mobile Number is required').matches(/^[0-9]+$/, 'Must be a number').min(10, 'Must be at least 10 digits').max(15, 'Must be at most 15 digits'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    address: Yup.string().required('Address is required'),
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSubmit = async (values) => {
    try {
      const response = await axios.put(`${BaseUrl}/api/updateUser/${userId}`, values, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log("response",response.data.success);
      if (response.data.success) {
        alert('Profile Update Successfully......');
        setUserData(response.data.data);
        setIsEditing(false);
      }

    } catch (error) {
      console.error('Profile Update Error:', error);
    }
  };

  return (
    <>
      <div className="col-12 pe-md-5 V_marg px-3 px-sm-4 px-md-0">
        <div className="V_information">
          <div className="pt-md-3 d-flex align-items-center justify-content-between">
            <h2 className="pb-4 py-md-4">Account Information</h2>
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
            enableReinitialize // This allows the form to update when userData changes
            initialValues={{
              name: userData?.name || '',
              mobileNo: userData?.mobileNo || '',
              email: userData?.email || '',
              address: userData?.address || ''
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
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
                    />
                    <ErrorMessage name="name" component="div" className="text-danger fs-6" />
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
                    name="mobileNo"
                    placeholder="Enter Number"
                    disabled={!isEditing}
                  />
                  <ErrorMessage name="mobileNo" component="div" className="text-danger fs-6" />
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
                  />
                  <ErrorMessage name="email" component="div" className="text-danger fs-6" />
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
                  />
                  <ErrorMessage name="address" component="div" className="text-danger fs-6" />
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