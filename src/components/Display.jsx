import React from 'react'

const Display = ({todoList, setTodoList}) => {

    const deleteHandler = (idx) => {
        setTodoList(todoList.filter((_todo, i) => i !== idx))
    }

    const toggleHandler = (idx) => {
        setTodoList(todoList.map((todo, i) => {
            if (i === idx) {
                const updateTodo = {...todo, completed: !todo.completed};
                return updateTodo;
            }
            return todo;
        }))
    }

    return (
        <div>
            {
                todoList.map((todo, idx) => (
                <div className='d-flex justify-content-center align-items-baseline' key={idx}>
                    <input type="checkbox" name="completed" id="completed" onChange={(e) => toggleHandler(idx)} checked={todo.completed}/>
                    <p className={`mx-3 ${todo.completed ? 'strike' : ''}`}>{todo.todoName}</p>
                    <button className="btn btn-dark btn-sm mx-3" onClick={(e) => deleteHandler(idx)} >Remove</button>
                </div>
                ))
            }
        </div>
    )
}

export default Display
