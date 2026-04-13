document.addEventListener("DOMContentLoaded", () => {
  const blocks = document.querySelectorAll(".ps-about");

  blocks.forEach((block) => {
    const terminal = block.querySelector(".ps-terminal-wrapper");
    const command = block.querySelector(".ps-command");
    const output = block.querySelector(".ps-output");
    const cursor = block.querySelector(".ps-cursor");
    const content = block.querySelector(".ps-markdown");
    const scriptName = block.dataset.command || ".\\about-justin-verstijnen.ps1";

    if (!terminal || !command || !output || !cursor || !content) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const outputLines = [
      "Initializing profile generator...",
      "Collecting biography and interests...",
      "Building certifications, links and story sections...",
      "Converting structured data to Markdown...",
      "Rendering about page...",
      "Done."
    ];

    if (prefersReducedMotion) {
      command.textContent = scriptName;
      output.textContent = `\n${outputLines.join("\n")}`;
      cursor.style.display = "none";
      terminal.classList.add("is-hidden");
      content.classList.remove("about-hidden");
      return;
    }

    let commandIndex = 0;
    let lineIndex = 0;
    let charIndex = 0;

    function finishSequence() {
      cursor.style.display = "none";

      setTimeout(() => {
        terminal.classList.add("is-hidden");
      }, 250);

      setTimeout(() => {
        content.classList.remove("about-hidden");
      }, 650);
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
        setTimeout(typeOutput, 12);
        return;
      }

      lineIndex += 1;
      charIndex = 0;
      setTimeout(typeOutput, lineIndex === outputLines.length ? 180 : 110);
    }

    function typeCommand() {
      if (commandIndex < scriptName.length) {
        command.textContent += scriptName.charAt(commandIndex);
        commandIndex += 1;
        setTimeout(typeCommand, 22);
        return;
      }

      setTimeout(typeOutput, 160);
    }

    typeCommand();
  });
});
