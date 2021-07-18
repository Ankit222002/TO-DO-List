import React from 'react'

export const Todo = ({Todo}) => {
    return (
        <div>
            <h4>{Todo.title}</h4>
            <p>{Todo.desc}</p>
        </div>
    )
}
