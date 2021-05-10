<template>
  <div class="components-note-book__container">
    <!-- 顶部输入框 -->
    <TopInput v-model:value="data"></TopInput>
    
    <!-- 列表栏 -->
    <NoteList v-model:value="data" v-model:status="status"></NoteList>
    
    <!-- 底部控制栏 -->
    <BottomTool v-model:value="data" v-model:status="status"></BottomTool>
  </div>
</template>

<script>
import { reactive, ref, toRef, toRefs } from 'vue'
import TopInput from './TopInput.vue'
import NoteList from './NoteList.vue'
import BottomTool from './BottomTool.vue'
import { ENUM_NOTE_BOOK_STATUS }  from './enum.js'

export default {
  components: { TopInput, NoteList, BottomTool },
  setup (props, context) {
    const data = ref([])
    const status = ref(ENUM_NOTE_BOOK_STATUS.ALL)

    return { data, status }
  }
}
</script>

<style lang="scss" scoped>
  .components-note-book__container {
    width: 600px;
    background-color: #FFF;
    box-shadow: rgb(102, 102, 102) 0px 0px 5px;
    z-index: 10;
  }
</style>
