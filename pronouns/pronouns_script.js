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
        td.textContent = val;
        td.addEventListener('click', () => {
          const audio = new Audio(`${baseURL}/${encodeURIComponent(val)}.mp3`);
          audio.play();
        });
        tr.appendChild(td);
      });
      table.appendChild(tr);
    });
  });
  