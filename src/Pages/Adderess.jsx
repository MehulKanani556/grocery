import React from 'react';
import '../CSS/Profile.css';
import { Dropdown } from 'react-bootstrap';
import Drop from '../Image/dropdot.png';
import Edit from '../Image/edit.png';
import Delete from '../Image/delete.png';

const Adderess = () => {
  return (
    <>
      <div className="col-12  pe-md-5 V_marg px-3 px-sm-4 px-md-0 ">
        <div className="V_information">
          <div className=" pt-3 d-flex align-items-center justify-content-between">
            <h2 className="py-4">Manage Address</h2>
          </div>
          <div className='V_add_border'>
            <button type="button" className="V_btn_text" >
              + Add A New Address
            </button>
          </div>
          <div className='V_add_border my-3'>
            <div className='d-flex justify-content-end'>

              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic" className='V_drop_icon bg-transparent border-0'>
                  <img src={Drop} alt="" className='V_delete' />
                </Dropdown.Toggle>

                <Dropdown.Menu className='V_drop_menu'>
                  <Dropdown.Item href="#/edit" className='d-flex'>
                    <img src={Edit} alt="" className='V_delete pe-3' />
                    <p> Edit</p></Dropdown.Item>
                  <Dropdown.Item href="#/delete" className='d-flex'>
                    <img src={Delete} alt="" className='V_delete pe-3' />
                    <p >Delete</p>     </Dropdown.Item>

                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className='V_top' >
              <h2 className="py-4 V_add_dynamic_add">Robert Anderson</h2>
              <p className='V_Ptag fw-lighter px-4 pb-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley  </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Adderess