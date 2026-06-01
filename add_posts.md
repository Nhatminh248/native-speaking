# IELTS Essay Analysis — Reusable Prompt Template

## PROMPT

> Paste toàn bộ phần dưới đây vào Claude (không cần chỉnh sửa nếu đã điền đúng biến).

---

Bạn là một IELTS expert analyst và frontend developer. Nhiệm vụ của bạn là:

1. Tìm bài mẫu band 8-9 từ nguồn uy tín cho dạng **Problem-solution essay**
2. Phân tích sâu bài đó
3. Xuất một file HTML hoàn chỉnh, self-contained, theo đúng design system quy định bên dưới

Thực hiện theo đúng thứ tự các bước sau.

---

### Bước 1 — Tìm và lấy bài mẫu

1. `web_search`: `IELTS Liz problem solution essay model answer band 9`
2. Trong kết quả, ưu tiên lấy URL từ `ieltsliz.com`. Nếu không có, thử `ted-ielts.com` hoặc `ieltsadvantage.com`.
3. `web_fetch` URL đó và trích xuất toàn bộ:
   - Đề bài (prompt) chính xác
   - Toàn văn bài mẫu (model essay), đầy đủ từng câu, không tóm tắt
   - Bất kỳ tips hoặc nhận xét của tác giả đi kèm

Nếu không fetch được, thử URL backup hoặc search thêm.

---

### Bước 2 — Phân tích bài mẫu

Sau khi có bài đầy đủ, phân tích theo 6 chiều sau (ghi nhớ kết quả để dùng ở Bước 3):

**A. Task Response**
- Lập trường / approach của bài: hoàn toàn đứng một phía, partial, hay không cần opinion?
- Bài trả lời đủ yêu cầu đề bài không? Có phần nào bị thiếu không?
- Thesis statement nằm ở đâu, viết như thế nào?

**B. Cấu trúc tổng thể**
- Mỗi đoạn văn bắt đầu bằng gì? (topic sentence pattern)
- Cách phát triển ý trong từng đoạn: Topic → Explanation → Example → Result?
- Cách chuyển tiếp giữa các đoạn (discourse markers)?

**C. Cấu trúc câu đáng học** — tìm ít nhất 6 cấu trúc:
- Cấu trúc ngữ pháp phức tạp (relative clause, conditional, participle phrase, gerund subject, etc.)
- Cấu trúc academic đặc trưng của dạng bài này
- Bất kỳ cấu trúc nào thí sinh thường không dùng nhưng bài mẫu dùng hiệu quả

**D. Từ vựng band cao** — tìm ít nhất 12 mục:
- Collocations (verb + noun, adj + noun)
- Từ thay thế tránh lặp (paraphrase của các từ trong đề)
- Cụm từ idiomatic phù hợp academic

**E. Điểm mạnh theo 4 tiêu chí chấm điểm**
- Task Response: tại sao bài này đáp ứng tốt?
- Coherence & Cohesion: linking devices nào hiệu quả?
- Lexical Resource: vocab highlights?
- Grammatical Range & Accuracy: cấu trúc đa dạng thế nào?

**F. Lỗi phổ biến thí sinh mắc với dạng bài này**
- Ít nhất 7 lỗi cụ thể kèm cách sửa hoặc cách tránh

---

### Bước 3 — Viết file HTML

Tạo một file HTML hoàn chỉnh, self-contained với tên `[essay-type-slug]-essay-analysis.html`.

File phải theo **đúng** design system sau:

#### 3.1 — Head (copy nguyên xi)

```html
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;1,9..144,400&family=Plus+Jakarta+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
```

#### 3.2 — CSS base variables (copy nguyên xi, KHÔNG thay đổi)

```css
:root {
  --cream:      #f8f4ee;
  --paper:      #ffffff;
  --ink:        #1a1714;
  --ink-soft:   #4a4540;
  --ink-muted:  #8a837a;
  --rule:       #e2ddd8;
  --struct-bg:  #f1f5f9;
  --font-display: 'Fraunces', Georgia, serif;
  --font-body:    'Plus Jakarta Sans', system-ui, sans-serif;
  --font-mono:    'JetBrains Mono', monospace;
}
body { font-family: var(--font-body); background: var(--cream); color: var(--ink); line-height: 1.7; font-size: 16px; -webkit-font-smoothing: antialiased; }
.page-wrap { max-width: 780px; margin: 0 auto; padding: 2rem 1.25rem 4rem; }
```

#### 3.3 — Màu cho từng đoạn văn

Chọn bộ màu phù hợp với dạng bài. Mỗi đoạn cần 3 biến: `--X-bg`, `--X-border`, `--X-text`.
Intro luôn dùng neutral (stone/slate). Conclusion luôn dùng màu trầm (xanh dương hoặc slate).
Các body paragraph dùng màu phân biệt rõ ràng (ví dụ tím + cam, hoặc xanh + teal).

Ví dụ bộ màu cho Problem-Solution:
```css
--intro-bg: #fafafa; --intro-border: #44403c; --intro-text: #1c1917;
--b1-bg: #faf5ff; --b1-border: #7c3aed; --b1-text: #4c1d95;   /* causes/problems — tím */
--b2-bg: #fff7ed; --b2-border: #ea580c; --b2-text: #7c2d12;   /* solutions — cam */
--conc-bg: #eff6ff; --conc-border: #2563eb; --conc-text: #1e3a8a;
```

#### 3.4 — CSS components (copy nguyên xi)

```css
.article-meta { display: flex; align-items: center; gap: .5rem; flex-wrap: wrap; margin-bottom: 1.25rem; }
.badge { display: inline-block; font-size: .7rem; font-weight: 600; letter-spacing: .08em; text-transform: uppercase; padding: 3px 10px; border-radius: 100px; border: 1px solid currentColor; }
.article-title { font-family: var(--font-display); font-size: clamp(1.6rem,4vw,2.4rem); font-weight: 600; line-height: 1.2; color: var(--ink); margin-bottom: .4rem; }
.article-title em { font-style: italic; }
.article-subtitle { font-size: .95rem; color: var(--ink-muted); margin-bottom: 2rem; padding-bottom: 1.5rem; border-bottom: 1px solid var(--rule); }
.section-heading { font-family: var(--font-display); font-size: 1.2rem; font-weight: 600; color: var(--ink); margin: 2.5rem 0 1rem; display: flex; align-items: center; gap: .5rem; }
.section-heading::after { content: ''; flex: 1; height: 1px; background: var(--rule); margin-left: .5rem; }
.section-number { font-family: var(--font-mono); font-size: .75rem; font-weight: 500; color: var(--ink-muted); background: var(--struct-bg); padding: 2px 7px; border-radius: 4px; }
.prompt-box { background: var(--paper); border: 1px solid var(--rule); border-left: 4px solid var(--ink); border-radius: 0 8px 8px 0; padding: 1.1rem 1.25rem; margin-bottom: 1.75rem; }
.prompt-label { font-size: .68rem; font-weight: 600; letter-spacing: .1em; text-transform: uppercase; color: var(--ink-muted); margin-bottom: .4rem; }
.prompt-text { font-size: .9rem; color: var(--ink-soft); line-height: 1.7; }
.prompt-text strong { color: var(--ink); font-weight: 600; }
.legend { display: flex; flex-wrap: wrap; gap: .75rem 1.25rem; padding: .8rem 1rem; background: var(--paper); border: 1px solid var(--rule); border-radius: 8px; margin-bottom: 1.25rem; }
.legend-label { font-size: .7rem; font-weight: 600; color: var(--ink-muted); letter-spacing: .06em; text-transform: uppercase; align-self: center; }
.legend-item { display: flex; align-items: center; gap: .35rem; font-size: .78rem; color: var(--ink-soft); }
.legend-dot { width: 10px; height: 10px; border-radius: 2px; flex-shrink: 0; }
.para-block { border-radius: 0 10px 10px 0; padding: 1.1rem 1.25rem; margin-bottom: .9rem; border-left: 4px solid; }
.para-label { font-size: .68rem; font-weight: 600; letter-spacing: .09em; text-transform: uppercase; margin-bottom: .6rem; display: flex; align-items: center; gap: .5rem; flex-wrap: wrap; }
.para-tag { font-size: .65rem; padding: 1px 7px; border-radius: 100px; border: 1px solid currentColor; letter-spacing: .04em; font-weight: 600; text-transform: uppercase; }
.para-text { font-size: .92rem; line-height: 1.95; color: var(--ink); }
.hl-vocab { font-weight: 600; border-bottom: 2px solid; padding-bottom: 1px; }
.hl-tech  { font-style: italic; border-bottom: 2px dashed; padding-bottom: 1px; opacity: .9; }
.para-note { margin-top: .75rem; padding: .6rem .85rem; background: rgba(255,255,255,.7); border-radius: 6px; font-size: .78rem; color: var(--ink-soft); line-height: 1.6; }
.para-note strong { font-weight: 600; color: var(--ink); }
.word-count { display: inline-flex; font-family: var(--font-mono); font-size: .75rem; color: var(--ink-muted); background: var(--paper); border: 1px solid var(--rule); border-radius: 100px; padding: 3px 12px; margin-top: .4rem; }
.card { background: var(--paper); border: 1px solid var(--rule); border-radius: 12px; padding: 1.1rem 1.25rem; margin-bottom: 1rem; }
.card-title { font-size: .85rem; font-weight: 600; color: var(--ink); margin-bottom: .9rem; padding-bottom: .65rem; border-bottom: 1px solid var(--rule); }
.struct-list { display: flex; flex-direction: column; gap: .6rem; }
.struct-item { background: var(--struct-bg); border-radius: 8px; padding: .7rem .9rem; }
.struct-num { font-family: var(--font-mono); font-size: .65rem; font-weight: 500; color: var(--ink-muted); letter-spacing: .06em; text-transform: uppercase; margin-bottom: .3rem; }
.struct-label { font-size: .8rem; font-weight: 600; color: var(--ink); margin-bottom: .3rem; }
.struct-example { font-family: var(--font-mono); font-size: .78rem; color: var(--ink-soft); line-height: 1.65; margin-bottom: .3rem; }
.struct-example em { font-style: normal; font-weight: 600; }
.struct-note { font-size: .75rem; color: var(--ink-muted); line-height: 1.5; }
.vocab-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: .6rem; }
.vocab-chip { background: var(--cream); border: 1px solid var(--rule); border-radius: 8px; padding: .6rem .85rem; }
.vocab-en { font-size: .82rem; font-weight: 600; color: var(--ink); font-family: var(--font-mono); }
.vocab-vn { font-size: .75rem; color: var(--ink-muted); margin-top: 2px; }
.paraphrase-box { background: var(--cream); border: 1px solid var(--rule); border-radius: 8px; padding: .8rem 1rem; margin-top: .75rem; font-size: .8rem; color: var(--ink-soft); line-height: 1.8; }
.paraphrase-box strong { font-weight: 600; color: var(--ink); font-family: var(--font-mono); font-size: .78rem; }
.scorecard { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: .7rem; margin-top: .75rem; }
.score-cell { background: var(--cream); border: 1px solid var(--rule); border-radius: 8px; padding: .7rem .9rem; }
.score-criterion { font-size: .7rem; font-weight: 600; color: var(--ink-muted); letter-spacing: .06em; text-transform: uppercase; margin-bottom: .25rem; }
.score-note { font-size: .78rem; color: var(--ink-soft); line-height: 1.5; }
.tips-list { display: flex; flex-direction: column; }
.tip-item { display: flex; gap: .75rem; padding: .7rem 0; border-bottom: 1px solid var(--rule); }
.tip-item:last-child { border-bottom: none; }
.tip-num { font-family: var(--font-mono); font-size: .78rem; font-weight: 600; flex-shrink: 0; padding-top: 2px; min-width: 1.4rem; }
.tip-text { font-size: .85rem; color: var(--ink); line-height: 1.7; }
.tip-text strong { font-weight: 600; }
.tip-text em { font-family: var(--font-mono); font-style: normal; font-size: .8rem; color: var(--ink-soft); }
.watchout { border-radius: 8px; padding: .8rem 1rem; font-size: .82rem; line-height: 1.65; margin-top: .75rem; border: 1px solid; }
.watchout strong { font-weight: 600; }
.article-footer { margin-top: 3rem; padding-top: 1.25rem; border-top: 1px solid var(--rule); font-size: .78rem; color: var(--ink-muted); line-height: 1.6; }
@media (max-width: 600px) { .vocab-grid { grid-template-columns: 1fr 1fr; } .scorecard { grid-template-columns: 1fr 1fr; } }
@media print { body { background: white; font-size: 13px; } .page-wrap { max-width: 100%; padding: 0; } .card, .para-block { break-inside: avoid; } }
```

#### 3.5 — Cấu trúc section bắt buộc

File phải có đúng các section theo thứ tự sau. Số section có thể khác nhau tùy dạng bài:

```
Section 00 — Phân biệt nhanh (nếu dạng bài này hay bị nhầm với dạng khác)
             VÍ DỤ: Problem vs Cause & Solution, hoặc Two-Part vs Opinion
             → Dùng bảng HTML hoặc 2-column grid để so sánh

Section 01 — Đề bài (prompt-box)

Section 02 — Bài mẫu có chú thích (annotated essay)
             → Mỗi đoạn là một .para-block với màu riêng
             → Dùng .hl-vocab (underline solid) cho từ vựng band cao
             → Dùng .hl-tech (underline dashed + italic) cho kỹ thuật viết
             → Mỗi .para-block kết thúc bằng .para-note giải thích kỹ thuật của đoạn đó

Section 03 — Nội dung đặc trưng của dạng bài này
             VÍ DỤ: với Problem-Solution → cách liên kết cause với solution
                    với Two-Part → cách chia đều độ dài hai body, không để lệch
             → Tự quyết định nội dung phù hợp nhất

Section 04 — Cấu trúc câu đáng học (6 struct-item, mỗi item có: label + code example + note)

Section 05 — Từ vựng band cao (vocab-grid + paraphrase-box)

Section 06 — Đánh giá theo 4 tiêu chí (scorecard 4 ô)

Section 07 — Gợi ý để viết được như vậy (tips-list 7 tip + watchout box đỏ/cam)
```

#### 3.6 — Quy tắc về highlight trong essay text

Trong `.para-text`:
- Từ vựng quan trọng: `<span class="hl-vocab">word</span>` — underline solid, màu của đoạn đó
- Kỹ thuật viết (cấu trúc câu): `<span class="hl-tech">phrase</span>` — underline dashed, italic
- Có thể lồng hl-vocab bên trong hl-tech nếu một đoạn vừa là kỹ thuật vừa là vocab tốt
- KHÔNG highlight quá 30% tổng văn bản — chỉ highlight những điểm thực sự đáng chú ý

Mỗi `.para-block` phải có `.para-note` ngay bên dưới giải thích ngắn gọn kỹ thuật của đoạn đó.

#### 3.7 — Về màu sắc .hl-vocab và .hl-tech

Mỗi đoạn có class riêng (`.intro`, `.b1`, `.b2`, `.conc`). CSS phải định nghĩa màu cho từng class:

```css
.intro .hl-vocab { border-color: var(--intro-border); color: var(--intro-text); }
.b1    .hl-vocab { border-color: var(--b1-border);    color: var(--b1-text);    }
.b2    .hl-vocab { border-color: var(--b2-border);    color: var(--b2-text);    }
.conc  .hl-vocab { border-color: var(--conc-border);  color: var(--conc-text);  }
.intro .hl-tech  { border-color: var(--intro-border); }
.b1    .hl-tech  { border-color: var(--b1-border);    }
/* v.v. */
```

#### 3.8 — Watchout box (phần cảnh báo lỗi)

Watchout box dùng màu đỏ hoặc cam để nổi bật:
```html
<div class="watchout" style="background:#fff1f2; border-color:#e11d48; color:#881337;">
  <strong>Lỗi phổ biến nhất cần tránh:</strong> ...
</div>
```

---

### Bước 4 — Kiểm tra trước khi output

Trước khi xuất file, tự kiểm tra:

- [ ] Đề bài là nguyên văn lấy từ nguồn, không bịa
- [ ] Bài mẫu là nguyên văn đầy đủ, không tóm tắt hay paraphrase
- [ ] Có đủ 8 section (00 đến 07)
- [ ] Mỗi para-block có para-note riêng
- [ ] Có ít nhất 6 struct-item với code example thực tế từ bài
- [ ] Có ít nhất 12 vocab-chip
- [ ] Có paraphrase-box
- [ ] Có scorecard 4 ô
- [ ] Có tips-list với 7 tip
- [ ] Có watchout box
- [ ] File là HTML hoàn chỉnh có DOCTYPE và closing tags
- [ ] Responsive: có @media (max-width: 600px) và @media print

---

### Bước 5 — Output

Xuất file HTML hoàn chỉnh. Đặt tên file theo pattern:
`[essay-type-slug]-essay-analysis.html`

Ví dụ:
- `problem-solution-essay-analysis.html`
- `two-part-question-essay-analysis.html`

Không cần giải thích gì thêm sau khi xuất file. Chỉ output file.

---

## Lưu ý khi dùng prompt này trong Astro

Sau khi có file HTML:

```bash
# Đặt vào thư mục public (serve as-is)
cp problem-solution-essay-analysis.html public/writing/

# Hoặc đặt vào pages (Astro sẽ compile)
cp problem-solution-essay-analysis.html src/pages/writing/
```

Nếu dùng Astro content collections với MDX, import như component:
```astro
---
import Analysis from '../../components/ProblemSolutionAnalysis.astro'
---
<Analysis />
```

Nếu chỉ cần serve static, cách đơn giản nhất là đặt thẳng vào `public/`.
