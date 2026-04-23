# AURA-X Ω · Dual-Memory Resonance Framework

> *"Continuity is not memory alone — it is resonance."*

<div align="center">

[![Status](https://img.shields.io/badge/Status-Simulation--Stage-orange?style=flat-square)]()
[![Theorem 1](https://img.shields.io/badge/Theorem%201-Formally%20Derived-brightgreen?style=flat-square)]()
[![Theorem 2](https://img.shields.io/badge/Theorem%202-Formally%20Derived-brightgreen?style=flat-square)]()
[![ORCID](https://img.shields.io/badge/ORCID-0009--0001--4708--0365-a6ce39?style=flat-square)](https://orcid.org/0009-0001-4708-0365)
[![Patent](https://img.shields.io/badge/UK%20IPO-GB2518804.6-blue?style=flat-square)]()
[![DOI](https://img.shields.io/badge/DOI-10.5281%2Fzenodo.17845294-lightgrey?style=flat-square)](https://doi.org/10.5281/zenodo.17845294)

</div>

---

A minimal, testable computational framework exploring a potential continuity mechanism for AI systems through dual-memory resonance. Formally derived, simulation-validated, and explicit about scope.

> **Important:** This repository presents a simulation-stage prototype using synthetic input only. It is **not** a deployed AI system.

---

## Overview

AURA-X Ω studies whether a system can preserve meaningful temporal continuity without collapsing into instability or rigid persistence.

The framework introduces a dual-memory structure:

| Memory Type | Symbol | Role |
|---|---|---|
| **Temporary Memory** | TM | Short-horizon volatile representation of current input |
| **Bold Memory** | BM | Persistent continuity-bearing memory of salient prior state |

> **Terminology note:** “Bold Memory” is used here as a structural continuity term. It is **not** a claim of neurological equivalence.

---

## Core Equations

### Static Conceptual Form
```text
E0 = tanh( R(TM, BM) − D + lambda_faith + lambda_sys + lambda_trc )

Dynamic Simulation Form Used in the Prototype

M[t] = (1 − beta) * M[t−1] + beta * E[t−1]
R[t] = tanh( TM[t] + k * M[t] )
X[t] = R[t] − D + lambda_faith + lambda_sys + lambda_trc[t]
E[t] = (1 − gamma) * E[t−1] + gamma * tanh( X[t] )

Conceptual Resonance Operator

R(TM, BM) = sum_i alpha_i(t) * sim(TM, BM_i) * intensity(BM_i)


---

Parameter Reference

Symbol	Name	Role	Typical Sim. Value

gamma	Smoothing	Reactivity vs inertia; sets the operational hard bound 2·gamma	0.30–0.50
beta	Memory Rate	Learning speed of M[t] from prior state	0.30
k	Coupling	TM–M interaction strength	0.30
D	Decay	Emotional cooling term	0.30
lambda_faith	Belief	Value-aligned resilience term	0.10
lambda_sys	System	Safety / policy constraint term	0.10
lambda_trc	Truth-Resonance	Stochastic perturbation approximating truth-sensitive correction	−0.8, P≈0.08



---

Mathematical Analysis

Theorem 1 — Bounded Output

For all finite parameter values:

E0 ∈ (−1, +1)

Because tanh(X) remains bounded in (-1, +1) for finite X, the output stays bounded by construction.

Theorem 2 — Bounded Stability

If |R(t)| ≤ K < ∞ and gamma ∈ (0,1), then the recursive update remains bounded and converges to a unique bounded attractor under the stated assumptions.

Corollary 1 — Monotonic Truth Regulation

dE0 / d(lambda_trc) = sech²(X) > 0

This makes lambda_trc a monotonic control variable in the formal static framing.

Volatility Bound

|Delta E(t)| = |E(t+1) − E(t)| <= 2 * gamma

This gives gamma a second interpretation: it is not only a smoothing coefficient, but also an operational upper bound on maximum step-to-step change.


---

Numerical Results

Setup: R(t) ~ N(0.2, 0.5), T = 200, 500 Monte Carlo trials, gamma = 0.50, beta = 0.30, k = 0.30.

Metric	Baseline	TM–BM	Δ	Interpretation

Response corr(TM, E)	0.859	0.674	−0.185	Lower raw sensitivity
Memory autocorr lag-1	0.489	0.599	+0.110 (+22%)	Greater temporal continuity
Volatility σ(ΔE)	0.232	0.187	−0.045 (−19%)	Reduced instability
Bound violations `	ΔE	> 2·gamma`	0	0


lambda_trc spike-and-recovery appears as a transient dip followed by recovery within roughly 10 steps in the tested setup.

> Important caution: The memory–response trade-off is partially a property of gamma in any first-order filter. The specific contribution of the memory layer still requires further controlled isolation.




---

Live Research Prototype

Open Live Demo → index.html

Prototype Panels

Panel	Purpose

Chat	Baseline vs AURA-X conversational comparison
Simulation	Live continuity dynamics under synthetic input
Custom Test	User-defined simulation settings
Analyze	Baseline vs TM–BM comparison and Monte Carlo summary
Reference	Scope, framing, and embedded research context


> Keep the deployed filename as index.html so this link remains stable.




---

Scope and Limitations

Formally Derived / Empirically Supported in This Repository

Bounded output under the stated formulation

Bounded recursive stability under the stated assumptions

Operational volatility tracking with |ΔE| <= 2·gamma

Transient lambda_trc spike-and-recovery behavior in synthetic tests

Controllable memory–response trade-off via gamma


Not Yet Validated

Real-world or semantic input

Human affective or behavioural data

Memory–response trade-off exclusively attributable to the memory layer

Full adaptive semantic BM

Neuroscience, consciousness, or AGI-level claims


> This is a simulation-stage framework. Empirical claims are restricted to synthetic input and should be interpreted accordingly.




---

Broader Architecture

AURA-X Ω is positioned as Framework 5 within the broader continuity-first architecture:

PMCM → UPS Theory → AEC → CRM → AURA-X Ω → RGCC-X+ → CSLV → ACI (Λ) → ANIMA → Wajdan

Unified paper DOI:

10.5281/zenodo.18865265


---

Repository Structure

.
├── index.html
├── README.md
└── assets/

> If you add more resources later, keep index.html as the main GitHub Pages entry file.




---

Citation

@article{khan2025aurax,
  title     = {AURA-X Omega: A Dual-Memory Emotional Continuity Layer and Its Numerical Evaluation},
  author    = {Khan, Alim ul Haq},
  year      = {2025},
  doi       = {10.5281/zenodo.17845294},
  publisher = {Zenodo}
}

@article{khan2026unified,
  title     = {AURA-X Omega: A Unified Architecture for Emotionally Continuous, Cognitively Immune, and Safety-Aligned AI},
  author    = {Khan, Alim ul Haq},
  year      = {2026},
  doi       = {10.5281/zenodo.18865265},
  publisher = {Zenodo}
}


---

Author

Alim ul Haq Khan
Independent AI Safety Researcher · AURA-X Ω Research Cell
Lajbok Dir-L, Timergara, KPK, Pakistan

ORCID: 0009-0001-4708-0365

GitHub: alimulhaqkhan-prog


UK IPO Patent Application: GB2518804.6 — Filed 06 November 2025

Copyright © 2025–2026 Alim ul Haq Khan. All Rights Reserved.


---
