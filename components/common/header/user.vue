<template>
  <div >
    <template v-if="userId">
      <nuxt-link to="/login" class="btnColor">立刻登录</nuxt-link>
      <nuxt-link to="/register" class="register">注册</nuxt-link>
    </template>
    <template v-else>
        111
    </template>
  </div>
</template>

<script>
export default {
  name: "user",
  data() {
    return {
      userId:'1'
    }
  }
}
</script>

<style scoped>
.btnColor {
  color: var(--Orangecolors);
}
.register {

}
</style>
