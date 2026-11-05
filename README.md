# 首爾 5天4夜 — 旅遊 APP

老婆的韓國首爾旅遊網頁 APP，手機版、單一靜態檔案，不用安裝。黑紫色庫洛米風格。

- 日期：2026/11/14（六）– 11/19（四）凌晨抵台，5天4夜；首爾停留 11/14–11/18
- 住宿：K'STAY Sinchon（新村），5F, 12 Yonsei-ro 4-gil, Seodaemun-gu, Seoul 03779；入住 2026/11/14 → 退房 2026/11/18，共 4 晚；Double Room，1 位成人；含免費 Wi-Fi、咖啡／茶、飲用水；最近地鐵 2號線 新村站約 300 公尺、步行約 4 分鐘；不可退款、No-Show 收 100%、入住須出示與住客姓名相符含地址及照片的證件
- 去程：酷航 Scoot Plus TR872，桃園 T1 11/14 18:15 → 仁川 T1 11/14 21:45，飛行 2小時30分
- 回程：酷航 Scoot Plus TR873，仁川 T1 11/18 23:00 → 桃園 T1 11/19 00:40，飛行 2小時40分
- eSIM：須知分頁有威訊 WaySim 韓國 5G 吃到飽 5 天的一般安裝步驟（出國當日綁定 1–7 步、抵達後 8–10 步切換），以及主卡 QR Code（內嵌在 `index.html`）；另有 1GB 備援 eSIM 僅限緊急使用；有問題找 LINE @waysim。

分頁：須知 / 地鐵 / 飲料 / 行程 / 購物。行程為實際 5 天：D1 11/14（六）、D2 11/15（日）、D3 11/16（一）、D4 11/17（二）、D5 11/18（三），目前各天只有「實際行程待 LIN 提供」的待補卡；飲料清單與購物清單亦待 LIN 提供。勾選存在手機瀏覽器（localStorage）。

航班、住宿、eSIM 以 LIN 提供的 PDF 為準。影片只是別人的範例，範例內容已全部從 APP 移除，不再保留。

## 重要：目前改用私人 repo — 因為 APP 內含 eSIM QR Code

須知分頁內嵌了主卡 eSIM QR Code（base64 寫在 `index.html` 裡，主卡一張而已，備援卡沒有放；沒有寫任何啟用碼、卡號或手動輸入用字串）。QR Code 一組只能綁定一台手機，公開出去會被別人掃走，所以這個 repo **先用私人的**，不要公開、不要開 GitHub Pages；等旅程結束或 LIN 決定後，再考慮移除 QR Code 改公開。

## 發布（等 LIN 決定，暫不執行）

1. 在 GitHub 上開一個**私人** repo，名稱 `seoul-trip-2026`（帳號 `weijielin0703-maker`），不要公開、不要開 Pages。
2. 把 `index.html` 和 `README.md` 推到 `main` 分支的根目錄（兩個檔案都是純文字，沒有二進位檔）。
3. 之後若要公開：先把 `index.html` 裡的 eSIM QR Code 拿掉，再改公開 repo、開 Pages，網址會是 https://weijielin0703-maker.github.io/seoul-trip-2026/

本機預覽：`python3 -m http.server` 後打開 `http://localhost:8000/`。
