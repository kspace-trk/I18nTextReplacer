const fs = require('fs');

const jsonFilePath = './json/example.json'
const vueFilePath = './targetFiles/example.vue'

// JSONファイルを読み込む
const jsonData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));

// Vueファイルを読み込む
let vueFileContent = fs.readFileSync(vueFilePath, 'utf8');

// JSONデータを使ってVueファイル内のテキストを置換
jsonData.forEach(translation => {
    vueFileContent = vueFileContent.replace(new RegExp(translation.日本語, 'g'), translation.英語);
});

// Vueファイルを更新
fs.writeFileSync(vueFilePath, vueFileContent);
console.log('Vue file updated with translations');
