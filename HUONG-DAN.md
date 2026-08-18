# 🦉 Owly English — Tài liệu dự án (bản nâng cấp 08/2026)

Ứng dụng học tiếng Anh online cho bé 6–12 tuổi theo chuẩn **Cambridge YLE (Pre A1 Starters → A1 Movers → A2 Flyers)** tương đương khung **CEFR** và **Khung năng lực ngoại ngữ 6 bậc của Việt Nam**.

---

## 1. Kiến trúc & công nghệ

| Thành phần | Công nghệ |
| --- | --- |
| Framework | TanStack Start (React 19, SSR) + Vite |
| Ngôn ngữ | TypeScript |
| UI | Tailwind CSS 4 + shadcn/ui (Radix) |
| Routing | TanStack Router (file-based, tự sinh `routeTree.gen.ts`) |
| Giọng nói | Web Speech API (SpeechSynthesis + SpeechRecognition) — chạy hoàn toàn trên trình duyệt, không cần API key |
| Video | YouTube embed (youtube-nocookie) |

### Cây thư mục chính

```
src/
├── data/curriculum.ts          ← TOÀN BỘ nội dung: 12 bài học, lộ trình, giáo trình,
│                                 link tải Cambridge, kênh YouTube (chỉnh nội dung ở 1 file duy nhất)
├── lib/speech.ts               ← Engine giọng nói: giọng Nữ/Nam bản địa, tốc độ Chậm/Vừa,
│                                 nhận diện giọng nói chấm phát âm (SpeakPractice)
├── components/
│   ├── SpeakButton.tsx         ← Nút loa dùng chung toàn app
│   ├── VoiceSettings.tsx       ← Bộ chọn giọng đọc (Cô giáo/Thầy giáo + Chậm/Vừa)
│   ├── VocabCard.tsx           ← Thẻ từ vựng lật nghĩa + đọc IPA
│   ├── ReadingBlock.tsx        ← Đoạn văn tô màu theo Chủ ngữ–Động từ–Tân ngữ–Trạng ngữ
│   └── practice/
│       ├── ListenPractice.tsx  ← Nghe 2 lần + nghe chậm, chọn đáp án
│       ├── SpeakPractice.tsx   ← Bé nói vào mic, app chấm % khớp
│       └── WritePractice.tsx   ← Chính tả theo tranh, kiểm tra từng chữ
└── routes/
    ├── index.tsx               ← Trang chủ
    ├── lo-trinh.tsx            ← Lộ trình 24–30 tháng + lịch học tuần
    ├── bai-hoc.index.tsx       ← Thư viện bài học theo cấp
    ├── bai-hoc.$slug.tsx       ← Trang bài học chi tiết (7 phần)
    ├── giao-trinh.tsx          ← MỚI: giáo trình chuẩn quốc tế + link tải Cambridge
    └── ba-me.tsx               ← Góc phụ huynh
```

## 2. Cấu trúc 1 bài học (khung 7 phần thống nhất)

1. **Từ vựng có hình** — thẻ emoji + IPA + nghĩa tiếng Việt (lật thẻ), nút đọc từng từ
2. **Video sinh động** — 1 video chính nhúng trong app + link video mở rộng (kênh chính thống)
3. **Ngữ pháp** — công thức khung màu + ghi chú lỗi hay sai + ví dụ Anh–Việt có nút nghe
4. **Đoạn văn rõ cấu trúc** — tô màu 4 thành phần câu, nghe từng câu / cả đoạn, xem/ẩn bản dịch
5. **🎧 Thực hành nghe** — nghe lần 1 / nghe chậm, chọn đáp án, chấm đúng–sai ngay
6. **🗣️ Thực hành nói** — nghe mẫu → bé nói vào micro → chấm % khớp (Chrome/Edge)
7. **✍️ Thực hành viết** — chính tả theo tranh + gợi ý, cảnh báo "sai chính tả = 0 điểm" đúng quy chế Cambridge

## 3. Giọng đọc (phát âm chậm, giọng ngưới lớn bản địa)

- Bộ chọn toàn cục ở **thanh menu** và **đầu mỗi bài học**:
  - 👩‍🏫 **Cô giáo** — giọng nữ bản địa · 👨‍🏫 **Thầy giáo** — giọng nam bản địa
  - 🐢 **Chậm** (0.7×, mặc định cho bé) · 🚶 **Vừa** (0.9×)
  - Nút **"Nghe chậm"** trong bài tập luôn đọc 0.6×
- Lựa chọn lưu trong `localStorage` — đồng bộ mọi nút loa, giữ nguyên khi tắt máy.
- Engine tự quét voice tiếng Anh của hệ điều hành, ưu tiên: **giọng Natural/Neural → Google → en-GB → en-US**, và tự nhận diện nam/nữ theo tên voice.

> ⚠️ **Lưu ý kỹ thuật quan trọng:** Web Speech API dùng voice có sẵn của thiết bị nên chất lượng phụ thuộc trình duyệt:
> - **Tốt nhất: Microsoft Edge** — có sẵn giọng *Natural* (Microsoft Sonia/Ryan/Libby/Thomas…) rất giống ngưới thật, đủ cả nam lẫn nữ.
> - **Chrome desktop** — giọng "Google UK English Female/Male", "Google US English" ổn.
> - **Safari (iPhone/Mac)** — giọng Samantha (nữ), Daniel (nam), có thể cài thêm voice trong Cài đặt → Trợ năng → Nội dung đọc.
> - Nếu muốn giọng AI studio (đúng độ tuổi 30–35, ổn định mọi thiết bị), nâng cấp sau bằng cách thu âm sẵn file MP3 (ElevenLabs/Azure TTS) và gắn vào `SpeakButton` — kiến trúc đã sẵn sàng để thay.

## 4. Giáo trình chuẩn quốc tế đi kèm (trang /giao-trinh)

### Tải miễn phí từ Cambridge (link trực tiếp, đã kiểm tra 08/2026)

| Tài liệu | Link |
| --- | --- |
| Wordlist 3 cấp (2018) | https://www.cambridgeenglish.org/Images/506166-starters-movers-flyers-word-list-2018.pdf |
| Wordlist bản mới nhất | https://www.cambridgeenglish.org/Images/506166-starters-movers-flyers-word-list-2025.pdf |
| Starters Picture Book | https://www.cambridgeenglish.org/Images/396158-yle-starters-word-list-picture-book-2018.pdf |
| Movers Picture Book | https://www.cambridgeenglish.org/images/396159-yle-movers-word-list-picture-book-2018.pdf |
| Flyers Picture Book | https://www.cambridgeenglish.org/images/396160-yle-flyers-word-list-picture-book-2018.pdf |
| Đề mẫu YLE Vol.1 (kèm audio) | https://www.cambridgeenglish.org/Images/young-learners-sample-papers-2018-vol1.pdf |
| Đề mẫu YLE Vol.2 (kèm audio) | https://www.cambridgeenglish.org/Images/423014-cambridge-english-young-learners-sample-papers-2018-volume-2.pdf |
| Handbook for Teachers 2024 | https://www.cambridgeenglish.org/Images/357180-starters-movers-and-flyers-handbook-for-teachers-2024.pdf |
| Audio & luyện thi Starters | https://www.cambridgeenglish.org/exams-and-tests/starters/preparation/ |
| Audio & luyện thi Movers | https://www.cambridgeenglish.org/exams-and-tests/movers/preparation/ |
| Audio & luyện thi Flyers | https://www.cambridgeenglish.org/exams-and-tests/flyers/preparation/ |

### Giáo trình chính (chọn 1 bộ)

| Bộ | NXB | Vai trò |
| --- | --- | --- |
| **Family and Friends** ⭐ | Oxford | Giáo trình chính khuyên dùng — bài học app bám theo bộ này |
| Kid's Box New Generation | Cambridge | Bám khung YLE nhất |
| Everybody Up | Oxford | Mạnh giao tiếp |
| Oxford Phonics World | Oxford | Giai đoạn 0 — phonics |
| Grammar Friends | Oxford | Bổ trợ ngữ pháp từ Movers |

### Sách luyện thi: Fun for Starters/Movers/Flyers (4th ed.) → Storyfun → Authentic Practice Tests 1–4 (Cambridge).

## 5. Chạy dự án

```bash
npm install        # hoặc: bun install
npm run dev        # dev server
npm run build      # build production
npm run preview    # xem bản build
```

## 6. Thêm bài học mới

Mở `src/data/curriculum.ts`, copy 1 object trong `lessons[]` và sửa: `slug` (duy nhất), `level`, `order`, nội dung 7 phần. Kiểm tra video YouTube còn sống trước khi thêm:

```bash
curl -s "https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=<ID>&format=json" | head -c 200
```

Trang danh sách, route và "bài tiếp theo" tự cập nhật — không cần sửa file nào khác.
