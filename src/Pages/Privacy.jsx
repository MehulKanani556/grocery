import React from 'react'
import PDelete from '../Image/privacydelete.png';

const Privacy = () => {
    return (
        <>
            <div className="col-12  pe-md-5 V_marg px-3 px-sm-4 px-md-0 ">
                <div className="V_information">
                    <div className=" pt-3 d-flex align-items-center justify-content-between">
                        <h2 className="py-4">Account Privacy</h2>
                    </div>
                    <div className='fw-lighter V_Ptag2 '>
                        <p className='py-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <p className='py-2'>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        <p className='py-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <p className='py-2'>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.         </p>
                    </div>
                    <div className='d-flex align-items-center   V_pri_del_btn'>
                        <div className='py-2 px-5'>
                             <img src={PDelete} alt="" />
                        </div>
                        <div className="V_Pri_delete">
                            Delete Your Account
                        </div>
                    </div>
                </div>
            </div> 
        </> 
    )
}

export default Privacy