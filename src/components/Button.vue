<template>
  <button @click="click()" class="button-primary">
      <slot></slot>
  </button>
</template>

<script>
export default {
    name: 'Button',
    methods: {
        click() {
            this.$emit('click')
        }
    }
}
</script>

<style lang="scss" scoped>

.button-primary {
    border: none;
    outline: none;
    line-height: 24px;
    font-size: 20px;
    font-weight: bold;
    background-color: $color-primary;
    padding: 8px;
    color: $color-bg;
    border-radius: 6px;
    cursor: pointer;
    margin: 64px auto;

    &:hover {
        opacity: .8;
    }
}

</style>