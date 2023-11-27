import React from "react";

function Summary() {
  return (
    <div className="bigbox__summary m-10 ">
      <h3 className="bigbox__summary-heading mb-5">Summary</h3>
      <ul className="list-summary">
        <li className="summary-reaction flex justify-between w- bg-slate-500 p-5 rounded-xl mb-5">
          <div className="list-tag flex">
            <p className="list-icon mr-5">icon</p>
            <p className="list-name">reaction</p>
          </div>
          <p className="list-score">80/100</p>
        </li>
        <li className="summary-reaction flex justify-between w- bg-slate-500 p-5 rounded-xl mb-5">
          <div className="list-tag flex">
            <p className="list-icon mr-5">icon</p>
            <p className="list-name">reaction</p>
          </div>
          <p className="list-score">80/100</p>
        </li>
        <li className="summary-reaction flex justify-between w- bg-slate-500 p-5 rounded-xl ">
          <div className="list-tag flex">
            <p className="list-icon mr-5">icon</p>
            <p className="list-name">reaction</p>
          </div>
          <p className="list-score">80/100</p>
        </li>
      </ul>
    </div>
  );
}

export default Summary;
