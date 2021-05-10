<template>
  <div class="bottom-tool-wrapper">
    <!-- 左边 -->
    <p class="left-counter">{{ remainValueCmp }} item left</p>

    <!-- 中间 -->
    <section class="section2">
      <span class="all-but but-hover" :class="{ 'active': status === ENUM_STATUS.ALL }" @click="$emit('update:status', ENUM_STATUS.ALL)">all</span>
      <span class="active-but but-hover" :class="{ 'active': status === ENUM_STATUS.ACTIVE }" @click="$emit('update:status', ENUM_STATUS.ACTIVE)">active</span>
      <span class="completed-but but-hover" :class="{ 'active': status === ENUM_STATUS.COMPLETED }" @click="$emit('update:status', ENUM_STATUS.COMPLETED)">completed</span>
    </section>

    <!-- 右边 -->
    <p class="clear-completed-but but-hover" @click="onRemoveAllItem">clear completed</p>
  </div>
</template>

<script>
import { computed, reactive, ref, toRef } from 'vue'
import { ENUM_NOTE_BOOK_STATUS }  from './enum.js'

export default {
  props: {
    value: {
      type: Array,
      required: true
    },
    status: {
      type: String,
      required: true
    }
  },
  setup (props, context) {
    const ENUM_STATUS = ENUM_NOTE_BOOK_STATUS

    // 计算 - 当前状态的消息数目
    const remainValueCmp = computed(() => {
      const match = props.status === ENUM_STATUS.ALL
        ? props.value
        : props.value.filter(item => item.status === props.status)

      return match.length
    })

    // 事件 - 移除所有事项
    const onRemoveAllItem = () => {
      context.emit('update:value', props.value.filter(item => item.status === ENUM_STATUS.ACTIVE))
    }

    return { ENUM_STATUS, remainValueCmp, onRemoveAllItem }
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

    .but-hover:hover {
      color: #dd6161;
    }
  }
</style>