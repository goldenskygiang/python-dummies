import React from 'react';
import { ClapSpinner as Loader } from 'react-spinners-kit';
import "../css/Loading.css"

const Loading = ({ isLoading }) => {
  return (
    <div className={`loading-container ${isLoading ? "" : "finished-loading-container"}`}>
      <Loader loading={isLoading} frontColor="#346e9f" size={40} />
    </div>
  )
};

export default Loading;
