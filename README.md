# NodeJS Notes App
[![NodeJS Notes App 教學](http://img.youtube.com/vi/BDo1lgaZuII/0.jpg)](http://www.youtube.com/watch?v=BDo1lgaZuII)
這個專案是一個基於 Node.js 的筆記應用程式，允許用戶創建、查看、編輯和刪除筆記。此專案參考了 YouTube 影片（[參考影片](https://www.youtube.com/watch?v=BDo1lgaZuII)）並運用了以下技術：

## 相關技術

- **Node.js**：作為後端執行環境。
- **Express**：用於建構 Web 應用程式的框架。
- **MongoDB**：作為資料庫儲存筆記資料。
- **Mongoose**：MongoDB 的物件資料模型（ODM）庫，用於在 Node.js 環境下與 MongoDB 互動。
- **EJS**：作為模板引擎，用於產生 HTML 標記與 JavaScript 的混合內容。
- **Passport**：用於 OAuth 認證，本專案中實作了 Google 登入。
- **Bootstrap**：用於前端頁面的樣式和佈局。

## 主要功能

- **使用者認證**：透過 Google OAuth 實作使用者登入。目前這個專案已經部署至 [https://notion-clone-by-ed.cyclic.app/](https://notion-clone-by-ed.cyclic.app/)，但只有測試人員可以註冊。
- **建立筆記**：使用者可以建立新的筆記。
- **檢視筆記**：使用者可以檢視自己的所有筆記。
- **編輯筆記**：使用者可以編輯自己的筆記。
- **刪除筆記**：使用者可以刪除自己的筆記。
- **分頁顯示**：在 Dashboard 中分頁顯示使用者的筆記。
- **搜尋筆記**：使用者可以搜尋自己的筆記。

## 如何執行

1. 複製此專案到本機。
2. 安裝依賴：npm install
3. 設定 `.env` 檔案，包括 MongoDB 連線字串和 Google OAuth 資訊。
4. 執行專案：


## 參考資源

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [EJS](https://ejs.co/)
- [Passport](http://www.passportjs.org/)
- [Bootstrap](https://getbootstrap.com/)

感謝 YouTube 上的 Raddy  [參考影片](https://www.youtube.com/watch?v=BDo1lgaZuII)，手把手的 Node.js 教學
