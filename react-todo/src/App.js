import React from 'react'

class TodoList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      inputValue: '',
      list: ['1', '2']
    }
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <input 
            value={ this.state.inputValue }
            onChange={ this.handleInputChange.bind(this) }>
          </input>
          <button onClick={ this.onAdd.bind(this) }>添加</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return <li key={ index } onClick={ this.onDelete.bind(this, index) }>{ item }</li>
            })            
          }
        </ul>
      </React.Fragment>
    )
  }

  // 事件 - 输入框内容发生变化
  handleInputChange (e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  // 事件 - 添加新一条记录
  onAdd () {
    if (this.state.inputValue === '') {
      alert('不能添加空记录!')
      return
    }

    this.setState({
      list: [this.state.inputValue, ...this.state.list],
      inputValue: ''
    })
  }

  // 事件 - 删除一条记录e
  onDelete (index) {
    const list = Object.assign(this.state.list)
    list.splice(index, 1)
    this.setState({
      list: list
    })    
  }  
}

export default TodoList