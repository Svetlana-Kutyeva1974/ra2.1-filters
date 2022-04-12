import React from 'react';
// import PropTypes from 'prop-types';

export default function ProjectList(props) {
  const {projects} = props;
  return (
    <div className="list">
      {projects.map((element, index) =>
        <img
          key={index}
          alt={element.category}// {index}
          src={element.img}
          className={element.category}
        />)}
    </div>
  );
}