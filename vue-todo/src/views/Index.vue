<template>
  <div class="to-do-list-wrapper">
    <p class="title">JSTodo</p>
    <NoteBook class="note-book" />
  </div>
</template>

<script>
import NoteBook from '@/components/NoteBook/index'

export default {
  components: {
    NoteBook
  }
}
</script>

<style lang="scss" scoped>
  .to-do-list-wrapper {
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    .title {
      font-size: 120px;
      margin-top: 40px;
      color: rgba(175, 47, 47, 0.4);
    }
    .note-book {
      margin-top: 20px;
    }
  }
</style>
