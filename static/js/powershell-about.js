document.addEventListener("DOMContentLoaded", () => {
  const blocks = document.querySelectorAll(".ps-about");

  blocks.forEach((block) => {
    const output = block.querySelector(".ps-output");
    const content = block.querySelector(".ps-rendered");

    if (!output || !content) {
      return;
    }

    let lines = [];

    try {
      lines = JSON.parse(block.dataset.psLines || "[]");
    } catch (error) {
      console.error("Could not parse PowerShell about lines.", error);
      lines = [];
    }

    if (!Array.isArray(lines) || lines.length === 0) {
      content.classList.remove("about-hidden");
      content.classList.add("about-visible");
      block.classList.add("is-finished");
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) {
      output.textContent = `${lines.join("\n")}\n`;
      content.classList.remove("about-hidden");
      content.classList.add("about-visible");
      block.classList.add("is-finished");
      return;
    }

    let lineIndex = 0;
    let charIndex = 0;

    const typeNextCharacter = () => {
      if (lineIndex >= lines.length) {
        window.setTimeout(() => {
          content.classList.remove("about-hidden");
          content.classList.add("about-visible");
          block.classList.add("is-finished");
        }, 900);
        return;
      }

      const currentLine = String(lines[lineIndex] ?? "");

      if (charIndex < currentLine.length) {
        output.textContent += currentLine.charAt(charIndex);
        charIndex += 1;
        window.setTimeout(typeNextCharacter, 24);
        return;
      }

      output.textContent += "\n";
      lineIndex += 1;
      charIndex = 0;
      window.setTimeout(typeNextCharacter, 180);
    };

    typeNextCharacter();
  });
});
