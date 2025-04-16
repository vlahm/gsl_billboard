document.addEventListener('DOMContentLoaded', () => {
  fetch('https://raw.githubusercontent.com/vlahm/gsl_dashboard/refs/heads/main/data/stats.json')
    .then(response => {
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    })
    .then(data => {
      //const { sqmi_exposed_alt, salin_record_date } = data;

      const lvl = data[0]['level_pct'];
      const lvl_date = data[0]['level_date'];

      // Update percentage bubble and position
      const bubble = document.querySelector('.percentage-bubble');
      bubble.textContent = `${lvl}%`;
      document.documentElement.style.setProperty('--level', `${lvl}%`);

      // Update date pill
      const datePill = document.querySelector('.date-pill');
      datePill.textContent = lvl_date;
      debugger;
    })
    .catch(error => {
      console.error('Failed to fetch or apply data:', error);
    });
});

