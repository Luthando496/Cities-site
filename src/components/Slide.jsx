import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const Slide = (props) => {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
  return (
      <Carousel
      className='h-[80vh]'
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all 900ms"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div className='h-full relative'>
            <img src='https://images.unsplash.com/photo-1597982087634-9884f03198ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=888&q=80' className='h-full w-full object-cover' alt="background-image" />
            <div className="overlay absolute top-0 left-0 w-full h-full bg-black/50"></div>
        </div>
        <div className='h-full'>
            <img src='https://images.unsplash.com/photo-1597982087634-9884f03198ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=888&q=80' className='h-full w-full object-cover' alt="background-image" />
            <div className="overlay absolute top-0 left-0 w-full h-full bg-black/50"></div>
        </div>
        <div className='h-full'>
            <img src='https://images.unsplash.com/photo-1597982087634-9884f03198ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=888&q=80' className='h-full w-full object-cover' alt="background-image" />
            <div className="overlay absolute top-0 left-0 w-full h-full bg-black/50"></div>
        </div>
        <div className='h-full'>
            <img src="https://images.unsplash.com/photo-1597982087634-9884f03198ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=888&q=80" className='h-full w-full object-cover' alt="background-image" />
            <div className="overlay absolute top-0 left-0 w-full h-full bg-black/50"></div>
        </div>
      </Carousel>
  );
}

export default Slide