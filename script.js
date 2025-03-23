document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('content');
    const baseURL = 'https://kacper-design.github.io/french-phonemes-app/audio';
    const allPhonemes = [...vowelPhonemes, ...consonantPhonemes];
  
    const grid = document.createElement('div');
    grid.className = 'grid';
  
    allPhonemes.forEach(group => {
      const section = document.createElement('div');
      section.className = 'phoneme-group';
  
      const title = document.createElement('div');
      title.className = 'phoneme';
      title.textContent = group.phoneme;
      section.appendChild(title);
  
      group.words.forEach(w => {
        const card = document.createElement('div');
        card.className = 'word-card';
  
        const regex = new RegExp(`(${w.highlight})`, 'i');
        const highlighted = w.word.replace(regex, '<strong>$1</strong>');
  
        card.innerHTML = `
          <div class="emoji">${w.emoji}</div>
          <div class="word">${highlighted}</div>
          <div class="translation">${w.translation}</div>
        `;
  
        const audio = new Audio(`${baseURL}/${encodeURIComponent(w.word)}.mp3`);
        card.addEventListener('click', () => {
          audio.currentTime = 0;
          audio.play();
        });
  
        section.appendChild(card);
      });
  
      grid.appendChild(section);
    });
  
    container.appendChild(grid);
  });
  