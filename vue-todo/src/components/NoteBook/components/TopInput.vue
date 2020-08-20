<template>
  <input
    v-model.trim="inputValue"
    type="text"
    placeholder="接下来要做什么呐？"
    @keyup.enter="onEnter"
  />
</template>

<script>
export default {
  data () {
    return {
      inputValue: undefined
    }
  },
  methods: {
    onEnter () {
      if (!this.inputValue || this.inputValue === '') {
        return
      }
      this.$emit('book-input', this.inputValue)
      this.inputValue = undefined
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
