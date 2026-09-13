Can a RAG system retrieve better and still not become a better product? 🤔

For my Week 4 project at The Gen Academy, I evaluated a source-grounded Tamil Agentic GraphRAG across 10 literary works. 📚

The system covers 61 PDFs, 10,416 pages, and 21,746 canonical evidence records. Its LangGraph workflow combines hybrid retrieval, dynamic tools, graph traversal, generation, and strict citation validation.

I tested it with 100 frozen Tamil questions using deterministic checks, Ragas, a Tamil LLM judge, human review, and 200 LangSmith traces.

The results:

✅ Recall@8: 74% → 84%
⚡ p95 latency: 123.7s → 61.5s
⚠️ False refusals: still 60%
📉 Strict passes: 29 → 26

The key finding: in 37 cases, the agent retrieved every labeled source and still refused to answer.

🎯 My takeaway: a retrieval win is not automatically a product win. Good evaluation should reveal the next bottleneck, not just produce a higher score.

Next: repair the generation → citation-validation path.

Thanks to Aishwarya Srinivasan and Arvind Narayanamurthy for pushing us to learn by building. 🙏

🔗 Article: https://nishokvg.github.io/posts/evaluating-tamil-agentic-graphrag/
💻 GitHub: https://github.com/nishokvg/tamil-rag

#AgenticAI #GraphRAG #LangGraph #LangSmith #Ragas #LLMEvaluation #Tamil #AIEngineering
