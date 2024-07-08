import Todonmae from "./assets/component/Todo-name"
import Todoitem from "./assets/component/Todoitem"
import Todolist from "./assets/component/Todolist"
import Todolistt from "./assets/component/Todolist1"
import './App.css'
function App() {
  

  return (
<center className="todo-contianer">
  <Todonmae></Todonmae>
  <Todoitem></Todoitem>
  <div className="item-container">
  <Todolist/>
  <Todolistt/>
  </div>
  
  

</center>
  
  )
}

export default App
