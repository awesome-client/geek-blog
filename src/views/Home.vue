<template>
  <Observer>
    <div class="home">
      <header class="header">
        <div class="user-box">
          <img class="avatar" src="/src/assets/dog.jpg" alt="" />
          <div class="username">瓦姆乌{{ common.test }}</div>
          <n-button @click="onLogin">点击</n-button>
        </div>
        <n-input class="input-search" placeholder="搜索">
          <template #prefix>
            <img
              class="search-icon"
              src="@sicons/material/SearchRound.svg"
              alt=""
            />
          </template>
        </n-input>
        <!-- <n-button @click="">点击</n-button> -->
      </header>
    </div>
  </Observer>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {NButton, NInput} from 'naive-ui'
import {Observer} from 'mobx-vue-lite'
import useStore from '@/store'

export default defineComponent({
  name: 'Home',
  components: {
    // HelloWorld,
    Observer,
    NInput,
    NButton,
  },
  setup() {
    const {common} = useStore()
    console.log(common.uid)
    return {
      common,
    }
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
    justify-content: space-between;
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
    .input-search {
      max-width: 200px;
      .search-icon {
        width: 20px;
        height: 20px;
      }
    }
  }
}
</style>
