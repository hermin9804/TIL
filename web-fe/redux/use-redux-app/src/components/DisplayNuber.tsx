import { useSelector } from "react-redux";

const DisplayNumber = () => {
  const counter = useSelector((state) => state);

  return (
    <div>
      <h1>Display Number</h1>
      <input type="text" readOnly>
        {counter}
      </input>
    </div>
  );
};

export default DisplayNumber;
