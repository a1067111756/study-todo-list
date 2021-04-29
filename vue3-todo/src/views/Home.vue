<template>
  <div class="page-todo-list__container">
    <!-- 标题栏 -->
    <p class="todo-list__title">JSTodo</p>

    <!-- 笔记栏 -->
    <NoteBook></NoteBook>
  </div>
</template>

<script>
import NoteBook from '../components/note-book/index.vue'

export default {
  components: { NoteBook },
  setup (props, context) {
  }
}
</script>

<style lang="scss" scoped>
  .page-todo-list__container {
    display: flex;
    flex-flow: column;
    align-items: center;
  }

  .todo-list__title {
    font-size: 120px;
    margin-top: 40px;
    color: rgba(175, 47, 47, 0.4);
  }
</style>