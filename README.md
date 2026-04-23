# AURA-X Ω · Artificial Unified Resonance Architecture

> *"Continuity is not memory alone — it is resonance."*

[![Status](https://img.shields.io/badge/Status-Simulation--Stage-orange?style=flat-square)]()
[![Theorem 1](https://img.shields.io/badge/Theorem%201-Boundedness%20Proven-brightgreen?style=flat-square)]()
[![Theorem 2](https://img.shields.io/badge/Theorem%202-Stability%20Proven-brightgreen?style=flat-square)]()
[![ORCID](https://img.shields.io/badge/ORCID-0009--0001--4708--0365-a6ce39?style=flat-square)](https://orcid.org/0009-0001-4708-0365)
[![Patent](https://img.shields.io/badge/UK%20IPO-GB2518804.6-blue?style=flat-square)]()
[![DOI](https://img.shields.io/badge/DOI-10.5281%2Fzenodo.17845294-lightgrey?style=flat-square)](https://doi.org/10.5281/zenodo.17845294)

---

A formal, mathematically-grounded dual-memory control layer addressing the *emotional amnesia* of stateless language models. Two rigorously proven theorems. Simulation-validated. Honest about scope.

---

## The Problem

Contemporary LLMs are stateless: each interaction is processed in isolation, devoid of a persistent internal state capturing the user's affective history. This "emotional amnesia" limits application in therapeutic, educational, and long-term assistive roles.

---

## Core Equations

```
# Grand Emotional Continuity Equation (Eq. 1)
E0 = tanh( R(TM, BM) - D + lambda_faith + lambda_sys + lambda_trc )

# Dynamic Extension (Eq. 3)
E0(t+1) = (1 - gamma) * E0(t)  +  gamma * tanh( X(t) )

# Memory-State Coupling (validated)
M[t] = (1 - beta) * M[t-1]  +  beta * E[t-1]
R    = tanh( TM  +  k * M[t] )

# Resonance Operator (Section 2.2)
R(TM, BM) = sum_i  alpha_i(t) * sim(TM, BM_i) * intensity(BM_i)
```

### Parameters

| Symbol | Name | Role | Sim. value |
|---|---|---|---|
| gamma | Smoothing | Reactivity vs inertia; sets bound 2*gamma | 0.3-0.5 |
| beta | Memory rate | M[t] update speed | 0.30 |
| k | Coupling | TM-M interaction | 0.30 |
| D | Decay | Emotional cooling | 0.30 |
| lambda_faith | Belief | Value-aligned resilience | 0.10 |
| lambda_sys | System | Safety/policy constraint | 0.10 |
| lambda_trc | Truth-resonance | Misinformation penalty (Cor. 1) | -0.8, P~0.08 |

---

## Mathematical Analysis

### Theorem 1 -- Global Boundedness
> For all finite parameters: E0 in (-1, +1)

Proof: tanh(X) satisfies -1 < tanh(X) < 1 for all finite X. Since X is a finite linear combination of bounded variables, the result follows. QED

### Theorem 2 -- Global Stability
> If |R(t)| <= K < inf and gamma in (0,1): E0(t) converges to a unique bounded attractor in [-1,+1].

Proof sketch: Update map T: E -> (1-gamma)E + gamma*tanh(X) is a contraction on [-1,+1]. Banach Fixed-Point Theorem -> unique attractor. QED

### Corollary 1 -- Truth Regulation
> dE0/d(lambda_trc) = sech^2(X) > 0 for all X

lambda_trc is a **monotonic emotional regulator** -- proven. Decreasing lambda_trc strictly decreases E0.

### Volatility Bound (Section 3.7)
```
|Delta E(t)| <= 2*gamma   (hard bound)
```
Empirically: max |Delta E| approx 1.82*gamma across 500 trials.

---

## Numerical Results

Setup (Section 5.1): R(t) ~ N(0.2, 0.5), T=200, 500 Monte Carlo trials.

### Baseline vs TM-BM (gamma=0.50, beta=0.30, k=0.30)

| Metric | Baseline | TM-BM | Delta |
|---|---|---|---|
| Response corr(TM,E) | 0.859 | 0.674 | -0.185 |
| Memory autocorr lag-1 | 0.489 | **0.599** | **+0.110 (+22%)** |
| Volatility sigma(Delta E) | 0.232 | **0.187** | **-0.045 (-19%)** |
| Bound violations | 0 | 0 | -- |

lambda_trc spike-and-recovery: confirmed, not present in baseline -- uniquely attributable to this formulation.

---

## Live Research Prototype

**[Open Prototype](https://alimulhaqkhan-prog.github.io/aura-x-omega-2025/AURA_X_Omega_Research.html)**

Six panels: Overview · Simulation · Monte Carlo · Comparison · Offline Q&A · AI (API)
API support: OpenAI · Grok (xAI) · Gemini -- full paper injected as system prompt.

---

## Scope and Limitations

**Validated:**
- E0 in (-1,+1) -- Theorem 1 (rigorous proof)
- Global stability -- Theorem 2 (Banach contraction)
- Volatility bound |Delta E| <= 2*gamma -- 0 violations in 500 trials
- lambda_trc spike-and-recovery -- unique to this formulation
- Controllable memory-response trade-off via gamma

**Not yet validated:**
- Real-world or semantic input (only synthetic Gaussian tested)
- Human affective data
- Full adaptive memory (static BM converges to attractor)
- Trade-off exclusively due to memory layer (partially a gamma property in any first-order filter)
- AGI / neuroscience / consciousness claims

> This is a **simulation-stage** framework. Mathematical proofs are rigorous; empirical claims are restricted to synthetic input.

---

## Broader Architecture

AURA-X Omega is Framework 5 within the ANIMA unified architecture:

PMCM -> UPS Theory -> AEC -> CRM -> **AURA-X Omega** -> RGCC-X+ -> CSLV -> ACI (Lambda) -> ANIMA -> Wajdan

Unified paper DOI: 10.5281/zenodo.18865265

---

## Citation

```bibtex
@article{khan2025aurax,
  title     = {AURA-X Omega: A Dual-Memory Emotional Continuity Layer
               and Its Numerical Evaluation},
  author    = {Khan, Alim ul Haq},
  year      = {2025},
  doi       = {10.5281/zenodo.17845294},
  publisher = {Zenodo}
}
@article{khan2026unified,
  title     = {AURA-X Omega: A Unified Architecture for Emotionally
               Continuous, Cognitively Immune, and Safety-Aligned AI},
  author    = {Khan, Alim ul Haq},
  year      = {2026},
  doi       = {10.5281/zenodo.18865265},
  publisher = {Zenodo}
}
```

---

## Author

**Alim ul Haq Khan** · Independent AI Safety Researcher · AURA-X Omega Research Cell
Timergara, KPK, Pakistan
ORCID: 0009-0001-4708-0365 · GitHub: alimulhaqkhan-prog
**UK IPO Patent: GB2518804.6** -- Filed 06 November 2025
Copyright 2025-2026. All Rights Reserved.
