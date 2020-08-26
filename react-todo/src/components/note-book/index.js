import './index.css'
import React from 'react'
import { ENUM_NOTE_BOOK_STATUS } from './enum'
import TopInput from './components/top-input/index'
import NoteList from './components/note-list/index'

class NoteBook extends React.Component {
  constructor () {
    super()

    // 绑定作用域
    this.onBookInput = this.onBookInput.bind(this)

    // 初始state
    this.state = {
      noteList: []
    }    
  }
  
  render () {
    return (
      <div className="note-book-wrapper">
        <TopInput bookInput={this.onBookInput} ></TopInput>
        <NoteList value={this.state.noteList}></NoteList>
      </div>
    )
  }

  // 事件 - 输入框输入
  onBookInput (val, id = this.state.noteList.length, status = ENUM_NOTE_BOOK_STATUS.ACTIVE) {
    this.state.noteList.push({ id, status, message: val })
    this.setState({
      noteList: this.state.noteList
    })
  }
}

export default NoteBook