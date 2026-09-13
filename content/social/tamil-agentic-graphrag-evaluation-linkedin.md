Retrieval improved from 74% to 84%.

But I could not honestly say my RAG system had become better.

I recently completed a full evaluation of a source-grounded Tamil Agentic GraphRAG system covering:

- 10 Tamil literary works
- 61 source PDFs and 10,416 pages
- 21,746 canonical evidence records
- 100 frozen Tamil evaluation questions
- 200 verified paid LangSmith traces

The evaluation combined deterministic checks, Ragas, a structured Tamil LLM judge, partial human calibration, and LangSmith observability.

The final configuration improved Recall@8 from 74% to 84% and reduced p95 latency from 123.7 seconds to 61.5 seconds.

But false refusals remained at 60%. Citation fidelity remained near 42%. Strict passes fell from 29 to 26.

The most useful finding came from the traces: in 37 final cases, the agent retrieved every labeled evidence record and still refused to answer.

That moved the next engineering decision downstream. The immediate problem is no longer retrieval alone. It is the path from generation to citation validation: quote copying, source-ID handling, context construction, retry, and abstention.

I also isolated Cohere reranking in a healthy retrieval-only experiment. Recall improved from 68.7% to 84.0%, confirming that reranking helps retrieval on this dataset. It still does not prove better end-to-end answers.

My biggest lesson from this project:

A retrieval win is not automatically a product win.

Good evaluation should not merely produce a higher score. It should expose where the system fails, preserve uncertainty, and tell us what to build next.

Technical article: https://nishokvg.github.io/posts/evaluating-tamil-agentic-graphrag/

GitHub: https://github.com/nishokvg/tamil-rag

#AgenticAI #GraphRAG #RAG #LangGraph #LangSmith #Ragas #LLMEvaluation #Tamil #AIEngineering #ResponsibleAI
