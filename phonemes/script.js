document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("content");
  const baseURL = './audio';

  // Theme toggle button
  const themeToggle = document.createElement("button");
  themeToggle.textContent = "🌓";
  themeToggle.className = "theme-toggle";
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
  });
  document.body.insertBefore(themeToggle, container);
  console.log("test");
  // Layout wrapper
  const layout = document.createElement("div");
  layout.id = "container";

  const vowelCol = document.createElement("div");
  vowelCol.id = "vowel-column";
  vowelCol.className = "phoneme-column";

  const consonantCol = document.createElement("div");
  consonantCol.id = "consonant-column";
  consonantCol.className = "phoneme-column";

  const vowelHeader = document.createElement("h2");
  vowelHeader.textContent = "Vowels";
  vowelCol.appendChild(vowelHeader);

  const consonantHeader = document.createElement("h2");
  consonantHeader.textContent = "Consonants";
  consonantCol.appendChild(consonantHeader);

  function createPhonemeGroup(group) {
    const section = document.createElement("div");
    section.className = "phoneme-group";

    const title = document.createElement("div");
    title.className = "phoneme";
    title.textContent = group.phoneme;
    section.appendChild(title);

    group.words.forEach((w) => {
      const card = document.createElement("div");
      card.className = "word-card";

      const regex = new RegExp(`(${w.highlight})`, "i");
      const highlighted = w.word.replace(regex, "<strong>$1</strong>");

      card.innerHTML = `
          <div class="emoji">${w.emoji}</div>
          <div class="word">${highlighted}</div>
          <div class="translation">${w.translation}</div>
        `;

      const audio = new Audio(`${baseURL}/${encodeURIComponent(w.word)}.mp3`);
      card.addEventListener("click", () => {
        audio.currentTime = 0;
        audio.play();
      });

      section.appendChild(card);
    });

    return section;
  }

  vowelPhonemes.forEach((group) => {
    const section = createPhonemeGroup(group);
    vowelCol.appendChild(section);
  });

  consonantPhonemes.forEach((group) => {
    const section = createPhonemeGroup(group);
    consonantCol.appendChild(section);
  });

  layout.appendChild(vowelCol);
  layout.appendChild(consonantCol);
  container.appendChild(layout);
});
