<template>
  <div class="components-note-list__container">
    <div
      :key="index"
      class="cnl__item"
      :class="item.status === 'completed' ? 'completed' : 'active'" 
      v-for="(item, index) in noteListCmp" 
    >
      <!-- 消息状态图标 -->
      <svg class="icon icon-status" aria-hidden="true" @click="onItemStatusChange(item)">
        <use xlink:href="#icon-queding"></use>
      </svg>

      <!-- 消息 -->
      <p class="cnl__item-text">{{ item.text }}</p>

      <!-- 消息删除图标 -->
      <svg class="icon icon-close" aria-hidden="true" style="color: #F56C6C" @click="onItemRemove(index)">
        <use xlink:href="#icon-quxiao"></use>
      </svg>
    </div>
  </div>
</template>

<script>
import { computed, toRef } from 'vue'
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
    setup(props, context) {
      // 计算 - 当前状态消息
      const noteListCmp = computed(() => {
        const match = props.status === ENUM_NOTE_BOOK_STATUS.ALL
          ? props.value
          : props.value.filter(item => item.status === props.status)

        return match
      })

      // 事件 - 条目状态改变
      const onItemStatusChange = (message) => {
        message.status = message.status === ENUM_NOTE_BOOK_STATUS.COMPLETED
          ? ENUM_NOTE_BOOK_STATUS.ACTIVE
          : ENUM_NOTE_BOOK_STATUS.COMPLETED
      }

      // 事件 - 移除条目
      const onItemRemove = (index) => {
        props.value.splice(index, 1)
      }

      return { noteListCmp, onItemRemove, onItemStatusChange }
    }
  }
</script>

<style lang="scss" scoped>
  .components-note-list__container {
    max-height: 486px;
    overflow-y: auto;
    &::-webkit-scrollbar {
      /*滚动条整体样式*/
      width : 2px;  /*高宽分别对应横竖滚动条的尺寸*/
      height: 1px;
    }
    &::-webkit-scrollbar-thumb {
      /*滚动条里面小方块*/
      border-radius: 1px;
      background   : #ededed;
    }
    &::-webkit-scrollbar-track {
      background   : #ededed;
    }
  }
  .cnl__item {
    display: grid;
    align-items: center;
    grid-column-gap: 20px;
    grid-template-columns: auto 1fr auto;
    grid-template-areas: 'left center right';
    font-size: 20px;
    padding: 15px 20px;
    border-top: 1px solid rgba(0, 0, 0, 0.06);
    &:hover .icon-close {
      opacity: 1;
    }

    .icon-close {
      opacity: 0;
      transition: all 1s linear;
    }

    .cnl__item-text {
      text-align: left;
    }

    .icon {
      width: 1.4rem;
      height: 1.4rem;
    }

    &.active {
      .icon-status {
        color: #67C23A;
      }
    }

    &.completed {
      .cnl__item-text {
        text-decoration: line-through;
        text-decoration-color: #909399;
      }

      .icon-status {
        color: #909399;
      }
    }
  }

</style>