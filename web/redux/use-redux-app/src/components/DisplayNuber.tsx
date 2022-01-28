const DisplayNumber: React.FC<{ numValue: number }> = (props) => {
  return (
    <div>
      <h1>Display Number</h1>
      <input type="text" value={props.numValue} readOnly></input>
    </div>
  );
};

export default DisplayNumber;
