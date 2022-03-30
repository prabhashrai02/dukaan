import React from 'react';
import './pagination.css';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page_item'>
            <a onClick={() => paginate(number)} className='page_link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;