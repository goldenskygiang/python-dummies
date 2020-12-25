import React from 'react';
import { FillSpinner as Loader } from 'react-spinners-kit';
import "../css/Loading.css"

const Loading = ({ isLoading }) => {
  return (
    <div className={`loading-container ${isLoading ? "" : "finished-loading-container"}`}>
      <Loader loading={isLoading} color="#2E5288" size={40} />
    </div>
  )
};

export default Loading;
