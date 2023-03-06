# CTBC web-ui-html #

CTBC web-ui-html 行銀靜態頁面開發




## Requirement
- node.js v10.24.1
- gulp CLI version: 2.3.0 (https://gulpjs.com/)
- npm v6.14.12
- [Sass](https://sass-lang.com/documentation/)


## Install

只有要跑 kid 親子專案時才需要跑 npm、gulp，sass、assets 為親子專案資料夾

1. 下載到開發環境
2. 打開 terminal
3. ```cd project_folder ```
4. 執行 ```npm install```
5. 安裝結束後，就可以開始切版了


``` bash
# install dependencies
$ npm i

# 產出 HTML / JS / CSS 到 dist folder
$ gulp

# 產出 HTML / JS / CSS 到 dist folder，並呼叫 browserSync，可在開發時做即時監控
$ gulp watch


# production
$ gulp production

```


## Structure
**html**


**css**
主要開發在 web-ui.css

css/index.css, css/ctbc_css, css/inc/bundle_base.css 要與行銀 web-ui 同步

**js**
無

**assets**
圖檔盡量都轉 base64




## Plugin



## Notice

