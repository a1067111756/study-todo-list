import React from 'react'

class TopInput extends React.Component {
  constructor (props) {
    super(props)

    // 初始props
    const {
      bookInput
    } = this.props

    // 初始state
    this.state = {
      inputValue: undefined
    }

    // 绑定作用域
    this.handleInputEnter = this.handleInputEnter.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  render () {
    return (
      <React.Fragment>
        <input value={ this.state.inputValue } type="text" placeholder="接下来要做什么呐？" onKeyDown="handleInputEnter" onChange="handleInputChange"></input>
      </React.Fragment>
    )
  }

  // 事件 - 输入框内容回车
  handleInputEnter (e) {
    if (e.keyCode !== 13) return
    if (this.state.inputValue || this.state.inputValue === '') return
    this.bookInput(this.state.inputValue)
    this.setState({ inputValue: undefined })
  }

  // 事件 - 输入框内容变化
  handleInputChange (e) {
    this.setState({ inputValue: e.target.value })
  }  
}

export default TopInput