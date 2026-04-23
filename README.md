# AURA-X Ω · Dual-Memory Resonance Framework

> *"Continuity is not memory alone — it is resonance."*

<div align="center">

[![Status](https://img.shields.io/badge/Status-Simulation--Stage-orange?style=flat-square)]()
[![Theorem 1](https://img.shields.io/badge/Theorem%201-Formally%20Derived-brightgreen?style=flat-square)]()
[![Theorem 2](https://img.shields.io/badge/Theorem%202-Formally%20Derived-brightgreen?style=flat-square)]()
[![ORCID](https://img.shields.io/badge/ORCID-0009--0001--4708--0365-a6ce39?style=flat-square)](https://orcid.org/0009-0001-4708-0365)
[![Patent](https://img.shields.io/badge/UK%20IPO-GB2518804.6-blue?style=flat-square)]()

</div>

---

A minimal, testable computational framework exploring a potential continuity mechanism for AI systems through dual-memory resonance. Formally derived, simulation-validated, explicit about scope.

> **Important:** This repository presents a simulation-stage prototype using synthetic input only. It is not a deployed AI system.

---

## Overview

AURA-X Ω studies whether a system can preserve meaningful temporal continuity without collapsing into instability or rigid persistence. The framework introduces a dual-memory structure:

| Memory Type | Symbol | Role |
|---|---|---|
| **Temporary Memory** | TM | Short-horizon volatile representation of current input |
| **Bold Memory** | BM | Persistent continuity-bearing memory of salient prior state |

> **Terminology note:** "Bold Memory" is used as a structural continuity term — not a claim of neurological equivalence.

---

## Core Equations

**Static conceptual form:**
```
E0 = tanh( R(TM, BM) − D + lambda_faith + lambda_sys + lambda_trc )
```

**Dynamic simulation form:**
```
M[t] = (1 − beta) * M[t−1] + beta * E[t−1]
R[t] = tanh( TM[t] + k * M[t] )
X[t] = R[t] − D + lambda_faith + lambda_sys + lambda_trc[t]
E[t] = (1 − gamma) * E[t−1] + gamma * tanh( X[t] )
```

**Conceptual resonance operator:**
```
R(TM, BM) = sum_i  alpha_i(t) * sim(TM, BM_i) * intensity(BM_i)
```

---

## Parameter Reference

| Symbol | Name | Role | Sim. value |
|---|---|---|---|
| gamma | Smoothing | Reactivity vs inertia · **sets hard bound 2·gamma** | 0.30–0.50 |
| beta | Memory Rate | Learning speed of M[t] from prior state | 0.30 |
| k | Coupling | TM–M interaction strength | 0.30 |
| D | Decay | Emotional cooling term | 0.30 |
| lambda_faith | Belief | Value-aligned resilience term | 0.10 |
| lambda_sys | System | Safety/policy constraint term | 0.10 |
| **lambda_trc** | Truth-Resonance | Stochastic perturbation approximating truth-sensitive correction | −0.8, P≈0.08 |

---

## Mathematical Analysis

> These results are formally derived and analytically supported under bounded assumptions.

### Theorem 1 — Bounded Output
> For all finite parameter values: **E0 ∈ (−1, +1)**

Because tanh(X) remains bounded in (−1, +1) for all finite X, the output stays bounded by construction.

### Theorem 2 — Bounded Stability
> If |R(t)| ≤ K < ∞ and gamma ∈ (0,1), the recursive update converges to a unique bounded attractor under the Banach Fixed-Point argument.

### Corollary 1 — Monotonic Truth Regulation
```
dE0 / d(lambda_trc) = sech²(X) > 0
```
lambda_trc is a monotonic control variable — formally proven. Decreasing it strictly decreases E0.

### Volatility Bound — Section 3.7
```
|Delta E(t)| = |E[t+1] − E[t]| <= 2 * gamma   (hard analytical bound)
```

gamma is simultaneously a smoothing coefficient and an **operational safety parameter** — directly bounding maximum step-to-step state change.

---

## Numerical Results

**Setup:** R(t) ~ N(0.2, 0.5), T=200, 500 Monte Carlo trials, gamma=0.50, beta=0.30, k=0.30.

| Metric | Baseline | TM–BM | Δ | Interpretation |
|---|---|---|---|---|
| Response corr(TM, E) | 0.859 | 0.674 | −0.185 | Lower raw sensitivity |
| **Memory** autocorr lag-1 | 0.489 | **0.599** | **+0.110 (+22%)** | Greater temporal continuity |
| **Volatility** σ(ΔE) | 0.232 | **0.187** | **−0.045 (−19%)** | Reduced instability |
| Bound violations |ΔE|>2·gamma | 0 | 0 | Theorem 2 confirmed |

lambda_trc spike-and-recovery: transient dip followed by recovery within ~10 steps in synthetic tests.

> **Important caution:** The memory–response trade-off is partially a property of gamma in any first-order filter. The specific contribution of the memory layer still requires further controlled isolation.

---

## Live Research Prototype

**[Open Live Demo → index.html](https://alimulhaqkhan-prog.github.io/aura-x-omega-2025/index.html)**

| Panel | Purpose |
|---|---|
| **Chat** | Side-by-side Baseline LLM vs AURA-X Ω · natural memory-aware conversation |
| **Simulation** | Live continuity dynamics · full parameter control |
| **Custom Test** | User-defined configuration · 1000-trial offline validation |
| **Analyze** | Baseline vs TM–BM comparison · 500-trial Monte Carlo · γ sweep |
| **Reference** | Scope, framing, embedded research context |

> API keys (Grok / OpenAI) are protected by PIN — stored in browser only, never transmitted elsewhere.

---

## Scope and Limitations

**Formally derived / empirically supported:**
- Bounded output E0 ∈ (−1,+1) · Theorem 1
- Bounded recursive stability · Theorem 2 (Banach contraction argument)
- Volatility bound |ΔE| ≤ 2·gamma · operationally confirmed
- Monotonic lambda_trc regulation · Corollary 1
- Transient lambda_trc spike-and-recovery in synthetic tests
- Controllable memory–response trade-off via gamma

**Not yet validated:**
- Real-world or semantic input
- Human affective or behavioural data
- Memory–response trade-off exclusively attributable to memory layer
- Full adaptive semantic Bold Memory
- Neuroscience, consciousness, or AGI-level claims

> This is a simulation-stage framework. Empirical claims are restricted to synthetic input and should be interpreted accordingly.

---

## Broader Architecture

AURA-X Ω is Framework 5 within the continuity-first architecture:

```
PMCM → UPS Theory → AEC → CRM → AURA-X Ω → RGCC-X+ → CSLV → ACI (Λ) → ANIMA → Wajdan
```

---

## Repository Structure

```
.
├── index.html     ← main GitHub Pages entry · research prototype
├── README.md
└── assets/        ← (optional future resources)
```

> Keep `index.html` as the main filename so the demo link remains stable.

---

## Author

**Alim ul Haq Khan**  
Independent AI Safety Researcher · AURA-X Ω Research Cell  
Lajbok Dir-L, Timergara, KPK, Pakistan  
ORCID: [0009-0001-4708-0365](https://orcid.org/0009-0001-4708-0365) ·
GitHub: [alimulhaqkhan-prog](https://github.com/alimulhaqkhan-prog)

**UK IPO Patent Application: GB2518804.6** — Filed 06 November 2025  
Copyright © 2025–2026 Alim ul Haq Khan. All Rights Reserved.
