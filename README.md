# Простое webpack приложение с поддержкой React.
Более подробная документация тут 
https://webpack.js.org/configuration/

## Создаю пустой каталог, исходники помещаю в папку src

## Делаю инициализацию npm
`npm init -y`
В результате появляется package.json файл

## Создаю пустой файл webpack.config.js
Следующие главы описывают настройки в файле webpack.config.js

## Настраиваю NODE_ENV с помощью пакета cross-env
Конфигурация будет разная для development И production, поэтому module.exports работает с функцией.
Будет использоваться переменнтипа сборки NODE_ENV.
process.env.NODE_ENV==="development" - определяет в каком режиме находится данная сборка
Для управления этой переменной пользуюсь пакетом cross-env
`npm i -D cross-env`
теперь сборка 
`npm run build` для продакшн
`npm run dev` для разработки

 - mode указывает будет ли применяться оптимизация при сборке

 - entry - точка для начала сборки бандла.

 - output - каталог для генерации бандла

Зпустим, увидим как bundle файлы появляются в dist каталоге.

## Для очистки dist добавляю clean-webpack-plugin в конфигурацию

## Прописываю темплейт для генерации html файла
  html-webpack-plugin генерит index.html файл куда подключает все наши бандлы
  Для того чтобы он за основу брал наш темплейт прописываем в нем опцию template  
  
## Настраиваю React
  1. Устанавливаю webpack-dev-server чтобы изменения применялись автоматически в браузере
  `npm i webpack-dev-server -D`
  Now add below lines inside the package.json file
  `"scripts": {
    "start": "webpack-dev-server --open --hot --mode development",
    "build": "webpack --mode production"
 }`
 — open: This will open the default browser and load the localhost environment running your app in the browser
 — hot: It will watch all your changes, and reload the browser automatically
 — mode: This can be development or production
 
 2. Устанавливаю Babel
 `npm i @babel/core babel-loader @babel/preset-env @babel/preset-react -D`
 
 Прописываю для него правило
 `module: {
     rules: [
       {
         test: /\.(js|jsx)$/,
         exclude: /node_modules/,
         use: {
           loader: "babel-loader"
         }
       } 
     ]
   }`
   
   Создаю файл .babelrc в корне
   `{"presets": ["@babel/preset-env", "@babel/preset-react"] }`

Минимальные настройки готовы для работы с React. В следующих версиях настрою css&other

## CSS
Загружаю необходимые лоадеры
`npm i css-loader style-loader mini-css-extract-plugin -D`
прописываю их для расширения css
            `{
                test: /\.css$/,
                use: [
                    'style-loader',
                     'css-loader'
                ]
            }`
