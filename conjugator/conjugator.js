document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("verb-grid");
  const detail = document.getElementById("verb-detail");
  const baseURL = './audio';

  fetch("verb_data.json")
    .then(res => res.json())
    .then(verbData => {
      function renderGrid() {
        grid.innerHTML = '';
        detail.style.display = 'none';
        grid.style.display = 'grid';
        grid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(160px, 1fr))';
        grid.style.gap = '1rem';
        verbData.forEach((verb, index) => {
          const card = document.createElement("div");
          card.className = "word-card";
          card.style.cursor = 'pointer';
          card.innerHTML = `
            <div class="emoji">${verb.emoji || '📘'}</div>
            <div class="word">${verb.infinitive}</div>
            <div class="translation">${verb.translation}</div>
          `;
          card.addEventListener("click", () => renderDetail(verb));
          grid.appendChild(card);
        });
      }

      function renderDetail(verb) {
        grid.style.display = 'none';
        detail.style.display = 'block';
        detail.innerHTML = '';

        const back = document.createElement('button');
        back.textContent = '← Back';
        back.className = 'theme-toggle';
        back.addEventListener('click', renderGrid);

        const header = document.createElement('h2');
        header.innerHTML = `${verb.emoji || '📘'} ${verb.infinitive} — <span style="font-weight: normal; font-size: 1rem;">${verb.translation}</span>`;

        const comment = document.createElement('p');
        comment.textContent = verb.comment;
        comment.style.fontStyle = 'italic';

        const infinitivePlay = document.createElement('div');
        infinitivePlay.className = 'infinitive-play';
        infinitivePlay.innerHTML = `<span class="clickable-form">${verb.infinitive} 🔊</span>`;
        infinitivePlay.addEventListener('click', () => {
          const audio = new Audio(`${baseURL}/${verb.infinitive}/${verb.infinitive}.mp3`);
          audio.play();
        });

        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const headRow = document.createElement('tr');
        ['Subject', 'Conjugated Form'].forEach(h => {
          const th = document.createElement('th');
          th.textContent = h;
          headRow.appendChild(th);
        });
        thead.appendChild(headRow);
        table.appendChild(thead);

        const tbody = document.createElement('tbody');
        verb.forms.forEach(entry => {
          const tr = document.createElement('tr');
          const td1 = document.createElement('td');
          td1.textContent = entry.subject;

          const td2 = document.createElement('td');
          const regex = new RegExp(`(${entry.highlight})$`, 'i');
          const highlighted = entry.form.replace(regex, '<strong>$1</strong>');

          const fullPhrase = `${entry.subject.split('/')[0]} ${entry.form}`;
          const safePhrase = fullPhrase.replace(/\//g, '_').replace(/ /g, '_');
          const audioPath = `${baseURL}/${verb.infinitive}/${encodeURIComponent(safePhrase)}.mp3`;

          td2.innerHTML = `<span class="clickable-form">${highlighted} 🔊</span>`;
          td2.addEventListener('click', () => {
            const audio = new Audio(audioPath);
            audio.play();
          });

          tr.appendChild(td1);
          tr.appendChild(td2);
          tbody.appendChild(tr);
        });

        table.appendChild(tbody);

        detail.appendChild(back);
        detail.appendChild(header);
        detail.appendChild(infinitivePlay);
        detail.appendChild(comment);
        detail.appendChild(table);
      }

      renderGrid();
    })
    .catch(err => {
      console.error("Failed to load verb data:", err);
    });
});
