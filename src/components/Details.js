import Modal from 'react-bootstrap/Modal';
import Trailer from "../netflix.mp4";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper";
import { useState } from 'react';
const Details = ({ onHide, show, details }) => {

  return (    
    <Modal
      show={show}
      size="lg"
      centered
      style={{ color: "beige" }}
    >
      <div style={{ height: "100%" }}>
        <div className='trailer'>
          <video width="100%" height="80%" controls>
            <source src={Trailer} type="video/mp4" />
          </video>

        </div>
      </div>
      

      <div className='closebtn'>
        <button onClick={onHide}>Close</button>
      </div>

    </Modal>

  )
}

export default Details