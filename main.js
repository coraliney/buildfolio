document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".page");
  let currentSection = 0;

  // Lyssna på piltangenter för att byta sektion
  window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown" && currentSection < sections.length - 1) {
      currentSection++;
      sections[currentSection].scrollIntoView({ behavior: "smooth" });
    } else if (e.key === "ArrowUp" && currentSection > 0) {
      currentSection--;
      sections[currentSection].scrollIntoView({ behavior: "smooth" });
    }
  });
});