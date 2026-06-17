# Guess The Number 🎮 — 3D Interactive Challenge

Welcome to **Guess The Number**, a modern, responsive, and visually stunning web game. This application transforms the classic number guessing concept into an engaging tactile experience featuring a **beautiful 3D claymorphic light-theme interface**, micro-animations, and an intelligent live hint system.

---

## 🌟 Key Features

*   **Premium 3D Claymorphic Theme:** Beautiful soft-light neumorphic and claymorphic panels with dual inset bevel shadows and depth, designed to stand out.
*   **Tactile 3D Controls:** Segmented difficulty buttons and interactive sliders that respond physically to hover and click gestures (`translateY` press-down effect).
*   **Dynamic Range Configuration:** Instantly switches number ranges based on your chosen difficulty:
    *   🟢 **Easy:** Numbers between `1` and `10`
    *   🟡 **Medium:** Numbers between `1` and `100` (Default)
    *   🟠 **Hard:** Numbers between `1` and `1,000`
    *   🔴 **Expert:** Numbers between `1` and `10,000`
*   **Smart Hint Engine:** Generates progressive math-based hints based on remaining guesses:
    *   *Even/Odd parity check*
    *   *Product of all digits*
    *   *Sum of digits divisibility (divisible by 3)*
    *   *Divisibility by 5*
    *   *Digit visibility hint (revealing a single random digit in the secret number)*
*   **Tactile Guess Logs:** Every attempt is registered in a custom-designed, color-coded 3D card showing if your guess was *Too High* (red border) or *Too Low* (blue border).
*   **Elastic Modals:** Visual feedback overlays for victory and game-over states, complete with bounce-scaling and tactile controls.

---

## 🛠️ Technology Stack

*   **Markup:** HTML5 (semantic layout structure)
*   **Styles:** Pure CSS3 (custom CSS Variables, CSS Grid, Flexbox, custom `@keyframes` keyframes, claymorphic shadow rules)
*   **Logic:** Javascript & jQuery (dynamic DOM manipulations)
*   **Framework Utility:** Bootstrap CSS/JS (functional backing for modal triggers)

---

## 🚀 Quick Start (Local Run)

Since the project uses pure client-side web technologies, you don't need any complex build configurations.

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/Umesh-369/guess-game.git
    cd guess-game
    ```

2.  **Open in Browser:**
    Double-click [index.html](index.html) or run it using a local server (e.g., Live Server extension in VS Code).

---

## 🎮 How to Play

1.  Choose your desired **Difficulty** from the selector bar.
2.  Enable/Disable **Hints** as preferred using the 3D toggle switch.
3.  Enter your numerical guess into the primary 3D numeric input field.
4.  Press **Submit Guess** or hit `Enter`.
5.  Watch the guess log and hints panel populate. Try to guess the correct number before your **10 attempts** run out!
6.  Click **Reset Game** or modal play action buttons to restart the game at any time.

---

## 👨‍💻 Developer & PR Information

This version was developed on a dedicated feature branch to keep the main branch clean and streamline pull request reviews.

*   **Feature Branch:** `feature/improved-3d-ui`
*   **Core Overhaul Files:**
    *   [index.html](index.html) — Structural adjustments and SEO optimization.
    *   [css/index.css](css/index.css) — Custom claymorphic variable setups, tactile animations, layout structures.
    *   [js/index.js](js/index.js) — Fixed closing HTML elements bug, integrated guess status classes (`high`, `low`, `correct`) for styling.
