<template>
  <div class="note-book-wrapper">
    <top-input @book-input="onBookInput" />

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
import TopInput from './components/TopInput'
import NoteList from './components/NoteList'
import BottomTool from './components/BottomTool'
import { ENUM_STORAGE, ENUM_NOTE_BOOK_STATUS } from './enum'
import { setStorage, getStorage } from '@/utils/storage'

export default {
  components: {
    TopInput,
    NoteList,
    BottomTool
  },
  data () {
    return {
      input: undefined,
      currentStatus: ENUM_NOTE_BOOK_STATUS.ALL,
      noteList: getStorage(ENUM_STORAGE.NOTE_MESSAGE) ?? []
    }
  },
  methods: {
    // 事件 - 输入框输入
    onBookInput (val) {
      this.noteList.push({ status: ENUM_NOTE_BOOK_STATUS.ACTIVE, message: val })
      setStorage(ENUM_STORAGE.NOTE_MESSAGE, this.noteList)
    },
    // 事件 - 条目关闭
    onBookItemClose (index) {
      this.noteList.splice(index, 1)
      setStorage(ENUM_STORAGE.NOTE_MESSAGE, this.noteList)
    },
    // 事件 - note-book全部事件
    onBookAll () {
      this.currentStatus = ENUM_NOTE_BOOK_STATUS.ALL
      this.noteList = getStorage(ENUM_STORAGE.NOTE_MESSAGE) ?? []
    },
    // 事件 - note-book进行中事件
    onBookActive () {
      this.currentStatus = ENUM_NOTE_BOOK_STATUS.ACTIVE
      const match = getStorage(ENUM_STORAGE.NOTE_MESSAGE) ?? []
      this.noteList = match.filter(item => item.status === ENUM_NOTE_BOOK_STATUS.ACTIVE)
    },
    // 事件 - note-book完成事件
    onBookCompleted () {
      this.currentStatus = ENUM_NOTE_BOOK_STATUS.COMPLETED
      const match = getStorage(ENUM_STORAGE.NOTE_MESSAGE) ?? []
      this.noteList = match.filter(item => item.status === ENUM_NOTE_BOOK_STATUS.COMPLETED)
    },
    // 事件 - note-book清除完成事件
    onBookClearCompleted () {
      this.noteList = this.noteList.filter(item => item.status !== ENUM_NOTE_BOOK_STATUS.COMPLETED)
      setStorage(ENUM_STORAGE.NOTE_MESSAGE, this.noteList)
    },
    // 事件 - note-book-item完成事件
    onBookItemCompleted (index) {
      this.noteList[index].status = ENUM_NOTE_BOOK_STATUS.COMPLETED
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
  }
</style>
