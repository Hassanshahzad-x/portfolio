# Folklore

### Keeping a family's stories within reach

*Product case study. Hassan Shahzad, Founding Software Engineer (contract), October 2025 to May 2026. [folklore.la](https://folklore.la/)*

---

One recorded interview becomes a family heirloom. Later, the family can return to that person's stories, ask them questions, and hear answers in their cloned voice, drawn from what they actually said.

## Executive summary

Folklore is an interactive family memory and digital legacy platform. It starts with a guided interview of about 60 to 90 minutes. That conversation becomes a personal memory archive, which Folklore calls an Heirloom. Family members can explore it by asking questions in plain language. They can read or listen to the answers, and the spoken answers come in the person's cloned voice.

The product is for families who want more than photographs and home videos. They want the stories, the advice and the small personal details that usually live only in conversation. Folklore gives those stories a form the family can come back to, share among relatives and add to over time.

It is not a general chatbot with a borrowed voice. Every Heirloom is built from one person's own recorded material and kept separate from every other. The product is designed to answer from that material and to say so when a memory isn't there. Folklore has launched as a paid product. Early families are using it, and by the figures reported during the engagement it had reached about $7K in annual recurring revenue.

## The problem

Most family history is never written down. A grandmother's account of how she met her husband, a father's lessons from his first job, the reason a recipe matters: these live in conversation. When that person is gone, the stories often go with them.

Families already save photographs and videos. Those keep a face and a moment, but rarely the story behind them. A recorded interview gets closer, yet a two-hour recording is hard to revisit. Finding the part where Grandpa talks about the war means scrubbing through audio. And a recording can only play back what was said. You can't ask it a follow-up question.

General-purpose AI seems to offer that interactivity, but it brings a serious risk. Ask a typical AI model about a real person's life and it will produce a confident, fluent answer, whether or not it knows anything. In most settings a plausible guess is a minor flaw. When the subject is someone's own mother, a made-up story is not a small error. It feels like a misrepresentation of someone the family loved, and it can undo their trust in the whole experience.

So the problem Folklore takes on is not only how to make memories interactive. It is how to do that while staying faithful to the person.

## The Folklore experience

**It begins with a conversation.** A guided interview of roughly 60 to 90 minutes, held over a recorded video call, captures the person in their own words. Folklore treats this interview as the foundation, not one input among many. Everything the Heirloom knows starts here.

**The interview becomes an archive the family can question.** The recording is transcribed, then cleaned and organized by speaker. It is then indexed so each answer the person gave can be found again by meaning, not by timestamp. No one has to search the recordings by hand. A family member can ask what the person thought about their hometown, and the archive finds the passages where they talked about it.

**Families ask questions and hear grounded answers.** In conversation with an Heirloom, family members can type or speak their questions. Answers are AI-generated responses based on the person's recorded memories. They can be read as text or heard in the person's cloned voice, and a voice conversation mode lets the exchange happen by speaking and listening. When the archive has nothing that supports an answer, the Heirloom is instructed to say so in the person's manner. "That's a bit hazy for me now" is an example. It does not invent a story to fill the gap.

**The family is brought in, and the archive keeps growing.** An Heirloom belongs to a family, not to one account. Relatives are invited by email, and access is granted by role. The family can then add to it through the Memory Journal, which offers 22 guided chapters on the texture of a life: favorite foods and rituals, music, books, humor, home, and quirks. Entries are reviewed and then added to the Heirloom's memory. Over time the interview stops being a single recording and becomes something the family keeps building.

## What makes it different

**The source material is the person's own.** Each Heirloom is built from one person's recorded interview and later family contributions, and stored in its own isolated memory store. One person's memories are kept apart from everyone else's. That separation sets Folklore apart from a general assistant, which draws on everything it has ever read.

**It is designed to be faithful and to show its gaps.** The product puts the person's recorded material first. It is built to acknowledge missing memories rather than paper over them. That restraint is part of what the family is paying for.

**You hear the person's voice, not only read a reply.** Hearing a familiar voice is a different experience from reading text on a screen. Folklore uses a professional voice clone of the person, so families can listen as well as read.

**A review step before a family meets it.** The creation process calls for a structured stress test of 25 questions in five areas: fabrication, emotional nuance, values, specific memory recall, and consistency over time, with a person judging the answers. Activation also requires passing automated checks of both conversation and voice.

**It continues past the interview.** Family invitations and the Memory Journal turn a single session into an ongoing family project.

**It is a paid product, not a prototype.** Folklore runs on subscriptions: a free text tier, two paid plans that add voice, a one-month trial, and optional one-time voice top-ups. Billing, trials and renewals run automatically, and families manage their own plans. People are paying for the experience, which is the clearest early signal that it is worth something to them.

## Evidence and traction

The figures below were reported during the engagement. They describe an early product with real families, not a scaled business.

**Commercial validation.** Folklore reached a reported $7K+ in annual recurring revenue from its paid subscription plans. It is modest in absolute terms. It matters because families chose to pay for a product in a category many people are wary of.

**Real usage.** The product reached a reported 20+ active users across 5+ families, with 60+ live Heirlooms. That is a small base, but it is real families using a paid product.

**A faster, repeatable creation process.** Building and reviewing a new Heirloom, from onboarding through quality review, was reported to fall from about six hours to under 90 minutes, once the steps were turned into a guided admin workflow. That change makes each new family cheaper to serve without skipping the review.

**Fewer invented memories.** In internal comparisons during development, grounded answers were reported to show about 70% fewer hallucinations than general-purpose AI responses to the same questions. Treat this as directional evidence from the team's own testing, not a benchmark that holds for every conversation.

These numbers show real usage and initial commercial validation. They do not yet show product-market fit, long-term retention or growth, and this case study claims none of those.

## Building for trust

A product like Folklore makes three kinds of answer. A responsible version has to tell them apart.

1. **A retrieved memory.** The person said this, and the archive found it.
2. **A generated response grounded in memories.** The Heirloom answers a new question in the person's voice, drawing on things they did say. The wording is new. The substance comes from the record.
3. **A plausible but unsupported answer.** The response sounds right but has no basis in the person's material. This is the failure Folklore is built to avoid.

The product's safeguards target the gap between the second and third kinds:

- **Answers come from the person's own material.** Each question first retrieves the most relevant passages from that person's archive, and the answer is generated from them.
- **Context stays intact.** The archive is divided along the turns of the conversation, so the person's answers stay whole, usually alongside the question that prompted them, rather than being cut mid-thought.
- **Each Heirloom is isolated.** Every person's memories sit in their own store, so details can't leak in from someone else.
- **Uncertainty is intended behavior.** Weak matches are filtered out. When nothing relevant is found, the Heirloom is instructed to express uncertainty instead of inventing personal history.
- **Review comes before release.** The stress test probes for fabricated memories, wrong dates, poor recall and answers out of character before a family hears the Heirloom.

These are safeguards, not guarantees. They reduce the risk of a fabricated memory but do not eliminate it. Folklore is also clear about what an Heirloom is. The voice is a clone. The responses are AI-generated, based on what the person shared, and not a recording of everything they would have said. An Heirloom keeps a person's stories and some of their manner. It does not claim to capture their whole personality or to stand in for them.

Privacy matters as much as accuracy in this category. Folklore's current protections:

- Heirlooms are private by default, and only invited family members can open one.
- Access is set by role, and the database enforces who can see what.
- Cached voice audio is encrypted and kept in private storage.
- Deleting an Heirloom also removes its source material.

Clear consent from the person being recorded, especially for voice cloning, and transparent policies on how family memories are handled are central obligations for any product in this space. They remain priorities as Folklore matures.

## The larger opportunity

Families have always found ways to keep their stories: letters, albums, oral histories, home video. Each format made memories easier to keep but not easier to talk to. An interactive family archive is a new kind of keepsake. It can be searched, questioned, listened to and added to across generations.

Folklore's early work points to where this could go. Archives could grow richer as more relatives contribute. The same Heirloom could be shared by grandchildren who never met the person. A family's history could be explored the way you would ask an elder, not the way you would search a database. The hard part is not producing fluent answers. It is doing so faithfully, privately and with the family's trust, and that is where Folklore has put its effort.

## Closing

Most family stories survive only as long as someone remembers to tell them. Folklore gives those stories somewhere to live. It doesn't replace the person. It keeps their words close enough that the next generation can still ask.

---

## Appendix A: Technical note

For technical readers only. None of this is needed to follow the case study.

- **Web app:** Next.js and TypeScript on Supabase (Postgres, auth, row-level security, private storage), with Stripe for subscriptions and billing.
- **Memory service:** a separate Python (FastAPI) retrieval service. Transcripts are split along speaker turns and embedded, and each Heirloom gets its own vector collection in Qdrant. Questions retrieve the top passages by cosine similarity above a relevance threshold, and the answer is generated with Google Gemini.
- **Voice:** ElevenLabs professional voice clones. Generated audio is cached per message, encrypted with AES-256-GCM, and replayed from cache instead of being synthesized again.
- **Operations:** the memory service runs in Docker on Railway, monitored with Sentry and PostHog.

## Appendix B: About the figures

Each figure was checked against the product code, project documentation and available records. The code supports the mechanisms behind them. No primary data was available to reproduce the numbers themselves, so each is labelled "reported" above.

| Figure | Source | Status | Needed to verify |
|---|---|---|---|
| $7K+ ARR | Resume and prior case study | Reported. No revenue calculation or Stripe export reviewed. | Stripe MRR snapshot × 12 at a stated date, recurring plans only (excluding one-time top-ups) |
| 20+ active users, 5+ families | Resume | Reported. "Active" is not defined. No dated snapshot. | Dated database count with a stated definition of "active" |
| 60+ live Heirlooms | Resume and prior case study | Reported. "Live" taken to mean activated. | Dated count of activated Heirlooms |
| 6 hours to under 90 minutes | Resume and prior case study | Reported. Covers onboarding plus quality review per Heirloom. No time logs. | Timed runs of the old and new workflows |
| About 70% fewer hallucinations | Resume and prior case study | Reported. No evaluation set, baseline or method on record. | Fixed question set, a scoring rubric, and side-by-side results for grounded vs general-purpose answers |
| 65% lower voice latency, 45% lower voice cost | Resume and prior case study | Not used in the main text. No before or after measurements found. | Latency and cost logs before and after caching, under stated conditions |
| Under 120 ms retrieval, 40% faster first token, 150+ concurrent requests, image size 8.2 GB to 3.7 GB | Prior case study | Not used. Engineering benchmarks without user context, and no measurements found. | Benchmark scripts and results |
