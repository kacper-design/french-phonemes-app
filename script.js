document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('content');
    const baseURL = 'https://kacper-design.github.io/french-phonemes-app';
  
    phonemeData.forEach(group => {
      const section = document.createElement('div');
      section.className = 'phoneme-group';
  
      const title = document.createElement('div');
      title.className = 'phoneme';
      title.textContent = group.phoneme;
      section.appendChild(title);
  
      const list = document.createElement('div');
      list.className = 'word-list';
  
      group.words.forEach(w => {
        const card = document.createElement('div');
        card.className = 'word-card';
  
        const regex = new RegExp(`(${w.highlight})`, 'i');
        const highlightedWord = w.word.replace(regex, '<strong>$1</strong>');
  
        const audio = new Audio(`${baseURL}/audio/${encodeURIComponent(w.word)}.mp3`);
        card.addEventListener('click', () => {
          audio.currentTime = 0;
          audio.play();
        });
  
        card.innerHTML = `
          <div class="emoji">${w.emoji}</div>
          <div class="word">${highlightedWord}</div>
          <div class="translation">${w.translation}</div>
        `;
  
        list.appendChild(card);
      });
  
      section.appendChild(list);
      container.appendChild(section);
    });
  });