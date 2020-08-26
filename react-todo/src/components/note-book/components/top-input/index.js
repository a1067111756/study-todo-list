import './index.css'
import React from 'react'

class TopInput extends React.Component {
  constructor (props) {
    super(props)

    // 初始state
    this.state = {
      inputValue: ''
    }

    // 绑定作用域
    this.handleInputEnter = this.handleInputEnter.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  render () {
    return (
      <React.Fragment>
        <input 
          type="text"
          className="top-input-box"
          placeholder="接下来要做什么呐？"
          value={ this.state.inputValue } 
          onKeyDown={ this.handleInputEnter } 
          onChange={ this.handleInputChange } 
        />
      </React.Fragment>
    )
  }

  // 事件 - 输入框内容回车
  handleInputEnter (e) {
    if (e.keyCode !== 13) return
    if (!this.state.inputValue || this.state.inputValue === '') return
    this.props.bookInput(this.state.inputValue)
    this.setState({ inputValue: '' })
  }

  // 事件 - 输入框内容变化
  handleInputChange (e) {
    this.setState({ inputValue: e.target.value })
  }  
}

export default TopInput