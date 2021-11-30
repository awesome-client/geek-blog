<template>
  <div class="home">
    <header class="header">
      <div class="user-box">
        <img class="avatar" src="/src/assets/dog.jpg" alt="" />
        <div class="username">瓦姆乌</div>
      </div>
    </header>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
// import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
// import {NButton} from 'naive-ui'

export default defineComponent({
  name: 'Home',
  components: {
    // HelloWorld,
    // NButton,
  },
})
</script>

<style lang="less">
@import '/src/global/global';
.home {
  .header {
    height: 57px;
    display: flex;
    align-items: center;
    padding: 0 24px;
    color: @font-white-color;
    box-shadow: @box-shadow;
    .user-box {
      display: flex;
      align-items: center;
      .avatar {
        border-radius: 50%;
        height: 36px;
        width: 36px;
      }
      .username {
        margin-left: 16px;
        font-size: 18px;
        font-weight: bold;
      }
    }
  }
}
</style>
