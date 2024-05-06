<!-- .vueファイルは単一コンポーネントと呼ばれ、以下のようなHTMLタグ（JavaScript、HTML、CSS）で構成されています。 -->

<!-- <script setup>タグ: コンポーネントのセットアップを定義し、HTMLの属性のようなものを記述する必要があります。 -->

<!-- template以外なくても表示される -->

<!-- <script setup>で定義されたデータが更新された場合、画面も自動的に更新されます。 -->
<script setup>
// Vue.jsからrefをインポート
import { ref, reactive } from 'vue'

// 変数titleを定義し、初期値を'Vue.js Course'とする
const title = ref('Vue.js Course')

// 変数priceをrefでラップし、初期値を9.99とする
// ラップ：オブジェクトを参照型に変換することで、Vueがリアクティブな変更を検出できるようにする
// リアクティブ：変更があった際にそれを自動的に検知し、関連するビューを更新する仕組み
let price = ref(9.99)

// increment関数の定義：priceの値を1増やす
function increment() {
  price.value += 1
  // instructorのageをインクリメントする
  // インクリメントとは、数値を1つ増やす操作を指します。つまり、何かの値を「1つ増やす」という意味です。例えば、変数の値を1ずつ増やす場合、その変数をインクリメントすると言います。
  instructor.age += 1
  // instructorのsnsオブジェクト内のtwitterプロパティを変更する
  // 「プロパティ」という言葉は、オブジェクト指向プログラミングにおいて、オブジェクトに属するデータや機能を指します。
  // オブジェクトは、データ（プロパティ）とそのデータに関連する操作（メソッド）をまとめたもの
  // 例えば、車のオブジェクトがある場合、その車の色やサイズ、重量などがプロパティとなります。
  // プロパティは名前（キー）と値のペアで構成され、名前を使って値にアクセスしたり、値を変更したりすることができます。
  instructor.sns.twitter = 'hello'
  instructor.email = 'taro@test.com'
}

// infoというオブジェクトをrefでラップし、初期値をstudents: 1000, rating: 4とする
const info = ref({
  // 学生の数
  students: 1000,
  // 評価
  rating: 4
})
// instructorオブジェクトをreactiveでラップし、リアクティブなオブジェクトにする
const instructor = reactive({
  // インストラクターの名前
  name: 'sunao',
  // インストラクターの年齢
  age: 37,
  // インストラクターのSNS情報
  sns: {
    // Twitterアカウント
    twitter: '@_test_',
    // YouTubeアカウント
    youtube: '@test'
  },
  // instructorオブジェクトのemailプロパティをリアクティブな参照型で定義し、初期値を'test_sunao@test.com'とする
  email: ref('test_sunao@test.com')
})
// courseInfoオブジェクトを定義し、リアクティブな参照型でsectionsとlanguageプロパティを持たせる
const corseInfo = {
  // コースのセクション数
  sections: ref(10),
  // コースの言語
  lauguage: ref('Japanese')
}
// コースのセクション数をコンソールに出力する
console.log(corseInfo.sections.value)
// infoのstudentsプロパティの値をコンソールに出力する
console.log(info.value.students)
// instructorオブジェクトのnameをコンソールに出力する
console.log(instructor.name)
// instructorオブジェクトのageをコンソールに出力する
console.log(instructor.age)
// instructorオブジェクトのemailプロパティをコンソールに出力する
console.log(instructor.email)
</script>

<template>
  <!-- 変数titleを表示する -->
  <h1>Title: {{ title }}</h1>
  <!-- priceの値を表示し、1を引いた値を表示する -->
  <h2>Price: ${{ price - 1 }}</h2>
  <!-- ボタンがクリックされたときにincrement関数を実行する -->
  <button @click="increment">button</button>
  <!-- infoのstudentsプロパティの値を表示する -->
  <h2>Students: {{ info.students }}</h2>
  <!-- instructorのnameを表示する -->
  <h2>Instructor: {{ instructor.name }}</h2>
  <!-- instructorのageを表示する -->
  <h2>Instructor-age: {{ instructor.age }}</h2>
  <!-- instructorのsnsオブジェクト内のtwitterプロパティを表示する -->
  <h2>Instructor-sns-twitter: {{ instructor.sns.twitter }}</h2>
  <!-- instructorのemailプロパティを表示する -->
  <h2>Instructor-email: {{ instructor.email }}</h2>
  <!-- courseInfoオブジェクトのsectionsプロパティの値を表示する -->
  <h2>Course-info-Sections: {{ corseInfo.sections.value }}</h2>
</template>
