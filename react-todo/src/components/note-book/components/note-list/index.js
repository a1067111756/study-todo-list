import './index.css'
import React from 'react'

class NoteList extends React.Component {
  constructor (props) {
    super(props)
    this.state={}
  }

  render () {
    console.log(this.props.value)
    const noteListItem = this.props.value.map(item => (
      <div className="note-list-item" key={item.id}>
        <span className="iconfont icon-queding"></span>
        <p className="message">{item.message}</p>
        <span className="iconfont icon-quxiao close"></span>
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