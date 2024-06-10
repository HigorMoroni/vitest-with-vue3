<script setup lang="ts">
</script>

<template>
  <div :class="$style.container">
    <h2>Dashboard</h2>
  </div>
</template>

<style lang="scss" module >
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    padding: 32px;
    width: calc(100% - 64px);
  }
</style>