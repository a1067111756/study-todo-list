/* todo-list > note-list消息内容框 tdd测试 */
import { shallowMount } from '@vue/test-utils'
import NoteList from '@/components/NoteBook/components/NoteList'

describe('NoteList组件TDD测试', () => {
  // 注入数据多组数据，NoteList列表能正确展示条目内容和状态
  it('注入数据多组数据，NoteList列表能正确展示条目内容和状态 ', () => {
    // 挂载组件
    const wrapper = shallowMount(NoteList, {
      propsData: {
        value: [
          { id: 0, message: '我是第一条数据', status: 'active' },
          { id: 1, message: '我是第二条数据', status: 'completed' },
          { id: 2, message: '我是第三条数据', status: 'active' }
        ]
      }
    })
    // 验证ui是否与绑定数据一致
    const nodeListItems = wrapper.findAll('.note-list-item')
    // 1. 数据条数一致
    expect(nodeListItems.length).toEqual(wrapper.vm.$props.value.length)
    // 2. 数据内容一致
    for (let i = 0; i < nodeListItems.length; i++) {
      // 匹配消息内容
      const message = nodeListItems.at(i).find('.message')
      expect(message.text()).toEqual(wrapper.vm.$props.value[i].message)
      // 匹配消息状态
      const status = nodeListItems.at(i).find('.status')
      expect(status.attributes('data-status')).toEqual(wrapper.vm.$props.value[i].status)
    }
  })
  
  // 点击条目状态图标，组件抛出book-item-completed-click事件，携带参数为条目id
  it('点击条目状态图标，组件抛出book-item-completed-click事件，携带参数为条目id ', () => {
    // 挂载组件
    const wrapper = shallowMount(NoteList, {
      propsData: {
        value: [
          { id: 2, message: '我是第一条数据', status: 'active' }
        ]
      }
    })

    // 查找状态图标，触发点击事件
    const status = wrapper.find('.note-list-item').find('.status')
    status.trigger('click')

    // 验证是否抛出book-item-completed-click事件, 携带参数为条目id
    expect(wrapper.emitted('book-item-completed-click')).toBeTruthy()
    expect(wrapper.emitted('book-item-completed-click')[0][0]).toEqual(wrapper.vm.$props.value[0].id)
  })


  // 点击条目删除图标，组件抛出book-item-close-click事件，携带参数为条目id
  it('should ', () => {
    // 挂载组件
    const wrapper = shallowMount(NoteList, {
      propsData: {
        value: [
          { id: 0, message: '我是第一条数据', status: 'active' }
        ]
      }
    })

    // 查找状态图标，触发点击事件
    const deleteIcon = wrapper.find('.note-list-item').find('.close')
    deleteIcon.trigger('click')

    // 验证是否抛出book-item-completed-click事件
    expect(wrapper.emitted('book-item-close-click')).toBeTruthy()
    expect(wrapper.emitted('book-item-close-click')[0][0]).toEqual(wrapper.vm.$props.value[0].id)
  })
})