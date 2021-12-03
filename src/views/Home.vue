<template>
  <Observer>
    <div class="home">
      <header class="header">
        <div class="user-box">
          <img class="avatar" src="/src/assets/dog.jpg" alt="" />
          <div class="username">瓦姆乌</div>
        </div>
        <div class="tools-box">
          <n-input class="input-search" placeholder="搜索">
            <template #prefix>
              <Icon color="#7d7d7d" size="18"><SearchFilled /></Icon>
            </template>
          </n-input>
          <n-menu mode="horizontal" :options="menuOptions" />
        </div>
      </header>
    </div>
  </Observer>
</template>

<script lang="ts">
import {createVNode, defineComponent, VNodeTypes} from 'vue'
import {Observer} from 'mobx-vue-lite'
import {MenuOption} from 'naive-ui'
import useStore from '@/store'
import {Icon} from '@vicons/utils'
import {
  SearchFilled,
  HomeRound,
  CategoryRound,
  AccessTimeFilledRound,
  ArticleFilled,
  MessageRound,
} from '@vicons/material'

type RenderLabelProp = {
  label: string
  icon: VNodeTypes
}

// 渲染菜单
const renderLabel = ({label, icon}: RenderLabelProp) => {
  return () =>
    createVNode('div', {class: 'menu-box'}, [
      createVNode(Icon, {class: 'menu-icon', size: '18'}, [createVNode(icon)]),
      createVNode('div', null, label),
    ])
}

export default defineComponent({
  name: 'Home',
  components: {
    // Plugin
    Observer,
    // Icon
    Icon,
    SearchFilled,

    // Component
  },
  setup() {
    const {common} = useStore()
    const menuOptions: MenuOption[] = [
      {
        label: renderLabel({label: 'Home', icon: HomeRound}),
        key: 'home',
        children: [
          {
            label: '叙事者',
            key: 'narrator',
          },
        ],
      },
      {
        label: renderLabel({
          label: 'Category',
          icon: CategoryRound,
        }),
        children: [
          {
            label: '测试1',
          },
          {
            label: '测试1',
          },
        ],
      },
      {
        label: renderLabel({label: 'TimeLine', icon: AccessTimeFilledRound}),
      },
      {
        label: renderLabel({label: 'Docs', icon: ArticleFilled}),
      },
      {
        label: renderLabel({label: 'Contact', icon: MessageRound}),
        children: [
          {
            label: 'GitHub',
          },
        ],
      },
    ]

    return {
      common,
      menuOptions,
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
        white-space: nowrap;
      }
    }
    .tools-box {
      display: flex;
      align-items: center;
      .input-search {
        max-width: 200px;
        margin-right: 20px;
        .search-icon {
          width: 20px;
          height: 20px;
        }
      }
      .n-menu-item-content {
        padding: 0 2px;
      }
      .menu-box {
        display: flex;
        align-items: center;
        color: @font-white-color;
        cursor: pointer;
        margin: 0 8px;
        .menu-icon {
          margin-right: 5px;
        }
        &:hover {
          color: @theme-green-color;
        }
      }
    }
  }
}
</style>
