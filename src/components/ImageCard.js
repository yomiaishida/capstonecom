import React from "react";
import Img from "./_MG_9800.jpg";

function ImageCard() {
  const state = {
    men: [
      {
        id: 1,
        imgLink: "https://i.ibb.co/R70vBrQ/men.png",
      },
    ],
  };

  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={Img} className="card-img-top" alt="..." />
        <p>This is some paragraph</p>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
        </div>
      </div>
    </div>
  );
}

export default ImageCard;
