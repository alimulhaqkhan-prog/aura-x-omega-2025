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

A minimal, testable computational framework modeling a potential mechanism to address stateless processing limitations in AI systems — through dual-memory resonance. Two formally derived theorems. Simulation-validated. Honest about scope.

> ⚠ **This is a simulation-stage prototype using synthetic input only — not a deployed AI system.**

---

## The Problem

Contemporary LLMs process each interaction in isolation, devoid of a persistent internal state capturing the user's affective history. This stateless architecture limits application in therapeutic, educational, and long-term assistive roles where continuity of experience matters.

---

## Memory Architecture

AURA-X Ω introduces a dual-memory control layer:

| Memory | Symbol | Role |
|---|---|---|
| **Temporary Memory** | TM | Short-horizon volatile representation of current input context |
| **Bold Memory** | BM | Persistent episodic memory encoding emotionally salient past state |

> **Terminology note:** "Bold Memory" denotes long-term, identity-bearing memory — structurally slow-changing, resistant to noise, analogous to episodic long-term memory in cognitive science (not a claim of neurological equivalence).

---

## Core Equations

**Static Form — Eq. 1 (Grand Emotional Continuity Equation):**
```
E0 = tanh( R(TM, BM) − D + lambda_faith + lambda_sys + lambda_trc )
```

**Dynamic Extension — Eq. 3 (temporal continuity):**
```
E0(t+1) = (1 − gamma) * E0(t)  +  gamma * tanh( X(t) )
```

**Memory-State Coupling — validated implementation:**
```
M[t] = (1 − beta) * M[t−1]  +  beta * E[t−1]
R    = tanh( TM  +  k * M[t] )
```

**Resonance Operator — Section 2.2:**
```
R(TM, BM) = sum_i  alpha_i(t) * sim(TM, BM_i) * intensity(BM_i)
```

### Parameter Reference

| Symbol | Name | Role | Sim. value |
|---|---|---|---|
| gamma | Smoothing | Reactivity vs inertia · **sets hard bound 2·gamma** | 0.3–0.5 |
| beta | Memory rate | M[t] learning speed from past state | 0.30 |
| k | Coupling | TM–M interaction strength | 0.30 |
| D | Decay | Emotional cooling | 0.30 |
| lambda_faith | Belief | Value-aligned resilience | 0.10 |
| lambda_sys | System | Safety/policy constraint | 0.10 |
| **lambda_trc** | Truth-resonance | Modeled as a stochastic perturbation approximating truth-sensitive correction (Corollary 1) | −0.8, P≈0.08 |

---

## Mathematical Analysis

> These results are formally derived and analytically supported under bounded assumptions. Full derivations are available in the paper (Section 3).

### Theorem 1 — Bounded Output
> For all finite parameter values: **E0 ∈ (−1, +1)**

*Derivation.* `tanh(X) = (e^X − e^{-X}) / (e^X + e^{-X})` with limits ±1 at ±∞. For finite X: −1 < tanh(X) < 1. Since X is a finite linear combination of bounded variables, E0 remains bounded. □

*Consequence:* No combination of parameters can cause output divergence — bounded by mathematical construction.

### Theorem 2 — Bounded Stability
> If |R(t)| ≤ K < ∞ and gamma ∈ (0,1): E0(t) converges to a unique bounded attractor ⊂ [−1, +1].

*Derivation sketch.* The update map T: E → (1−gamma)·E + gamma·tanh(X) is a contraction mapping on [−1,+1] under the supremum norm. By Banach's Fixed-Point Theorem, a unique attractor exists. Perturbations from equilibrium decay as (1−gamma)^t → 0. □

### Corollary 1 — Monotonic Truth Regulation
> dE0 / d(lambda_trc) = sech²(X) > 0 for all X ∈ ℝ

lambda_trc is a monotonic control variable: decreasing it strictly decreases E0. This provides a principled handle for truth-sensitive affective correction.

### Volatility Bound — Section 3.7
```
|Delta E(t)| = |E0(t+1) − E0(t)| <= 2 * gamma   (hard analytical bound)
```

gamma is simultaneously a smoothing coefficient and an interpretable **safety parameter** — directly bounding maximum step-to-step state change. Empirical confirmation: max |ΔE| ≈ 1.82·gamma across 500 trials.

---

## Numerical Results

**Setup (Section 5.1):** R(t) ~ N(0.2, 0.5), T=200 steps, 500 Monte Carlo trials, gamma=0.50, beta=0.30, k=0.30.

| Metric | Baseline | TM–BM | Δ | Note |
|---|---|---|---|---|
| Response corr(TM, E) | 0.859 | 0.674 | −0.185 | Memory reduces raw sensitivity |
| **Memory** autocorr lag-1 | 0.489 | **0.599** | **+0.110 (+22%)** | Temporal continuity increases |
| **Volatility** σ(ΔE) | 0.232 | **0.187** | **−0.045 (−19%)** | State instability decreases |
| Bound violations |ΔE|>2·gamma | 0 | 0 | Theorem 2 confirmed |

lambda_trc spike-and-recovery: sharp transient dips followed by recovery within ~10 steps — **unique to this formulation, not present in baseline.**

> **Important:** The Memory–Response trade-off is partially a property of gamma in any first-order filter. The contribution of the memory layer specifically requires further controlled experiments to fully isolate.

---

## Live Research Prototype

**[Open Prototype → AURA_X_Omega_Final.html](https://alimulhaqkhan-prog.github.io/aura-x-omega-2025/AURA_X_Omega_Final.html)**

| Panel | Description |
|---|---|
| **Overview** | Framework, equations, theorems, results summary |
| **Simulation** | Live E(t) graph · real-time parameter control |
| **Offline Tests** | 1000-trial automated validation · no API required |
| **Comparison** | Baseline vs TM–BM · gamma-sweep trade-off |
| **Monte Carlo** | 500 trials · Section 5.1 exact setup |
| **Knowledge Q&A** | Full paper embedded · works offline |
| **AI Chat (API)** | Grok / OpenAI / Gemini · paper as system prompt |

---

## Scope and Limitations

**Formally derived / empirically confirmed:**
- E0 ∈ (−1,+1) — Theorem 1 (analytical derivation)
- Bounded stability — Theorem 2 (Banach contraction argument)
- Volatility bound |ΔE| ≤ 2·gamma — 0 violations in 500+ trials
- lambda_trc spike-and-recovery — unique signal, not in baseline
- Controllable memory–response trade-off via gamma

**Not yet validated:**
- Real-world or semantic input — only synthetic Gaussian tested
- Human affective or behavioural data
- Memory–Response trade-off exclusively attributable to memory layer
- Full adaptive memory (static BM → attractor convergence)
- Neuroscience, consciousness, or AGI claims

> This is a **simulation-stage framework.** Mathematical derivations are analytically supported. Empirical claims are restricted to synthetic input and should be interpreted as preliminary directional evidence.

---

## Broader Architecture

AURA-X Ω is Framework 5 within the ANIMA unified architecture:

```
PMCM → UPS Theory → AEC → CRM → AURA-X Ω → RGCC-X+ → CSLV → ACI (Λ) → ANIMA → Wajdan
```

Unified paper: DOI [10.5281/zenodo.18865265](https://doi.org/10.5281/zenodo.18865265)

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

**Alim ul Haq Khan** · Independent AI Safety Researcher · AURA-X Ω Research Cell  
Lajbok Dir-L, Timergara, KPK, Pakistan  
ORCID: [0009-0001-4708-0365](https://orcid.org/0009-0001-4708-0365) ·
GitHub: [alimulhaqkhan-prog](https://github.com/alimulhaqkhan-prog)

**UK IPO Patent Application: GB2518804.6** — Filed 06 November 2025  
Copyright © 2025–2026 Alim ul Haq Khan. All Rights Reserved.
