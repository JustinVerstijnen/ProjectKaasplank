document.addEventListener("DOMContentLoaded", () => {
  const blocks = document.querySelectorAll(".ps-about");

  blocks.forEach((block) => {
    const terminal = block.querySelector(".ps-terminal-wrapper");
    const command = block.querySelector(".ps-terminal-command");
    const output = block.querySelector(".ps-terminal-output");
    const cursor = block.querySelector(".ps-terminal-cursor");
    const content = block.querySelector(".ps-markdown");
    const scriptName = block.dataset.command || ".\\about-justin-verstijnen.ps1";

    if (!terminal || !command || !output || !cursor || !content) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const outputLines = [
      "Collecting profile data...",
      "Building hobbies and socials overview...",
      "Formatting certifications table...",
      "Rendering markdown page...",
      "Done."
    ];

    const showContent = () => {
      content.hidden = false;
      content.setAttribute("aria-hidden", "false");
      content.classList.remove("about-hidden");
    };

    if (prefersReducedMotion) {
      command.textContent = scriptName;
      output.textContent = `\n${outputLines.join("\n")}`;
      cursor.style.display = "none";
      terminal.classList.add("is-hidden");
      showContent();
      return;
    }

    let commandIndex = 0;
    let lineIndex = 0;
    let charIndex = 0;

    function finishSequence() {
      cursor.style.display = "none";

      setTimeout(() => {
        terminal.classList.add("is-hidden");
      }, 220);

      setTimeout(() => {
        showContent();
      }, 620);
    }

    function typeOutput() {
      if (lineIndex >= outputLines.length) {
        finishSequence();
        return;
      }

      const currentLine = outputLines[lineIndex];

      if (charIndex === 0) {
        output.appendChild(document.createTextNode("\n"));
      }

      if (charIndex < currentLine.length) {
        output.appendChild(document.createTextNode(currentLine.charAt(charIndex)));
        charIndex += 1;
        setTimeout(typeOutput, 10);
        return;
      }

      lineIndex += 1;
      charIndex = 0;
      setTimeout(typeOutput, lineIndex === outputLines.length ? 150 : 80);
    }

    function typeCommand() {
      if (commandIndex < scriptName.length) {
        command.textContent += scriptName.charAt(commandIndex);
        commandIndex += 1;
        setTimeout(typeCommand, 16);
        return;
      }

      setTimeout(typeOutput, 110);
    }

    typeCommand();
  });
});
