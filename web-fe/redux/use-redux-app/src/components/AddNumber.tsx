import React, { useRef } from "react";

const AddNumber = () => {
  const numberInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enterdNumber = numberInputRef.current!.value;

    //props.addNumber(Number(enterdNumber));
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <h1>Add Number</h1>
        <button type="submit">+</button>
        <input type="text" id="text" ref={numberInputRef}></input>
      </form>
    </div>
  );
};

export default AddNumber;
