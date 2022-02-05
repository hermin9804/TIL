import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules";
import { addTodo } from "../modules/todos";

function TodoApp() {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  const onInsert = (text: string) => {
    dispatch(addTodo(text));
  };
}
