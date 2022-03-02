import React, { useState } from "react";

function Welcome() {
  const [input, setInput] = useState("");
  const [validated, setValidated] = useState(false);

  const handleValidation = () => {
    let formIsValid = true;

    if (!input.match(/[Tt]rii/)) {
      formIsValid = false;
    }
    return formIsValid;
  };

  const handleOnClickButton = (e) => {
    if (handleValidation()) {
      alert("The code has been validated");
      setValidated(true);
    } else {
      alert("The code has errors");
    }
  };
  return (
    <div
      className="flex flex-col justify-center items-center font-bold
	"
    >
      <p className="text-white text-2xl text-center py-20">
        Welcome to Trii's Challenge
      </p>
      <input
        className="w-48"
        placeholder="Type the login code"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button
        className="mx-5 w-24 py-1 my-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={handleOnClickButton}
      >
        Validate
      </button>
      {validated && (
        <button className="mx-5 py-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          <a href="/home">Home</a>
        </button>
      )}
    </div>
  );
}

export default Welcome;
