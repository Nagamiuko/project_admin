import React from "react";
import "./load.css";
import {Oval} from 'react-loader-spinner'

const Load = () => {
  return (
    <>
      <div className="box-l-load">
         <div className="flex-center-load">
         <Oval
            height={80}
            width={80}
            color="#008fc3"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#5487ff"
            strokeWidth={2}
            strokeWidthSecondary={2}
         />
         </div>
      </div>
    </>
  );
};

export default Load;
