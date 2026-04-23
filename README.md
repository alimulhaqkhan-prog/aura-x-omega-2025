🧠 AURA-X Ω · TM–BM Resonance Framework

<p align="center">
  <b>Minimal · Measurable · Reproducible</b>
</p><p align="center">
  <img src="https://img.shields.io/badge/status-simulation--stage-orange" />
  <img src="https://img.shields.io/badge/input-synthetic--gaussian-blue" />
  <img src="https://img.shields.io/badge/validation-limited-lightgrey" />
  <br>
  <img src="https://img.shields.io/badge/ORCID-0009--0001--4708--0365-green" />
  <img src="https://img.shields.io/badge/UKIPO-GB2518804.6-blue" />
</p>---

«"Continuity is not memory alone — it is resonance."»

---

🔷 Overview

AURA-X Ω is a minimal, testable computational framework that studies:

«how an internal state persists, adapts, and stabilises over time under stochastic input.»

It is not a full AGI system — but a controlled experimental model for:

- temporal continuity
- memory accumulation
- response dynamics

---

🧠 Core Idea

The system uses two components:

TM → Temporary Memory (input / stimulus)
M  → Memory State (accumulated past)

The goal:

«Can a system maintain continuity without collapsing into rigidity or dissolving into noise?»

---

🧮 Core Model

M[t] = (1 − β) · M[t−1] + β · E[t−1]

R    = tanh( TM + k · M[t] )

E[t] = (1 − γ) · E[t−1] + γ · R

Parameters

Symbol| Meaning
γ| response vs memory control
β| memory update speed
k| TM–memory coupling strength

"tanh" ensures bounded stability:
E ∈ (−1, +1)

---

📊 Experimental Results (Colab Verified)

Input: Gaussian (μ = 0.2, σ = 0.5), T = 200

Baseline vs TM–BM Model

Metric| Baseline| TM–BM| Effect
Response| 0.859| 0.674| ↓ controlled
Memory| 0.489| 0.599| ↑ improved
Volatility| 0.232| 0.187| ↓ smoother

Interpretation

- Memory increased (+22%)
- Volatility reduced (−19%)
- Response remains meaningful

👉 This shows a controlled trade-off, not collapse

---

📈 Memory–Response Trade-off

Across γ values:

High Response  ←──────────────→  High Memory
(γ = 0.9)                     (γ = 0.1)

✔ Smooth
✔ Monotonic
✔ Controllable

This is a parameter-governed behaviour space, not a fixed system.

---

⚡ λ_trc (Transient Regulator)

When perturbation is applied:

- sharp dips in E(t)
- recovery in ~10 steps
- effect is reversible

👉 This behaviour does NOT appear in simple baseline filters

---

🔬 What is Actually Proven

✔ Stable bounded system
✔ Measurable continuity increase
✔ Tunable memory–response trade-off
✔ Transient regulation behaviour

---

⚠️ Limitations

❌ Only synthetic input tested
❌ No real-world / semantic validation
❌ No neuroscience claims
❌ Not deployed in real AI systems

👉 This is a simulation-stage framework

---

🚀 Live Demo

🔹 Interactive Prototype (Recommended)
https://alimulhaqkhan-prog.github.io/aura-x-omega-v2-trainable-R/AURA_X_Omega_Trainable_R.html

Features:

- adjust γ, β, k live
- toggle baseline vs TM–BM
- real-time metrics

---

📂 Repository Structure

/
├── AURA_X_Omega_Research.html
├── README.md
└── notebook/   (coming)

---

🔮 Future Work

- vector / semantic memory (embeddings)
- real-world input streams
- λ_trc quantitative analysis
- chatbot continuity integration

---

👤 Author

Alim ul Haq Khan
ORCID: https://orcid.org/0009-0001-4708-0365

---

🔒 Legal

UK IPO Patent: GB2518804.6

All Rights Reserved
No reproduction or AI training use allowed without permission

---

🧭 Final Note

This project does not claim AGI.

It provides:

«a minimal, measurable step toward modelling continuity in artificial systems.»