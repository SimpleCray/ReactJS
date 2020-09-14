import { connect } from "react-redux";

import TodoApp from "../components/TodoApp";
import { addTodo, setTodos } from "../redux/todo";

const mapStateToProps = (state) => ({
  todos: state.todo.items
});

const mapActionsToProps = {
  addTodo,
  setTodos
};

export default connect(mapStateToProps, mapActionsToProps)(TodoApp);
