/* todo-list > bottom-tool底部操作栏 tdd测试 */
import { shallowMount } from '@vue/test-utils'
import BottomTool from '@/components/NoteBook/components/BottomTool'

describe('BottomTool组件TDD测试', () => {
  // 剩余未完成事件计数器
  it('剩余未完成事件计数器', () => {
    // 挂载组件
    const wrapper = shallowMount(BottomTool, {
      propsData: {
        value: [
          { id: 0, message: '我是第一条数据', status: 'active' },
          { id: 1, message: '我是第二条数据', status: 'completed' },
          { id: 2, message: '我是第三条数据', status: 'active' }
        ]
      }
    })
    
    const counter = wrapper.find('.section1')
    expect(counter.text()).toContain('2')
  })

  // 一键清除完成消息功能
  it('一键清除完成消息功能', () => {
    // 挂载组件
    const wrapper = shallowMount(BottomTool, {
      propsData: {
        value: [
          { id: 0, message: '我是第一条数据', status: 'active' },
          { id: 1, message: '我是第二条数据', status: 'completed' },
          { id: 2, message: '我是第三条数据', status: 'active' }
        ]
      }
    })
    
    // 触发一键清除
    const clearButton = wrapper.find('.section3')
    clearButton.trigger('click')

    // 验证抛出book-clear-completed-click事件
    expect(wrapper.emitted('book-clear-completed-click')).toBeTruthy()
  })  

  // 展示所有active消息功能
  it('展示所有active消息功能', () => {
    // 挂载组件
    const wrapper = shallowMount(BottomTool, {
      propsData: {
        value: [
          { id: 0, message: '我是第一条数据', status: 'active' },
          { id: 1, message: '我是第二条数据', status: 'completed' },
          { id: 2, message: '我是第三条数据', status: 'active' }
        ]
      }
    })
    
    // 触发active按钮
    const showActiveBut = wrapper.find('.section2 .active-but')
    showActiveBut.trigger('click')

    // 验证抛出book-active-click事件
    expect(wrapper.emitted('book-active-click')).toBeTruthy()
  })    

  // 展示所有compelete消息功能
  it('展示所有compelete消息功能', () => {
    // 挂载组件
    const wrapper = shallowMount(BottomTool, {
      propsData: {
        value: [
          { id: 0, message: '我是第一条数据', status: 'active' },
          { id: 1, message: '我是第二条数据', status: 'completed' },
          { id: 2, message: '我是第三条数据', status: 'active' }
        ]
      }
    })
    
    // 触发complete按钮
    const showActiveBut = wrapper.find('.section2 .completed-but')
    showActiveBut.trigger('click')

    // 验证抛出book-active-click事件
    expect(wrapper.emitted('book-completed-click')).toBeTruthy()
  })   

  // 展示所有消息功能
  it('展示所有消息功能', () => {
    // 挂载组件
    const wrapper = shallowMount(BottomTool, {
      propsData: {
        value: [
          { id: 0, message: '我是第一条数据', status: 'active' },
          { id: 1, message: '我是第二条数据', status: 'completed' },
          { id: 2, message: '我是第三条数据', status: 'active' }
        ]
      }
    })
    
    // 触发complete按钮
    const showActiveBut = wrapper.find('.section2 .all-but')
    showActiveBut.trigger('click')

    // 验证抛出book-active-click事件
    expect(wrapper.emitted('book-all-click')).toBeTruthy()
  })  

})