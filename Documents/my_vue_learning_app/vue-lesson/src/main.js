//vue,jsを使用するには、jsの「名前付きインポート文」を使用して、vueから提供されるcreateAppをインポートする必要があります。
//これで、node_modulesの中にある「createApp」を使える様にしてくれる
import { createApp } from 'vue'
import App from './App.vue'
//コンポーネントを引数で渡す必要がある
const app = createApp(App)
app.mount('#app')