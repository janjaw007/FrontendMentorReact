import React from "react";

function Result() {
  return (
    <div className="bigbox__result bg-gradient-to-b from-[#7857FF] to-[#2E2BE9] min-h-[30rem]  flex flex-col items-center justify-evenly p-0  rounded-b-[3rem]">
      <div className="bigbox__result--header text-3xl ">
        <h3 className="">Your Result</h3>
      </div>
      <div className="bigbox__result--score w-[10rem] h-[10rem] bg-gradient-to-b from-red-600 to-[#2E2BE9] rounded-full  text-center flex flex-col justify-center">
        <h1 className="result--bigscore text-5xl">76</h1>
        <p className="result--totalscore">of 100</p>
      </div>
      <div className="bogbox__result--grade">
        <h3 className="result--namegrade  text-center  text-3xl mb-3">Great</h3>
        <p className="result--avg  text-center max-w-[18rem]">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </div>
  );
}

export default Result;
