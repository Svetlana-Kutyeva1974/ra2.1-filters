import React from 'react';

export default function ProjectList(props) {
  const {projects} = props;
  return (
    <div className='list'>
      {projects.map((element, index) =>
        <img
          key={index}
          alt={element.category}
          src={element.img}
          className={element.category}
        />)}
    </div>
  );
}