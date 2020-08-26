import './index.css'
import React from 'react'
import { ENUM_NOTE_BOOK_STATUS } from './enum'
import TopInput from './components/top-input/index'
import NoteList from './components/note-list/index'
import BottomTool from './components/bottom-tool/index'
import { ENUM_STORAGE, getStorage, setStorage } from '../../utils/storage'

class NoteBook extends React.Component {
  constructor () {
    super()

    // 绑定作用域
    this.onBookAll = this.onBookAll.bind(this)
    this.onBookInput = this.onBookInput.bind(this)
    this.onBookActive = this.onBookActive.bind(this)
    this.onBookCompleted = this.onBookCompleted.bind(this)
    this.onBookItemClose = this.onBookItemClose.bind(this)
    this.onBookItemCompleted = this.onBookItemCompleted.bind(this)
    this.onBookClearCompleted = this.onBookClearCompleted.bind(this)

    // 初始state
    this.state = {
      currentStatus: ENUM_NOTE_BOOK_STATUS.ALL,
      noteList: getStorage(ENUM_STORAGE.NOTE_MESSAGE)
    }    
  }
  
  render () {
    return (
      <div className="note-book-wrapper">
        <TopInput 
          bookInput={ this.onBookInput } 
        />

        <NoteList 
          value={ this.state.noteList } 
          bookItemClose={ this.onBookItemClose } 
          bookItemCompleted={ this.onBookItemCompleted } 
        />

        <BottomTool
          value={ this.state.noteList }
          status={ this.state.currentStatus }
          bookAll = { this.onBookAll }
          bookActive={ this.onBookActive }
          bookCompleted= { this.onBookCompleted }
          bookClearCompleted= { this.onBookClearCompleted }
        />
      </div>
    )
  }

  // 事件 - 输入框输入
  onBookInput (val, id = this.state.noteList.length, status = ENUM_NOTE_BOOK_STATUS.ACTIVE) {
    this.state.noteList.unshift({ id, status, message: val })
    setStorage(ENUM_STORAGE.NOTE_MESSAGE, this.state.noteList)
    this.setState({ noteList: this.state.noteList })
  }

  // 事件 - note-book-item完成事件
  onBookItemCompleted (id) {
    this.state.noteList.find(item => item.id === id).status = ENUM_NOTE_BOOK_STATUS.COMPLETED
    setStorage(ENUM_STORAGE.NOTE_MESSAGE, this.state.noteList)
    this.setState({ noteList: this.state.noteList })
  }

  // 事件 - 条目关闭
  onBookItemClose (id) {
    const match = this.state.noteList.filter(item => item.id !== id)
    setStorage(ENUM_STORAGE.NOTE_MESSAGE, match)
    this.setState({ noteList: match })
  }

  // 事件 - note-book全部事件
  onBookAll () {
    const match = getStorage(ENUM_STORAGE.NOTE_MESSAGE) ?? []
    this.setState({
      noteList: match,
      currentStatus: ENUM_NOTE_BOOK_STATUS.ALL
    })
  }

  // 事件 - note-book进行中事件
  onBookActive () {
    const match = (getStorage(ENUM_STORAGE.NOTE_MESSAGE) ?? []).filter(item => item.status === ENUM_NOTE_BOOK_STATUS.ACTIVE)
    this.setState({
      noteList: match,
      currentStatus: ENUM_NOTE_BOOK_STATUS.ACTIVE
    })
  }

  // 事件 - note-book完成事件
  onBookCompleted () {
    const match = (getStorage(ENUM_STORAGE.NOTE_MESSAGE) ?? []).filter(item => item.status === ENUM_NOTE_BOOK_STATUS.COMPLETED)
    this.setState({
      noteList: match,
      currentStatus: ENUM_NOTE_BOOK_STATUS.COMPLETED
    })    
  }

  // 事件 - note-book清除完成事件
  onBookClearCompleted () {
    const match = this.state.noteList.filter(item => item.status !== ENUM_NOTE_BOOK_STATUS.COMPLETED)
    setStorage(ENUM_STORAGE.NOTE_MESSAGE, match)
    this.setState({
      noteList: match
    })        
  }  
}

export default NoteBook