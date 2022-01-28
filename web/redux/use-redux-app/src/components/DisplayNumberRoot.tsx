import DisplayNumber from "./DisplayNuber";

const DisplayNumberRoot: React.FC<{ numValue: number }> = (props) => {
  return (
    <div>
      <h1>Display Number Root</h1>
      <DisplayNumber numValue={props.numValue}></DisplayNumber>
    </div>
  );
};

export default DisplayNumberRoot;
