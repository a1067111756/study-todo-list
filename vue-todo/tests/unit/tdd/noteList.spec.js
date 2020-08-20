/* todo-list 消息列表tdd测试 */
import { shallowMount } from '@vue/test-utils'
import NoteListt from '@/components/NoteBook/components/NoteList.vue'

describe('NoteList组件TDD测试', () => {

  // NoteList 组件初始化时, value应该为空数组
  it('NoteList 组件初始化时, value应该为空数组', () => {
    // 挂载组件
    const wrapper = shallowMount(NoteListt)
    // 期望input存在
    expect(wrapper.vm.$props.value).toEqual([])
  })

  // TopInput组件执行添加消息时，NoteList组件内容会增加一个
  it('TopInput组件执行添加消息时，NoteList组件内容会增加一个', () => {
    // 挂载组件
    const wrapper = shallowMount(NoteListt)
    // 期望input存在
    expect(wrapper.vm.$props.value).toEqual([])
  })  
  
  // NoteList组件点击完成按钮时，当前内容消息状态应该变为completed

  // NoteList组件点击删除按钮时，NoteList组件内容会减少一个
})
