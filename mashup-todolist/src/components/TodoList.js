import React from 'react'
import styled from 'styled-components'

const TodoListBlick = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
  background: gray;
`

function TodoList() {
  return <TodoListBlick>TodoList</TodoListBlick>
}

export default TodoList