<script setup>
import { ref } from 'vue'

// refを使用して変数を定義
const count = ref(2) // countという変数を定義し、初期値を2に設定する
const count2 = ref(4) // count2という変数を定義し、初期値を4に設定する
const count3 = ref(0) // count3という変数を定義し、初期値を0に設定する
const count4 = ref(0) // count4という変数を定義し、初期値を0に設定する
const count5 = ref(0) // count5という変数を定義し、初期値を0に設定する
const count6 = ref(0) // count6という変数を定義し、初期値を0に設定する

// カウントアップの関数
function countUp() {
  count4.value++ // count4の値を1増やす
}

// イベントオブジェクトを受け取り、count6の値を更新する関数
function countUp2(event, times) {
  count6.value = event.clientX * times // イベントのX座標と引数の値(times)を掛けた結果でcount6の値を更新する
}

// メッセージ、Vue.jsのURL、IDを定義
const message = ref('<h1>Hello</h1>') // messageという変数を定義し、初期値を'<h1>Hello</h1>'に設定する
const vueURL = ref('https://vuejs.org') // vueURLという変数を定義し、初期値を'https://vuejs.org'に設定する
const vueId = ref('vue-link') // vueIdという変数を定義し、初期値を'vue-link'に設定する
</script>

<template>
  <div>{{ count + count2 }}</div>
  <!-- countとcount2の値を足して表示する -->
  <div v-text="count"></div>
  <!-- countの値を表示する -->
  <div>{{ count > 3 ? 'Yes' : 'No' }}</div>
  <!-- countの値が3より大きい場合は'Yes'、そうでない場合は'No'を表示する -->
  <div v-html="message"></div>
  <!-- messageのHTMLを解釈して表示する -->
  <a href="https://vuejs.org">Vue.js</a>
  <!-- href属性にhttps://vuejs.orgを設定したリンクを表示する -->
  <a :id="vueId" :href="vueURL">Vue.js-1</a>
  <!-- vueIdをid属性、vueURLをhref属性に設定したリンクを表示する -->
  <a :id="undefind" :href="false">Vue.js-2</a>
  <!-- id属性をundefinedに、href属性をfalseに設定したリンクを表示する（実際にはリンクにならない） -->
  <a v-bind="{ id: vueId, href: vueURL }">Vue.js-3</a>
  <!-- vueIdをid属性、vueURLをhref属性に設定したリンクを表示する -->
  <button :disable="''"></button>
  <!-- 空文字列をdisable属性に設定したボタンを表示する（実際には無効化されない） -->
  <p>{{ count3 }}</p>
  <!-- count3の値を表示する -->
  <button @click="count3++">button</button>
  <!-- ボタンがクリックされるとcount3の値を1増やす -->
  <p>{{ count4 }}</p>
  <!-- count4の値を表示する -->
  <button @click="countUp">button2</button>
  <!-- ボタンがクリックされるとcountUp関数を実行する -->
  <p>{{ count5 }}</p>
  <!-- count5の値を表示する -->
  <button @click="count5 = $event.clientX">button3</button>
  <!-- ボタンがクリックされるとcount5の値をクリックしたX座標に設定する -->
  <p>{{ count6 }}</p>
  <!-- count6の値を表示する -->
  <button @click="countUp2($event, 5)">button4</button>
  <!-- ボタンがクリックされるとcountUp2関数を実行する -->
</template>
