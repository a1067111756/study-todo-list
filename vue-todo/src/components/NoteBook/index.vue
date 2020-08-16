<template>
  <div class="note-book-wrapper">
    <input
      v-model.trim="input"
      type="text"
      placeholder="接下来要做什么呐？"
      @keyup.enter="onBookInput"
    />

    <NoteList
      :value="noteList"
      @book-item-close-click="onBookItemClose"
      @book-item-completed-click="onBookItemCompleted"
    />

    <BottomTool
      :value="noteList"
      :status="currentStatus"
      @book-all-click="onBookAll"
      @book-active-click="onBookActive"
      @book-completed-click="onBookCompleted"
      @book-clear-completed-click="onBookClearCompleted"
    />
  </div>
</template>

<script>
import NoteList from './components/NoteList'
import BottomTool from './components/BottomTool'
import { ENUM_STORAGE, setStorage, getStorage } from '@/utils/storage'

export default {
  components: {
    NoteList,
    BottomTool
  },
  data () {
    return {
      input: undefined,
      currentStatus: 'all',
      noteList: getStorage(ENUM_STORAGE.NOTE_MESSAGE) ?? []
    }
  },
  methods: {
    // 事件 - 输入框输入
    onBookInput () {
      if (this.input === '') return

      this.noteList.push({ status: 'active', message: this.input })
      this.input = undefined
      setStorage(ENUM_STORAGE.NOTE_MESSAGE, this.noteList)
    },
    // 事件 - 条目关闭
    onBookItemClose (index) {
      this.noteList.splice(index, 1)
      setStorage(ENUM_STORAGE.NOTE_MESSAGE, this.noteList)
    },
    // 事件 - note-book全部事件
    onBookAll () {
      this.currentStatus = 'all'
      this.noteList = getStorage(ENUM_STORAGE.NOTE_MESSAGE) ?? []
    },
    // 事件 - note-book进行中事件
    onBookActive () {
      this.currentStatus = 'active'
      const match = getStorage(ENUM_STORAGE.NOTE_MESSAGE) ?? []
      this.noteList = match.filter(item => item.status === 'active')
    },
    // 事件 - note-book完成事件
    onBookCompleted () {
      this.currentStatus = 'completed'
      const match = getStorage(ENUM_STORAGE.NOTE_MESSAGE) ?? []
      this.noteList = match.filter(item => item.status === 'completed')
    },
    // 事件 - note-book清除完成事件
    onBookClearCompleted () {
      this.noteList = this.noteList.filter(item => item.status !== 'completed')
      setStorage(ENUM_STORAGE.NOTE_MESSAGE, this.noteList)
    },
    // 事件 - note-book-item完成事件
    onBookItemCompleted (index) {
      this.noteList[index].status = 'completed'
      setStorage(ENUM_STORAGE.NOTE_MESSAGE, this.noteList)
    }
  }
}
</script>

<style lang="scss" scoped>
  .note-book-wrapper {
    width: 600px;
    background-color: #FFF;
    box-shadow: rgb(102, 102, 102) 0px 0px 5px;
    z-index: 10;

    & > input {
      width: 100%;
      height: 60px;
      outline: none;
      border: none;
      font-size: 24px;
      font-weight: 300;
      padding-left: 60px;
    }
  }
</style>
