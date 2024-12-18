import axios from 'axios';
import { useRef, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { IoCloseSharp } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const Login = ({
  loginmodalShow,
  setLoginModalShow,
  otpmodalShow,
  setOtpModalShow,
}) => {
  const BaseUrl = process.env.REACT_APP_BASEURL;

  const [otp, setOtp] = useState('');
  const [isOtpValid, setIsOtpValid] = useState(true);
  const [mobileNumber, setMobileNumber] = useState('');
  const navigate = useNavigate();

  const inputRefs = useRef([]);

  const handleOtpInput = (e, index) => {
    const value = e.target.value;


    if (!/^\d*$/.test(value)) return;

    setOtp((prevOtp) => {
      const newOtp = [...prevOtp];
      newOtp[index] = value.slice(-1);
      return newOtp;
    });

    // Move focus to the next input field
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {

    if (e.key === "Backspace" && !otp[index]) {
      setOtp((prevOtp) => {
        const newOtp = [...prevOtp];
        newOtp[index - 1] = '';
        return newOtp;
      });
      if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const maskedPhoneNumber = `${mobileNumber?.slice(0, 2)}******${mobileNumber?.slice(-4)}`;

  const handlemobilenumberchange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handlemobliemodal = () => {
    setLoginModalShow(false);
    setOtpModalShow(true);

    if (!mobileNumber || mobileNumber.trim() === '') {
      console.error('Mobile number is empty!');
      return;
    }

    axios
      .post(`${BaseUrl}/api/mobileNoLogin`, {
        mobileNo: mobileNumber,
      })
      .then((response) => {
        // Handle response if needed
      })
      .catch((error) => {
        console.error('API Error:', error);
      });
  };

  const verifyOtp = async () => {

    const otpString = otp.join('');

    if (otpString.length !== 4) {
      setIsOtpValid(false);
      return;
    }

    try {
      const otpAsNumber = Number(otpString);
      const response = await axios.post('http://localhost:4000/api/verifyOtp', {
        mobileNo: mobileNumber,
        otp: otpAsNumber,
      });

      const token = response.data.token;
      console.log("token", token);


      if (response.data.success) {
        const decodedToken = jwtDecode(token);
        const userId = decodedToken._id;
        localStorage.setItem('token', token);
        localStorage.setItem('userId', userId);

        setOtpModalShow(false);
        navigate('/');
      } else {
        setIsOtpValid(false);
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      setIsOtpValid(false);
    }
  };

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <>
        {/* Login modal */}
        <Modal
          show={loginmodalShow}
          onHide={() => setLoginModalShow(false)}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className="d_loginmodal"
        >
          <Modal.Body className="p-0">
            <div className="d_loginwrapper ">
              <div
                className="d-flex justify-content-end d_cur"
                onClick={() => setLoginModalShow(false)}
              >
                <IoCloseSharp className="d_closeicon" />
              </div>
              <div className="d_loginbox">
                <div className="row align-items-center">
                  <div className="col-12 col-sm-7">
                    <h5 className="mb-2">Shop With Us</h5>
                    <h6 className="mb-1">Explore Thousands of our products</h6>
                    <p className="mb-lg-4 mb-2">
                      Verify your mobile number to access your{' '}
                      <span>Grocery Store account</span>
                    </p>
                    {/* <div className="d_mixinput">
                      <div className="d-flex align-items-center justify-content-center"> */}
                    {/* Google Login Button */}
                    <GoogleLogin
                      onSuccess={async (credentialResponse) => {

                        const googleToken = credentialResponse.credential;
                        const userInfo = jwtDecode(googleToken);
                        const { name, email, picture, sub: googleId } = userInfo;

                        const response = await axios.post(`${BaseUrl}/api/login`, {
                          name,
                          email,
                          picture,
                          googleId,
                        });

                        const token = response.data.token;
                        const decodedToken = jwtDecode(token);
                        const userId = decodedToken._id;

                        localStorage.setItem('token', token);
                        localStorage.setItem('userId', userId);

                        setLoginModalShow(false);
                        navigate('/');
                      }}

                    />
                    {/* </div>
                    </div> */}
                    <div className="d_or text-center">OR</div>
                    <div className="d_mixinput mt-2 px-3">
                      <div className="d-flex align-items-center">
                        <p className="mb-0 me-2">+91</p>
                        <input
                          type="text"
                          placeholder="Enter Mobile Number"
                          value={mobileNumber}
                          onChange={handlemobilenumberchange}
                        />
                      </div>
                    </div>
                    <div className="d_agree mb--lg-5 mb-4">
                      By signing up, you agree to the{' '}
                      <a href="">Terms of use</a> and{' '}
                      <a href="">Privacy Policy</a>.{' '}
                    </div>
                    <div
                      className="d_loginbtn m-auto"
                      onClick={() => handlemobliemodal()}
                    >
                      <Link className="text-center d-block">Continue</Link>
                    </div>
                  </div>
                  <div className="col-12 col-sm-5 d-none d-sm-block">
                    <div className="d_img">
                      <img
                        src={require('../Image/login.png')}
                        className="w-100"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
        {/* OTP modal */}
        <Modal
          show={otpmodalShow}
          onHide={() => setOtpModalShow(false)}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className="d_loginmodal d_otpmodal"
        >
          <Modal.Body className="p-0">
            <div className="d_loginwrapper ">
              <div
                className="d-flex justify-content-end d_cur"
                onClick={() => setOtpModalShow(false)}
              >
                <IoCloseSharp className="d_closeicon" />
              </div>
              <div className="d_loginbox">
                <div className="row align-items-center">
                  <div className="col-12 col-sm-7">
                    <div className="d_text text-center">
                      <h5 className="mb-2">OTP Verification</h5>
                      <div className="mb-1 d_otpdesc">
                        We have sent a verification code to
                      </div>
                      <p className="mb-lg-4 mb-2 d_phone">{maskedPhoneNumber}</p>
                      <div className="d-flex justify-content-center mb-3">
                        {[0, 1, 2, 3].map((_, index) => (
                          <input
                            key={index}
                            type="text"
                            className="me-2 otp-input"
                            maxLength="1"
                            ref={(el) => (inputRefs.current[index] = el)}
                            onChange={(e) => handleOtpInput(e, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                          />
                        ))}
                      </div>
                      <div className="d_resendotp mb-3">Resend OTP</div>
                      <div className="d_loginbtn m-auto">
                        <Link
                          href=""
                          className="text-center d-block"
                          onClick={verifyOtp}
                        >
                          Verify Now
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-5 d-none d-sm-block">
                    <div className="d_img">
                      <img
                        src={require('../Image/otp.png')}
                        className="w-100"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </>
    </GoogleOAuthProvider>
  );
};

export default Login;
