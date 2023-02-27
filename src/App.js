import './App.css';
import { useState } from 'react';
import Todo from './components/Todo';
import Display from './components/Display';

function App() {

    const [todoList, setTodoList] = useState([]);

    return (
      <div className="App">
        <div className='container'>
          <Todo todoList={todoList} setTodoList={setTodoList}/>
          <Display todoList={todoList} setTodoList={setTodoList}/>
        </div>
      </div>
    );
}

export default App;
