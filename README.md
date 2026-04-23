# AURA-X Ω &nbsp;·&nbsp; TM–BM Resonance Framework

> *"Continuity is not memory alone — it is resonance."*

[![Status](https://img.shields.io/badge/Status-Simulation--Stage-yellow)]()
[![Input](https://img.shields.io/badge/Input-Synthetic%20Gaussian-lightgrey)]()
[![Validation](https://img.shields.io/badge/Real--world%20Validation-None%20Yet-orange)]()
[![ORCID](https://img.shields.io/badge/ORCID-0009--0001--4708--0365-green)](https://orcid.org/0009-0001-4708-0365)
[![Patent](https://img.shields.io/badge/UK%20IPO-GB2518804.6-blue)]()

---

**A minimal, testable implementation exploring how memory and responsiveness can be balanced in a bounded nonlinear system — not a complete cognitive architecture.**

---

## What is AURA-X Ω?

AURA-X Ω is a computational framework that studies **temporal emotional continuity** — how internal state persists, drifts, and stabilises over time — through resonance between two memory structures:

```
TM  →  Temporary Memory   (current stimulus / short-term input)
M   →  Memory State       (accumulated past state; continuity carrier)
```

The core question: *can a system maintain meaningful temporal continuity without collapsing into rigidity or dissolving into noise?*

---

## Core Model

```
M[t] = (1 − β) · M[t−1]  +  β · E[t−1]       # memory state update
R    = tanh( TM  +  k · M[t] )                 # resonance signal
E[t] = (1 − γ) · E[t−1]  +  γ · R             # emotional continuity state
```

**Full equation (original formulation):**

```
E₀ = tanh( R(TM, BM) − D + λ_faith + λ_sys + λ_trc )
```

### Parameter Definitions

| Symbol | Role | Range |
|---|---|---|
| `γ` | Temporal smoothing (memory vs. reactivity) | (0, 1) |
| `β` | Memory learning rate | (0, 1) |
| `k` | TM–M coupling strength | [0, 1] |
| `D` | Decay / emotional cooling | ≥ 0 |
| `λ_trc` | Truth-resonance regulator (transient spike) | ∈ ℝ |

`tanh` keeps `E₀ ∈ (−1, +1)` — mathematically bounded by construction.

---

## Experimental Results

All experiments run in Google Colab. Input: synthetic Gaussian (`μ = 0.2, σ = 0.5`, `T = 200`).

### Baseline vs TM–BM Model

Parameters: `γ = 0.50, β = 0.30, k = 0.30`

| Metric | Definition | Baseline | TM–BM | Δ |
|---|---|---|---|---|
| **Response** | corr(TM, E) | 0.859 | 0.674 | −0.185 |
| **Memory** | autocorr E[t], E[t−1] | 0.489 | **0.599** | **+0.110 ↑** |
| **Volatility** | σ(ΔE) | 0.232 | **0.187** | **−0.045 ↓** |

**Interpretation:**  
The TM–BM model achieves higher temporal continuity (relative memory increase: +22%) and lower volatility (−19%) while preserving meaningful input responsiveness. This demonstrates a controlled trade-off between memory and responsiveness, governed by γ.

### Memory–Response Trade-off

Across `γ ∈ {0.1, 0.3, 0.5, 0.7, 0.9}`, the system traces a smooth, monotonic curve:

```
High Response  ←──────────────────────→  High Memory
    (γ = 0.9)                                (γ = 0.1)
```

This is a **parameter-controlled behaviour space**, not a fixed attractor.

### λ_trc Regulator (Transient Control)

When truth-resonance penalties are applied (P = 0.08, magnitude −0.8):

- Sharp, measurable dips appear in E(t)
- System recovers to prior trajectory within ~10 steps
- Effect is **transient and reversible**

This is the strongest feature unique to the AURA-X Ω formulation relative to a plain filter.

> **Note:** λ_trc behaviour is preliminary and requires further controlled experiments to fully characterise recovery dynamics.

---

## Live Demo

🔹 👉 https://alimulhaqkhan-prog.github.io/aura-x-omega-2025/AURA_X_Omega_Research.html

*Interactive simulation: adjust γ, β, k in real time · toggle Baseline vs TM–BM · live metrics*

---

## Scope and Limitations

**Validated in this repository:**
- ✅ Bounded stable output under stochastic input
- ✅ Measurable increase in temporal continuity vs baseline
- ✅ Controllable memory–response trade-off via γ
- ✅ Transient regulatory effect of λ_trc

**Not yet validated:**
- ❌ Real-world or semantic input (only synthetic Gaussian tested)
- ❌ Application to human affective or behavioural data
- ❌ Neuroscience or cognitive claims
- ❌ Deployment in any AI system

> This is a **simulation-stage framework**. Results are preliminary.

---

## Future Directions

1. Semantic / vector-valued TM and BM (replace scalar with embeddings)
2. Non-stationary input testing (real conversation or sensor data)
3. λ_trc quantification: spike depth, recovery rate, parameter sensitivity
4. Memory-aware application integration (chatbot continuity layer)

---

## Repository Structure

```
/
├── AURA_X_Omega_Research.html   ← minimal research prototype
├── README.md
└── notebook/                    ← Colab experiments (coming)
```

---

## Citation

```bibtex
@article{khan2025aurax,
  title     = {A Dual Memory Framework for Ensuring Emotional Continuity
               in Artificial Intelligence Systems with Numerical Evaluation},
  author    = {Khan, Alim ul Haq},
  year      = {2025},
  doi       = {10.5281/zenodo.17845294},
  publisher = {Zenodo}
}
```

---

## Author

**Alim ul Haq Khan**  
ORCID: [0009-0001-4708-0365](https://orcid.org/0009-0001-4708-0365)  
GitHub: [alimulhaqkhan-prog](https://github.com/alimulhaqkhan-prog)  
LinkedIn: [alim-ul-haq-khan](https://www.linkedin.com/in/alim-ul-haq-khan-aa4b59170)  
Location: Timergara, KPK, Pakistan

**UK IPO Patent Application: GB2518804.6** — Filed 06 November 2025  
Copyright © 2025–2026 Alim ul Haq Khan. All Rights Reserved.  
No reproduction, adaptation, or AI-training use permitted without explicit written consent.
