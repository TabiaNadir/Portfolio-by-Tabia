"use client";

import React from 'react'
import Image from 'next/image';

interface propsType {
    title: string;
    desc: string;
    img: string;
    tag: string[]; 
    }

const Card: React.FC<propsType> = ({title, desc, img, tag}) => {
   return (
    <div className='border border-accent w-[300px] sm:w-[350] flex flex-col data-aos="zoom-out"'>
      <div>
        <img className='w-full h-auto'
        src={img}
        width={350}
        height={350}
        alt={title}
        />
      </div>

      <div className='p-4 space-y-4'>
        <div className='text-4xl font-extralight'>{title}</div>
        <div className='text-base'>{desc}</div>
        <div className='flex flex-warp space-x-2'>
         {tag.map((el) => (
            <div className='tag bg-gray-200 rounded-md px-2 py-1' key={el}>
              {el}
            </div>
           ))}
          </div>
      </div>
    </div>  

  );
};

export default Card;
