import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen flex items-start mt-9 justify-center">
      <div className="bg-white p-8 w-[70vw] mx-auto shadow-md rounded-md">
        <h1 className="text-3xl font-bold mb-4 text-center">About Me</h1>
        <div className='flex flex-col space-y-6'>
        <p className='text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id fugit alias similique eum numquam, aspernatur porro officiis voluptas distinctio eos est. Deleniti odio voluptatem ab nostrum error sequi doloremque perferendis.</p>
        <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolores ab nostrum debitis dignissimos, in quod deserunt pariatur labore porro! Laboriosam, molestiae. Culpa assumenda, quae obcaecati eligendi ab inventore repudiandae.</p>
        <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, ipsa?</p>
        </div>
      </div>
    </div>
  );
};

export default About;
