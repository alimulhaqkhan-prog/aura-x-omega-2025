<div align="center">

# AURA-X Ω · Dual-Memory Resonance Framework

### *"Continuity is not memory alone — it is resonance."*

---

[![Status](https://img.shields.io/badge/Status-Simulation--Stage-f59e0b?style=flat-square&labelColor=09080e)](.)
[![Discover AI](https://img.shields.io/badge/Discover_AI-Under_Peer_Review-22d3ee?style=flat-square&labelColor=09080e)](.)
[![Theorem 1](https://img.shields.io/badge/Theorem_1-Bounded_Output-4ade80?style=flat-square&labelColor=09080e)](.)
[![Theorem 2](https://img.shields.io/badge/Theorem_2-Stability_Derived-4ade80?style=flat-square&labelColor=09080e)](.)
[![Corollary 1](https://img.shields.io/badge/Corollary_1-Monotonic_λ_trc-4ade80?style=flat-square&labelColor=09080e)](.)
[![Corollary 2](https://img.shields.io/badge/Corollary_2-Volatility_Bound-4ade80?style=flat-square&labelColor=09080e)](.)
[![ORCID](https://img.shields.io/badge/ORCID-0009--0001--4708--0365-a6ce39?style=flat-square&labelColor=09080e)](https://orcid.org/0009-0001-4708-0365)
[![Patent](https://img.shields.io/badge/UK_IPO-GB2518804.6-a78bfa?style=flat-square&labelColor=09080e)](.)
[![Lab](https://img.shields.io/badge/Research_Lab-v1.0_Trainable_R_Edition-f87171?style=flat-square&labelColor=09080e)](.)

<br/>

**[→ Open Live Prototype — AURA-X Ω · Bounded Continuity Research Lab (v1.0)](https://alimulhaqkhan-prog.github.io/aura-x-omega-2025/index.html)**

<br/>

> **Scope Notice:** Simulation-stage research prototype · Synthetic offline data + demo API only  
> Not a deployed AI system · Not clinically or safety-certified · Real-world validation required

</div>

---

## Table of Contents

1. [Overview](#overview)
2. [What's New in v1.0](#whats-new-in-v10)
3. [Memory Architecture](#memory-architecture)
4. [Core Equations](#core-equations)
5. [Trainable R — Attention-Based Learning](#trainable-r--attention-based-learning)
6. [Dual-Loop Learning](#dual-loop-learning)
7. [Continuity Profile Layer](#continuity-profile-layer)
8. [Mathematical Analysis](#mathematical-analysis)
9. [Numerical Results](#numerical-results)
10. [ACI — Alim-Continuity Index](#aci--alim-continuity-index)
11. [CRM — Continuity Reflex Model](#crm--continuity-reflex-model)
12. [Prototype Panels](#prototype-panels)
13. [Scope and Limitations](#scope-and-limitations)
14. [Broader Architecture](#broader-architecture)
15. [Running Locally](#running-locally)
16. [Citation](#citation)
17. [Author](#author)

---

## Overview

> **Version note:** This README covers **AURA-X Ω · Bounded Continuity Research Lab v1.0** — the Trainable R edition of the live prototype. The version number refers to the prototype branch, not the underlying theory (which is independent of prototype iterations). Earlier prototype releases (v2.0, v2.1) were internal iterations; this v1.0 is the first formally named public release.

---

### Paper Claims vs Prototype Claims

| Category | Claim |
|---|---|
| **Paper claim (theory)** | Dual-memory resonance can model bounded temporal continuity in AI systems |
| **Paper claim (math)** | E₀ ∈ (−1,+1) always · \|ΔE\| ≤ 2γ hard bound · Monotonic λ_trc regulation |
| **Prototype claim (simulation)** | Synthetic simulations show +22% memory continuity and −19% volatility vs baseline |
| **Prototype claim (v1.0 new)** | Trainable R, Dual-Loop, and Continuity Profile behave within designed bounds in prototype |
| **Not claimed** | Consciousness, AGI, clinical validity, real-world safety deployment, formal Banach proof for full nonlinear system |

---

**AURA-X Ω** is a minimal, testable computational framework that investigates whether an AI system can preserve meaningful temporal continuity without collapsing into instability or rigid persistence. The framework introduces a **dual-memory structure** — Temporary Memory (TM) and Bold Memory (BM) — governed by formally derived recurrence equations with analytically supported stability properties.

**v1.0 extends the original framework with:**
- Trainable R via softmax attention and user feedback
- Dual-Loop Learning (fast per-turn + slow 10-turn consolidation)
- Continuity Profile Layer (transparent, bounded, user-controlled)
- ACI Λ(t) runtime coherence monitoring integrated into live prototype
- Meta-learning: η adjusts based on ACI stability

The paper is currently **under peer review** at **Discover Artificial Intelligence** (Springer Nature). Companion papers cover the Continuity Reflex Model (CRM) and the Alim-Continuity Index (ACI).

---

## What's New in v1.0

| Feature | Description | Status |
|---|---|---|
| **Trainable R** | Softmax attention over BM entries · like/dislike weight update (η=0.05) | ✅ Prototype |
| **Temporal Decay** | `w ← w · exp(−λ_decay · Δt)` · recent memories weighted more | ✅ Prototype |
| **Fast Loop** | Per-turn BM attention update · meta-η from ACI | ✅ Prototype |
| **Slow Loop** | Every-10-turn consolidation · η_cp=0.05 · bounded update | ✅ Prototype |
| **Continuity Profile** | Transparent interaction pattern summary · editable + resettable | ✅ Prototype |
| **ACI Λ Integration** | Real-time coherence monitor driving meta-learning rate | ✅ Concept |
| **Meta-Learning** | η×1.3 when stable (Λ>0.7) · η×0.5 when drifting (Λ<0.4) | ✅ Prototype |
| **5-Tab Research Lab** | Core Engine · Profile · Chat · Validation · Frameworks | ✅ Live |

---

## Memory Architecture

| Memory Type | Symbol | Role |
|---|---|---|
| **Temporary Memory** | TM[t] | Short-horizon, volatile · current input signal |
| **Bold Memory** | BM / M[t] | Persistent, continuity-bearing · salient prior state |
| **Continuity Profile** | CP[t] | Slow-timescale transparent interaction pattern summary *(new v1.0)* |

> **Terminology note:** "Bold Memory" is a structural continuity term — not a claim of neurological equivalence. "Continuity Profile" is a transparent, frequency-based pattern summary derived from repeated interaction themes — not identity formation or autonomous profiling.

---

## Core Equations

### Static Conceptual Form (CRM Grand Equation)

```
E₀ = tanh( R(TM, BM) − D + λ_faith + λ_sys + λ_trc )

R(TM, BM) = Σᵢ  αᵢ(t) · sim(TM, BMᵢ) · intensity(BMᵢ)
```

### Dynamic Simulation Form

```
M[t] = (1 − β) · M[t−1]  +  β · E[t−1]           ← Bold Memory update
R[t] = tanh( TM[t]  +  k · M[t] )                  ← resonance
X[t] = R[t] − D  +  λ_faith  +  λ_sys  +  λ_trc    ← net input
E[t] = (1 − γ) · E[t−1]  +  γ · tanh( X[t] )       ← continuity update
```

### Analytically Derived Stability Properties

```
E[t] ∈ (−1, +1)              always (Theorem 1 — bounded output)
|ΔE[t]| ≤ 2γ                 hard analytical bound (Corollary 2)
ρ ≈ |1−γ| under smoothing     contraction-like behaviour observed (stability indicator,
                               not a strict formal proof for the full nonlinear system)
```

---

## Trainable R — Attention-Based Learning

**v1.0 introduces a trainable version of R** using softmax attention over BM entries, enabling the resonance function to adapt from user feedback.

### Attention Mechanism

```
scores[i] = w[i] · tanh( TM · valence[i] )
att        = softmax( scores )
R_att      = Σᵢ  att[i] · intensity[i]
```

### Fast Loop Weight Update (per interaction)

```
Like    → w[i] ← w[i] + η · (1 − w[i])    (reinforce activated entry)
Dislike → w[i] ← w[i] − η · w[i]           (attenuate activated entry)
η       = base_η · f(Λ(t))                  (meta-adjusted by ACI)
```

### Temporal Decay (memory fading)

```
w[i] ← w[i] · exp( −λ_decay · Δt )
λ_decay = 0.005 per interaction
```

This implements a human-like property: recent activations carry more weight than older ones. All weight updates remain bounded in `[0.01, 1.0]` by construction.

---

## Dual-Loop Learning

**v1.0 introduces a two-timescale learning architecture** — a fast reactive loop and a slow consolidation loop.

### Fast Loop (per interaction · η = 0.05)

Runs on every user turn. Updates BM attention weight of the currently activated entry based on user feedback. Learning rate η is meta-adjusted by ACI stability.

### Slow Loop (every 10 interactions · η_cp = 0.05)

Consolidates BM patterns into the Continuity Profile. Identifies repeated themes, stable concerns, and interaction mode. Updates CP at a low rate to prevent sudden profile shifts.

```
CP[t] = (1 − η_cp) · CP[t−1]  +  η_cp · PatternSummary(BM)
```

### Meta-Learning — η Adjustment via ACI Λ(t)

```
Λ(t) > 0.70  →  η × 1.3    (stable system — learn faster)
Λ(t) < 0.40  →  η × 0.5    (drifting — slow learning for safety)
otherwise     →  η unchanged
```

> **Honest scope:** Dual-Loop is a heuristic architecture, not formally derived from first principles. Its behaviour is bounded by design. Whether it produces meaningful cognitive benefits requires controlled empirical evaluation beyond current simulation.

---

## Continuity Profile Layer

**v1.0 introduces the Continuity Profile (CP)** — a slow-timescale, transparent summary of repeated interaction patterns.

### What CP tracks

| Component | Description |
|---|---|
| **Main Themes** | Topic frequencies from interaction history |
| **Stable Concerns** | Topics appearing more than 2× (threshold-based) |
| **Response Style** | Analytical / Supportive / Cautious / Motivational balance |
| **Interaction Mode** | researcher-support · emotional-support · learning-support · general |

### Privacy and Control

- Stored in sessionStorage only (clears on tab close)
- No sensitive attributes inferred automatically (no religion, politics, health, or private data)
- User can view, edit, reset, or export profile at any time
- Not identity formation — frequency-based pattern summary only
- Not connected to any external data source

---

## Mathematical Analysis

> All theorems are formally derived under bounded input assumptions. The contraction claim (ρ ≈ |1−γ|) is observed in simulation — it should be treated as a stability indicator rather than a strict formal proof for the full nonlinear stochastic system.

### Theorem 1 — Bounded Output

**For all finite parameter values: E₀ ∈ (−1, +1)**

tanh(X) ∈ (−1, +1) for all finite X ∈ ℝ. Since all inputs (R, D, λ_faith, λ_sys, λ_trc) are finite by construction, X is finite and E₀ is bounded. The recursive convex update with γ ∈ (0,1) preserves this bound at every step. □

### Theorem 2 — Derived Stability Property

**If |R(t)| ≤ K < ∞ and γ ∈ (0, 1), contraction-like behaviour is observed with ρ ≈ |1−γ| < 1.** Under the Banach Fixed-Point framework applied to the bounded linear component, iteration converges toward a bounded attractor. The full nonlinear stochastic system requires further analysis for a strict proof. □

### Corollary 1 — Monotonic Truth Regulation

```
∂E₀ / ∂λ_trc  =  sech²(X)  >  0    for all X ∈ ℝ
```

λ_trc is a **strictly monotone control variable** — formally proven. Decreasing λ_trc strictly decreases E₀, providing a principled misinformation-correction mechanism.

### Corollary 2 — Hard Volatility Bound

```
|ΔE[t]|  =  |E[t] − E[t−1]|  ≤  2γ
```

γ is simultaneously a smoothing coefficient and an **operational step-size safety parameter** — directly bounding the maximum step-to-step state change. Confirmed analytically and in all 500-trial Monte Carlo runs (zero violations).

---

## Numerical Results

**Setup:** TM[t] ~ N(0.2, 0.5) · T = 200 · 500 Monte Carlo trials · γ=0.50 · β=0.30 · k=0.30

| Metric | Baseline | TM–BM | Δ | Interpretation |
|---|---|---|---|---|
| Response corr(TM, E) | 0.859 | 0.674 | −0.185 | Lower raw input sensitivity |
| **Memory** lag-1 autocorr | 0.489 | **0.599** | **+0.110 (+22%)** | Greater temporal continuity |
| **Volatility** σ(ΔE) | 0.232 | **0.187** | **−0.045 (−19%)** | Reduced state instability |
| Bound violations \|ΔE\| > 2γ | 0 | 0 | — | Corollary 2 confirmed |

**λ_trc spike-and-recovery:** Transient dip followed by recovery within approximately 10 steps in synthetic tests.

> **Caution:** The memory–response trade-off is partially a property of γ in any first-order filter. The specific marginal contribution of the M[t] layer still requires controlled isolation.

---

## ACI — Alim-Continuity Index

The **Alim-Continuity Index Λ(t)** monitors the internal coherence of a memory-bearing AI system in real time. In v1.0, Λ also drives meta-learning rate adjustment — making it an active component of the learning architecture.

### Formula

```
Λ(t) = R(TM, BM) · exp( −(ασ(t) + βΔφ(t)) )

Λ(t) ∈ (0, 1]

GREEN   Λ > 0.60  — normal coherent operation
YELLOW  Λ ∈ [0.30, 0.60]  — Silent Alarm · drift detected
RED     Λ < 0.30  — Protective State · low coherence · slow learning
```

> ⚠ **ACI is a proof-of-concept prototype.** Applications listed (autonomous vehicles, medical AI, aviation) are conceptual future directions only. Not tested in safety-critical systems. Not certified for any real-world deployment.

---

## CRM — Continuity Reflex Model

The **Continuity Reflex Model** provides the theoretical foundation for AURA-X Ω. CRM argues that emotion and continuity arise not from external stimuli alone but from **TM–BM resonance**.

### Three Key Scenarios

| Scenario | Observation | CRM Account |
|---|---|---|
| **T1 Trauma Recall** | Emotional response without original trigger | High R(TM,BM) from BM overlap |
| **T4 Imagination** | E₀ = +0.4105 with zero external input | TM = internal imagery → R > 0 |
| **T3 Misinformation** | λ_trc attenuates E₀ monotonically | Corollary 1 confirmed |

### CRM Exploratory Results (Groq API · LLaMA-3.3-70b · Blind LLM-Judge)

In 5 controlled scenarios, CRM-guided responses showed higher scores than a stateless baseline — **exploratory result requiring replication.**

| Scenario | CRM | Baseline |
|---|---|---|
| T1 Trauma recall | 8.40 | 7.20 |
| T2a Low λ_faith | 8.60 | 7.80 |
| T2b High λ_faith | 8.80 | 7.60 |
| T3 Misinformation | 8.60 | 7.00 |
| T4 Imagination | 9.00 | 7.00 |
| **Mean ± SD** | **8.64 ± 0.48** | **7.52 ± 1.06** |

p < 0.0001 · Cohen's d = 1.054 (large)

> ⚠ Exploratory result. LLM-judge protocol has known limitations. Requires independent replication and peer review. Not neuroscience proof.

---

## Prototype Panels

| Panel | Purpose |
|---|---|
| **📊 Core Engine** | E[t]/M[t] dynamics · Trainable R BM nodes · λ_trc spike test · Dual-Loop status |
| **🧠 Continuity Profile** | Theme bars · stable concerns · style · mode · reset/export |
| **💬 Live Chat** | Baseline vs AURA-X Ω · ACI monitor · like/dislike feedback · API support |
| **🎲 Validation** | 500-trial Monte Carlo · Colab reference · CRM results · custom test |
| **📚 Frameworks** | AURA-X Ω · CRM · ACI · novelty table · architecture map |

> API keys are stored locally in browser localStorage and are used only to call the selected API provider (Grok / OpenAI) directly from the user's browser. They are not stored on any AURA-X Ω server.

---

## Scope and Limitations

### Validated (simulation, synthetic input) ✓

- Bounded output E₀ ∈ (−1, +1) · Theorem 1
- Hard volatility bound |ΔE| ≤ 2γ · zero violations · Corollary 2
- Monotonic λ_trc regulation · Corollary 1
- Contraction-like stability behaviour observed under γ ∈ (0,1)
- +22% memory continuity, −19% volatility vs memoryless baseline
- Trainable R: bounded attention weight updates confirmed
- Dual-Loop: bounded updates within designed constraints confirmed
- CRM exploratory: 5-scenario API test (requires replication)

### Not Validated ✗

- Real-world or semantic natural language input
- Human affective or behavioural data
- M[t] marginal contribution (not isolated from γ effect)
- Dual-Loop cognitive benefits (heuristic, not formally derived)
- Continuity Profile accuracy or utility (frequency-based only)
- ACI Λ(t) in any safety-critical deployment
- Neuroscience, consciousness, AGI, or identity claims

---

## Broader Architecture

AURA-X Ω is **Framework 5** within the continuity-first architecture:

```
PMCM → UPS Theory → AEC → CRM → [AURA-X Ω] → RGCC-X+ → CSLV → ACI (Λ) → ANIMA → Wajdan
```

---

## Running Locally

```bash
git clone https://github.com/alimulhaqkhan-prog/aura-x-omega-2025.git
cd aura-x-omega-2025
open index.html
# or: python3 -m http.server 8080
```

**Requirements:** Modern browser with ES6 support · Network for Chart.js CDN · Optional: API key for live chat.

---

## Citation

```bibtex
@misc{khan2025aurax,
  author       = {Khan, Alim ul Haq},
  title        = {{AURA-X Ω}: A Dual-Memory Emotional Continuity Layer
                  with Trainable Resonance and Continuity Profile Architecture},
  year         = {2025},
  note         = {Under review: Discover Artificial Intelligence (Springer Nature).
                  UK IPO Patent Application GB2518804.6.
                  ORCID: 0009-0001-4708-0365},
  howpublished = {\url{https://github.com/alimulhaqkhan-prog/aura-x-omega-2025}}
}
```

---

## Author

**Alim ul Haq Khan**  
Independent AI Safety Researcher · AURA-X Ω Research Cell  
Lajbok Dir-L, Timergara, Khyber Pakhtunkhwa, Pakistan  
ORCID: [0009-0001-4708-0365](https://orcid.org/0009-0001-4708-0365)  
GitHub: [alimulhaqkhan-prog](https://github.com/alimulhaqkhan-prog)  
Email: alimulhaqkhan@gmail.com

**UK IPO Patent Application: GB2518804.6** — Filed 06 November 2025

---

<div align="center">

Copyright © 2025–2026 Alim ul Haq Khan. All Rights Reserved.

*Simulation-stage prototype · Not a deployed AI system*  
*Discover Artificial Intelligence (Springer Nature) · Under peer review*

</div>
