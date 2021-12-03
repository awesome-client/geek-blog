import {createApp} from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import {create, NButton, NInput, NPopselect, NMenu} from 'naive-ui'

const app = createApp(App)

const naive = create({
  components: [NInput, NButton, NPopselect, NMenu],
})

app.use(router).use(naive).mount('#app')
