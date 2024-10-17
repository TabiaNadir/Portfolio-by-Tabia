import React from 'react';
import Heading from "./Heading";
import Card from "./Card";


const data =[
    {
      className: "p-6 max-w-sm flex flex-col items-center space-y-10 padding:0 20px",
        id: 1,
        title: "Student Card",
        desc: "Create reusable StudentCard. The use of Tailwind CSS the design is clean, modern & responsive",
        img: "/StudentCard.png ",
        tag: ["CSS", "HTML", "Node",],
    },
];

const Projects = () => {
  return (
    <div id='projects' className='container pt-32' data-aos="zoom-out">
     <Heading  title='My Project' />
     <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:cols-10 lg:grid-cols-5 place-items-center'>
        {data.map((el) => (<Card 
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tag={el.tag}
        />))}
     </div>
    </div>
  )
}

export default Projects;



