# Tomica 種子資料庫 (tomica_seed.json)

「記讀你的愛 / Collection Log」app 的迷你車圖鑑資料。App 啟動時會從這裡取得最新版本（規劃中），讓圖鑑不必等 App Store 更新。

**App 端讀取網址（永久契約，請勿改動 repo 名稱／路徑）：**

```
https://chiugastudio.github.io/Record-Your-Love/data/tomica_seed.json
```

## 格式

```json
{
  "updated": "YYYY-MM-DD",
  "items": [
    {
      "jan": "4904810174868",
      "series": "regular",
      "number": "No.1",
      "nameJa": "日産 スカイライン GT-R(BNR34) パトロールカー",
      "nameEn": "Nissan Skyline GT-R(BNR34) Patrol Car",
      "brand": "Nissan",
      "variant": "通常"
    }
  ]
}
```

- 必填：`jan`（13 碼字串）、`number`、`nameJa`、`brand`
- 選填：`nameEn`、`scale`、`series`（regular / premium…）、`release`（YYYY-MM）、`variant`
- 車名一律照抄官方原生資料（盒上／官網），**不自行翻譯、查不到就留空不要猜**
- 車號被新車頂替時**只加不刪**（舊車款保留，二手掃描才能命中）
- **每次更新資料，務必把頂層 `updated` 改成當天日期**

完整維護規則見 app 主 repo 的 `TOMICA_SEED_SOP.md`。

## 更新流程

1. 編輯 `tomica_seed.json`（新增車款／補欄位），更新 `updated`
2. 檢查 JSON 語法正確（壞檔會被 app 端驗證擋下，退回舊版資料）
3. `git push` → 使用者下次開啟 app 自動取得

---
本資料庫僅記錄公開事實（條碼號、車號、官方商品名稱），不含任何官方圖片或文案。
本專案為非官方收藏管理工具，與 Takara Tomy 及任何其他品牌或製造商皆無關聯。
