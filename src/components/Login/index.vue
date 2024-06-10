<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const handleSubmit = () => {
  router.push({name: 'dash'});
}
</script>

<template>
  <div :class="$style.container">
    <h2>Login</h2>

    <form>
      <input type="text" placeholder="Insira seu e-mail" />
      <input type="text" placeholder="Insira sua senha" />
      <button @click.prevent="handleSubmit">Login</button>
    </form>
  </div>
</template>

<style lang="scss" module>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    padding: 32px;
    width: calc(100% - 64px);

    form {
      display: flex;
      flex-direction: column;
      gap: 8px;
      width: 100%;

      input, button{
        padding: 10px 15px;
      }
      
      button {
        margin-top: 10px;
        border-radius: 4px;
        border: none;
        cursor: pointer;
      }
    }
  }
</style>