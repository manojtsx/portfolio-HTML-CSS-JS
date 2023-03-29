import React, { useEffect, useState } from "react";

const MoveToUp = ({ isSticky }) => {
  const [showMove,setShowMove] = useState(false);
  useEffect(()=>{
    setShowMove(isSticky);
  },[isSticky])
  return (
    <>
      {/* <!-- Move to up button --> */}
      <div
        className="scroll-button"
        style={{ display: showMove ? "block" : "none" }}
      >
        <a href="#home">
          <i className="fas fa-arrow-up"></i>
        </a>
      </div>
    </>
  );
};

export default MoveToUp;
