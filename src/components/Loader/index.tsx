import React from 'react';

const Loader = React.memo(function Loader() {
  return (
    <div className="preloader">
      <div className="loader">
        <div className="shadow"></div>
        <div className="box"></div>
      </div>
    </div>
  );
});
export default Loader;
