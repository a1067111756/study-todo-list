<template>
  <div class="components-note-book__container">
    <!-- 顶部输入框 -->
    <TopInput></TopInput>
    
    <!-- 列表栏 -->
    <!-- <NoteList></NoteList> -->
    
    <!-- 底部控制栏 -->
    <BottomTool :remain-value="5"></BottomTool>
  </div>
</template>

<script>
import TopInput from './TopInput.vue'
import NoteList from './NoteList.vue'
import BottomTool from './BottomTool.vue'

export default {
  components: { TopInput, NoteList, BottomTool }
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
