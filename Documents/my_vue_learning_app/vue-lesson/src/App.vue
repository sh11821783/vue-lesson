<!-- ref 関数を import して textInput 変数を定義します。ref 関数の引数には初期値を設定することができます。初期値にはブランクが設定されています。-->
<script setup>
import { ref } from 'vue'

// 入力欄に初期値として表示するための textInput 変数を ref 関数を使って定義します。
const textInput = ref('初期値はここに入れておく')

// チェックボックスのプロパティは真偽値を取るので、初期値を true とします。
const checkValue = ref(true)

// チェックがされている場合は "はい"、されていない場合は "いいえ" が表示されます。
const checkValue1 = ref('はい')

// ラグビー、サッカー、バスケットボールのチェックボックスの初期値は空の配列です。
const checkValue2 = ref([])

// 初期値として "野球" を持つ配列を定義します。この値はチェックボックスの選択に影響しません。
const checkValue2A = ref(['野球'])

// ラジオボタンの初期値は空です。
const radioValue3 = ref('')

// セレクトボックスの初期値は空です。
const selectValue = ref('')

// マルチセレクトボックスの初期値は空の配列です。
const selectValues = ref([])

// ファイルのデータを保持するための変数であり、ファイルの内容を監視し、変更があった場合に Vue コンポーネントの再レンダリングをトリガーします。
const fileData = ref('')

// ファイルのデータを処理するための handleFile メソッドを定義します。
const handleFile = (event) => {
  // event オブジェクトからファイルを取得します。
  const file = event.target.files[0]
  // fileData の値を選択されたファイルに設定します。
  fileData.value = file
}
</script>

<!-- Vue.js のディレクティブを使って双方向バインディングを実現します。 -->
<template>
  <div id="app">
    <!-- テキストボックスに入力した内容が textInput の値に反映されます。 -->
    <!-- @input イベントを使ってテキストボックスの入力内容が変更された際に textInput の値を更新します。 -->
    <input :value="textInput" @input="textInput = $event.target.value" />
    <!-- textInput の値を表示します。 -->
    <p>{{ textInput }}</p>
    <!-- textInput1 の値を表示します。 -->
    <p v-text="textInput1"></p>

    <!-- checkValue の値を表示します。 -->
    <input v-model="checkValue" type="checkbox" />
    <p>{{ checkValue }}</p>

    <!-- checkValue1 の値を表示します。 -->
    <input v-model="checkValue1" type="checkbox" true-value="はい" false-value="いいえ" />
    <p>{{ checkValue1 }}</p>

    <!-- checkValue2 の値を表示します。 -->
    <input v-model="checkValue2" type="checkbox" value="ラグビー" /> ラグビー
    <input v-model="checkValue2" type="checkbox" value="サッカー" /> サッカー
    <input v-model="checkValue2" type="checkbox" value="バスケットボール" /> バスケットボール
    <p>{{ checkValue2 }}</p>

    <!-- checkValue2A の値を表示します。 -->
    <input v-model="checkValue2A" type="checkbox" value="ラグビー" /> ラグビー
    <input v-model="checkValue2A" type="checkbox" value="サッカー" /> サッカー
    <input v-model="checkValue2A" type="checkbox" value="バスケットボール" /> バスケットボール
    <p>{{ checkValue2A }}</p>

    <!-- radioValue3 の値を表示します。 -->
    <input v-model="radioValue3" type="radio" value="ラグビー" /> ラグビー
    <input v-model="radioValue3" type="radio" value="サッカー" /> サッカー
    <input v-model="radioValue3" type="radio" value="バスケットボール" /> バスケットボール
    <p>{{ radioValue3 }}</p>

    <!-- selectValue の値を表示します。 -->
    <select v-model="selectValue">
      <!-- 興味のあるスポーツを選択するセレクトボックスです。 -->
      <option disabled value="">興味のあるスポーツを選択</option>
      <option>ラグビー</option>
      <option>サッカー</option>
      <option>バスケットボール</option>
    </select>
    <p>{{ selectValue }}</p>

    <!-- selectValues の値を表示します。 -->
    <select v-model="selectValues" multiple="">
      <!-- マルチセレクトボックスの選択肢です。 -->
      <option>ラグビー</option>
      <option>サッカー</option>
      <option>バスケットボール</option>
    </select>
    <p>{{ selectValues }}</p>

    <!-- ファイルをアップロードするための input 要素です。 -->
    <!-- ファイルが選択されると handleFile メソッドが実行され、選択されたファイルの情報が fileData にセットされます。 -->
    <div id="app">
      <input type="file" @change="handleFile" />
      <!-- 選択されたファイルの情報を表示します。 -->
      {{ fileData }}
    </div>
  </div>
</template>
