// Breadcrumb.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Breadcrumb = () => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <FontAwesomeIcon icon={faHome} /> Home
        </li>
        <li className="breadcrumb-item">Master Entries</li>
        <li className="breadcrumb-item active" aria-current="page">
          Module Permissions
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
