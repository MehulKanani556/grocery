import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import UPI from '../Image/UPI.png';
import Gpay from '../Image/Gpay.png';
import Phonepe from '../Image/phonepe.png';
import Bhimpe from '../Image/BHIMPAY.png';
import PayTm from '../Image/Paytn.png';
import Credit from '../Image/Credit.png';
import HDFC from '../Image/HDFC.png';
import ICICI from '../Image/ICICI.png';
import Plus from '../Image/+.png';
import { FaAngleRight } from "react-icons/fa6";
import COD from '../Image/COD.png';


const Privacy = () => {
    return (
        <>
            <div className='px-3 px-md-0 pe-md-5'>
                <div className="col-12  pe-md-5  px-3 px-sm-4 px-md-0 ">
                    <div className="V_information">
                        <div className=" pt-3 d-flex align-items-center justify-content-between">
                            <h2 className="py-4">Pay by any UPI ID</h2>
                        </div>
                    </div>
                </div>



                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            <div className="d-flex px-md-3">
                                <div>
                                    <img src={UPI} alt="Upi image" className='V_upi_img_size' />
                                </div>
                                <div className='V_upi_text align-self-center ps-4'>
                                    Add new UPI ID
                                </div>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className='d-flex     px-md-0  ps-md-5'>
                                <div className="d-flex   ps-md-4  px-md-2 px-lg-4">
                                    <div className='align-self-center'> 
                                        <img src={Gpay} alt="Gpay image" className='V_gpay_size' />
                                    </div>
                                    <div className=' align-self-center pe-2'>
                                        <p className=' V_gpay_text d-none d-md-block'>Google Pay</p>
                                        <p className=' V_gpay_text d-md-none '>GPay</p>
                                    </div>
                                </div>
                                <div className="d-flex   px-md-1 px-lg-3">
                                    <div className='align-self-center'>
                                        <img src={Phonepe} alt="Gpay image" className='V_phpe_size ' />
                                    </div>
                                    <div className=' align-self-center'>
                                        <p className='ps-2 V_gpay_text'>PhonePe</p>
                                    </div>
                                </div>
                                <div className="ps-2  px-md-1 px-lg-3 align-self-center">
                                    <img src={Bhimpe} alt="" className='V_bhim_size' />
                                </div>
                                <div className="ps-2  px-md-1 px-lg-3 align-self-center">
                                    <img src={PayTm} alt="" className='V_ptm_size' />
                                </div>
                            </div>
                            <div className='d-flex 5  px-md-5 py-2 align-items-center '>
                                <div className='pe-2  px-md-3 px-lg-4 w-100'>
                                    <input type="text" className='V_input_upi py-2 px-2 w-100' placeholder='example@upi' />
                                </div>
                                <div className='  pe-sm-3 pe-md-5 '>
                                    <button className='V_pay_check text-white py-2  '>
                                        Checkout
                                    </button>
                                </div>
                            </div>
                            <div className=' px-md-5'>
                                <p className=' ps-md-4 py-2'>The UPI ID is in the format of name/phone number@bankname</p>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>


                <div className="col-12  pe-md-5  px-md-3 px-sm-4 px-md-0 ">
                    <div className="V_information">
                        <div className=" pt-3 d-flex align-items-center justify-content-between">
                            <h2 className="py-4">Add credit or debit cards</h2>
                        </div>
                    </div>
                </div>

                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            <div className="d-flex px-md-3">
                                <div>
                                    <img src={Credit} alt="Upi image" className='V_upi_img_size' />
                                </div>
                                <div className='V_upi_text align-self-center ps-4'>
                                    Add credit or debit cards
                                </div>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className='px-md-5 pt-md-4 align-items-center '>
                                <div className='px-md-4 py-2 w-100'>
                                    <input type="text" className='V_input_upi px-3 py-2 w-100' placeholder='Name on card' />
                                </div>
                                <div className='px-md-4 py-2 w-100'>
                                    <input type="text" className='V_input_upi px-3 py-2 w-100' placeholder='Card Number' />
                                </div>
                            </div>
                            <div className='d-md-flex  px-md-5 py-2 '>
                                <div className='ps-md-4 pe-md-1 px-lg-4 w-100 pb-2 pb-mb-0'>
                                    <input type="text" className='V_input_upi px-3 py-2 w-100 ' placeholder='Expiry Date(MM/YY)' />
                                </div>
                                <div className='ps-md-1 pe-md-4 pe-lg-4 pt-2 pt-md-0 w-100'>
                                    <input type="text" className='V_input_upi px-3 py-2 w-100' placeholder='CVV' />
                                </div>
                            </div>
                            <div className='text-center py-2 py-lg-4'>
                                <button className='V_pay_check text-white py-2  '>
                                    Checkout
                                </button>
                            </div>

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>


                <div className="col-12  pe-md-5  px-3 px-sm-4 px-md-0 ">
                    <div className="V_information">
                        <div className=" pt-3 d-flex  justify-content-between">
                            <h2 className="py-4">Netbanking</h2>
                        </div>
                    </div>
                </div>

                <div className='V_net_border  w-100'>
                    <div className="d-flex px-4 py-3">
                        <div className='px-3'>
                            <img src={HDFC} alt="hdfc logo" className='V_upi_img_size' />
                        </div>
                        <div className='ps-2 align-self-center'>
                            <p>HDFC</p>
                        </div>
                        <div className='ms-auto align-self-center'>
                            <FaAngleRight />
                        </div>
                    </div>
                    <hr></hr>
                    <div className="d-flex px-4 py-3">
                        <div className='px-3'>
                            <img src={ICICI} alt="hdfc logo" className='V_ici_img_size p-2' />
                        </div>
                        <div className='ps-2 align-self-center'>
                            <p>ICICI</p>
                        </div>
                        <div className='ms-auto align-self-center'>
                            <FaAngleRight />
                        </div>
                    </div>
                    <hr></hr>
                    <div className="d-flex px-4 py-3">
                        <div className='px-3'>
                            <img src={Plus} alt="hdfc logo" className='V_ici_img_size p-2' />
                        </div>
                        <div className='ps-2 fw-bold align-self-center'>
                            <p>Add Bank</p>
                        </div>
                        <div className='ms-auto align-self-center'>
                            <FaAngleRight />
                        </div>
                    </div>
                </div>



                <div className="col-12  pe-md-5  px-3 px-sm-4 px-md-0 ">
                    <div className="V_information">
                        <div className=" pt-3 d-flex  justify-content-between">
                            <h2 className="py-4">Cash on Delievery</h2>
                        </div>
                    </div>
                </div>

                <div className='V_net_border  w-100'>
                    <div className="d-flex px-4 py-3">
                        <div className='px-3'>
                            <img src={COD} alt="hdfc logo" className='V_upi_img_size' />
                        </div>
                        <div className='ps-2 align-self-center'>
                            <p>cash on delivery</p>
                        </div>
                        <div className='ms-auto align-self-center'>
                            <FaAngleRight />
                        </div>
                    </div>
                </div >
            </div>
        </>
    )
}

export default Privacy