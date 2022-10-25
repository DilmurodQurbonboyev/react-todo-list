import React from 'react'
import TodoItem from "./TodoItem";
import PropTypes from 'prop-types';

const styles = {
    ul: {
        listStyle: 'none',

    }
}

function TodoList(props) {
    return (
        <div>
            <ul style={styles.ul}>
                { props.todos.map((todo, index) => {
                    return <TodoItem todo={todo} key={todo.id} index={index} onChange={props.onToggle}/>;
                }) }
            </ul>
        </div>
    )
}

TodoList.prototype = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
}

export default TodoList