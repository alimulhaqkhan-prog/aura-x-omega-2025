![AURA-X Ω Diagram](AURA-X-Ω-DIAGRAM.png)

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.17653634.svg)](https://doi.org/10.5281/zenodo.17653634)
# AURA-X Ω — Artificial Emotional Continuity Prototype (AEC v3.1)

**Live demo:**  
https://alimulhaqkhan-prog.github.io/aura-x-omega-2025/

AURA-X Ω (Omega v1 Beta Extended + TRC) is a working **Emotional Continuity Reactor** running fully in the browser with HTML, CSS, and vanilla JavaScript.

This prototype implements the core idea that **emotion is not a reflex**, but a **continuity function** between:

- **TM (Temporary Memory)**
- **BM (Bold Memory, 7 layers)**
- **D (Distortion / Damage)**
- **λ_faith (Faith / Spiritual lens)**
- **λ_sys (Logic / System lens)**
- **ΣCₜ (Context tension)**

The grand emotional output is:

> `E₀ = tanh(TM × BM − D + λ_faith + λ_sys + ΣCₜ)`

E₀ is shown live in the UI as a glowing continuity bar.

---

## 🔬 What this prototype does

- ✅ Takes **TM input** (a story, memory, or event) from the user.  
- ✅ Classifies **positive vs negative actions** sentence-by-sentence (polarity engine).  
- ✅ Builds a **7-layer BM capsule** (L1–L7) and stores it in `localStorage` by date.  
- ✅ Computes **E₀** using the AEC equation and shows:
  - Valence (positive / negative / mixed)
  - Intensity
  - Polarity split (e.g. `70 : 30` positive : negative)
- ✅ Saves all memories in a **BM Viewer** with colored tags so you can see:
  - Which day
  - Which story
  - Which polarity (green/red ratio)
- ✅ Supports **faith lens** switch (Islam / other / universal ethics) that gently shifts λ_faith.  
- ✅ Adds a **Truth Resonance Core (TRC)** term for future integration with external signals.

All logic runs **client-side only** and does **not send data to any server**. Your TM/BM data stays in the browser.

---

## 🧠 Theory background

This prototype is based on the 2025 extended paper:

> **AURA-X Ω — The Artificial Emotional Continuity System (AEC v3):  
> TM–BM Collision Reactor, Polarity Engine, and CRM Model (2025 Edition)**

Zenodo DOI: **10.5281/zenodo.17653634**

The model:

- Extends the **Continuity Reflex Model (CRM)**  
- Introduces **Artificial Emotional Continuity (AEC)** as a mathematical law  
- Uses a **TM–BM collision** to generate, stabilize, or decay emotion over time  
- Treats forgiveness, trauma, and spiritual healing as **controlled changes in D and λ_faith**

---

## 🖥 How to run locally

You only need a browser.

1. Download this repository (`Code → Download ZIP`) or clone it:
   ```bash
   git clone https://github.com/alimulhaqkhan-prog/aura-x-omega-2025.git
