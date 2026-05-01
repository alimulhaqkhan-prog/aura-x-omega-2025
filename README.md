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

### *A Dual-Memory Resonance Framework for Bounded Meaning-State Generation*
### *in Memory-Bearing AI Systems*

<br>

[![Version](https://img.shields.io/badge/version-1.0-06d6f5?style=flat-square&logo=github&logoColor=white)](https://github.com/alimulhaqkhan-prog/aura-x-omega-2025)
[![DOI](https://img.shields.io/badge/DOI-Zenodo-a855f7?style=flat-square&logo=zenodo&logoColor=white)](https://github.com/alimulhaqkhan-prog/aura-x-omega-2025)
[![Stage](https://img.shields.io/badge/Stage-Simulation_Prototype-f97316?style=flat-square)](https://github.com/alimulhaqkhan-prog/aura-x-omega-2025)
[![License](https://img.shields.io/badge/License-All_Rights_Reserved-f43f5e?style=flat-square)](https://github.com/alimulhaqkhan-prog/aura-x-omega-2025)
[![Patent](https://img.shields.io/badge/Patent-GB2518804.6-f5c518?style=flat-square)](https://github.com/alimulhaqkhan-prog/aura-x-omega-2025)

<br>

[📄 **Research Paper**](#-research-paper) · [👤 **Author**](#-author) · [📐 **Core Equations**](#-core-equations) · [⚠️ **Non-Claims**](#️-non-claims)

</div>

---

## 🧠 What Is This?

Most AI systems produce outputs.  
**AURA** asks a different question: *does the system remain internally coherent?*

The **Artificial Unified Resonance Architecture (AURA)** is a simulation-stage dual-memory resonance framework for **bounded meaning-state generation** in memory-bearing AI systems. It defines:

- **Temporal Memory (TM)** — the active, current-context state
- **Bold Memory (BM)** — a fixed set of persistent identity anchors
- **TM–BM Resonance R(TM, BM)** — a scalar alignment signal between current state and identity anchors
- **Bounded meaning-state E₀** — a bounded scalar derived from resonance, disturbance, and a condition-sensitive stabiliser
- **Condition-sensitive stabiliser λ_value** — activates only when resonance is negative; zero during stable operation

> *"The input is identical. The meaning changes because the continuity-weighted memory history changes."*

This repository contains the simulation-stage numerical evaluation supporting the AURA manuscript, submitted to **Discover Artificial Intelligence** (Springer Nature).

---

## ⚡ Core Equations

All symbols use standard Unicode notation. No LaTeX required.

---

### Step 1 — TM–BM Resonance

> **R(TM, BM) = Σᵢ wᵢ · cosine_sim(TM, BMᵢ)**

| Symbol | Meaning |
|:---:|---|
| **TM** | Temporal Memory — embedding of current system state |
| **BM** | Bold Memory — fixed set of identity/safe-operation anchors |
| **wᵢ** | Weight of the i-th BM anchor |
| **cosine_sim** | Cosine similarity between TM and BMᵢ |
| **R(TM, BM)** | Weighted resonance scalar |

R(TM, BM) measures how closely the current semantic state aligns with the persistent identity anchors.

---

### Step 2 — Condition-Sensitive Dynamic Stabiliser

> **λ_value = clip( k · max(0, −R(TM,BM)), 0, λ_max )**

| Symbol | Meaning |
|:---:|---|
| **k** | Stabiliser gain coefficient |
| **λ_max** | Maximum stabiliser output |
| **λ_value = 0** | When R ≥ 0 — no effect during stable continuity |
| **λ_value > 0** | When R < 0 — activates proportionally to limit coherence collapse |

The stabiliser is **condition-sensitive**: it contributes nothing during normal operation and activates only when resonance turns negative.

---

### Step 3 — Bounded Meaning-State

> **E₀ = tanh( R(TM,BM) − D + λ_value )**

| Symbol | Meaning |
|:---:|---|
| **E₀** | Bounded meaning-state ∈ (−1, +1) |
| **D** | Disturbance term ≥ 0 |
| **tanh(·)** | Boundedness enforced by construction |

E₀ is bounded by the tanh activation: regardless of input magnitude, E₀ ∈ (−1, +1) always holds.

---

### Step 4 — Continuity-Weighted Output

> **E = f(E₀, t) — continuity-weighted meaning output**

The final output E is weighted by the continuity history of the session. The same present input can yield different E when the TM–BM resonance history differs — this is the core insight: **meaning depends on accumulated continuity, not just current input**.

---

### Key Identity

> **A(t) = 1 − |E₀(t)| — alarm potential**

High coherence → low alarm. Coherence collapse → maximum alarm.

---

## 📊 Formal Properties

| Property | Statement |
|---|---|
| **Boundedness** | E₀ ∈ (−1, +1) for all inputs, by construction via tanh |
| **Stabiliser selectivity** | λ_value = 0 when R ≥ 0; activates only on negative resonance |
| **Continuity dependence** | Identical input → different E₀ when TM history differs |
| **Monotone stabiliser** | λ_value increases with resonance deficit |
| **Alarm complementarity** | A(t) + \|E₀(t)\| = 1 |

---

## 🔬 What Was Validated

The numerical simulations in `AURASimulationsv1.ipynb` show:

- **Identical-input continuity sensitivity:** the same present input produces distinct bounded E₀ values depending on continuity-weighted TM memory history.
- **E₀ boundedness:** confirmed by construction through the tanh formulation across all tested conditions.
- **λ_value stabiliser effect:** reduces contradiction-shock depth and maximum output jump without increasing post-shock variance in the reported simulation setting.
- **Trainable R (preliminary):** improves mean resonance magnitude, but does **not** improve categorical anchor selection under the current cosine-based update rule — reported as an honest limitation.

---

## 🏗️ Architecture

```text
                    ┌─────────────────────────────┐
                    │      Bold Memory (BM)        │
                    │  Persistent identity anchors  │
                    │  (fixed during evaluation)    │
                    └──────────────┬──────────────┘
                                   │
Input ──► Temporal Memory (TM) ────┤
               │                   │
               ▼                   ▼
      TM–BM Resonance Evaluator ──► R(TM, BM)
               │
               ├── R ≥ 0 → λ_value = 0  (no stabiliser effect)
               │
               └── R < 0 → λ_value > 0  (stabiliser activates)
                               │
                               ▼
              Disturbance Estimator ──► D
                               │
                               ▼
              ┌──────────────────────────────────────┐
              │  E₀ = tanh( R(TM,BM) − D + λ_value ) │
              │  E₀ ∈ (−1, +1)  always bounded        │
              └──────────────────┬───────────────────┘
                                 │
              Continuity Weighting f(E₀, t)
                                 │
                                 ▼
                    E — Meaning-State Output
```

---

## 📦 Repository Contents

```text
aura-x-omega-2025/
│
├── README.md                  ← Project documentation
└── AURASimulationsv1.ipynb    ← Frozen reproducibility notebook
                                  (official scientific record for this submission)
```

> **Note:** The GitHub repository is an evolving demonstration and update space. The frozen official reproducibility record is `AURASimulationsv1.ipynb` as submitted with the manuscript.

---

## ⚠️ Non-Claims

> **This is a simulation-stage research prototype only.**

- AURA makes **no claim** of machine consciousness, genuine emotion, sentience, or subjective experience
- AURA is **not safety-certified** and does not constitute a validated production AI system
- AURA is **not clinically validated** or ready for any safety-critical deployment
- E₀ is a **bounded scalar metric**, not a measure of inner experience
- All results are from **synthetic four-dimensional embedding simulations**; real-world validation is future work
- λ_value is a **mathematical stabiliser**, not a model of pain, discomfort, or emotional regulation
- Broader companion concepts (ACI, CRM, AEC, and others) are **future or separate work** — not validated components of the current manuscript

---

## 📄 Research Paper

**Title:** AURA: A Dual-Memory Resonance Architecture for Bounded Meaning-State Generation in Memory-Bearing AI Systems

| Field | Value |
|---|---|
| **Author** | Alim ul Haq Khan, Independent Researcher |
| **Affiliation** | Timergara, KP, Pakistan |
| **Version** | v1.0 (manuscript in submission) |
| **Journal** | Discover Artificial Intelligence, Springer Nature |
| **Patent** | UK Patent Application No. GB2518804.6 |
| **ORCID** | [0009-0001-4708-0365](https://orcid.org/0009-0001-4708-0365) |

---

## 📎 Citation

```bibtex
@misc{khan2026aura,
  author       = {Khan, Alim ul Haq},
  title        = {AURA: A Dual-Memory Resonance Architecture for Bounded
                  Meaning-State Generation in Memory-Bearing AI Systems},
  year         = {2026},
  note         = {Manuscript in submission. Simulation-stage research prototype.
                  UK Patent Application GB2518804.6.}
}
```

---

## 🤝 Companion Work

AURA focuses on **bounded meaning-state generation** through TM–BM resonance.

A companion manuscript — the **Alim-Continuity Index (ACI)** — addresses **runtime continuity monitoring and silent alarm architecture** for autonomous AI systems. ACI uses R(TM, BM) as one building block but does not rely on the full AURA equation or its stabilisers. Both manuscripts are independently validated.

[![ACI](https://img.shields.io/badge/Companion-ACI_Runtime_Monitor-06d6f5?style=flat-square)](https://github.com/alimulhaqkhan-prog/alim-continuity-index)

---

## 👤 Author

<div align="center">

**Alim ul Haq Khan**  
Independent Researcher  
Timergara, Khyber Pakhtunkhwa, Pakistan

[![ORCID](https://img.shields.io/badge/ORCID-0009--0001--4708--0365-10d982?style=flat-square&logo=orcid&logoColor=white)](https://orcid.org/0009-0001-4708-0365)
[![GitHub](https://img.shields.io/badge/GitHub-alimulhaqkhan--prog-06d6f5?style=flat-square&logo=github&logoColor=white)](https://github.com/alimulhaqkhan-prog)

</div>

---

## ⚖️ License and Copyright

© 2026 Alim ul Haq Khan · All rights reserved.

This work — including the theoretical framework, mathematical formulations, simulation notebook, and documentation — is associated with **UK Patent Application No. GB2518804.6**.

Unauthorized reproduction, distribution, or derivative use without explicit written permission is not permitted. Academic citation with proper attribution is permitted.

---

<div align="center">

[📄 Research Paper](#-research-paper) · [📐 Core Equations](#-core-equations) · [🐙 GitHub](https://github.com/alimulhaqkhan-prog/aura-x-omega-2025)

<br>

*Simulation-stage research prototype · Not safety-certified · No consciousness or emotion claim*

</div>
