import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section className='home section' id='home'>
        <div className='home__container container grid'>
            <div className='home__intro'>
                <p>INTRODUCING WashHub</p>
            </div>
            <div className='home__tagline'>
              <p>Always at your service!</p>
            </div>
            <div className='home__content'>
              <p>At Wash Hub, we aim to revolutionize motor care through our 
                innovative site that make scheduling a motor wash effortless.
                Join us for a cleaner, smoother ride!</p>
            </div>
            <div className='home__create-log'>
              <button className='login'>Log In</button>
                <p>Don't have an account yet?</p>
              <button className='create-account'>Join us!</button>
            </div>
        </div>
    </section>
  )
}

export default Home