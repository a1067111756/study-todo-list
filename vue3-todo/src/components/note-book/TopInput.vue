<template>
  <input
    v-model.trim="inputValue"
    type="text"
    placeholder="接下来要做什么呐？"
    @keyup.enter="onEnter"
  />
</template>

<script>
import { ref, toRefs } from 'vue'
import { ENUM_NOTE_BOOK_STATUS }  from './enum.js'
export default {
  props: {
    value: {
      type: Array,
      required: true
    }
  },
  setup (props, context) {
    // 输入框绑定
    const inputValue = ref(undefined)

    // 事件 - 回车输入
    const onEnter = () => {
      if (!inputValue.value || inputValue.value === '') {
        return
      }
      props.value.unshift({ text: inputValue.value, status: ENUM_NOTE_BOOK_STATUS.ACTIVE })
      context.emit('input-ok', inputValue.value)
      inputValue.value = undefined
    }

    return {
      onEnter,
      inputValue
    }
  }
}
</script>

<style lang="scss" scoped>
  input {
    width: 100%;
    height: 60px;
    outline: none;
    border: none;
    font-size: 24px;
    font-weight: 300;
    padding-left: 60px;
  }
</style>