<template>
  <div>
    <template v-if="user">
      <nuxt-link to="/login">立刻登录</nuxt-link>
    </template>
    <template v-else>

    </template>
  </div>
</template>

<script>
export default {
    name: "user"
}
</script>

<style scoped>

</style>
