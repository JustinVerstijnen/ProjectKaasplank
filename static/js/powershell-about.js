
document.addEventListener("DOMContentLoaded", () => {
  const lines = [
    'Write-Host "I am Justin Verstijnen"',
    'Write-Host "Location: Netherlands"',
    'Write-Host "Microsoft & Cloud Specialist"',
    'Write-Host "Loading profile..."',
    'Write-Host "Done."'
  ];

  const output = document.getElementById("ps-output");
  const content = document.getElementById("about-content");

  if (!output) return;

  let lineIndex = 0;
  let charIndex = 0;

  function typeLine() {
    if (lineIndex >= lines.length) {
      setTimeout(() => {
        if (content) content.classList.remove("about-hidden");
      }, 600);
      return;
    }

    if (charIndex < lines[lineIndex].length) {
      output.textContent += lines[lineIndex][charIndex++];
      setTimeout(typeLine, 30);
    } else {
      output.textContent += "
";
      lineIndex++;
      charIndex = 0;
      setTimeout(typeLine, 300);
    }
  }

  typeLine();
});
