# MedReach SL 🏥
### A Full Web-Based Digital Solution for Healthcare Access in Sierra Leone

> A Digital Public Good connecting rural Sierra Leoneans to nearby clinics, medicine availability, and community health workers — on any device, on low bandwidth.

[![Live Site](https://img.shields.io/badge/Live%20Site-GitHub%20Pages-1B6B4A?style=for-the-badge)](YOUR-LIVE-SITE-URL-HERE)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-0F2318?style=for-the-badge&logo=github)](YOUR-REPO-URL-HERE)
[![License](https://img.shields.io/badge/License-MIT-E8A020?style=for-the-badge)](license.html)
[![SDG 3](https://img.shields.io/badge/SDG-3%20Good%20Health-4CAF50?style=for-the-badge)](https://sdgs.un.org/goals/goal3)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Problem Statement](#problem-statement)
- [Features](#features)
- [Pages](#pages)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [How to Run Locally](#how-to-run-locally)
- [Deployment](#deployment)
- [SDG Alignment](#sdg-alignment)
- [Screenshots](#screenshots)
- [Author](#author)
- [License](#license)

---

## Overview

**MedReach SL** is a free, lightweight, mobile-first web platform built to solve the healthcare information gap in Sierra Leone. It allows any Sierra Leonean — regardless of their device or internet speed — to:

- Find the nearest government and NGO health facility
- Check medicine availability before making a long journey
- Connect with a verified Community Health Worker (CHW)
- Stay informed with health alerts and disease advisories

Built as part of **DCOMP204 – Web Design 1** at **Limkokwing University of Creative Technology, Sierra Leone Campus**.

---

## Problem Statement

Sierra Leone has over 4.2 million people in rural areas with limited access to healthcare information. Key challenges include:

- ❌ No knowledge of which clinics are nearby or what services they offer
- ❌ No way to check medicine stock before travelling long distances
- ❌ Difficulty reaching Community Health Workers
- ❌ Poor internet connectivity limiting access to heavy web platforms
- ❌ No central source for health alerts and outbreak advisories

**MedReach SL** addresses all of these in a single, free, open-access platform.

---

## Features

| Feature | Description |
|---|---|
| 🏥 Clinic Locator | Search and filter 12 health facilities across all 14 districts |
| 💊 Medicine Tracker | Filter medicine stock by drug and district with status badges |
| 👩‍⚕️ CHW Directory | Browse verified community health workers by district and specialty |
| 💬 Health Chatbot | Floating assistant on every page answering health queries |
| 📰 Health News | Categorised alerts, updates, and health tips |
| 📝 Registration Form | Free account creation with JavaScript validation |
| 🔐 Login System | User account login with email and password validation |
| 📱 Responsive Design | Fully mobile-first — works on 2G, feature phones, and desktops |
| 🔒 Privacy First | No account required to search clinics or check medicine stock |

---

## Pages

```
index.html      → Homepage — hero, features, SDG alignment, registration
clinics.html    → Clinic directory with live search and district filter
medicine.html   → Medicine stock tracker with drug/district filters
chw.html        → Community Health Worker directory
contact.html    → CHW contact form
news.html       → Health alerts, updates, and tips
about.html      → Mission statement and SDG overview
login.html      → User account login
license.html    → MIT License and Privacy Policy
```

---

## Technologies Used

- **HTML5** — semantic structure and content
- **CSS3** — custom properties, Grid, Flexbox, animations, media queries
- **Vanilla JavaScript** — search filters, chatbot, form validation, mobile menu
- **GitHub** — version control
- **GitHub Pages** — deployment and hosting

> No frameworks. No libraries. No build tools required.

---

## Project Structure

```
medreach-sl/
├── index.html          # Homepage
├── clinics.html        # Clinic locator
├── medicine.html       # Medicine stock tracker
├── chw.html            # CHW directory
├── contact.html        # Contact / CHW form
├── news.html           # Health news & alerts
├── about.html          # About page
├── login.html          # Login page
├── license.html        # License & privacy
├── README.md           # This file
└── assets/
    ├── style.css       # Shared stylesheet (all pages)
    └── app.js          # Shared JavaScript (all pages)
```

---

## How to Run Locally

### Option 1 — VS Code Live Server (Recommended)
1. Open the `medreach-sl` folder in VS Code
2. Install the **Live Server** extension
3. Right-click `index.html` → **Open with Live Server**
4. Site opens at `http://127.0.0.1:5500`

### Option 2 — Terminal
```bash
cd medreach-sl
npx live-server
```

### Option 3 — Direct file
```bash
cd medreach-sl
start index.html     # Windows
open index.html      # Mac
```

> ⚠️ Do not open `index.html` by double-clicking from the downloads folder — the `assets/` folder must be in the same directory for CSS and JS to load correctly.

---

## Deployment

This site is deployed using **GitHub Pages**:

1. Push the project to a public GitHub repository
2. Go to **Settings → Pages → Source → main branch → root**
3. Click **Save** — live URL generates within minutes

**Live Site:** [INSERT LIVE URL HERE]  
**Repository:** [INSERT REPO URL HERE]

---

## SDG Alignment

MedReach SL directly supports three United Nations Sustainable Development Goals:

| SDG | Goal | How MedReach SL Contributes |
|---|---|---|
| **SDG 3** | Good Health & Well-Being | Connects patients to clinics, medicines, and CHWs |
| **SDG 10** | Reduced Inequalities | Equal health access for rural and urban communities |
| **SDG 17** | Partnerships for the Goals | Open data shared across government, NGOs, and communities |

---

## Screenshots

> *(Add screenshots after deployment)*

---

## Author

**Osman Daramy**  
DCOMP204 – Web Design 1  
Limkokwing University of Creative Technology, Sierra Leone  
Semester 04 | March 2026 – July 2026  
Examiner: Oluwatosin Babarinde Ayorinde

---

## License

This project is released as a **Digital Public Good** under the [MIT License](license.html).

Free to use, copy, modify, and distribute with attribution.

---

*© 2026 MedReach SL · A Digital Public Good · Freetown, Sierra Leone*
