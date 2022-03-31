import React from 'react';
import './pagination.css';

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage, lastPage }) => {
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
              { currentPage === number ? <div className='pagination_selected'>{number}</div> : <div className='pagination_not_selected'>{number}</div> }
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;