<template>
  <div class="bottom-tool-wrapper">
    <!-- 左边 -->
    <p class="left-counter" :data-counter="getLeftItem(value)">{{ getLeftItem(value)  }} item left</p>

    <!-- 中间 -->
    <section class="section2">
      <span class="all-but" :class="{ 'active': status === 'all' }" @click="$emit('book-all-click')">all</span>
      <span class="active-but" :class="{ 'active': status === 'active' }" @click="$emit('book-active-click')">active</span>
      <span class="completed-but" :class="{ 'active': status === 'completed' }" @click="$emit('book-completed-click')">completed</span>
    </section>

    <!-- 右边 -->
    <p class="clear-completed-but" @click="$emit('book-clear-completed-click')">clear completed</p>
  </div>
</template>

<script>
import { ENUM_NOTE_BOOK_STATUS } from '../enum'

export default {
  props: {
    value: {
      type: Array,
      default: () => []
    },
    status: {
      type: String
    }
  },
  computed: {
    getLeftItem (value) {
      return value => value.filter(item => item.status === ENUM_NOTE_BOOK_STATUS.ACTIVE).length
    }
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
