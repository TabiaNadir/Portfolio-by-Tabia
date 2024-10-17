import React from 'react'
import Heading from './Heading';

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'  data-aos="zoom-out">
        <Heading  title='My  Skills' />
      <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div data-aos="zoom-out">
            <h2 className='text-4xl md:text-5xl' >Technologies I Work</h2>
            <p className='text-gray-950 pt-2'>My primary focus is on web development, where I leverage frameworks such as React and Next.js to build dynamic, user-friendly applications. My expertise also extends to styling with Tailwind CSS, enabling me to design responsive and aesthetically pleasing user interfaces.</p>
        </div>
        <div>
            <div className='grid gird-cols-2 text-accent text-3xl sm:text-4xl'>
                <div className='space-y-2'>
                    <h2 data-aos="zoom-out">TypeScript</h2>
                    <h2 data-aos="zoom-out">Next.js</h2>
                    <h2 data-aos="zoom-out"> React.js</h2>
                    <h2 data-aos="zoom-out">Tailwind.</h2>
                    <h2 data-aos="zoom-out">Node.js</h2>
                    <h2  data-aos="zoom-out"> CSS</h2>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
