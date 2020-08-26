import './index.css'
import React from 'react'
import { ENUM_NOTE_BOOK_STATUS } from '../../enum'

class BottomTool extends React.Component {
  constructor () {
    super()

    this.state = {}
  }
  
  render () {

    const getLeftItem = this.props.value.filter(item => item.status === ENUM_NOTE_BOOK_STATUS.ACTIVE).length

    return (
      <div className="bottom-tool-wrapper">
        {/* <!-- 左边 --> */}
        <p className="section1">{ getLeftItem } item left</p>

        {/* <!-- 中间 --> */}
        <section className="section2">
        <span className={ this.props.status === 'all' ? 'active' : null } onClick={ () => this.props.bookAll() }>all</span>
        <span className={ this.props.status === 'active' ? 'active' : null } onClick={ () => this.props.bookActive() }>active</span>
        <span className={ this.props.status === 'completed' ? 'active' : null } onClick={ () => this.props.bookCompleted() }>completed</span>
        </section>

        {/* <!-- 右边 --> */}
        <p className="section3" onClick={ () => this.props.bookClearCompleted() }>clear completed</p>          
      </div>
    )
  }
}

export default BottomTool