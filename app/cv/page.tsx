
import React from 'react';


const CV = () => {
  return (
    <section className='w-full h-screen-64'>
      <iframe
        src={process.env.CV_LINK}
        title='CV'
        className='w-full h-full'
      />
    </section>
  );
};

export default CV;
