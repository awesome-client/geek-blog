<template>
  <n-config-provider :theme="theme">
    <div class="main">
      <router-view />
    </div>
  </n-config-provider>

  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
</template>

<script lang="ts">
import {defineComponent} from '@vue/runtime-core'
import {NConfigProvider, darkTheme} from 'naive-ui'

export default defineComponent({
  components: {
    NConfigProvider,
  },
  setup() {
    const darkThemeOverrides = {
      common: {
        primaryColor: '#000000',
      },
    }

    const theme = darkTheme
    return {
      theme,
      darkThemeOverrides,
    }
  },
})
</script>

<style lang="less">
@import '/src/global/global.less';

.main {
  min-height: 100vh;
  background-color: @theme-dark-color;
}

body {
  margin: 0 !important;
}
</style>
