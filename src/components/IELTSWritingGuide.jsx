// Usage: import IELTSWritingGuide from './IELTSWritingGuide'
// Then: <IELTSWritingGuide />
// Requires: Tailwind CSS configured in your project

import { useState } from 'react';

// ─── Primitive building blocks ────────────────────────────────────────────────

function Badge({ num, color }) {
  return (
    <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-white text-xs font-bold shrink-0 ${color}`}>
      {num}
    </span>
  );
}

function TripletChips({ tint }) {
  const chips = ['Explanation', 'Effect', 'Example'];
  return (
    <div className="flex flex-wrap gap-2">
      {chips.map(c => (
        <span key={c} className={`px-3 py-1 rounded-full text-xs font-semibold ${tint}`}>{c}</span>
      ))}
    </div>
  );
}

// slot: { num, role, template, triplet, antithesis, annotation, special }
function SentenceSlot({ slot, bg, border, badge, tint, roleColor }) {
  const slotBg = slot.antithesis ? 'bg-red-50 border-red-300' : `${bg} ${border}`;
  const roleCls = slot.antithesis ? 'text-red-600' : roleColor;

  return (
    <div className={`rounded-lg border-l-4 p-3 ${slotBg}`}>
      <div className="flex items-start gap-3">
        <Badge num={slot.num} color={slot.antithesis ? 'bg-red-500' : badge} />
        <div className="flex-1 min-w-0">
          {slot.triplet ? (
            <>
              <p className={`text-xs font-bold uppercase tracking-wide mb-2 ${roleCls}`}>{slot.role}</p>
              <TripletChips tint={slot.antithesis ? 'bg-red-100 text-red-700' : tint} />
            </>
          ) : (
            <>
              <p className={`text-xs font-bold uppercase tracking-wide ${roleCls}`}>{slot.role}</p>
              {slot.template && (
                <p className="text-sm text-gray-500 italic font-mono mt-1">&ldquo;{slot.template}&rdquo;</p>
              )}
              {slot.annotation && (
                <p className="text-xs text-gray-400 italic mt-1">{slot.annotation}</p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function SlotConnector() {
  return (
    <div className="flex justify-center py-0.5">
      <div className="w-px h-4 border-l-2 border-dotted border-gray-300" />
    </div>
  );
}

function ParagraphSection({ title, wordRange, slots, colors }) {
  return (
    <div className={`rounded-xl border-l-4 ${colors.border} ${colors.bg} p-4 mb-4`}>
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <h3 className={`font-bold text-sm uppercase tracking-widest ${colors.text}`}>{title}</h3>
        <span className="text-xs text-gray-500 bg-white px-2 py-0.5 rounded-full border border-gray-200">
          {wordRange} words
        </span>
      </div>
      <WordRangeBar range={wordRange} color={colors.bar} />
      <div className="mt-3 space-y-0">
        {slots.map((slot, i) => (
          <div key={slot.num}>
            <SentenceSlot
              slot={slot}
              bg={colors.bg}
              border={`border-${colors.borderName}-200`}
              badge={colors.badge}
              tint={colors.tint}
              roleColor={colors.text}
            />
            {i < slots.length - 1 && <SlotConnector />}
          </div>
        ))}
      </div>
    </div>
  );
}

function WordRangeBar({ range, color }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-gray-400">{range} words</span>
      <div className={`h-1.5 flex-1 rounded-full ${color} opacity-40`} />
    </div>
  );
}

function IdentifyBanner({ signals }) {
  return (
    <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
      <p className="text-xs font-semibold text-blue-700 mb-2 uppercase tracking-wide">How to identify</p>
      <div className="flex flex-wrap gap-2">
        {signals.map(s => (
          <span key={s} className="text-xs bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-3 py-1">{s}</span>
        ))}
      </div>
    </div>
  );
}

function KeyNotes({ notes }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-2 rounded-xl border border-amber-200 overflow-hidden">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-4 py-3 bg-amber-50 hover:bg-amber-100 transition-colors text-left"
      >
        <span className="font-semibold text-amber-800 text-sm">Key Notes & Common Mistakes</span>
        <span className="text-amber-600 text-lg leading-none">{open ? '▲' : '▼'}</span>
      </button>
      {open && (
        <div className="bg-amber-50 px-4 pb-4">
          <ul className="space-y-2 mt-1">
            {notes.map((n, i) => (
              <li key={i} className="flex gap-2 text-sm text-amber-900">
                <span className="shrink-0">{n.good ? '✓' : '⚠'}</span>
                <span>{n.text}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function TipBadge({ text }) {
  return (
    <span className="inline-block text-xs bg-emerald-100 text-emerald-800 border border-emerald-300 rounded-full px-3 py-1 font-semibold">
      {text}
    </span>
  );
}

function VariationTab({ variations, active, onChange }) {
  if (variations.length < 2) return null;
  return (
    <div className="flex flex-wrap gap-2 mb-5">
      {variations.map(v => (
        <button
          key={v.id}
          onClick={() => onChange(v.id)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
            active === v.id
              ? 'bg-indigo-600 text-white border-indigo-600'
              : 'bg-white text-gray-600 border-gray-300 hover:border-indigo-400 hover:text-indigo-600'
          }`}
        >
          {v.label}
          {v.tip && active !== v.id && (
            <span className="ml-2 text-xs text-gray-400">{v.tip}</span>
          )}
        </button>
      ))}
    </div>
  );
}

// ─── Paragraph color palettes ─────────────────────────────────────────────────

const INTRO = {
  bg: 'bg-emerald-50', border: 'border-emerald-400', borderName: 'emerald',
  badge: 'bg-emerald-500', tint: 'bg-emerald-100 text-emerald-700',
  text: 'text-emerald-700', bar: 'bg-emerald-400',
};
const BODY1 = {
  bg: 'bg-purple-50', border: 'border-purple-400', borderName: 'purple',
  badge: 'bg-purple-600', tint: 'bg-purple-100 text-purple-700',
  text: 'text-purple-700', bar: 'bg-purple-400',
};
const BODY2 = {
  bg: 'bg-indigo-50', border: 'border-indigo-400', borderName: 'indigo',
  badge: 'bg-indigo-600', tint: 'bg-indigo-100 text-indigo-700',
  text: 'text-indigo-700', bar: 'bg-indigo-400',
};
const CONCL = {
  bg: 'bg-amber-50', border: 'border-amber-400', borderName: 'amber',
  badge: 'bg-amber-500', tint: 'bg-amber-100 text-amber-700',
  text: 'text-amber-700', bar: 'bg-amber-400',
};

// ─── Essay type panels ────────────────────────────────────────────────────────

function OpinionEssay() {
  const [variation, setVariation] = useState('A');

  const variations = [
    { id: 'A', label: 'Strong stance — one-sided', tip: 'Safer for most students' },
    { id: 'B', label: 'Partial stance — nuanced', tip: 'Higher band potential' },
  ];

  const strongNotes = [
    { text: 'Never sit on the fence — "to what extent" still requires ONE clear side' },
    { text: 'Avoid "I think" — use "I believe", "I would argue", "It is my contention that"', good: true },
    { text: 'Do NOT restate the question word-for-word in your hook' },
    { text: 'Variation B shows more critical thinking — better for Band 7+', good: true },
  ];

  return (
    <div>
      <IdentifyBanner signals={['"To what extent do you agree or disagree?"', '"Do you agree or disagree?"']} />

      <VariationTab variations={variations} active={variation} onChange={setVariation} />

      {variation === 'A' && (
        <>
          <div className="flex items-center gap-3 mb-4">
            <TipBadge text="Safer for most students" />
          </div>
          <ParagraphSection title="Introduction" wordRange="60–80" colors={INTRO} slots={[
            { num: 1, role: 'Hook', template: 'Paraphrase the topic — do NOT copy the question wording.' },
            { num: 2, role: 'Thesis', template: 'I completely agree/disagree that S + V, and this essay will outline the reasons for my position.' },
          ]} />
          <ParagraphSection title="Body Paragraph 1" wordRange="90–110" colors={BODY1} slots={[
            { num: 3, role: 'Topic Sentence', template: 'The primary reason for this view is that S + V.' },
            { num: 4, role: 'Support', triplet: true },
            { num: 5, role: 'Example Link', template: 'This demonstrates that S + V.' },
          ]} />
          <ParagraphSection title="Body Paragraph 2" wordRange="90–110" colors={BODY2} slots={[
            { num: 6, role: 'Topic Sentence', template: 'Furthermore, S + V.' },
            { num: 7, role: 'Support', triplet: true },
            { num: 8, role: 'Example Link', template: 'This further illustrates that S + V.' },
          ]} />
          <ParagraphSection title="Conclusion" wordRange="50–70" colors={CONCL} slots={[
            { num: 9, role: 'Restate', template: 'In conclusion, it is clear that S + V.' },
            { num: 10, role: 'Final Thought', template: 'Therefore, I firmly believe that S + V.' },
          ]} />
        </>
      )}

      {variation === 'B' && (
        <>
          <div className="flex items-center gap-3 mb-4">
            <TipBadge text="Higher band potential" />
          </div>
          <ParagraphSection title="Introduction" wordRange="60–80" colors={INTRO} slots={[
            { num: 1, role: 'Hook', template: 'Paraphrase the topic.' },
            { num: 2, role: 'Acknowledge', template: 'While it is true that S + V,' },
            { num: 3, role: 'Thesis', template: 'I would argue that S + V to a greater extent.' },
          ]} />
          <ParagraphSection title="Body Paragraph 1 — Opposing View" wordRange="90–110" colors={BODY1} slots={[
            { num: 4, role: 'Frame', template: 'Those who [take the opposing position] may argue that S + V.' },
            { num: 5, role: 'Support', triplet: true },
            { num: 6, role: 'Concession Close', template: 'This shows that there is some validity to the claim that S + V.' },
          ]} />
          <ParagraphSection title="Body Paragraph 2 — Your View" wordRange="90–110" colors={BODY2} slots={[
            { num: 7, role: 'Pivot', template: 'Nevertheless, I believe that S + V for several reasons.' },
            { num: 8, role: 'Reason 1', template: 'Chief among these is that S + V.' },
            { num: 9, role: 'Support', triplet: true },
            { num: 10, role: 'Reason 2', template: 'Furthermore, S + V.' },
            { num: 11, role: 'Support', triplet: true },
          ]} />
          <ParagraphSection title="Conclusion" wordRange="50–70" colors={CONCL} slots={[
            { num: 12, role: 'Restate', template: 'In conclusion, while it is understandable that some S + V,' },
            { num: 13, role: 'Final', template: 'I maintain that S + V.' },
          ]} />
        </>
      )}

      <KeyNotes notes={strongNotes} />
    </div>
  );
}

function DiscussionEssay() {
  const [variation, setVariation] = useState('A');

  const variations = [
    { id: 'A', label: 'Standard' },
    { id: 'B', label: 'With Antithesis', tip: 'Band 7.5+' },
  ];

  const notes = [
    { text: 'You MUST give your own opinion — do not just describe both views neutrally' },
    { text: 'Body 1 presents the view you DISAGREE with more; Body 2 is YOUR view', good: true },
    { text: '"former view" = the first view mentioned in sentence 1; "latter" = the second', good: true },
    { text: 'Antithesis (Variation B) is powerful but requires careful logic — only use if confident' },
  ];

  const introSlots = [
    { num: 1, role: 'Hook', template: 'Opinions are divided on whether S1 + V1 or whether S2 + V2.' },
    { num: 2, role: 'Thesis', template: 'While I understand the logic behind the former view, I am still in favour of the latter.' },
  ];

  const body2Slots = [
    { num: 8, role: 'Pivot', template: 'Nevertheless, I still believe that S2 + V2 for several reasons.' },
    { num: 9, role: 'Reason 1', template: 'Chief among these is that S + V.' },
    { num: 10, role: 'Support', triplet: true },
    { num: 11, role: 'Reason 2', template: 'The second reason is that S + V.' },
    { num: 12, role: 'Support', triplet: true },
  ];

  const conclSlots = [
    { num: 13, role: 'Acknowledge', template: 'In conclusion, it is understandable why some may argue that S1 + V1.' },
    { num: 14, role: 'Final', template: 'However, I would take the view that S2 + V2.' },
  ];

  return (
    <div>
      <IdentifyBanner signals={['"Discuss both views and give your own opinion"', '"Some believe... Others argue..."']} />

      <VariationTab variations={variations} active={variation} onChange={setVariation} />

      {variation === 'B' && (
        <div className="mb-4 p-3 bg-rose-50 border border-rose-200 rounded-lg text-sm text-rose-800">
          <span className="font-semibold">What is antithesis?</span> The writer introduces a limitation or counterpoint to View 1 <em>within</em> Body Paragraph 1 — then pivots to Body 2. This weakens the opposing argument before the writer even presents their own view.
        </div>
      )}

      <ParagraphSection title="Introduction" wordRange="60–80" colors={INTRO} slots={introSlots} />

      {variation === 'A' && (
        <ParagraphSection title="Body Paragraph 1 — View 1 (the view you disagree with more)" wordRange="90–110" colors={BODY1} slots={[
          { num: 3, role: 'Frame', template: 'Those who believe that S1 + V1 may have several arguments.' },
          { num: 4, role: 'Argument 1', template: 'They may well argue that S + V.' },
          { num: 5, role: 'Support', triplet: true },
          { num: 6, role: 'Argument 2', template: 'Another possible argument is that S + V.' },
          { num: 7, role: 'Support', triplet: true },
        ]} />
      )}

      {variation === 'B' && (
        <ParagraphSection title="Body Paragraph 1 — View 1 with Antithesis" wordRange="90–110" colors={BODY1} slots={[
          { num: 3, role: 'Frame', template: 'Those who believe that S1 + V1 may have several arguments.' },
          { num: 4, role: 'Argument 1', template: 'They may well argue that S + V.' },
          { num: 5, role: 'Support', triplet: true },
          { num: 6, role: 'Extended Support', triplet: true },
          { num: 7, role: 'Antithesis', template: 'Nonetheless, S + V.', antithesis: true, annotation: '← this weakens View 1 from within' },
        ]} />
      )}

      <ParagraphSection title="Body Paragraph 2 — Your View" wordRange="90–110" colors={BODY2} slots={body2Slots} />
      <ParagraphSection title="Conclusion" wordRange="50–70" colors={CONCL} slots={conclSlots} />

      <KeyNotes notes={notes} />
    </div>
  );
}

function AdvDisadvEssay() {
  const [variation, setVariation] = useState('A');

  const variations = [
    { id: 'A', label: 'Discuss only — no opinion' },
    { id: 'B', label: 'Outweigh — opinion required' },
  ];

  const notes = [
    { text: '"Discuss advantages and disadvantages" vs "Do advantages outweigh?" — different thesis, different conclusion' },
    { text: 'For Variation B: give MORE paragraph space to the side you support', good: true },
    { text: 'Never add an opinion paragraph if the question only says "discuss"' },
    { text: 'Avoid listing more than 2 points per paragraph — develop each point deeply', good: true },
  ];

  return (
    <div>
      <IdentifyBanner signals={['"Discuss the advantages and disadvantages"', '"Do the advantages outweigh the disadvantages?"']} />

      <div className="mb-4 p-3 bg-rose-50 border border-rose-300 rounded-lg">
        <p className="text-sm font-semibold text-rose-800">
          ⚠ These two question types look similar but require completely different essay structures. Read the question carefully.
        </p>
      </div>

      <VariationTab variations={variations} active={variation} onChange={setVariation} />

      {variation === 'A' && (
        <>
          <ParagraphSection title="Introduction" wordRange="60–80" colors={INTRO} slots={[
            { num: 1, role: 'Hook', template: 'Paraphrase the topic — describe the trend or development.' },
            { num: 2, role: 'Thesis', template: 'This essay will examine both the benefits and drawbacks of S + V.' },
          ]} />
          <ParagraphSection title="Body Paragraph 1 — Advantages" wordRange="90–110" colors={BODY1} slots={[
            { num: 3, role: 'Topic', template: 'There are several notable advantages to S + V.' },
            { num: 4, role: 'Advantage 1', template: 'The primary benefit is that S + V.' },
            { num: 5, role: 'Support', triplet: true },
            { num: 6, role: 'Advantage 2', template: 'Furthermore, S + V.' },
            { num: 7, role: 'Support', triplet: true },
          ]} />
          <ParagraphSection title="Body Paragraph 2 — Disadvantages" wordRange="90–110" colors={BODY2} slots={[
            { num: 8, role: 'Topic', template: 'However, S + V also carries significant drawbacks.' },
            { num: 9, role: 'Disadvantage 1', template: 'The most notable concern is that S + V.' },
            { num: 10, role: 'Support', triplet: true },
            { num: 11, role: 'Disadvantage 2', template: 'In addition, S + V.' },
            { num: 12, role: 'Support', triplet: true },
          ]} />
          <ParagraphSection title="Conclusion" wordRange="50–70" colors={CONCL} slots={[
            { num: 13, role: 'Summarize', template: 'In conclusion, while S + V brings clear advantages such as [X], it also presents challenges including [Y].' },
            { num: 14, role: 'Balanced Close', template: 'The extent to which the benefits outweigh the drawbacks depends largely on [condition/individual context].' },
          ]} />
        </>
      )}

      {variation === 'B' && (
        <>
          <ParagraphSection title="Introduction" wordRange="60–80" colors={INTRO} slots={[
            { num: 1, role: 'Hook', template: 'Paraphrase the topic.' },
            { num: 2, role: 'Thesis', template: 'Although S + V has certain drawbacks, I believe the advantages considerably outweigh the disadvantages.' },
          ]} />
          <ParagraphSection title="Body Paragraph 1 — Minor Side" wordRange="70–90" colors={BODY1} slots={[
            { num: 3, role: 'Topic', template: 'Admittedly, there are some [disadvantages/advantages] worth considering.' },
            { num: 4, role: 'Point', template: 'The most significant of these is that S + V.' },
            { num: 5, role: 'Support', triplet: true },
            { num: 6, role: 'Pivot', template: 'Despite this, these concerns are outweighed by the benefits.' },
          ]} />
          <ParagraphSection title="Body Paragraph 2 — Major Side (your position)" wordRange="100–120" colors={BODY2} slots={[
            { num: 7, role: 'Topic', template: 'The [advantages/disadvantages] of S + V are, however, more substantial.' },
            { num: 8, role: 'Reason 1', template: 'Firstly, S + V.' },
            { num: 9, role: 'Support', triplet: true },
            { num: 10, role: 'Reason 2', template: 'Moreover, S + V.' },
            { num: 11, role: 'Support', triplet: true },
          ]} />
          <ParagraphSection title="Conclusion" wordRange="50–70" colors={CONCL} slots={[
            { num: 12, role: 'Restate', template: 'In conclusion, while there are valid concerns about S + V,' },
            { num: 13, role: 'Final', template: 'I maintain that the advantages are more significant and far-reaching than the disadvantages.' },
          ]} />
        </>
      )}

      <KeyNotes notes={notes} />
    </div>
  );
}

function ProblemSolutionEssay() {
  const [variation, setVariation] = useState('A');

  const variations = [
    { id: 'A', label: 'Problems → Solutions' },
    { id: 'B', label: 'Causes → Solutions' },
  ];

  const notes = [
    { text: 'Mirror structure is essential: Solution 1 solves Problem/Cause 1, Solution 2 solves Problem/Cause 2', good: true },
    { text: 'Do NOT give your opinion unless specifically asked' },
    { text: 'Use tentative modal verbs for solutions: "could", "would", "should", "might"', good: true },
    { text: 'Thesis must be a "signpost thesis" — tell the reader what the essay will cover', good: true },
  ];

  const introSlotsA = [
    { num: 1, role: 'Hook', template: 'S + V has become an increasingly serious issue in recent years.' },
    { num: 2, role: 'Thesis', template: 'This essay will examine the main problems caused by S + V and propose effective solutions.' },
  ];

  const introSlotsB = [
    { num: 1, role: 'Hook', template: 'S + V has become an increasingly serious issue in recent years.' },
    { num: 2, role: 'Thesis', template: 'This essay will explore the root causes of S + V and suggest possible solutions.' },
  ];

  const body1SlotsA = [
    { num: 3, role: 'Frame', template: 'There are several significant problems associated with S + V.' },
    { num: 4, role: 'Problem 1', template: 'The most pressing issue is that S + V.' },
    { num: 5, role: 'Support', triplet: true },
    { num: 6, role: 'Problem 2', template: 'A further problem is that S + V.' },
    { num: 7, role: 'Support', triplet: true },
  ];

  const body1SlotsB = [
    { num: 3, role: 'Frame', template: 'There are several root causes of S + V.' },
    { num: 4, role: 'Cause 1', template: 'The primary reason for this is that S + V.' },
    { num: 5, role: 'Support', triplet: true },
    { num: 6, role: 'Cause 2', template: 'Another contributing factor is that S + V.' },
    { num: 7, role: 'Support', triplet: true },
  ];

  const body2SlotsA = [
    { num: 8, role: 'Frame', template: 'Fortunately, there are practical measures that could address these issues.' },
    { num: 9, role: 'Solution 1', template: 'One effective solution would be to V.', annotation: '← mirrors Problem 1' },
    { num: 10, role: 'Support', triplet: true },
    { num: 11, role: 'Solution 2', template: 'In addition, S + V.', annotation: '← mirrors Problem 2' },
    { num: 12, role: 'Support', triplet: true },
  ];

  const body2SlotsB = [
    { num: 8, role: 'Frame', template: 'Fortunately, there are practical measures that could address these issues.' },
    { num: 9, role: 'Solution 1', template: 'One effective solution would be to V.', annotation: '← addresses Cause 1' },
    { num: 10, role: 'Support', triplet: true },
    { num: 11, role: 'Solution 2', template: 'In addition, S + V.', annotation: '← addresses Cause 2' },
    { num: 12, role: 'Support', triplet: true },
  ];

  const conclSlots = [
    { num: 13, role: 'Restate', template: 'In conclusion, S + V poses serious challenges, particularly [problem 1] and [problem 2].' },
    { num: 14, role: 'Final', template: 'Nevertheless, by [solution 1] and [solution 2], these issues can be effectively managed.' },
  ];

  return (
    <div>
      <IdentifyBanner signals={['"What are the problems and what solutions can you suggest?"', '"What are the causes of this and what can be done?"']} />

      <div className="mb-4 p-3 bg-sky-50 border border-sky-200 rounded-lg">
        <p className="text-sm text-sky-800">These two sub-types (Problems vs Causes) share the same structure — only the Body 1 language differs.</p>
      </div>

      <VariationTab variations={variations} active={variation} onChange={setVariation} />

      <ParagraphSection
        title="Introduction"
        wordRange="60–80"
        colors={INTRO}
        slots={variation === 'A' ? introSlotsA : introSlotsB}
      />
      <ParagraphSection
        title={variation === 'A' ? 'Body Paragraph 1 — Problems' : 'Body Paragraph 1 — Causes'}
        wordRange="90–110"
        colors={BODY1}
        slots={variation === 'A' ? body1SlotsA : body1SlotsB}
      />
      <ParagraphSection
        title="Body Paragraph 2 — Solutions"
        wordRange="90–110"
        colors={BODY2}
        slots={variation === 'A' ? body2SlotsA : body2SlotsB}
      />
      <ParagraphSection title="Conclusion" wordRange="50–70" colors={CONCL} slots={conclSlots} />

      <KeyNotes notes={notes} />
    </div>
  );
}

function TwoPartEssay() {
  const notes = [
    { text: 'CRITICAL: both questions must be answered fully — neglecting one destroys your Task Response score' },
    { text: 'Never mix answers from Q1 and Q2 in the same paragraph' },
    { text: 'The conclusion must briefly address BOTH questions — not just one', good: true },
    { text: 'Do NOT give a personal opinion unless one of the questions specifically asks for it' },
  ];

  return (
    <div>
      <IdentifyBanner signals={['"Why is this? What can be done?"', '"What are the reasons? What are the effects?"', 'Two separate questions at the end']} />

      <div className="mb-4 p-3 bg-sky-50 border border-sky-200 rounded-lg">
        <p className="text-sm text-sky-800">This type has only one standard structure. Your only task is to answer <strong>BOTH questions fully</strong> — one per body paragraph.</p>
      </div>

      <ParagraphSection title="Introduction" wordRange="60–80" colors={INTRO} slots={[
        { num: 1, role: 'Hook', template: 'Paraphrase the overall situation or trend described in the prompt.' },
        { num: 2, role: 'Thesis Map', template: 'This essay will address why S + V and what measures can be taken to V.', annotation: 'The thesis maps directly to the two questions.' },
      ]} />
      <ParagraphSection title="Body Paragraph 1 — Answer Question 1" wordRange="90–110" colors={BODY1} slots={[
        { num: 3, role: 'Topic', template: 'There are several reasons why S + V.' },
        { num: 4, role: 'Reason 1', template: 'Firstly, S + V.' },
        { num: 5, role: 'Support', triplet: true },
        { num: 6, role: 'Reason 2', template: 'Furthermore, S + V.' },
        { num: 7, role: 'Support', triplet: true },
      ]} />
      <ParagraphSection title="Body Paragraph 2 — Answer Question 2" wordRange="90–110" colors={BODY2} slots={[
        { num: 8, role: 'Topic', template: 'In terms of what can be done, there are several viable approaches.' },
        { num: 9, role: 'Measure 1', template: 'One important step would be to V.' },
        { num: 10, role: 'Support', triplet: true },
        { num: 11, role: 'Measure 2', template: 'Additionally, S + V.' },
        { num: 12, role: 'Support', triplet: true },
      ]} />
      <ParagraphSection title="Conclusion" wordRange="50–70" colors={CONCL} slots={[
        { num: 13, role: 'Q1 Summary', template: 'In conclusion, S + V primarily because [brief reason 1] and [brief reason 2].' },
        { num: 14, role: 'Q2 Summary', template: 'To address this, [brief measure 1] and [brief measure 2] are recommended.' },
      ]} />

      <KeyNotes notes={notes} />
    </div>
  );
}

// ─── Top-level tabs ───────────────────────────────────────────────────────────

const TABS = [
  { id: 'opinion',     label: 'Opinion',                emoji: '✍️',  subtitle: 'Agree / Disagree' },
  { id: 'discussion',  label: 'Discussion',             emoji: '💬',  subtitle: '2 Views' },
  { id: 'advdisadv',  label: 'Adv & Disadv',           emoji: '⚖️',  subtitle: 'Advantages & Disadvantages' },
  { id: 'problems',   label: 'Problems & Solutions',    emoji: '🔧',  subtitle: 'Problems / Causes' },
  { id: 'twopart',    label: 'Two-Part Questions',      emoji: '❓',  subtitle: 'Direct Questions' },
];

const PANELS = {
  opinion:    <OpinionEssay />,
  discussion: <DiscussionEssay />,
  advdisadv:  <AdvDisadvEssay />,
  problems:   <ProblemSolutionEssay />,
  twopart:    <TwoPartEssay />,
};

export default function IELTSWritingGuide() {
  const [activeTab, setActiveTab] = useState('opinion');

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">IELTS Task 2</h1>
          <p className="text-gray-500 mt-1 text-base">Writing Structure Guide</p>
        </div>

        {/* Tab bar */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 mb-6 overflow-hidden">
          <div className="flex overflow-x-auto scrollbar-hide">
            {TABS.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 min-w-[120px] flex flex-col items-center gap-1 px-4 py-4 text-sm font-semibold transition-colors whitespace-nowrap border-b-2 ${
                  activeTab === tab.id
                    ? 'bg-indigo-600 text-white border-indigo-600'
                    : 'bg-white text-gray-500 border-transparent hover:bg-gray-50 hover:text-indigo-600'
                }`}
              >
                <span className="text-xl md:text-2xl">{tab.emoji}</span>
                <span className="hidden md:block text-center leading-tight">{tab.label}</span>
                <span className="block md:hidden text-center text-xs leading-tight">{tab.subtitle}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active tab label (desktop) */}
        <div className="mb-4 hidden md:block">
          <h2 className="text-xl font-bold text-gray-800">
            {TABS.find(t => t.id === activeTab)?.label}
            <span className="ml-2 text-base font-normal text-gray-400">— {TABS.find(t => t.id === activeTab)?.subtitle}</span>
          </h2>
        </div>

        {/* Panel */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 md:p-7">
          {PANELS[activeTab]}
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">IELTS Task 2 Writing Structure Guide</p>
      </div>
    </div>
  );
}
