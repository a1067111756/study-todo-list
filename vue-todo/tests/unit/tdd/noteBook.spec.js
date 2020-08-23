/* todo-list 消息列表tdd测试 */
import { shallowMount } from '@vue/test-utils'
import { getStorage } from '@/utils/storage'
import { ENUM_STORAGE, ENUM_NOTE_BOOK_STATUS } from '@/components/NoteBook/enum'
import NoteBook from '@/components/NoteBook/index.vue'

describe('NoteBook组件TDD测试', () => {
  // NoteBook 组件初始化时, noteList应该与storgae中存储值一样
  it('NoteBook 组件初始化时, noteList应该与storgae中存储值一样', () => {
    // 挂载组件
    const wrapper = shallowMount(NoteBook)
    // 对比notelist与storage中的值
    expect(wrapper.vm.$data.noteList).toEqual(getStorage(ENUM_STORAGE.NOTE_MESSAGE))
  })

  // NoteBook组件执行添加消息时，NoteBook组件内容会增加一个
  it('NoteBook组件执行添加消息时，NoteBook组件内容会增加一个', () => {
    // 挂载组件
    const id = 'notebook add id'
    const message = '新增一条消息'    
    const wrapper = shallowMount(NoteBook)
    // 调用添加方法
    wrapper.vm.onBookInput(message, id)
    // 查找noteList中是否有新增消息的id
    expect(wrapper.vm.$data.noteList.map(item => item.id).includes(id)).toBeTruthy()
  }) 
  
  // NoteBook组件执行删除消息时，NoteBook组件内容会删除一个
  it('NoteBook组件执行删除消息时，NoteBook组件内容会删除一个', () => {
    // 挂载组件
    const message = '新增删除消息'
    const id = 'notebook delete id'    
    const wrapper = shallowMount(NoteBook)
    // 调用添加方法
    wrapper.vm.onBookInput(message, id)
    // 执行删除方法
    wrapper.vm.onBookItemClose(id)
    // 查找noteList中是否有删除消息的id
    expect(wrapper.vm.$data.noteList.map(item => item.id).includes(id)).toBeFalsy()
  })

  // NoteBook组件执行消息完成事件，对应的消息状态置为ENUM_NOTE_BOOK_STATUS.COMPLETED
  it('NoteBook组件执行消息完成事件，对应的消息状态置为ENUM_NOTE_BOOK_STATUS.COMPLETED', () => {
    // 挂载组件
    const message = '新增消息完成消息'
    const id = 'notebook message compelete id'
    const wrapper = shallowMount(NoteBook)
    // 调用添加方法
    wrapper.vm.onBookInput(message, id)
    // 调用消息完成事件
    wrapper.vm.onBookItemCompleted(id)
    // 查找noteList中添加的id事件状态是否是ENUM_NOTE_BOOK_STATUS.COMPLETED
    expect(wrapper.vm.$data.noteList.find(item => item.id === id).status).toEqual(ENUM_NOTE_BOOK_STATUS.COMPLETED)    
  })
  
  // NoteBook组件active按钮，notelist的条目只保存active状态的消息
  it('NoteBook组件点击active按钮，notelist的条目只保存ENUM_NOTE_BOOK_STATUS.ACTIVE状态的消息', () => {
    // 挂载组件
    const message1 = '新增普通消息1'
    const id1 = 'notebook active message id1'
    const status1 = ENUM_NOTE_BOOK_STATUS.ACTIVE
    const id2 = 'notebook active message id2'  
    const message2 = '新增普通消息2'
    const status2 = ENUM_NOTE_BOOK_STATUS.COMPLETED
    const wrapper = shallowMount(NoteBook)
    // 调用添加方法
    wrapper.vm.onBookInput(message1, id1, status1)
    wrapper.vm.onBookInput(message2, id2, status2)
    // 调用NoteBook组件点击active按钮
    wrapper.vm.onBookActive()
    // 查找noteList中添加的id事件状态是否是ENUM_NOTE_BOOK_STATUS.COMPLETED
    expect(wrapper.vm.$data.noteList.every(item => item.status === ENUM_NOTE_BOOK_STATUS.ACTIVE)).toBeTruthy()    
  })
  
  // NoteBook组件completed按钮，notelist的条目只保存completed状态的消息
  it('NoteBook组件completed按钮，notelist的条目只保存ENUM_NOTE_BOOK_STATUS.COMPLETED状态的消息', () => {
    // 挂载组件
    const message1 = '新增普通消息1'
    const id1 = 'notebook active message id1'
    const status1 = ENUM_NOTE_BOOK_STATUS.ACTIVE
    const id2 = 'notebook active message id2'  
    const message2 = '新增普通消息2'
    const status2 = ENUM_NOTE_BOOK_STATUS.COMPLETED
    const wrapper = shallowMount(NoteBook)
    // 调用添加方法
    wrapper.vm.onBookInput(message1, id1, status1)
    wrapper.vm.onBookInput(message2, id2, status2)
    // 调用NoteBook组件点击active按钮
    wrapper.vm.onBookCompleted()
    // 查找noteList中添加的id事件状态是否是ENUM_NOTE_BOOK_STATUS.COMPLETED
    expect(wrapper.vm.$data.noteList.every(item => item.status === ENUM_NOTE_BOOK_STATUS.COMPLETED)).toBeTruthy()    
  })  
  
  // NoteBook组件all按钮，notelist的条目保存active、completed状态的消息
  it('NoteBook组件completed按钮，notelist的条目保存ENUM_NOTE_BOOK_STATUS.ACTIVE、ENUM_NOTE_BOOK_STATUS.COMPLETED状态的消息', () => {
    // 挂载组件
    const wrapper = shallowMount(NoteBook)
    wrapper.vm.$data.noteList = []
    const message1 = '新增普通消息1'
    const id1 = 'notebook active message id1'
    const status1 = ENUM_NOTE_BOOK_STATUS.ACTIVE
    const id2 = 'notebook active message id2'  
    const message2 = '新增普通消息2'
    const status2 = ENUM_NOTE_BOOK_STATUS.COMPLETED
    // 调用添加方法
    wrapper.vm.onBookInput(message1, id1, status1)
    wrapper.vm.onBookInput(message2, id2, status2)
    // 调用NoteBook组件点击active按钮
    wrapper.vm.onBookAll()
    // 查找noteList中添加的id事件状态是否是ENUM_NOTE_BOOK_STATUS.COMPLETED
    expect(wrapper.vm.$data.noteList.length).toEqual(2)    
  })

  // NoteBook组件清除完成事件按钮，notelist的条目只剩active状态的消息
  it('NoteBook组件清除完成事件按钮，notelist的条目只剩active状态的消息', () => {
    // 挂载组件
    const wrapper = shallowMount(NoteBook)
    wrapper.vm.$data.noteList = []
    const message1 = '新增普通消息1'
    const id1 = 'notebook active message id1'
    const status1 = ENUM_NOTE_BOOK_STATUS.ACTIVE
    const id2 = 'notebook active message id2'  
    const message2 = '新增普通消息2'
    const status2 = ENUM_NOTE_BOOK_STATUS.COMPLETED
    // 调用添加方法
    wrapper.vm.onBookInput(message1, id1, status1)
    wrapper.vm.onBookInput(message2, id2, status2)
    // 调用NoteBook组件点击active按钮
    wrapper.vm.onBookClearCompleted()
    // 查找noteList中添加的id事件状态是否是ENUM_NOTE_BOOK_STATUS.COMPLETED
    expect(wrapper.vm.$data.noteList.every(item => item.status === ENUM_NOTE_BOOK_STATUS.ACTIVE)).toBeTruthy()  
  })  
})
