Week 4 project complete from The Gen Academy's Mastering Agentic AI cohort 🎓

I built and evaluated a source-grounded Tamil Agentic GraphRAG across 10 literary works. 📚

But the most important result was not that retrieval improved from 74% to 84%.

It was discovering why that improvement was still not enough.

The system works only from its repository corpus:

📚 10 Tamil literary works
📄 61 source PDFs and 10,416 pages
🧾 21,746 canonical evidence records
🕸️ A provenance-backed knowledge graph
🧠 A LangGraph agent with dynamic top-k tool selection
🛡️ Page, source-ID, and quotation validation before an answer is accepted

The end-to-end flow:

PDFs → decoding/OCR → canonical evidence → BM25 + vectors + RRF → Cohere reranking → graph traversal → answer generation → citation validation → answer or abstain

For evaluation, I froze 100 Tamil questions across all 10 works and combined:

🧪 Deterministic evaluators
📊 Ragas metrics
⚖️ A structured Tamil LLM judge
👤 Human reference review and judge calibration
🔎 LangSmith traces for 200 paid runs

The final comparison:

✅ Recall@8: 74% → 84%
⚡ p95 latency: 123.7s → 61.5s
⚠️ False refusals: still 60%
⚠️ Citation fidelity: still about 42%
📉 Strict passes: 29 → 26

The trace-level finding was even more useful: in 37 final cases, the agent retrieved every labeled evidence record and still refused to answer.

That moved the next engineering decision downstream. The immediate bottleneck is not retrieval alone. It is the path from generation to citation validation: faithful quote copying, source-ID handling, context construction, retry, and abstention.

My biggest takeaway from this week:

🎯 A retrieval win is not automatically a product win.

Good evaluation should not simply produce a higher score. It should show where the system fails, keep the claims honest, and tell us what to build next.

A big thanks to Aishwarya Srinivasan and Arvind Narayanamurthy for making these concepts practical and pushing us to learn by building. 🙏

🔗 Technical deep dive: https://nishokvg.github.io/posts/evaluating-tamil-agentic-graphrag/

💻 GitHub: https://github.com/nishokvg/tamil-rag

#AgenticAI #AIEngineering #GraphRAG #RAG #LangGraph #LangSmith #Ragas #LLMEvaluation #Tamil #ResponsibleAI #BuildInPublic #TheGenAcademy
