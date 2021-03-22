import React from "react";
import ReactHtmlParser from "react-html-parser";

export default function Description({ data }) {
  return (
    <main>
      <h4>About The Place</h4>
      {ReactHtmlParser(data.description)}
      <div className="row mt-4">
        {data.features.map((item, idx) => (
          <div className="col-3 mb-4" key={idx}>
            <img
              width="38"
              className="d-block mb-2"
              src={item.imageUrl}
              alt={item.name}
            />
            <span>{item.qty}</span>{" "}
            <span className="text-gray-500">{item.name}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
