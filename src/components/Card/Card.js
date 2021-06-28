import React, { Fragment } from 'react';

const Card = ({ children, className }) => {
  return (
    <Fragment>
      <div className={className}>
        {children}
      </div>
    </Fragment>
  );
};

export default Card;