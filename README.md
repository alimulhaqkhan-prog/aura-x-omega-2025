🧠 AURA-X Ω · TM–BM Resonance Framework

"Continuity is not memory alone — it is resonance."

"Status" (https://img.shields.io/badge/status-simulation--stage-orange)
"Input" (https://img.shields.io/badge/input-synthetic--gaussian-blue)
"Validation" (https://img.shields.io/badge/validation-limited-lightgrey)
"ORCID" (https://img.shields.io/badge/ORCID-0009--0001--4708--0365-green)
"Patent" (https://img.shields.io/badge/UKIPO-GB2518804.6-blue)

---

🔷 Overview

AURA-X Ω is a minimal, testable computational framework that studies temporal emotional continuity — how an internal state:

- persists
- adapts
- stabilises

over time under stochastic input.

The system is intentionally simple and measurable, focusing on one core question:

«Can a system maintain meaningful continuity without collapsing into rigidity or dissolving into noise?»

---

🧠 Core Idea

The model introduces a dual interaction between input (TM) and accumulated state (M):

- TM (Temporary Memory): current input signal
- M (Memory State): accumulated past state (continuity carrier)

Their interaction produces a bounded emotional state E(t).

---

🧮 Core Model

M[t] = (1 - β) · M[t-1] + β · E[t-1]
R    = tanh(TM + k · M[t])
E[t] = (1 - γ) · E[t-1] + γ · R

Parameters

Symbol| Meaning| Range
γ| Reactivity vs memory balance| (0,1)
β| Memory update rate| (0,1)
k| TM–M coupling strength| [0,1]
λ_trc| Transient regulator (spike control)| ℝ

The "tanh" nonlinearity ensures:

«E(t) ∈ (-1, +1) → bounded and stable by construction»

---

📊 Experimental Setup

All experiments performed in Google Colab.

- Input: Gaussian noise
- μ = 0.2, σ = 0.5
- T = 200 time steps

---

📈 Results

🔹 Baseline vs TM–BM Model

Parameters: γ = 0.50, β = 0.30, k = 0.30

Metric| Definition| Baseline| TM–BM| Δ
Response| corr(TM, E)| 0.859| 0.674| ↓
Memory| corr(E[t], E[t−1])| 0.489| 0.599| +22% ↑
Volatility| std(ΔE)| 0.232| 0.187| −19% ↓

🧠 Interpretation

The TM–BM system:

- increases temporal continuity
- reduces instability
- while preserving meaningful responsiveness

This demonstrates a controlled balance, not noise injection.

---

🔁 Memory–Response Trade-off

Across:

γ ∈ {0.1, 0.3, 0.5, 0.7, 0.9}

The system produces a:

«smooth, monotonic trade-off curve»

High Response  ←──────────────→  High Memory
   (γ → 1)                         (γ → 0)

Key Insight

This is a parameter-controlled behaviour space, not a fixed attractor.

---

⚡ λ_trc Regulator (Transient Control)

When transient penalties are applied:

- sharp dips appear in E(t)
- system recovers within ~10 steps
- effect is reversible and bounded

Importance

This introduces:

«controlled, temporary disruption without destroying continuity»

⚠️ Note: requires further controlled validation

---

🚀 Live Demo

🔹 Research Prototype — TM–BM Continuity Demo
https://alimulhaqkhan-prog.github.io/aura-x-omega-2025/AURA_X_Omega_Research.html

Minimal interactive simulation aligned with reported results

- adjust γ, β, k
- toggle Baseline vs TM–BM
- observe Memory, Response, Volatility
- explore λ_trc behaviour

👉 This demo corresponds directly to the experimental setup above.

---

📌 Scope and Limitations

✅ Validated

- Bounded stable output
- Measurable increase in temporal continuity
- Controllable memory–response trade-off
- Transient regulation via λ_trc

❌ Not Yet Validated

- Real-world / semantic inputs
- Human behavioural or affective data
- Neuroscience claims
- Deployment in production AI systems

«This is a simulation-stage framework.»

---

🔮 Future Directions

1. Replace scalar TM with vector embeddings
2. Test on non-stationary real data
3. Quantify λ_trc (depth, recovery, sensitivity)
4. Integrate as continuity layer in LLM systems

---

📁 Repository Structure

/
├── AURA_X_Omega_Research.html   ← main research demo
├── README.md
└── notebook/                   ← experiments (coming)

---

📚 Citation

@article{khan2025aurax,
  title   = {A Dual Memory Framework for Ensuring Emotional Continuity in AI Systems},
  author  = {Khan, Alim ul Haq},
  year    = {2025},
  doi     = {10.5281/zenodo.17845294},
  publisher = {Zenodo}
}

---

👤 Author

Alim ul Haq Khan
ORCID: https://orcid.org/0009-0001-4708-0365
GitHub: https://github.com/alimulhaqkhan-prog
Location: Timergara, KPK, Pakistan

UK IPO Patent: GB2518804.6

---

⚖️ License

Copyright © 2025–2026
All Rights Reserved

---

🧠 Final Note

«This work does not claim to model full emotion.
It demonstrates a minimal, quantifiable mechanism of continuity under memory coupling.»

---