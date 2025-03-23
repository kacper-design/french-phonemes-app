document.addEventListener('DOMContentLoaded', () => {
  const table = document.getElementById('pronoun-table');
  const baseURL = './audio';

  const headerRow = document.createElement('tr');
  const headers = ['Person', 'Subject', 'Emphatic', 'Possessive (Masc)', 'Possessive (Fem)', 'Possessive (Pl)'];
  headers.forEach(h => {
    const th = document.createElement('th');
    th.textContent = h;
    headerRow.appendChild(th);
  });
  table.appendChild(headerRow);

  pronounData.forEach(row => {
    const tr = document.createElement('tr');
    Object.values(row).forEach(val => {
      const td = document.createElement('td');
      const parts = val.split('/');
      parts.forEach((part, index) => {
        const span = document.createElement('span');
        span.textContent = part.trim();
        span.style.cursor = 'pointer';
        span.style.marginRight = '0.3rem';
        span.style.display = 'inline-flex';
        span.style.alignItems = 'center';
        span.style.gap = '0.2rem';

        const icon = document.createElement('span');
        icon.textContent = '🔈';
        icon.className = 'speaker';

        span.appendChild(icon);

        span.addEventListener('click', (e) => {
          e.stopPropagation();
          const audio = new Audio(`${baseURL}/${encodeURIComponent(part.trim())}.mp3`);
          audio.play();
        });

        td.appendChild(span);

        if (index < parts.length - 1) {
          const slash = document.createElement('span');
          slash.textContent = '/';
          slash.style.margin = '0 0.2rem';
          td.appendChild(slash);
        }
      });
      tr.appendChild(td);
    });
    table.appendChild(tr);
  });
});
