# Record Your Love — 記讀你的愛

[English](#english) | [繁體中文](#繁體中文)

---

## English

**Record Your Love** is an iOS app for scanning, saving and managing barcodes. Whether it's your favourite collectibles or personal items, the app lets you build a rich collection with photos, descriptions, categories, prices and more.

### Features

- **Barcode Scanning** – Scan EAN8, EAN13, Code128, Code39 and QR Codes with the camera
- **List & Grid View** – Browse your collection with multi-dimensional filtering (category, favorites, price range, date range)
- **Advanced Search** – AND/OR logic search, quick category chips and sorting options
- **Rich Metadata** – Edit photo, description, category, price, purchase location and notes
- **Screenshot Sharing** – Share stylised barcode detail screenshots with customisable templates
- **QR Code Generation** – Create a QR code containing your entire collection and share in one tap
- **Wishlist** – Track items you want to purchase
- **Achievement System** – Level up, maintain scan streaks and unlock achievements
- **Collection Analytics** – View trends, count and value charts
- **Reminders** – Set barcode-related notifications
- **Home Screen Widget** – Quick access without opening the app
- **Manual Entry** – Add barcodes manually when scanning isn't possible
- **Multilingual** – Traditional Chinese, English, Japanese and Korean
- **Dark / Light / System theme**

### Download

[![Download on the App Store](https://img.shields.io/badge/App_Store-Download-black?logo=apple)](https://apps.apple.com/app/id6740759782)

### Website Structure

| File | Description |
|---|---|
| `index.html` | Landing page — features, screenshots, FAQ and download link |
| `supports/support.html` | Contact info, getting-started guide and FAQ |
| `PrivacyPolicies/PrivacyPolicies.html` | Full privacy policy |

### Theming

All pages use CSS custom properties for colours. To change the theme, edit the three lines inside `:root` at the top of each page's `<style>` block:

```css
:root {
    --accent:  223 160 93;   /* main colour  #DFA05D */
    --accent2: 172 80  69;   /* gradient end #AC5045 */
    --bg:      #000;         /* page background      */
}
```

### Images

```
images/
├── logo/          – App logo
├── qrcode/        – App Store QR code
└── web/           – 6 iPhone screenshots (1.png – 6.png)
```

### Developer

**Circle Studio** — Designed with care in Taiwan 🇹🇼

---

## 繁體中文

**記讀你的愛** 是一款 iOS 條碼管理 App，掃描、儲存並管理你的收藏。無論是心愛的公仔、玩具或任何個人藏品，都能透過照片、描述、分類、價格等豐富資訊完整記錄。

### 功能特色

- **條碼掃描** – 支援 EAN8、EAN13、Code128、Code39 及 QR Code
- **清單 & 網格瀏覽** – 多維度篩選：分類、最愛、價格範圍、日期範圍
- **進階搜尋** – AND/OR 邏輯、快速分類標籤、排序選項
- **豐富資訊編輯** – 照片、描述、分類、價格、購買地點及備註
- **截圖分享** – 以精美模板分享條碼資訊截圖
- **QR Code 產生** – 一鍵打包整個收藏並分享
- **願望清單** – 記錄想追蹤或購買的物品
- **成就系統** – 等級提升、連續掃描天數、解鎖成就
- **收藏統計分析** – 趨勢、數量、價值圖表
- **提醒通知** – 設定條碼相關提醒
- **主畫面小工具** – 不開 App 也能快速瀏覽
- **手動輸入** – 無法掃描時手動新增
- **多語言** – 繁體中文、英文、日文、韓文
- **深色 / 淺色 / 跟隨系統主題**

### 下載

[![從 App Store 下載](https://img.shields.io/badge/App_Store-下載-black?logo=apple)](https://apps.apple.com/app/id6740759782)

### 網站結構

| 檔案 | 說明 |
|---|---|
| `index.html` | 首頁 — 功能介紹、截圖展示、FAQ、下載連結 |
| `supports/support.html` | 聯絡資訊、使用指引、常見問題 |
| `PrivacyPolicies/PrivacyPolicies.html` | 完整隱私權政策 |

### 主題換色

所有頁面以 CSS 自訂屬性管理顏色，換主題只需修改各頁面 `<style>` 頂端的 `:root`：

```css
:root {
    --accent:  223 160 93;   /* 主色  #DFA05D */
    --accent2: 172 80  69;   /* 副色  #AC5045 */
    --bg:      #000;         /* 背景色 */
}
```

### 圖片資源

```
images/
├── logo/          – App 圖示
├── qrcode/        – App Store QR Code
└── web/           – 6 張 iPhone 截圖（1.png – 6.png）
```

### 開發者

**Circle Studio** — 用心設計，來自台灣 🇹🇼
