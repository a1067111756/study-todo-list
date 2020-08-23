<template>
  <div class="note-list">
    <div class="note-list-item" v-for="(item, index) in value" :key="index">
      <!-- 消息状态图标 -->
      <svg class="icon" aria-hidden="true" :style="{ 'color': getStatusColor(item.status) }" @click="$emit('book-item-completed-click', item.id)">
        <use xlink:href="#icon-queding"></use>
      </svg>

      <!-- 消息 -->
      <p class="message">{{ item.message }}</p>

      <!-- 消息删除图标 -->
      <svg class="icon close" aria-hidden="true" style="color: #F56C6C" @click="$emit('book-item-close-click', item.id)">
        <use xlink:href="#icon-quxiao"></use>
      </svg>
    </div>
  </div>
</template>

<script>
const statusColorStrategy = {
  active: '#67C23A',
  completed: '#909399'
}

export default {
  props: {
    value: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    getStatusColor () {
      return status => statusColorStrategy[status]
    }
  }
}
</script>

<style lang="scss" scoped>
  .note-list {
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
  .note-list-item {
    display: grid;
    align-items: center;
    grid-column-gap: 20px;
    grid-template-columns: auto 1fr auto;
    grid-template-areas: 'left center right';
    font-size: 20px;
    padding: 15px 20px;
    border-top: 1px solid rgba(0, 0, 0, 0.06);
    &:hover .close {
      opacity: 1;
    }
    .message {
      text-align: left;
    }
    .close {
      opacity: 0;
      transition: all 1s linear;
    }
    .icon {
      width: 1.4rem;
      height: 1.4rem;
    }
  }
</style>
