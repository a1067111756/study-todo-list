/* todo-list 输入框tdd测试 */
import { shallowMount } from '@vue/test-utils'
import TopInput from '@/components/NoteBook/components/TopInput.vue'

describe('TopInput组件TDD测试', () => {

  // TopInput包含input框
  it('TopInput 包含 input输入框', () => {
    // 挂载组件
    const wrapper = shallowMount(TopInput)
    // 查找input标签
    const input = wrapper.find('input')
    // 期望input存在
    expect(input.exists()).toBe(true)
  })

  // TopInput输入框初始值为undefined
  it('TopInput 中 input输入框初始值为undefined', () => {
    // 挂载组件
    const wrapper = shallowMount(TopInput)
    // 查找input标签
    const inputValue = wrapper.vm.$data.inputValue
    // 期望input存在
    expect(inputValue).toBeUndefined()
  })

  // TopInput输入框发生变化，数据应该跟随变化
  it('TopInput 中 input输入框发生变化，数据应该跟随变化', () => {
    // 挂载组件
    const wrapper = shallowMount(TopInput)
    // 查找input标签并设置值变化
    const input = wrapper.find('input')
    input.setValue('this is test data')
    // 验证输入框绑定的值是否变化
    const inputValue = wrapper.vm.$data.inputValue
    expect(inputValue).toBe('this is test data')
  })

  // TopInput输入框为无内容时，回车不触发事件
  it('TopInput 中 input输入框为无内容时，回车不触发事件', () => {
    // 挂载组件
    const wrapper = shallowMount(TopInput)
    // 设置input输入框值为空字符串
    const input = wrapper.find('input')
    input.setValue('')
    // 执行输入框enter操作
    input.trigger('keyup.enter')
    // 期望input组件未提交book-input事件
    expect(wrapper.emitted()['book-input']).toBeFalsy()
  })

  // TopInput输入框为有内容时，回车触发事件，同时清空输入框内容
  it('TopInput 中 输入框为有内容时，回车触发事件，同时清空输入框内容', () => {
    // 挂载组件
    const wrapper = shallowMount(TopInput)
    // 设置input输入框值为空字符串
    const input = wrapper.find('input')
    input.setValue('I am a test data')
    // 执行输入框enter操作
    input.trigger('keyup.enter')
    // 期望input组件未提交book-input事件
    expect(wrapper.emitted()['book-input']).toBeTruthy()
    expect(wrapper.vm.$data.inputValue).toBeUndefined()
  })  
})
