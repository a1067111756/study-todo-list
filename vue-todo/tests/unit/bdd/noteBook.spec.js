/* noteBook组件集成测试 */
import Vue from 'vue'
import { mount } from '@vue/test-utils'
import NoteBook from '@/components/NoteBook/index'

describe('noteBook组件集成测试', () => {
  // 组件添加消息
  it(`
    1. 在input输入框中输入内容
    2. 点击回车按钮
    3. note-list列表增加一条输入内容的列表项
    4. input输入框内容清空
    5. bottom-tool工具栏剩余未完成事件增加一个
  `, async () => {
    // 挂在组件 
    const wrapper = mount(NoteBook)
    const inputElem = wrapper.find('input')
    const inputValue = '我是一条测试消息'
    const beforeLeftCounter = parseInt(wrapper.find('.left-counter').attributes('data-counter'))

    // input输入框中输入内容
    inputElem.setValue(inputValue)

    // input触发回车事件
    await inputElem.trigger('keyup.enter')

    // note-list列表增加一条输入内容的列表项
    const noteListItems = wrapper.findAll('.note-list-item')
    expect(noteListItems.length).toEqual(1)
    expect(noteListItems.at(0).find('.message').text()).toEqual(inputValue)
    expect(noteListItems.at(0).find('.status').attributes('data-status')).toEqual('active')

    // input输入框内容清空
    expect(inputElem.text()).toEqual('')

    // bottom-tool工具栏剩余未完成事件变为1
    const currentLeftCounter = parseInt(wrapper.find('.left-counter').attributes('data-counter'))
    expect(beforeLeftCounter + 1).toEqual(currentLeftCounter)
  })

  // 组件删除消息
  it(`
    1. 点击note-list列表项的删除按钮
    2. note-list列表减少一条删除内容的列表项
    3. bottom-tool工具栏剩余未完成事件减少一个
  `, async () => {
    // 挂在组件 
    const wrapper = mount(NoteBook, {
      data() {
        return {
          noteList: [
            { id: 0, message: '测试数据一', status: 'active' },
            { id: 1, message: '测试数据二', status: 'active' },
            { id: 2, message: '测试数据三', status: 'active' }
          ]
        }
      }
    })
    const beforeLeftCounter = parseInt(wrapper.find('.left-counter').attributes('data-counter'))

    // 点击note-list列表项的删除按钮
    const messageItems = wrapper.findAll('.note-list-item .close')
    await messageItems.at(0).trigger('click')

    // note-list列表减少一条删除内容的列表项
    const noteListItems = wrapper.findAll('.note-list-item')
    expect(noteListItems.length).toEqual(2)
    expect(noteListItems.filter(item => item.find('.message') === '测试数据一').length).toEqual(0)

    // bottom-tool工具栏剩余未完成事件变为2
    const currentLeftCounter = parseInt(wrapper.find('.left-counter').attributes('data-counter'))
    expect(beforeLeftCounter - 1).toEqual(currentLeftCounter)   
  })

  // 组件点击消息列表项状态按钮，将消息状态置为completed
  it(`
    1. 点击note-list列表项的状态按钮
    2. note-list列表项消息状态变更为completed
    3. bottom-tool工具栏剩余未完成事件减少一个
  `, async () => {
    // 挂在组件 
    const wrapper = mount(NoteBook, {
      data() {
        return {
          noteList: [
            { id: 0, message: '测试数据一', status: 'active' },
            { id: 1, message: '测试数据二', status: 'active' },
            { id: 2, message: '测试数据三', status: 'active' }
          ]
        }
      }
    })
    const beforeLeftCounter = parseInt(wrapper.find('.left-counter').attributes('data-counter'))

    // 点击note-list列表项的状态按钮
    const statusItems = wrapper.findAll('.note-list-item .status')
    await statusItems.at(0).trigger('click')

    // note-list列表项消息状态变更为completed
    expect(statusItems.at(0).attributes('data-status')).toEqual('completed')

    // bottom-tool工具栏剩余未完成事件减少一个
    const currentLeftCounter = parseInt(wrapper.find('.left-counter').attributes('data-counter'))
    expect(beforeLeftCounter - 1).toEqual(currentLeftCounter)  
  })

  // 点击显示全部事件按钮
  it(`
    1. 点击bottom-tool工具栏的显示全部事件按钮
    2. note-list列表项消息显示全部事件
  `, async () => {
    // 挂在组件 
    const wrapper = mount(NoteBook, {
      data() {
        return {
          noteList: [
            { id: 0, message: '测试数据一', status: 'active' },
            { id: 1, message: '测试数据二', status: 'active' },
            { id: 2, message: '测试数据三', status: 'active' }
          ]
        }
      }
    })

    // 点击bottom-tool工具栏的显示全部事件按钮
    const allBut = wrapper.find('.all-but')
    await allBut.trigger('click')

    // note-list列表项消息显示全部事件
    const noteListItems = wrapper.findAll('.note-list-item')
    expect(noteListItems.length).toEqual(3)
  })  

  // 点击显示未完成事件按钮
  it(`
    1. 点击bottom-tool工具栏的显示未完成事件按钮
    2. note-list列表项消息显示未完成事件
  `, async () => {
    // 挂在组件 
    const wrapper = mount(NoteBook, {
      data() {
        return {
          noteList: [
            { id: 0, message: '测试数据一', status: 'active' },
            { id: 1, message: '测试数据二', status: 'active' },
            { id: 2, message: '测试数据三', status: 'completed' }
          ]
        }
      }
    })

    // 点击bottom-tool工具栏的显示全部事件按钮
    const completedBut = wrapper.find('.completed-but')
    await completedBut.trigger('click')

    // note-list列表项消息显示未完成事件
    const noteListItems = wrapper.findAll('.note-list-item')
    expect(noteListItems.length).toEqual(1)
    expect(noteListItems.at(0).find('.status').attributes('data-status')).toEqual('completed')
    wrapper.destroy()
  })  

  // 点击显示完成事件按钮
  it(`
    1. 点击bottom-tool工具栏的显示完成事件按钮
    2. note-list列表项消息显示完成事件
  `, async () => {
    // 挂在组件 
    const wrapper1 = mount(NoteBook, {
      data () {
        return {
          noteList: [
            { id: 0, message: '测试数据一', status: 'active' },
            { id: 1, message: '测试数据二', status: 'active' },
            { id: 2, message: '测试数据三', status: 'completed' }
          ]
        }
      }
    })
    // 点击bottom-tool工具栏的显示全部事件按钮
    const activeBut = wrapper1.find('.active-but')
    await activeBut.trigger('click')

    // note-list列表项消息显示未完成事件
    const noteListItems = wrapper1.findAll('.note-list-item')
    expect(noteListItems.length).toEqual(2)
    expect(noteListItems.at(0).find('.status').attributes('data-status')).toEqual('active')
  })  

  // 点击清除未完成事件按钮
  it(`
    1. 点击bottom-tool工具栏的清除未完成事件按钮
    2. note-list列表项消息只剩完成事件
  `, async () => {
    // 挂在组件 
    const wrapper1 = mount(NoteBook, {
      data () {
        return {
          noteList: [
            { id: 0, message: '测试数据一', status: 'active' },
            { id: 1, message: '测试数据二', status: 'active' },
            { id: 2, message: '测试数据三', status: 'completed' }
          ]
        }
      }
    })
    // 点击bottom-tool工具栏的清除未完成事件按钮
    const clearCompletedBut = wrapper1.find('.clear-completed-but')
    await clearCompletedBut.trigger('click')

    // note-list列表项消息只剩完成事件
    const noteListItems = wrapper1.findAll('.note-list-item')
    expect(noteListItems.length).toEqual(2)
    expect(noteListItems.at(0).find('.status').attributes('data-status')).toEqual('active')
  })  

})