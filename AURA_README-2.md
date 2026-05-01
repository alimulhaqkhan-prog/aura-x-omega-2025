<div align="center">

```
 █████╗ ██╗   ██╗██████╗  █████╗
██╔══██╗██║   ██║██╔══██╗██╔══██╗
███████║██║   ██║██████╔╝███████║
██╔══██║██║   ██║██╔══██╗██╔══██║
██║  ██║╚██████╔╝██║  ██║██║  ██║
╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝
```

# AURA — Artificial Unified Resonance Architecture

### *A Dual-Memory Resonance Architecture for Bounded Meaning-State Generation*
### *in Memory-Bearing AI Systems*

<br>

[![Version](https://img.shields.io/badge/Version-V_2.0-06d6f5?style=flat-square&logo=github&logoColor=white)](https://doi.org/10.5281/zenodo.19941992)
[![DOI](https://img.shields.io/badge/DOI-10.5281%2Fzenodo.19941992-a855f7?style=flat-square&logo=zenodo&logoColor=white)](https://doi.org/10.5281/zenodo.19941992)
[![Resource](https://img.shields.io/badge/Resource-Zenodo_Preprint-7c3aed?style=flat-square&logo=zenodo&logoColor=white)](https://doi.org/10.5281/zenodo.19941992)
[![Published](https://img.shields.io/badge/Published-May_1_2026-10d982?style=flat-square)](https://doi.org/10.5281/zenodo.19941992)
[![Stage](https://img.shields.io/badge/Stage-Simulation_Research-f97316?style=flat-square)](https://github.com/alimulhaqkhan-prog/aura-x-omega-2025)
[![License](https://img.shields.io/badge/Rights-All_Rights_Reserved-f43f5e?style=flat-square)](https://github.com/alimulhaqkhan-prog/aura-x-omega-2025)
[![Patent](https://img.shields.io/badge/Patent-GB2518804.6-f5c518?style=flat-square)](https://github.com/alimulhaqkhan-prog/aura-x-omega-2025)

<br>

[📄 **Zenodo Preprint**](https://doi.org/10.5281/zenodo.19941992) · [👤 **Author**](#-author) · [📐 **Core Equations**](#-core-equations) · [🔬 **Results**](#-validated-results) · [⚠️ **Non-Claims**](#️-non-claims)

</div>

---

## About This Repository

This repository accompanies the Zenodo preprint and provides demonstration and development continuity for the AURA simulation-stage research framework. The published preprint is the authoritative source for all claims, equations, and numerical results.

**Preprint:** AURA: A Dual-Memory Resonance Architecture for Bounded Meaning-State Generation in Memory-Bearing AI Systems
**Published:** 1 May 2026 · Version V 2.0 · Zenodo · [https://doi.org/10.5281/zenodo.19941992](https://doi.org/10.5281/zenodo.19941992)

---

## 🧠 What Is AURA?

Most AI systems produce outputs.
**AURA** asks a different question: *does a memory-bearing system produce meaning-states that remain bounded and coherent across time?*

The **Artificial Unified Resonance Architecture (AURA)** is a simulation-stage dual-memory resonance framework for **bounded meaning-state generation**. It defines how a system's current state (Temporal Memory) interacts with its continuity-weighted memory anchors (Bold Memory) to produce a bounded scalar meaning-state E₀.

> *"The input is identical. The meaning changes because the continuity-weighted memory history changes."*

The validated AURA core consists of: **TM, BM, R(TM,BM), E₀, λ_value**, and a preliminary adaptive extension **Trainable R**.

---

## ⚡ Core Equations

All equations use standard Unicode notation.

---

### Step 1 — TM–BM Resonance

> **R(TM, BM) = Σᵢ wᵢ · cosine_sim(TM, BMᵢ)**

| Symbol | Meaning |
|:---:|---|
| **TM** | Temporal Memory — embedding of the current system state |
| **BM** | Bold Memory — set of continuity-weighted memory anchors shaped by cost, emotional salience, repetition, and long-term significance |
| **wᵢ** | Continuity weight of the i-th BM anchor |
| **cosine_sim** | Cosine similarity between TM and BMᵢ |
| **R(TM, BM)** | Weighted resonance scalar |

**R(TM, BM)** measures how closely the current semantic state aligns with the system's continuity-weighted memory anchors. Bold Memory is not simply an identity store — it is shaped by cost, salience, repetition, and long-term continuity significance.

---

### Step 2 — Condition-Sensitive Dynamic Stabiliser

> **λ_value = clip( k · max(0, −R(TM,BM)), 0, λ_max )**

| Symbol | Meaning |
|:---:|---|
| **k** | Stabiliser gain coefficient |
| **λ_max** | Maximum stabiliser output |
| **λ_value = 0** | When R ≥ 0 — no effect during stable continuity |
| **λ_value > 0** | When R < 0 — activates proportionally to limit coherence collapse |

The stabiliser is **condition-sensitive**: it contributes zero during normal operation and activates only when resonance turns negative, limiting coherence collapse without interfering with stable states.

---

### Step 3 — Bounded Meaning-State

> **E₀ = tanh( R(TM,BM) − D + λ_value )**

| Symbol | Meaning |
|:---:|---|
| **E₀** | Bounded meaning-state ∈ (−1, +1) |
| **D** | Decay coefficient ≥ 0 |
| **tanh(·)** | Enforces boundedness by construction |

**E₀ is bounded analytically** — regardless of input magnitude, E₀ ∈ (−1, +1) holds for all t by construction via tanh.

> **Important:** The formulas A(t) = 1 − |E₀(t)| and continuity-weighted output E = f(E₀, t) are **not part of the validated AURA manuscript core** and are not claimed as results in this preprint.

---

## 🏗️ Architecture

```
                    ┌──────────────────────────────────┐
                    │        Bold Memory (BM)           │
                    │  Continuity-weighted anchors      │
                    │  (cost · salience · repetition ·  │
                    │   long-term significance)         │
                    └──────────────┬───────────────────┘
                                   │
Input ──► Temporal Memory (TM) ────┤
               │                   │
               ▼                   ▼
      TM–BM Resonance Evaluator ──► R(TM, BM)
               │
               ├── R ≥ 0 → λ_value = 0  (stabiliser inactive)
               │
               └── R < 0 → λ_value > 0  (stabiliser activates)
                               │
                               ▼
              Decay Coefficient ──► D
                               │
                               ▼
         ┌────────────────────────────────────────────┐
         │  E₀ = tanh( R(TM,BM) − D + λ_value )      │
         │  E₀ ∈ (−1, +1)  bounded by construction    │
         └────────────────────────────────────────────┘
```

---

## 🔬 Validated Results

All results are from synthetic four-dimensional embedding simulations using `numpy.random.seed(42)`. These are simulation-stage findings; real-world validation is future work.

---

### Experiment 1 — Continuity-Weighted Memory Sensitivity

Same TM input applied across three continuity histories:

| Condition | E₀ |
|---|:---:|
| Trauma history | −0.682 |
| Positive (pet) history | +0.685 |
| Neutral history | +0.026 |
| Stateless baseline | +0.744 (identical across all three) |

**Finding:** Identical present input produces distinct bounded E₀ values depending on continuity-weighted BM history. The stateless baseline is identical in all conditions, confirming the effect arises from memory history — not from the input itself.

---

### Experiment 2 — Trainable R (Preliminary Adaptive Extension)

| Metric | Before | After | Change |
|---|:---:|:---:|:---:|
| Mean R on relevant queries | 0.0260 | 0.1149 | **+342.3%** |
| Wrong-anchor activations | 80/200 | 80/200 | **0% improvement** |
| Wrong-anchor rate | 0.200 | 0.200 | No change |
| E₀ volatility (std dev) | 0.0822 | 0.0892 | **+8.4%** |

**Finding:** Trainable R improves mean resonance magnitude on relevant queries but **does not improve categorical anchor selection** under the current cosine-based update rule. Wrong-anchor activations remain unchanged. E₀ volatility increases slightly. This is reported as an **honest limitation** of the current implementation.

---

### Experiment 3 — λ_value Stabiliser Effect

| Metric | Without λ_value | With λ_value | Improvement |
|---|:---:|:---:|:---:|
| Shock trough (E₀ min) | −0.7053 | −0.5260 | **25.4% less deep** |
| Maximum output jump | 0.2565 | 0.1915 | **25.3% reduction** |
| Post-shock std dev | 0.0422 | 0.0422 | **0.0% increase** |

**Finding:** λ_value reduces contradiction-shock depth and maximum output jump without increasing post-shock variance in the tested simulation setting.

---

### Boundedness Verification

| Property | Value |
|---|---|
| Analytical bound | E₀ ∈ (−1, +1) for all inputs — guaranteed by tanh |
| Empirical simulation range | approximately [−0.705, +0.702] |

---

## 📊 Formal Properties

| Property | Statement |
|---|---|
| **Boundedness** | E₀ ∈ (−1, +1) for all t — formal guarantee via tanh |
| **Stabiliser selectivity** | λ_value = 0 when R ≥ 0; activates only on negative resonance |
| **Continuity dependence** | Same input → distinct E₀ when TM–BM continuity history differs |
| **Monotone stabiliser** | λ_value increases with resonance deficit |

---

## ⚠️ Non-Claims

> **This is a simulation-stage research preprint only.**

The following are **explicitly not claimed** in this preprint:

- **No claim** of machine consciousness, sentience, or subjective experience
- **No claim** of genuine human emotion or affective equivalence
- **No claim** of clinical, medical, or safety-certified deployment readiness
- All results are from **synthetic four-dimensional embedding simulations** only
- **λ_sys and λ_trc** are not validated and are excluded from the validated core
- **ACI Λ(t), Wajdan W(t), CSLV, RGCC-X+, CRM, AEC, and C(t)** are future companion work — **not validated** in this AURA preprint
- **A(t) = 1 − |E₀(t)|**, continuity-weighted output **E = f(E₀, t)**, and "alarm potential" formulations are **not part of the validated AURA core**
- This preprint does **not replace** certified safety monitors or production AI systems

---

## 📦 Repository Contents

```
aura-x-omega-2025/
│
├── README.md                  ← Project documentation
└── AURASimulationsv1.ipynb    ← Frozen reproducibility notebook
```

**Frozen reproducibility artifact:** `AURASimulationsv1.ipynb` is the frozen reproducibility artifact for all numerical results reported in the preprint. Use `numpy.random.seed(42)`. The GitHub repository may evolve for demonstration and development continuity, but all published numerical claims correspond exclusively to the frozen Zenodo/preprint artifact.

---

## 📄 Research Preprint

| Field | Value |
|---|---|
| **Title** | AURA: A Dual-Memory Resonance Architecture for Bounded Meaning-State Generation in Memory-Bearing AI Systems |
| **Author** | Alim ul Haq Khan, Independent Researcher |
| **Affiliation** | Timergara, KP, Pakistan |
| **Version** | V 2.0 |
| **Resource type** | Preprint |
| **Publisher** | Zenodo |
| **Published** | 1 May 2026 |
| **DOI** | [10.5281/zenodo.19941992](https://doi.org/10.5281/zenodo.19941992) |
| **Patent** | UK Patent Application No. GB2518804.6 |
| **ORCID** | [0009-0001-4708-0365](https://orcid.org/0009-0001-4708-0365) |

---

## 📎 Citation

**Plain text:**

> Khan, Alim ul Haq. (2026). *AURA: A Dual-Memory Resonance Architecture for Bounded Meaning-State Generation in Memory-Bearing AI Systems* (V 2.0). Zenodo. https://doi.org/10.5281/zenodo.19941992

**BibTeX:**

```bibtex
@misc{khan2026aura,
  author       = {Khan, Alim ul Haq},
  title        = {AURA: A Dual-Memory Resonance Architecture for Bounded
                  Meaning-State Generation in Memory-Bearing AI Systems},
  year         = {2026},
  publisher    = {Zenodo},
  version      = {V 2.0},
  doi          = {10.5281/zenodo.19941992},
  url          = {https://doi.org/10.5281/zenodo.19941992},
  note         = {Preprint. Simulation-stage research prototype.
                  UK Patent Application GB2518804.6.}
}
```

---

## 🤝 Companion Work

AURA addresses **bounded meaning-state generation** through TM–BM resonance.

A companion manuscript — the **Alim-Continuity Index (ACI)** — addresses runtime continuity monitoring and silent alarm architecture for autonomous AI systems. ACI uses R(TM, BM) as one possible building block, but ACI Λ(t) is **not part of the validated AURA preprint core** and is treated as separate companion work.

[![ACI](https://img.shields.io/badge/Companion-ACI_Runtime_Monitor-06d6f5?style=flat-square)](https://github.com/alimulhaqkhan-prog/alim-continuity-index)

---

## 👤 Author

<div align="center">

**Alim ul Haq Khan**
Independent Researcher
Timergara, Khyber Pakhtunkhwa, Pakistan

[![ORCID](https://img.shields.io/badge/ORCID-0009--0001--4708--0365-10d982?style=flat-square&logo=orcid&logoColor=white)](https://orcid.org/0009-0001-4708-0365)
[![Zenodo](https://img.shields.io/badge/Zenodo-Preprint_V2.0-a855f7?style=flat-square&logo=zenodo&logoColor=white)](https://doi.org/10.5281/zenodo.19941992)
[![GitHub](https://img.shields.io/badge/GitHub-alimulhaqkhan--prog-06d6f5?style=flat-square&logo=github&logoColor=white)](https://github.com/alimulhaqkhan-prog)

</div>

---

## ⚖️ License and Copyright

**Copyright © 2026 Alim ul Haq Khan. All rights reserved.**

This work — including the theoretical framework, mathematical formulations, simulation notebook, and documentation — is associated with **UK Patent Application No. GB2518804.6**.

Unauthorized reproduction, distribution, translation, adaptation, or transmission without prior written permission is not permitted. Academic citation with proper attribution is permitted.

---

<div align="center">

[📄 Zenodo Preprint](https://doi.org/10.5281/zenodo.19941992) · [🐙 GitHub](https://github.com/alimulhaqkhan-prog/aura-x-omega-2025)

<br>

*Simulation-stage research preprint · Not safety-certified · No consciousness or emotion claim*

</div>
