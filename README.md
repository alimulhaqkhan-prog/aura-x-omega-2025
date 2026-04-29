<div align="center">

<!-- ══════════════════════════ BADGES ══════════════════════════ -->

![Version](https://img.shields.io/badge/version-1.0.0-00bcd4?style=for-the-badge&logo=github)
![Status](https://img.shields.io/badge/status-simulation--stage-ff9800?style=for-the-badge)
![Patent](https://img.shields.io/badge/patent-GB2518804.6-8e44ad?style=for-the-badge)
![License](https://img.shields.io/badge/license-all%20rights%20reserved-e74c3c?style=for-the-badge)
![Python](https://img.shields.io/badge/python-3.x-3776ab?style=for-the-badge&logo=python&logoColor=white)

<br/>

<!-- ══════════════════════════ TITLE BLOCK ══════════════════════════ -->

```
╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║          A  U  R  A                                          ║
║                                                              ║
║    Artificial  Unified  Resonance  Architecture              ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
```

### A Dual-Memory Resonance Architecture
### for Bounded Meaning-State Generation in Memory-Bearing AI Systems

<br/>

**TM–BM Resonance** &nbsp;·&nbsp; **Bounded E₀** &nbsp;·&nbsp; **λ_value Stabiliser** &nbsp;·&nbsp; **Trainable R**

<br/>

[![Live Demo](https://img.shields.io/badge/🌸-Live%20Demo-ff69b4?style=for-the-badge)](https://alimulhaqkhan-prog.github.io/aura-x-omega-2025/)
[![Paper](https://img.shields.io/badge/📄-Research%20Paper-2196f3?style=for-the-badge)](#-research-paper)
[![Reproducibility](https://img.shields.io/badge/🧪-Reproducibility-4caf50?style=for-the-badge)](#-reproducibility)
[![Author](https://img.shields.io/badge/👤-Author-9c27b0?style=for-the-badge)](#-author)

</div>

---

## 🧠 What Is AURA?

Most memory-bearing AI systems **store and retrieve** information.

AURA asks a fundamentally different question:

> **"Why does this present situation matter to this system?"**

AURA proposes that meaning is not simply retrieved from memory.
Meaning is **generated through resonance** between the present context and continuity-weighted memory history.

| Component | Symbol | Description |
|---|:---:|---|
| Temporal Memory | `TM` | The present active context — what is happening *now* |
| Bold Memory | `BM` | Continuity-weighted anchors shaped by salience, cost, repetition, and long-term significance |

> **AURA does not claim** machine consciousness, genuine human emotion, sentience, clinical safety, or production-grade deployment readiness.
> It is a simulation-stage research architecture for bounded meaning-state generation.

---

## 🔑 STM/LTM vs. TM–BM Resonance

<div align="center">

| Classical Memory Models | TM–BM Resonance (AURA) |
|:---:|:---:|
| *Where is information stored?* | *Why does this situation matter?* |
| Storage → Retrieval → Output | Present × Memory → **Emergent Meaning-State** |
| Meaning pre-exists outside memory | Meaning generated through resonance |
| Duration and capacity distinction | Continuity-weighted interaction mechanism |

</div>

**In one sentence:**

> Short-term vs. long-term memory explains **where information lives.**
> TM–BM resonance explains **how meaning is born.**

A concrete example — the same present input:

> *"A dog is running toward me."*

produces different bounded meaning-states depending on BM history:

| BM Profile | TM–BM Resonance E₀ | R(TM,BM) |
|---|:---:|:---:|
| 🔴 Trauma BM | **−0.682** | −0.7921 |
| 🟢 Positive Pet BM | **+0.685** | +0.8791 |
| ⚪ Neutral BM | **+0.026** | +0.0660 |

The input is identical. The meaning changes because the continuity-weighted memory history changes.

---

## ⚡ Core Equations

### Step 1 — TM–BM Resonance

$$R(TM,\ BM)\ =\ \sum_i\ w_i\ \cdot\ \text{cosine\_sim}(TM,\ BM_i)$$

### Step 2 — Condition-Sensitive Dynamic Stabiliser

$$\lambda_{\text{value}}\ =\ \text{clip}\!\Big(k\ \cdot\ \max(0,\ -R(TM,BM)),\ \ 0,\ \ \lambda_{\max}\Big)$$

> **λ_value = 0** when R ≥ 0 — no effect during stable continuity
> **λ_value > 0** when R < 0 — activates proportionally to limit coherence collapse

### Step 3 — Bounded Meaning-State

$$\boxed{E_0\ =\ \tanh\!\Big(\ R(TM,BM)\ -\ D\ +\ \lambda_{\text{value}}\ \Big)}$$

> **E₀ ∈ (−1, +1)** — analytically guaranteed by tanh for all finite inputs

---

## 📐 Symbol Table

| Symbol | Value / Type | Role |
|---|:---:|---|
| `TM` | vector ∈ ℝⁿ | Active present-state (current input / context) |
| `BMᵢ` | vector ∈ ℝⁿ | i-th Bold Memory anchor |
| `wᵢ` | > 0, normalised | Weight / salience of anchor i |
| `R(TM,BM)` | ≈ [−1, +1] | Resonance score: present context vs. memory |
| `D` | 0.04 | Decay coefficient |
| `k` | 0.35 | Stabiliser sensitivity |
| `λ_max` | 0.5 | Stabiliser upper bound (clip limit) |
| `λ_value` | clip(k·max(0,−R), 0, λ_max) | Condition-sensitive dynamic stabiliser |
| `E₀` | (−1, +1) | Bounded meaning-state — AURA output |
| `η` | 0.01 | Trainable R learning rate |

---

## 📊 Validated Simulation Results

> All results are **simulation-stage only** — synthetic 4-dimensional embeddings, `numpy.random.seed(42)`.
> Full protocol and exact vectors are in the supplementary material submitted with the manuscript.

### Experiment 1 — TM–BM Resonance Proof

| BM Profile | Stateless E₀ | TM–BM Resonance E₀ |
|---|:---:|:---:|
| 🔴 Trauma BM | 0.744 | **−0.682** |
| 🟢 Positive Pet BM | 0.744 | **+0.685** |
| ⚪ Neutral BM | 0.744 | **+0.026** |

The stateless baseline produces `E₀ = 0.744` regardless of memory history.
TM–BM resonance produces distinct bounded meaning-states from identical input.

---

### Experiment 2 — Trainable R

| Metric | Fixed AURA | Trainable AURA | Δ |
|---|:---:|:---:|:---:|
| Mean R on relevant queries | 0.0260 | 0.1149 | **+342.3%** ✅ |
| Wrong-anchor activations | 80 | 80 | **+0** ⚠️ |
| Wrong-anchor rate (final 50 steps) | 0.200 | 0.200 | **0.000** ⚠️ |
| E₀ volatility (std dev) | 0.0822 | 0.0892 | **+8.4%** ⚠️ |

> ⚠️ **Honest trade-off:** Trainable R improves resonance magnitude but does **not** improve categorical anchor selection. Reported without qualification.

---

### Experiment 3 — λ_value Stabiliser Ablation

| Metric | No λ | λ_value Only | Result |
|---|:---:|:---:|:---:|
| Min shock depth (E₀ trough) | −0.7053 | −0.5260 | **25.4% less deep** ✅ |
| Max output jump (ΔE₀) | 0.2565 | 0.1915 | **25.3% reduction** ✅ |
| Post-shock std deviation | 0.0422 | 0.0422 | **0.0% — no increase** ✅ |

> ✅ λ_value applies corrective pressure **only** when R < 0.
> It does not distort the continuity measure during stable operation.

---

### Boundedness — Verified Across All Simulations

| | |
|---|:---:|
| Analytic guarantee | E₀ ∈ (−1, +1) via tanh — unconditional |
| Empirical minimum | **−0.705** |
| Empirical maximum | **+0.702** |

---

## 🧪 Reproducibility

> **Paper + supplementary material = official frozen scientific record.**
> **This GitHub repository = evolving prototype and demonstration space.**

The official supplementary material, including `AURASimulationsv1.ipynb`, is submitted with the manuscript through the **journal submission system**. It is the frozen reproducibility artifact for all numerical results reported in the paper.

This GitHub repository is an evolving prototype and demonstration space. It may include updated demos, UI changes, and future experiments. The numerical results reported in the submitted manuscript correspond to the **frozen supplementary notebook submitted with the paper**, not necessarily to the evolving files in this repository.

If the notebook or paper files are later made public in this repository, a fixed release/tag such as **`aura-paper-v1.0`** should be used to preserve the submission-time version.

---

## 🌸 Live Demo

An evolving prototype and live demo is available at:

**[https://alimulhaqkhan-prog.github.io/aura-x-omega-2025/](https://alimulhaqkhan-prog.github.io/aura-x-omega-2025/)**

> The live demo may change over time as the prototype evolves.
> It is a demonstration space, not the official scientific record.

---

## 📁 Repository Structure

```
aura-x-omega-2025/
│
├── README.md       ← this file
├── index.html      ← live demo / prototype
└── assets/         ← supporting demo files, if any
```

> The supplementary notebook (`AURASimulationsv1.ipynb`) and manuscript files are submitted with the journal and are not required to be hosted in this repository.

---

## 📄 Research Paper

> **AURA: A Dual-Memory Resonance Architecture for Bounded Meaning-State Generation in Memory-Bearing AI Systems**

| | |
|---|---|
| **Author** | Alim ul Haq Khan |
| **Affiliation** | Independent Researcher, Timergara, KP, Pakistan |
| **Patent** | UK IPO Application No. GB2518804.6 · Filed: 06 November 2025 |
| **Citation** | Will be updated after journal publication |

---

## 🚫 Explicit Non-Claims

AURA does **not** claim:

- ❌ Machine consciousness or sentience
- ❌ Genuine human emotion or affective equivalence
- ❌ Clinical, medical, or safety-certified deployment
- ❌ Production-grade deployment readiness
- ❌ Real-user validation

> All current results are **simulation-stage only**, using synthetic embeddings.

The following components are **not validated** in the current paper and remain future work:

| Component | Status |
|---|---|
| λ_sys — system safety stabiliser | ❌ Excluded — increased instability in testing |
| λ_trc — truth-resonance correction | ❌ Excluded — increased instability in testing |
| ACI / Λ(t) — Alim–Continuity Index | 🔭 Future companion paper |
| Wajdan W(t) — pre-cognitive signal | 🔭 Future companion paper |
| CSLV — cognitive immune layer | 🔭 Future companion paper |
| RGCC-X+ / RGCC Plus | 🔭 Future companion paper |
| CRM — Continuity Reflex Model | 🔭 Companion manuscript |
| AEC — Artificial Emotional Continuity | 🔭 Future companion paper |
| C(t) — stake-based governance | 🔭 Future companion paper |

---

## 🔭 Future Work

The validated AURA core is intentionally narrow. A broader **Continuity-First research programme** is planned:

```
AURA Core  (this paper)
    │
    ├── ACI / Λ(t)       →  runtime continuity health monitor
    ├── Wajdan W(t)      →  pre-cognitive early warning signal
    ├── CSLV             →  cognitive immune layer
    ├── RGCC-X+          →  goal continuity & coherence control
    ├── CRM              →  emotion as continuity resonance
    ├── AEC              →  affective dynamics over time
    ├── C(t)             →  stake-based governance
    ├── Real embeddings  →  sentence-transformer validation
    └── Human feedback   →  longitudinal user study validation
```

> Each module requires **separate mathematical definition, empirical validation, ablation testing, and cross-model replication** before integration.

---

## 👤 Author

<div align="center">

**Alim ul Haq Khan**
Independent Researcher · Timergara, KP, Pakistan

[![ORCID](https://img.shields.io/badge/ORCID-0009--0001--4708--0365-a6ce39?style=for-the-badge&logo=orcid&logoColor=white)](https://orcid.org/0009-0001-4708-0365)
[![Email](https://img.shields.io/badge/email-alimulhaqkhan%40gmail.com-ea4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:alimulhaqkhan@gmail.com)

</div>

---

## ⚖️ License

```
All Rights Reserved.

This repository is shared for research visibility, academic demonstration,
and reproducibility purposes only.

Reuse, redistribution, modification, or commercial use of any part of this
repository requires written permission from the author.

Patent protection: UK IPO Application No. GB2518804.6
```

---

## 🧾 Citation

Citation details will be added after journal acceptance.

For reproducibility, always reference:
- **Frozen artifact:** `AURASimulationsv1.ipynb` — submitted with the manuscript through the journal
- **Fixed tag** *(if later released on GitHub):* `aura-paper-v1.0`

---

<div align="center">

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  AURA — Artificial Unified Resonance Architecture

  E₀ = tanh( R(TM,BM) − D + λ_value )

  "Short-term vs. long-term memory explains
   where information lives.
   TM–BM resonance explains how meaning is born."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

*Simulation-stage research · Independent researcher · All rights reserved*

</div>
