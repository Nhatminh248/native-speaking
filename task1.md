
# IELTS Writing Task 1 Academic — Reusable Prompt Template

## PROMPT

> Điền `[CHART_TYPE]` và `[SEARCH_TERMS]` từ bảng trên rồi paste toàn bộ phần này vào Claude.

---

Bạn là một IELTS expert analyst và frontend developer. Nhiệm vụ của bạn là:

1. Tìm bài mẫu band 8-9 từ nguồn uy tín cho dạng **[CHART_TYPE]** trong IELTS Writing Task 1 Academic
2. Phân tích sâu bài đó
3. Xuất một file HTML hoàn chỉnh, self-contained theo đúng design system quy định bên dưới

Thực hiện theo đúng thứ tự các bước sau.

---

### Bước 1 — Tìm, fetch, và trích xuất đầy đủ

1. `web_search`: `[SEARCH_TERMS]`
2. Ưu tiên URL từ `ieltsliz.com`. Backup: `ted-ielts.com`, `ieltsadvantage.com`, `magoosh.com/ielts`
3. `web_fetch` URL đó và trích xuất **tất cả** những thông tin sau:

**A. URL trang nguồn** — ghi lại chính xác, dùng cho attribution link trong footer.

**B. URL hình ảnh biểu đồ** — đây là bước quan trọng nhất trong Bước 1.
Trong nội dung fetch về, tìm URL của hình ảnh biểu đồ/chart. Nó thường xuất hiện dưới dạng:
- Markdown: `![...](https://ieltsliz.com/wp-content/uploads/....jpg)`
- HTML: `<img src="https://...jpg" ...>`
- Hoặc dạng CDN: `https://...cloudinary.com/...`

Ghi lại URL ảnh đầy đủ (bắt đầu bằng `https://`). Nếu có nhiều ảnh, lấy ảnh biểu đồ chính (không phải logo hay avatar). Nếu không tìm thấy URL ảnh trực tiếp, dùng URL trang nguồn làm fallback.

**C. Đề bài gốc** — câu "The chart/graph/diagram below shows..." chính xác nguyên văn.

**D. Toàn văn bài mẫu** — không tóm tắt, không paraphrase, lấy từng câu một.

**E. Nhận xét của tác giả** nếu có đi kèm bài mẫu.

---

### Bước 2 — Phân tích bài mẫu

Task 1 Academic **không có opinion, không có argument** — chỉ mô tả và phân tích dữ liệu. Framework phân tích khác hoàn toàn Task 2:

**A. Task Achievement (25% điểm)**
- Bài có Overview paragraph không? Nằm ở đâu (sau intro hay cuối bài)?
- Overview nêu được bao nhiêu key trends/features? Có bao quát bức tranh lớn không?
- Body paragraphs có dẫn số liệu cụ thể để hỗ trợ overview không?
- Bài có bỏ sót key feature nào quan trọng không?

**B. Cấu trúc đoạn văn Task 1**
- Introduction: paraphrase đề bài thế nào?
- Overview: mở bằng gì? ("Overall, ...", "In general, ...", "It is clear that...")
- Body paragraphs: grouping data theo tiêu chí nào? (thời gian / category / cao-thấp?)
- Cách chuyển tiếp giữa body paragraphs

**C. Ngôn ngữ mô tả dữ liệu — đặc trưng của [CHART_TYPE]**

Tìm và phân nhóm các từ sau có trong bài:

- Line Graph / Bar Chart: trend verbs (rose, fell, declined, increased, peaked, plateaued, fluctuated, remained stable), adverbs of degree (sharply, gradually, slightly, dramatically)
- Pie Chart: proportion language (accounted for, made up, represented, the largest/smallest share, approximately, nearly, just under/over)
- Process / Map: passive voice (was produced, were transported, is converted), sequencing (first, then, subsequently, finally, once), location language (adjacent to, to the north of, replaced by)
- Table: comparison phrases (compared to, in contrast, while, whereas), superlatives, ranking language

**D. Cấu trúc câu đáng học — tìm ít nhất 6**
- Participle clauses ("Having peaked at X, the figure then...")
- Relative clauses để ghép số liệu ("...which rose to 45%, compared to...")
- While/whereas để đối chiếu trong cùng câu
- Passive voice cho Process/Map
- Approximation phrases ("approximately", "just under", "around", "roughly")
- Gerund subjects ("Manufacturing accounted for...")

**E. Từ vựng band cao — tìm ít nhất 12 collocations/phrases**

**F. Điểm mạnh theo 4 tiêu chí**
- Task Achievement: overview hiệu quả, key features được chọn thông minh
- Coherence & Cohesion: grouping logic, linking words phù hợp
- Lexical Resource: variety trong trend vocabulary, không lặp
- Grammatical Range: mix câu đơn/phức, passive, participle

**G. Lỗi phổ biến với dạng [CHART_TYPE] — tìm ít nhất 7**

---

### Bước 3 — Viết file HTML

Tên file: `task1-[chart-type-slug]-analysis.html`

**CSS Base** — copy nguyên xi:

```css
:root {
  --cream:#f8f4ee; --paper:#ffffff; --ink:#1a1714; --ink-soft:#4a4540;
  --ink-muted:#8a837a; --rule:#e2ddd8; --struct-bg:#f1f5f9;
  --font-display:'Fraunces',Georgia,serif;
  --font-body:'Plus Jakarta Sans',system-ui,sans-serif;
  --font-mono:'JetBrains Mono',monospace;
}
body{font-family:var(--font-body);background:var(--cream);color:var(--ink);line-height:1.7;font-size:16px;-webkit-font-smoothing:antialiased;}
.page-wrap{max-width:780px;margin:0 auto;padding:2rem 1.25rem 4rem;}
.article-meta{display:flex;align-items:center;gap:.5rem;flex-wrap:wrap;margin-bottom:1.25rem;}
.badge{display:inline-block;font-size:.7rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;padding:3px 10px;border-radius:100px;border:1px solid currentColor;}
.article-title{font-family:var(--font-display);font-size:clamp(1.6rem,4vw,2.4rem);font-weight:600;line-height:1.2;color:var(--ink);margin-bottom:.4rem;}
.article-title em{font-style:italic;}
.article-subtitle{font-size:.95rem;color:var(--ink-muted);margin-bottom:2rem;padding-bottom:1.5rem;border-bottom:1px solid var(--rule);}
.section-heading{font-family:var(--font-display);font-size:1.2rem;font-weight:600;color:var(--ink);margin:2.5rem 0 1rem;display:flex;align-items:center;gap:.5rem;}
.section-heading::after{content:'';flex:1;height:1px;background:var(--rule);margin-left:.5rem;}
.section-number{font-family:var(--font-mono);font-size:.75rem;font-weight:500;color:var(--ink-muted);background:var(--struct-bg);padding:2px 7px;border-radius:4px;}
.prompt-box{background:var(--paper);border:1px solid var(--rule);border-left:4px solid var(--ink);border-radius:0 8px 8px 0;padding:1.1rem 1.25rem;margin-bottom:1rem;}
.prompt-label{font-size:.68rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:.4rem;}
.prompt-text{font-size:.9rem;color:var(--ink-soft);line-height:1.7;}
.prompt-text strong{color:var(--ink);font-weight:600;}
.chart-figure{margin:1rem 0 1.5rem;border-radius:10px;overflow:hidden;border:1px solid var(--rule);background:var(--paper);}
.chart-figure img{width:100%;height:auto;display:block;}
.chart-figure figcaption{padding:.55rem .9rem;font-size:.75rem;color:var(--ink-muted);border-top:1px solid var(--rule);display:flex;align-items:center;justify-content:space-between;gap:1rem;flex-wrap:wrap;}
.chart-figure figcaption a{color:var(--ink-soft);text-decoration:underline;text-underline-offset:2px;}
.legend{display:flex;flex-wrap:wrap;gap:.75rem 1.25rem;padding:.8rem 1rem;background:var(--paper);border:1px solid var(--rule);border-radius:8px;margin-bottom:1.25rem;}
.legend-label{font-size:.7rem;font-weight:600;color:var(--ink-muted);letter-spacing:.06em;text-transform:uppercase;align-self:center;}
.legend-item{display:flex;align-items:center;gap:.35rem;font-size:.78rem;color:var(--ink-soft);}
.legend-dot{width:10px;height:10px;border-radius:2px;flex-shrink:0;}
.para-block{border-radius:0 10px 10px 0;padding:1.1rem 1.25rem;margin-bottom:.9rem;border-left:4px solid;}
.para-label{font-size:.68rem;font-weight:600;letter-spacing:.09em;text-transform:uppercase;margin-bottom:.6rem;display:flex;align-items:center;gap:.5rem;flex-wrap:wrap;}
.para-tag{font-size:.65rem;padding:1px 7px;border-radius:100px;border:1px solid currentColor;letter-spacing:.04em;font-weight:600;text-transform:uppercase;}
.para-text{font-size:.92rem;line-height:1.95;color:var(--ink);}
.hl-vocab{font-weight:600;border-bottom:2px solid;padding-bottom:1px;}
.hl-tech{font-style:italic;border-bottom:2px dashed;padding-bottom:1px;opacity:.9;}
.para-note{margin-top:.75rem;padding:.6rem .85rem;background:rgba(255,255,255,.7);border-radius:6px;font-size:.78rem;color:var(--ink-soft);line-height:1.6;}
.para-note strong{font-weight:600;color:var(--ink);}
.word-count{display:inline-flex;font-family:var(--font-mono);font-size:.75rem;color:var(--ink-muted);background:var(--paper);border:1px solid var(--rule);border-radius:100px;padding:3px 12px;margin-top:.4rem;}
.card{background:var(--paper);border:1px solid var(--rule);border-radius:12px;padding:1.1rem 1.25rem;margin-bottom:1rem;}
.card-title{font-size:.85rem;font-weight:600;color:var(--ink);margin-bottom:.9rem;padding-bottom:.65rem;border-bottom:1px solid var(--rule);}
.struct-list{display:flex;flex-direction:column;gap:.6rem;}
.struct-item{background:var(--struct-bg);border-radius:8px;padding:.7rem .9rem;}
.struct-num{font-family:var(--font-mono);font-size:.65rem;font-weight:500;color:var(--ink-muted);letter-spacing:.06em;text-transform:uppercase;margin-bottom:.3rem;}
.struct-label{font-size:.8rem;font-weight:600;color:var(--ink);margin-bottom:.3rem;}
.struct-example{font-family:var(--font-mono);font-size:.78rem;color:var(--ink-soft);line-height:1.65;margin-bottom:.3rem;}
.struct-example em{font-style:normal;font-weight:600;}
.struct-note{font-size:.75rem;color:var(--ink-muted);line-height:1.5;}
.vocab-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:.6rem;}
.vocab-chip{background:var(--cream);border:1px solid var(--rule);border-radius:8px;padding:.6rem .85rem;}
.vocab-en{font-size:.82rem;font-weight:600;color:var(--ink);font-family:var(--font-mono);}
.vocab-vn{font-size:.75rem;color:var(--ink-muted);margin-top:2px;}
.paraphrase-box{background:var(--cream);border:1px solid var(--rule);border-radius:8px;padding:.8rem 1rem;margin-top:.75rem;font-size:.8rem;color:var(--ink-soft);line-height:1.8;}
.paraphrase-box strong{font-weight:600;color:var(--ink);font-family:var(--font-mono);font-size:.78rem;}
.scorecard{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:.7rem;margin-top:.75rem;}
.score-cell{background:var(--cream);border:1px solid var(--rule);border-radius:8px;padding:.7rem .9rem;}
.score-criterion{font-size:.7rem;font-weight:600;color:var(--ink-muted);letter-spacing:.06em;text-transform:uppercase;margin-bottom:.25rem;}
.score-note{font-size:.78rem;color:var(--ink-soft);line-height:1.5;}
.tips-list{display:flex;flex-direction:column;}
.tip-item{display:flex;gap:.75rem;padding:.7rem 0;border-bottom:1px solid var(--rule);}
.tip-item:last-child{border-bottom:none;}
.tip-num{font-family:var(--font-mono);font-size:.78rem;font-weight:600;flex-shrink:0;padding-top:2px;min-width:1.4rem;}
.tip-text{font-size:.85rem;color:var(--ink);line-height:1.7;}
.tip-text strong{font-weight:600;}
.tip-text em{font-family:var(--font-mono);font-style:normal;font-size:.8rem;color:var(--ink-soft);}
.watchout{border-radius:8px;padding:.8rem 1rem;font-size:.82rem;line-height:1.65;margin-top:.75rem;border:1px solid;}
.watchout strong{font-weight:600;}
.article-footer{margin-top:3rem;padding-top:1.25rem;border-top:1px solid var(--rule);font-size:.78rem;color:var(--ink-muted);line-height:1.6;}
@media(max-width:600px){.vocab-grid{grid-template-columns:1fr 1fr;}.scorecard{grid-template-columns:1fr 1fr;}.chart-figure figcaption{flex-direction:column;gap:.35rem;}}
@media print{body{background:white;font-size:13px;}.page-wrap{max-width:100%;padding:0;}.card,.para-block,.chart-figure{break-inside:avoid;}}
```

**Bộ màu cho từng đoạn — Task 1 Academic:**

```css
/* Intro — neutral stone */
--intro-bg:#fafafa; --intro-border:#44403c; --intro-text:#1c1917;

/* Overview — amber/gold (quan trọng nhất, cần nổi bật) */
--ov-bg:#fffbeb; --ov-border:#d97706; --ov-text:#78350f;

/* Body 1 — teal */
--b1-bg:#f0fdfa; --b1-border:#0d9488; --b1-text:#134e4a;

/* Body 2 — blue (nếu có) */
--b2-bg:#eff6ff; --b2-border:#2563eb; --b2-text:#1e3a8a;
```

**Cách nhúng biểu đồ vào Section 01:**

Dùng component `<figure class="chart-figure">` với cấu trúc sau:

```html
<!-- Trường hợp 1: Có URL ảnh — dùng img tag -->
<figure class="chart-figure">
  <img src="[IMAGE_URL_TRÍCH_TỪ_FETCH]"
       alt="[CHART_TYPE] — [mô tả ngắn nội dung biểu đồ]"
       loading="lazy" />
  <figcaption>
    <span>Biểu đồ gốc từ bài mẫu</span>
    <a href="[SOURCE_PAGE_URL]" target="_blank" rel="noopener">
      Xem bài gốc tại [tên nguồn]
    </a>
  </figcaption>
</figure>

<!-- Trường hợp 2: Không tìm được URL ảnh — dùng link fallback -->
<figure class="chart-figure" style="padding:1.25rem;text-align:center;">
  <p style="font-size:.85rem;color:var(--ink-muted);margin-bottom:.6rem;">
    Xem biểu đồ gốc tại nguồn:
  </p>
  <a href="[SOURCE_PAGE_URL]" target="_blank" rel="noopener"
     style="font-size:.9rem;font-weight:600;color:var(--ink);
            text-decoration:underline;text-underline-offset:3px;">
    [tên nguồn] — [tiêu đề bài]
  </a>
</figure>
```

**Cấu trúc section bắt buộc:**

```
Section 00 — Cấu trúc đặc trưng Task 1 (khác Task 2 thế nào)
             → Bảng so sánh: Intro / Overview / Body / (No Conclusion)
             → Nhấn mạnh: Task 1 KHÔNG có opinion, KHÔNG có conclusion
             → Nhấn mạnh: Overview là bắt buộc, không phải optional
             → Giải thích: Task Achievement (không phải Task Response)

Section 01 — Đề bài + Biểu đồ gốc
             → prompt-box: đề bài nguyên văn
             → chart-figure: img tag với URL ảnh từ fetch, hoặc link fallback

Section 02 — Bài mẫu có chú thích
             → para-block .intro: introduction (paraphrase đề bài)
             → para-block .overview: overview paragraph — màu AMBER, nổi bật
             → para-block .b1: body 1 (nhóm dữ liệu thứ nhất)
             → para-block .b2: body 2 nếu có (nhóm dữ liệu thứ hai)
             → Mỗi block có para-note giải thích kỹ thuật của đoạn đó
             → Overview block PHẢI có para-note riêng giải thích
               tại sao overview này hiệu quả và những gì nó bao quát

Section 03 — Tại sao Overview là đoạn quan trọng nhất
             → Giải thích: overview khác introduction thế nào
             → So sánh: overview tốt vs overview kém (cùng biểu đồ)
             → Template overview cho dạng [CHART_TYPE]:
               "Overall, [key trend 1], while [key trend 2]."
               "In general, [most notable feature], with [second observation]."

Section 04 — Từ vựng mô tả dữ liệu — đặc trưng của [CHART_TYPE]
             → Chia theo nhóm chức năng (không chia theo alphabet):
               Line/Bar: trend verbs / adverbs of degree / time phrases
               Pie: proportion verbs / fractions & percentages / comparison
               Process: passive verbs / sequencing adverbs / stage nouns
               Map: location prepositions / change verbs / before-after phrases
             → paraphrase-box: cách diễn đạt cùng một dữ liệu bằng nhiều cách

Section 05 — Cấu trúc câu đáng học (6 struct-item)

Section 06 — Đánh giá theo 4 tiêu chí
             → scorecard 4 ô
             → LƯU Ý: tiêu chí 1 là "Task Achievement" KHÔNG phải "Task Response"

Section 07 — Gợi ý thực hành (7 tip + watchout box màu đỏ/cam)
```

**Quy tắc highlight trong essay text:**
- `.hl-vocab` (underline solid): từ vựng mô tả dữ liệu band cao
- `.hl-tech` (underline dashed + italic): kỹ thuật viết câu
- Overview block: dùng màu amber — cả `.hl-vocab` và `.hl-tech` trong overview đều dùng `--ov-border` và `--ov-text`

**Checklist trước khi output:**

- [ ] Bước 1 đã trích xuất được URL ảnh hoặc URL trang nguồn
- [ ] Section 01 có `chart-figure` với `<img>` tag (hoặc link fallback nếu không có ảnh)
- [ ] `figcaption` có link attribution về trang nguồn
- [ ] Overview có `para-block` màu amber riêng biệt
- [ ] Section 03 giải thích sâu về Overview paragraph với ví dụ so sánh
- [ ] Section 04 phân nhóm vocab theo đặc trưng của [CHART_TYPE]
- [ ] scorecard dùng "Task Achievement" không phải "Task Response"
- [ ] Không có section về "opinion", "thesis", hay "conclusion" — Task 1 không cần
- [ ] word-count badge hiển thị ~170-195 từ
- [ ] Có watchout box, có article-footer với link nguồn

Tên file output: `task1-[chart-type-slug]-analysis.html`

---

## Thứ tự nên làm

Theo tần suất xuất hiện trong đề thi thực tế:

Line Graph → Bar Chart → Pie Chart → Table → Process Diagram → Map → Mixed

---

## Astro workflow

```bash
# Static — serve as-is
cp task1-line-graph-analysis.html public/writing/task1/

# Hoặc Astro page
mv task1-line-graph-analysis.html src/pages/writing/task1/line-graph.html
```
