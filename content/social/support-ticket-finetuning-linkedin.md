Can a 16 GB Mac fine-tune a useful support-ticket router—and how does it compare with a cloud GPU? 🤔

For my Week 5 project at The Gen Academy, I tried both. 🛠️

🖥️ Local: Qwen 4B on my Mac Mini M4, using MLX.
☁️ Cloud: Llama 3B on Fireworks, using a dedicated H200.

I prepared 585 labeled tickets across seven categories, excluded two near-duplicate training examples, and used the same 372 training, 94 validation, and 117 test tickets for both setups.

Both models trained with LoRA for three epochs. On the same held-out test set:

✅ Mac: 44.4% → 82.9% accuracy
✅ Fireworks: 41.0% → 83.8% accuracy

Different model families, sizes, and precision. Just one correct ticket apart. That's not enough to declare a platform winner.

The biggest surprise came after training. 📉

Local validation accuracy:
90.4% with the adapter → 71.3% after a 4-bit merge → 90.4% with an 8-bit projection export.

Recovered without retraining. The embeddings stayed at 4-bit.

🎯 My takeaway: evaluate the exact artifact you will deploy. Successful training doesn't guarantee a successful export.

Next: review ambiguous labels and strengthen weak categories. Active Directory recall was only 4/9 locally and 3/9 in the cloud.

Thanks to Aishwarya Srinivasan and Arvind Narayanamurthy for pushing us to learn by building. 🙏

🔗 Full journal: https://nishokvg.github.io/posts/fine-tuning-support-ticket-router-mac-fireworks/
💻 GitHub: https://github.com/nishokvg/finetuning-compare

#FineTuning #LoRA #MLX #FireworksAI #LLMEvaluation #AIEngineering
