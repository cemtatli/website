import React from 'react';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Curriculum vitae',
}
const CV = () => {
  return (
    <section className='w-full h-screen-64'>
      <iframe
        src='https://drive.google.com/file/d/1EibevN4i3XNhcmjujsKFjAjYcZu01Kbp/preview'
        title='CV'
        className='w-full h-full'
      />
    </section>
  );
};

export default CV;