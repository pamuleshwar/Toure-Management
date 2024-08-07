import React from 'react';

import Slider from 'react-slick';

import av01 from '../../assets/images/ava-1.jpg';
import av02 from '../../assets/images/ava-2.jpg';
import av03 from '../../assets/images/ava-3.jpg';

const Testimonial = () => {
    const setting = {
        dots : true,
        infinite : true,
        autoplay : true,
        speed : 1000,
        swipeToSlide : true,
        autoplaySpeed : 2000,
        slidesToShow : 3,

        responsive : [
            {
                breakpoint : 992,
                setting : {
                    slidesToShow : 2,
                    slidesToScroll : 1,
                    infinite : true,
                    dots : true,
                },
            },
            {
                breakpoint : 576,
                setting : {
                    slidesToShow : 1,
                    slidesToScroll : 1,
                },
            }
        ]
    }

  return <Slider {...setting}>
    <div className="testimonial py-4 px-3">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse modi debitis recusandae atque in impedit officiis aperiam veritatis, laudantium accusamus, quo maxime deleniti repellat quia veniam. Quaerat culpa ab non.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={av01} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt-3'>John Doe</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>

    <div className="testimonial py-4 px-3">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse modi debitis recusandae atque in impedit officiis aperiam veritatis, laudantium accusamus, quo maxime deleniti repellat quia veniam. Quaerat culpa ab non.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={av02} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt-3'>Lia Franklin</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>

    <div className="testimonial py-4 px-3">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse modi debitis recusandae atque in impedit officiis aperiam veritatis, laudantium accusamus, quo maxime deleniti repellat quia veniam. Quaerat culpa ab non.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={av03} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt-3'>Martin Luther</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>
    
    <div className="testimonial py-4 px-3">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse modi debitis recusandae atque in impedit officiis aperiam veritatis, laudantium accusamus, quo maxime deleniti repellat quia veniam. Quaerat culpa ab non.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={av01} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt-3'>John Doe</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>

    <div className="testimonial py-4 px-3">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse modi debitis recusandae atque in impedit officiis aperiam veritatis, laudantium accusamus, quo maxime deleniti repellat quia veniam. Quaerat culpa ab non.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={av02} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt-3'>Lia Franklin</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>

    <div className="testimonial py-4 px-3">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse modi debitis recusandae atque in impedit officiis aperiam veritatis, laudantium accusamus, quo maxime deleniti repellat quia veniam. Quaerat culpa ab non.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={av03} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt-3'>Martin Luther</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>
  </Slider>
}

export default Testimonial