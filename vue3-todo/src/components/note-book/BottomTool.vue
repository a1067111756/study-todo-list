<template>
  <div class="bottom-tool-wrapper">
    <!-- 左边 -->
    <p class="left-counter">0 item left</p>

    <!-- 中间 -->
    <section class="section2">
      <span class="all-but" :class="{ 'active': status === 'all' }">all</span>
      <span class="active-but" :class="{ 'active': status === 'active' }">active</span>
      <span class="completed-but" :class="{ 'active': status === 'completed' }">completed</span>
    </section>

    <!-- 右边 -->
    <p class="clear-completed-but" @click="$emit('book-clear-completed-click')">clear completed</p>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { ENUM_NOTE_BOOK_STATUS }  from './enum.js'

export default {
  props: {
    remainValue: {
      type: Number,
      required: true
    }
  },
  setup (props, context) {
    const status = ref(ENUM_NOTE_BOOK_STATUS.ALL)

    const remainValueCmp = computed(() => {
      return undefined
    })
    return { status }
  }
}
</script>

<style lang="scss" scoped>
  .bottom-tool-wrapper {
    cursor: pointer;
    font-size: 14px;
    padding: 15px 20px;
    color: rgb(77, 77, 77);
    border-top: 1px solid rgba(0, 0, 0, 0.06);
    display: grid;
    grid-template-columns: 100px 200px 100px;
    grid-template-areas: 'left center right';
    justify-content: space-between;
    .section1 {
      text-align: left;
    }
    .section2 {
      text-align: center;
      display: flex;
      justify-content: space-around;
      & .active {
        color: #67C23A;
      }
    }
    .section3 {
      text-align: right;
    }
  }
</style>