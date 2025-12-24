// frontend/js/dashboard.js
document.addEventListener('DOMContentLoaded', () => {
  const ctx = document.getElementById('progressChart');
  if (!ctx) return;

  const data = {
    labels: ['Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
    datasets: [
      {
        label: 'Credits earned',
        data: [5, 8, 6, 10, 12],
        borderColor: '#0d6efd',
        backgroundColor: 'rgba(13,110,253,0.1)',
        tension: 0.3
      },
      {
        label: 'Credits spent',
        data: [2, 4, 3, 6, 5],
        borderColor: '#198754',
        backgroundColor: 'rgba(25,135,84,0.1)',
        tension: 0.3
      }
    ]
  };

  new Chart(ctx, {
    type: 'line',
    data,
    options: {
      responsive: true,
      plugins: {
        legend: { position: 'bottom' }
      },
      scales: {
        y: { beginAtZero: true }
      }
    }
  });

  const balanceEl = document.getElementById('creditBalance');
  if (balanceEl) {
    const earned = data.datasets[0].data.reduce((a, b) => a + b, 0);
    const spent = data.datasets[1].data.reduce((a, b) => a + b, 0);
    balanceEl.textContent = Math.max(0, earned - spent);
  }
});
