import React from 'react';

const Home = () => {
  return (
    <section className='section'>
        <div className='d-flex flex-column m-auto w-auto h-100 container grid'>
            <div className='d-flex align-items-center justify-content-center fs-1 fw-bold text-primary'>
                INTRODUCING WashHub
            </div>
            <div className='d-flex align-items-center justify-content-center fs-3 fw-medium text-primary'>
              Always at your service!
            </div>
            <div className='d-flex flex-column align-content-center text-center justify-content-center fs-2 fw-normal text-primary'>
              At Wash Hub, we aim to revolutionize motor care through our 
                innovative site that make scheduling a motor wash effortless.
                Join us for a cleaner, smoother ride!
            </div>
        </div>
    </section>
  )
}

export default Home