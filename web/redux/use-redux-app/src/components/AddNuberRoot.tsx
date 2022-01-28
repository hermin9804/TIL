import AddNumber from "./AddNumber";

const AddNumberRoot: React.FC<{ addNumber: (num: number) => void }> = (
  props
) => {
  return (
    <div>
      <h1>Add Number Root</h1>
      <AddNumber addNumber={props.addNumber}></AddNumber>
    </div>
  );
};

export default AddNumberRoot;
