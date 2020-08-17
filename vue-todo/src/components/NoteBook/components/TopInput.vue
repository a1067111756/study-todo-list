<template>
  <input
    v-model.trim="inputValue"
    type="text"
    placeholder="接下来要做什么呐？"
  />    
</template>

<script>
export default {
  data () {
    return {
      inputValue: undefined
    }
  }
}
</script>