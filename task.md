
# Claude Code Prompt — IELTS Task 2 Writing Structure Guide

You are working inside an existing Astro blog project.

FIRST, before writing any code, inspect the project to understand its conventions:
1. Look at src/content/ or src/pages/ to find where blog posts live and what
   file format they use (.md, .mdx, or .astro)
2. Open 2–3 existing post files to read their frontmatter schema (title, date,
   description, tags, layout, etc.)
3. Find the layout component used by posts (check the `layout` frontmatter key
   or the wrapping component) and read it to understand available CSS classes,
   typography scale, spacing tokens, and any design system already in use
4. Check if MDX is configured (look for @astrojs/mdx in astro.config.mjs)

THEN create a new blog post for an IELTS Task 2 Writing structure guide,
following the EXACT same conventions you found:
- Same file format as existing posts
- Same frontmatter fields (fill in appropriate values for title, date,
  description, tags)
- Same layout component
- Do NOT introduce new Tailwind utility classes or CSS that conflict with the
  project's existing styling — use the CSS classes, variables, or design tokens
  already present in the project

For the interactive parts (tab switching, accordions, variation toggles):
- If the post format is .mdx: create the interactive UI as a separate
  React component at src/components/IELTSOutlineWidget.jsx (with client:load
  when used in the .mdx file). Style this component using only CSS variables
  or class names already defined in the project's global stylesheet.
- If the post format is .astro or .md only (no MDX): implement all interactivity
  using a <script> tag with vanilla JavaScript. Use querySelector and
  classList.toggle — no framework needed.

Output files:
- The blog post file (in the correct content folder, correct format)
- The interactive component file only if MDX path is taken
## Visual design specification

### Paragraph color coding (use Tailwind classes)
- **Introduction**: green family — `bg-emerald-50`, `border-emerald-400`, badge `bg-emerald-500`
- **Body Paragraph 1**: purple family — `bg-purple-50`, `border-purple-400`, badge `bg-purple-600`
- **Body Paragraph 2**: indigo family — `bg-indigo-50`, `border-indigo-400`, badge `bg-indigo-600`
- **Conclusion**: amber family — `bg-amber-50`, `border-amber-400`, badge `bg-amber-500`

### Sentence slot box (the core visual unit)
Each sentence in an outline is displayed as:
```
[ 4 ]  TOPIC SENTENCE ────────────────────────────────────────
        "They may well argue that S + V"
```
- Number badge: small circle, solid paragraph color, white number, left-aligned
- Role label: small uppercase text in paragraph color, bold
- Template text: monospace or slightly styled, gray, italic
- Full-width box with light background tint of the paragraph color, left border accent

For slots that span a "supporting triplet" (Explanation | Effect | Example), display them as three smaller inline chips inside one row:
```
[ 5 ]  [ Explanation ]  [ Effect ]  [ Example ]
```
These chips are small rounded pill buttons in the paragraph tint color.

### Paragraph section container
- Full-width card with a colored left border (4px solid)
- Header row: paragraph name (e.g., "BODY PARAGRAPH 1") + word count hint (e.g., "90–110 words")
- Stacked sentence slots inside

### Connecting flow
- Between sentence slots within a paragraph: a faint vertical dotted line or small downward arrow
- Between paragraphs: no connector needed, the visual separation is enough

---

## Top-level navigation

### Essay type tabs (primary navigation)
Five tabs at the top of the page:
1. Opinion (Agree / Disagree)
2. Discussion (2 Views)
3. Advantages & Disadvantages
4. Problems & Solutions
5. Two-Part Questions

Active tab: solid background in indigo/purple, white text. Inactive: white bg, gray text, hover state.

### Variation switcher (secondary navigation, inside each essay type)
For essay types that have multiple valid structures, show a small segmented toggle or secondary tab bar below the main tabs. Label each variation clearly. Only show this if the type has 2+ variations.

---

## Content: All 5 essay types

### TYPE 1 — Opinion Essay (Agree / Disagree)
**Question signals**: "To what extent do you agree or disagree?", "Do you agree or disagree?"

Show a small "How to identify" banner at the top of this type's panel.

#### Variation A: Strong position (fully agree or fully disagree)
Label: "Strong stance — one-sided"
Tip badge: "Safer for most students"

INTRODUCTION (60–80 words)
- Slot 1 | HOOK | "Paraphrase the topic — do NOT copy the question wording."
- Slot 2 | THESIS | "I completely agree/disagree that S + V, and this essay will outline the reasons for my position."

BODY PARAGRAPH 1 (90–110 words)
- Slot 3 | TOPIC SENTENCE | "The primary reason for this view is that S + V."
- Slot 4 | [Explanation] [Effect] [Example]
- Slot 5 | EXAMPLE LINK | "This demonstrates that S + V."

BODY PARAGRAPH 2 (90–110 words)
- Slot 6 | TOPIC SENTENCE | "Furthermore, S + V."
- Slot 7 | [Explanation] [Effect] [Example]
- Slot 8 | EXAMPLE LINK | "This further illustrates that S + V."

CONCLUSION (50–70 words)
- Slot 9 | RESTATE | "In conclusion, it is clear that S + V."
- Slot 10 | FINAL THOUGHT | "Therefore, I firmly believe that S + V."

---

#### Variation B: Partial agreement (balanced, lean one side)
Label: "Partial stance — nuanced"
Tip badge: "Higher band potential"

INTRODUCTION (60–80 words)
- Slot 1 | HOOK | "Paraphrase the topic."
- Slot 2 | ACKNOWLEDGE | "While it is true that S + V,"
- Slot 3 | THESIS | "I would argue that S + V to a greater extent."

BODY PARAGRAPH 1 — Opposing view (90–110 words)
- Slot 4 | FRAME | "Those who [take the opposing position] may argue that S + V."
- Slot 5 | [Explanation] [Effect] [Example]
- Slot 6 | CONCESSION CLOSE | "This shows that there is some validity to the claim that S + V."

BODY PARAGRAPH 2 — Your view (90–110 words)
- Slot 7 | PIVOT | "Nevertheless, I believe that S + V for several reasons."
- Slot 8 | REASON 1 | "Chief among these is that S + V."
- Slot 9 | [Explanation] [Effect] [Example]
- Slot 10 | REASON 2 | "Furthermore, S + V."
- Slot 11 | [Explanation] [Effect] [Example]

CONCLUSION (50–70 words)
- Slot 12 | RESTATE | "In conclusion, while it is understandable that some S + V,"
- Slot 13 | FINAL | "I maintain that S + V."

---

**Key notes box** (collapsible, amber bg):
- Never sit on the fence — "to what extent" still requires ONE clear side
- Variation B shows more critical thinking — better for Band 7+
- Avoid "I think" — use "I believe", "I would argue", "It is my contention that"
- Do NOT restate the question word-for-word in your hook

---

### TYPE 2 — Discussion Essay (Discuss Both Views + Opinion)
**Question signals**: "Discuss both views and give your own opinion", "Some believe... Others argue..."

#### Variation A: Standard structure (no antithesis)
Label: "Standard"

INTRODUCTION (60–80 words)
- Slot 1 | HOOK | "Opinions are divided on whether S1 + V1 or whether S2 + V2."
- Slot 2 | THESIS | "While I understand the logic behind the former view, I am still in favour of the latter."

BODY PARAGRAPH 1 — View 1 (the view you disagree with more) (90–110 words)
- Slot 3 | FRAME | "Those who believe that S1 + V1 may have several arguments."
- Slot 4 | ARGUMENT 1 | "They may well argue that S + V."
- Slot 5 | [Explanation] [Effect] [Example]
- Slot 6 | ARGUMENT 2 | "Another possible argument is that S + V."
- Slot 7 | [Explanation] [Effect] [Example]

BODY PARAGRAPH 2 — View 2 / Your view (90–110 words)
- Slot 8 | PIVOT | "Nevertheless, I still believe that S2 + V2 for several reasons."
- Slot 9 | REASON 1 | "Chief among these is that S + V."
- Slot 10 | [Explanation] [Effect] [Example]
- Slot 11 | REASON 2 | "The second reason is that S + V."
- Slot 12 | [Explanation] [Effect] [Example]

CONCLUSION (50–70 words)
- Slot 13 | ACKNOWLEDGE | "In conclusion, it is understandable why some may argue that S1 + V1."
- Slot 14 | FINAL | "However, I would take the view that S2 + V2."

---

#### Variation B: With Antithesis
Label: "With Antithesis"
Tip badge: "More sophisticated — Band 7.5+"

Explain in a small callout what "antithesis" means here: the writer introduces a limitation or counterpoint to View 1 *within* Body Paragraph 1 — then pivots to Body 2. This weakens the opposing argument before the writer even presents their own view.

INTRODUCTION — identical to Variation A

BODY PARAGRAPH 1 — View 1 WITH built-in antithesis (90–110 words)
- Slot 3 | FRAME | "Those who believe that S1 + V1 may have several arguments."
- Slot 4 | ARGUMENT 1 | "They may well argue that S + V."
- Slot 5 | [Explanation] [Effect] [Example]
- Slot 6 | [Explanation] [Effect] [Example] (extended support for argument 1)
- Slot 7 | ANTITHESIS | "Nonetheless, S + V." ← this weakens View 1 from within

BODY PARAGRAPH 2 — Your view (identical to Variation A slots 8–12)
CONCLUSION — identical to Variation A

**Highlight the difference visually**: Slot 7 in Variation B should have a distinct styling — perhaps a coral/red-tinted box labeled "ANTITHESIS" to make it stand out from the rest of Body Paragraph 1's purple theme.

---

**Key notes box**:
- You MUST give your own opinion — do not just describe both views neutrally
- Body 1 presents the view you DISAGREE with more; Body 2 is YOUR view
- "former view" = the first view mentioned in sentence 1; "latter" = the second
- Antithesis (Variation B) is powerful but requires careful logic — only use if confident

---

### TYPE 3 — Advantages & Disadvantages
**Question signals**:
- Type A: "Discuss the advantages and disadvantages" — NO opinion asked
- Type B: "Do the advantages outweigh the disadvantages?" — OPINION required

Display a prominent warning banner at the top: "These two question types look similar but require completely different essay structures. Read the question carefully."

#### Variation A: Balanced (no opinion — just discuss)
Label: "Discuss only — no opinion"

INTRODUCTION (60–80 words)
- Slot 1 | HOOK | "Paraphrase the topic — describe the trend or development."
- Slot 2 | THESIS | "This essay will examine both the benefits and drawbacks of S + V."

BODY PARAGRAPH 1 — Advantages (90–110 words)
- Slot 3 | TOPIC | "There are several notable advantages to S + V."
- Slot 4 | ADVANTAGE 1 | "The primary benefit is that S + V."
- Slot 5 | [Explanation] [Effect] [Example]
- Slot 6 | ADVANTAGE 2 | "Furthermore, S + V."
- Slot 7 | [Explanation] [Effect] [Example]

BODY PARAGRAPH 2 — Disadvantages (90–110 words)
- Slot 8 | TOPIC | "However, S + V also carries significant drawbacks."
- Slot 9 | DISADVANTAGE 1 | "The most notable concern is that S + V."
- Slot 10 | [Explanation] [Effect] [Example]
- Slot 11 | DISADVANTAGE 2 | "In addition, S + V."
- Slot 12 | [Explanation] [Effect] [Example]

CONCLUSION (50–70 words)
- Slot 13 | SUMMARIZE | "In conclusion, while S + V brings clear advantages such as [X], it also presents challenges including [Y]."
- Slot 14 | BALANCED CLOSE | "The extent to which the benefits outweigh the drawbacks depends largely on [condition/individual context]."

---

#### Variation B: Opinion required (outweigh question)
Label: "Outweigh — opinion required"

INTRODUCTION (60–80 words)
- Slot 1 | HOOK | "Paraphrase the topic."
- Slot 2 | THESIS | "Although S + V has certain drawbacks, I believe the advantages considerably outweigh the disadvantages." (or reverse)

BODY PARAGRAPH 1 — Minor side (the side you disagree with) (70–90 words)
- Slot 3 | TOPIC | "Admittedly, there are some [disadvantages/advantages] worth considering."
- Slot 4 | POINT | "The most significant of these is that S + V."
- Slot 5 | [Explanation] [Effect] [Example]
- Slot 6 | PIVOT | "Despite this, these concerns are outweighed by the benefits."

BODY PARAGRAPH 2 — Major side (your position) (100–120 words)
- Slot 7 | TOPIC | "The [advantages/disadvantages] of S + V are, however, more substantial."
- Slot 8 | REASON 1 | "Firstly, S + V."
- Slot 9 | [Explanation] [Effect] [Example]
- Slot 10 | REASON 2 | "Moreover, S + V."
- Slot 11 | [Explanation] [Effect] [Example]

CONCLUSION (50–70 words)
- Slot 12 | RESTATE | "In conclusion, while there are valid concerns about S + V,"
- Slot 13 | FINAL | "I maintain that the advantages are more significant and far-reaching than the disadvantages."

---

**Key notes box**:
- "Discuss advantages and disadvantages" vs "Do advantages outweigh?" — different thesis, different conclusion
- For Variation B: give MORE paragraph space to the side you support
- Never add an opinion paragraph if the question only says "discuss"
- Avoid listing more than 2 points per paragraph — develop each point deeply

---

### TYPE 4 — Problems & Solutions (or Causes & Solutions)
**Question signals**: "What are the problems and what solutions can you suggest?", "What are the causes of this and what can be done?"

Display: "These two sub-types (Problems vs Causes) share the same structure — only the Body 1 language differs."

#### Variation A: Problems + Solutions
Label: "Problems → Solutions"

INTRODUCTION (60–80 words)
- Slot 1 | HOOK | "S + V has become an increasingly serious issue in recent years."
- Slot 2 | THESIS | "This essay will examine the main problems caused by S + V and propose effective solutions."

BODY PARAGRAPH 1 — Problems (90–110 words)
- Slot 3 | FRAME | "There are several significant problems associated with S + V."
- Slot 4 | PROBLEM 1 | "The most pressing issue is that S + V."
- Slot 5 | [Explanation] [Effect] [Example]
- Slot 6 | PROBLEM 2 | "A further problem is that S + V."
- Slot 7 | [Explanation] [Effect] [Example]

BODY PARAGRAPH 2 — Solutions (mirror Problems 1 and 2) (90–110 words)
- Slot 8 | FRAME | "Fortunately, there are practical measures that could address these issues."
- Slot 9 | SOLUTION 1 | "One effective solution would be to V." (mirrors Problem 1)
- Slot 10 | [Explanation] [Effect] [Example]
- Slot 11 | SOLUTION 2 | "In addition, S + V." (mirrors Problem 2)
- Slot 12 | [Explanation] [Effect] [Example]

CONCLUSION (50–70 words)
- Slot 13 | RESTATE | "In conclusion, S + V poses serious challenges, particularly [problem 1] and [problem 2]."
- Slot 14 | FINAL | "Nevertheless, by [solution 1] and [solution 2], these issues can be effectively managed."

---

#### Variation B: Causes + Solutions
Label: "Causes → Solutions"

Structure is identical to Variation A. The only differences are:
- Body 1 title changes to "BODY PARAGRAPH 1 — Causes"
- Slot 3: "There are several root causes of S + V."
- Slot 4: "The primary reason for this is that S + V." / "This is largely caused by S + V."
- Slot 6: "Another contributing factor is that S + V."
- Solutions in Body 2 must directly address the specific causes in Body 1 (mirror structure — emphasize this with a visual annotation: ← mirrors Cause 1)

Show a small visual annotation next to Solution slots: "← addresses Cause 1" and "← addresses Cause 2" in a light gray italic label.

---

**Key notes box**:
- Mirror structure is essential: Solution 1 solves Problem/Cause 1, Solution 2 solves Problem/Cause 2
- Do NOT give your opinion unless specifically asked
- Use tentative modal verbs for solutions: "could", "would", "should", "might"
- Thesis must be a "signpost thesis" — tell the reader what the essay will cover

---

### TYPE 5 — Two-Part / Direct Questions
**Question signals**: Two separate questions at the end — "Why is this? What can be done?", "What are the reasons? What are the effects?"

Display: "This type has only one standard structure. Your only task is to answer BOTH questions fully — one per body paragraph."

(No variation switcher needed for this type)

INTRODUCTION (60–80 words)
- Slot 1 | HOOK | "Paraphrase the overall situation or trend described in the prompt."
- Slot 2 | THESIS MAP | "This essay will address why S + V and what measures can be taken to V."
  (The thesis should map directly to the two questions — label this clearly)

BODY PARAGRAPH 1 — Answer Question 1 (90–110 words)
- Slot 3 | TOPIC | "There are several reasons why S + V."
- Slot 4 | REASON 1 | "Firstly, S + V."
- Slot 5 | [Explanation] [Effect] [Example]
- Slot 6 | REASON 2 | "Furthermore, S + V."
- Slot 7 | [Explanation] [Effect] [Example]

BODY PARAGRAPH 2 — Answer Question 2 (90–110 words)
- Slot 8 | TOPIC | "In terms of what can be done, there are several viable approaches."
- Slot 9 | MEASURE 1 | "One important step would be to V."
- Slot 10 | [Explanation] [Effect] [Example]
- Slot 11 | MEASURE 2 | "Additionally, S + V."
- Slot 12 | [Explanation] [Effect] [Example]

CONCLUSION (50–70 words)
- Slot 13 | Q1 SUMMARY | "In conclusion, S + V primarily because [brief reason 1] and [brief reason 2]."
- Slot 14 | Q2 SUMMARY | "To address this, [brief measure 1] and [brief measure 2] are recommended."

---

**Key notes box**:
- CRITICAL: both questions must be answered fully — neglecting one destroys your Task Response score
- Never mix answers from Q1 and Q2 in the same paragraph
- The conclusion must briefly address BOTH questions — not just one
- Do NOT give a personal opinion unless one of the questions specifically asks for it

---

## Additional UI elements

### "How to identify" banner
At the top of each essay type panel, add a small pill/tag row showing the most common question phrases that signal this essay type. Style as small `bg-blue-50 text-blue-700 border border-blue-200` rounded tags.

### Word count guidance bar
Below the paragraph header, show a small progress-bar-style indicator showing the recommended word range (e.g., 60–80 words). Keep it visual and simple — just a label with a short colored line.

### Collapsible key notes
At the bottom of each essay type panel:
- "Key Notes & Common Mistakes" section
- Default collapsed
- When expanded: yellow-amber bg, bullet list, ⚠ icon before common mistakes, ✓ icon before good practices

### Mobile behavior
On screens below `md` breakpoint:
- Tab labels collapse to icons only (add a relevant emoji or simple icon per type)
- Sentence slot boxes stack vertically with no horizontal two-column layout
- The [Explanation] [Effect] [Example] chips stack vertically instead of inline

---

## File output
Generate a single file: `IELTSWritingGuide.jsx`

Include a usage example comment at the top of the file:
```jsx
// Usage: import IELTSWritingGuide from './IELTSWritingGuide'
// Then: <IELTSWritingGuide />
// Requires: Tailwind CSS configured in your project
```
