import React from 'react'
import { Link } from 'react-router-dom'

const Cancelorder = () => {
  return (
    <>
    
    <div className="d_cancelorder">
        <div className="d_heading mb-4">
            <h6>Product Detail</h6>
        </div>
        <div className="d_cancelbox mb-3">
            <div className="d_suppierbox">
                <p className='mb-0'>Supplier : <span>MD_CREATIONS</span></p>
            </div>
            <div className="d_itembox">
                <div className="d_procate">Bakery & Biscuits</div>
                <div className="d-flex align-items-center">
                    <div className="d_img">
                        <img src={require('../Image/pro1.png')} alt="" className='w-100 h-100' />
                    </div>
                    <div className="d_text">
                        <div className="d_proprice">$10</div>
                        <div className="d_proname">Britannia Brown Bread</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="d_cancelreason d-flex flex-column">
            <p className='mb-0'>Write Reason For Canceling</p>
            <textarea placeholder='write here your reason of canceling.....' rows={5}></textarea>
            <div className="d_cancelprobtn mt-auto mx-auto">
                <Link className='text-center d-block'>Cancel Product</Link>
            </div>
        </div>
    </div>

      
    </>
  )
}

export default Cancelorder
