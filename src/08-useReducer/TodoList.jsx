import { TodoItem } from "./TodoItem"

//Si no se pasa el prop todos, el valor por defecto será un array vacío 
// ([]) para evitar errores si el prop no está definido.

export const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => { 
  return (
    <>
      <ul className="list-group">
      {

        todos.map( todo => ( //.map recorre cada elemento array todos
          <TodoItem 
          key={todo.id} 
          todo={todo} 
          onDeleteTodo={ onDeleteTodo } 
          onToggleTodo={onToggleTodo}
            
          /> //react usa key para identificar cada componente unico
          //El valor key={todo.id} ayuda a React a optimizar el renderizado de la lista.
        ))  
      }
      </ul>
    </>
  )
}
