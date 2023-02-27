import React, { useState } from 'react'

const Todo = ({todoList, setTodoList}) => {

    const [todos, setTodos] = useState({
        todoName: "",
        completed: false
    })

    const changeHandler = (e) => {
        setTodos({...todos, [e.target.name]: e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if (todos.todoName.length > 0)
            setTodoList([...todoList, todos])
            setTodos({
            todoName: "",
            completed: false
            })
    }

    return (
        <div>
            <div className="container my-4">
                <div className="row">
                    <form action="" className='form col-4 mx-auto' onSubmit={submitHandler}>
                        <div className="form-group">
                            <label htmlFor="" className="form-label">Add a New Todo: </label>
                            <input type="text" name="todoName" id="todoName" className='form-control' onChange={changeHandler} value={todos.todoName} />
                        </div>
                        <input type="submit" className="btn btn-primary my-3" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Todo
