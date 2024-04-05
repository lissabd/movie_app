import React from "react";
import "./UserBlock.scss";


const UserBlock = ({title, icon}) => {
  return (
    <>
      <div className="block-card" >
        <div className="block-images">
           {icon}
        </div>
        <div className="block-header">
            <h1>{title}</h1>
        </div>
      </div>
    </>
  );
};

export default UserBlock;
