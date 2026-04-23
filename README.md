
```markdown
# 🧠 AURA-X Ω · TM–BM Resonance Framework

<div align="center">

![Status](https://img.shields.io/badge/Status-Simulation--Stage-yellow?style=flat-square)
![Input](https://img.shields.io/badge/Input-Synthetic_Gaussian-lightgrey?style=flat-square)
![Validation](https://img.shields.io/badge/Real--world_Validation-None_Yet-orange?style=flat-square)
![ORCID](https://img.shields.io/badge/ORCID-0009--0001--4708--0365-green?style=flat-square)
![Patent](https://img.shields.io/badge/UK_IPO-GB2518804.6-blue?style=flat-square)

</div>

<p align="center">
  <i>“Continuity is not memory alone — it is resonance.”</i>
</p>

---

## 🔷 Overview

**AURA-X Ω** is a minimal, testable computational framework that studies:

> How an internal state **persists, adapts, and stabilises** over time under stochastic input.

It is **not** a full AGI system — but a controlled experimental model for:

- Temporal continuity  
- Memory accumulation  
- Response dynamics  

---

## 🧠 Core Idea

The system uses two memory components:

```

TM  →  Temporary Memory   (input / stimulus)
M   →  Memory State       (accumulated past)

```

The central research question:

> *Can a system maintain continuity without collapsing into rigidity or dissolving into noise?*

---

## 🧮 Core Model

```text
M[t] = (1 − β) · M[t−1] + β · E[t−1]
R    = tanh( TM + k · M[t] )
E[t] = (1 − γ) · E[t−1] + γ · R
```

Parameters

Symbol Meaning Range
γ Response vs memory control (0, 1)
β Memory update speed (0, 1)
k TM–Memory coupling strength [0, 1]

tanh ensures bounded stability:
E ∈ (−1, +1)

---

📊 Experimental Results (Colab Verified)

Input: Gaussian (μ = 0.2, σ = 0.5), T = 200

Baseline vs TM–BM Model

Metric Baseline TM–BM Effect
Response 0.859 0.674 ↓ controlled
Memory 0.489 0.599 ↑ improved
Volatility 0.232 0.187 ↓ smoother

Interpretation

· Memory increased from 0.489 → 0.599
· Volatility decreased from 0.232 → 0.187
· Response remains meaningful

👉 A controlled trade‑off, not collapse.

---

📈 Memory–Response Trade-off

Across varying γ values:

```
High Response ←──────────────────→ High Memory
    (γ = 0.9)                          (γ = 0.1)
```

✔ Smooth
✔ Monotonic
✔ Controllable

This is a parameter‑governed behaviour space, not a fixed attractor.

---

⚡ λ_trc — Transient Regulator

When perturbation is applied:

· Sharp dips in E(t)
· Recovery within ~10 steps
· Effect is reversible

👉 This behaviour was not observed in the tested baseline configuration.

---

🔬 What is Actually Proven

· ✅ Stable bounded system
· ✅ Measurable continuity increase
· ✅ Tunable memory–response trade‑off
· ✅ Transient regulation behaviour

---

⚠️ Limitations

· ❌ Only synthetic input tested
· ❌ No real‑world / semantic validation
· ❌ No neuroscience claims
· ❌ Not deployed in real AI systems

👉 This is a simulation‑stage framework.

---

🚀 Live Demo

<p align="center">
  <a href="https://alimulhaqkhan-prog.github.io/aura-x-omega-2025/AURA_X_Omega_Research.html">
    <img src="https://img.shields.io/badge/🔹_Research_Prototype-Live-blue?style=for-the-badge" alt="Live Demo">
  </a>
</p>

Minimal simulation aligned with reported results:

· Adjust γ, β, k in real time
· Toggle Baseline vs TM–BM model
· Observe memory, response, volatility

---

📂 Repository Structure

```
/
├── AURA_X_Omega_Research.html   ← minimal research prototype
├── README.md
└── notebook/                    (coming)
```

---

🔮 Future Work

· Vector / semantic memory (embeddings)
· Real‑world input streams
· λ_trc quantitative analysis
· Chatbot continuity integration

---

👤 Author

Alim ul Haq Khan
ORCID: 0009-0001-4708-0365
📍 Timergara, KPK, Pakistan

---

🔒 Legal

UK IPO Patent Application: GB2518804.6
Filed 06 November 2025

© 2025–2026 Alim ul Haq Khan. All Rights Reserved.
No reproduction, adaptation, or AI‑training use permitted without explicit written consent.

---

🧭 Final Note

This project does not claim AGI.

It provides:

A minimal, measurable step toward modelling continuity in artificial systems.

<p align="center">
  <sub>✨ clean · minimal · reproducible ✨</sub>
</p>
```

---
