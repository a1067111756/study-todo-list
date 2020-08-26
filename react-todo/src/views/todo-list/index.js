import './index.css'
import React from 'react'
import NoteBook from '../../components/note-book/index'

class TodoList extends React.Component {
  render () {
    return (
      <div className="to-do-list-wrapper">
        <p className="title">JSTodo</p>
        <NoteBook></NoteBook>
      </div>
    )
  }
}

export default TodoList