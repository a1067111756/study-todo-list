import './index.css'
import React from 'react'

class NoteList extends React.Component {
  constructor (props) {
    super(props)
    this.state={}
  }

  render () {
    const noteListItem = this.props.value.map(item => (
      <div className="note-list-item" key={item.id}>
        {/* 状态图标 */}
        <svg className={`icon ${ item.status }`} aria-hidden="true" onClick={() => this.props.bookItemCompleted(item.id)}>
          <use xlinkHref="#icon-queding"></use>
        </svg>

        {/* 消息 */}
        <p className="message">{ item.message }</p>
        
        {/* 删除图标 */}
        <svg className="icon close" aria-hidden="true" onClick={() => this.props.bookItemClose(item.id)}>
          <use xlinkHref="#icon-quxiao"></use>
        </svg>        
      </div>
    ))

    return (
      <div className="note-list">
        { noteListItem }
      </div>
    )
  }
}

export default NoteList