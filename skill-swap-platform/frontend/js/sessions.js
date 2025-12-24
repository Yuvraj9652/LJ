// frontend/js/sessions.js
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

document.addEventListener('DOMContentLoaded', () => {
  renderCalendar(currentMonth, currentYear);

  document.getElementById('prevBtn')?.addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }
    renderCalendar(currentMonth, currentYear);
  });

  document.getElementById('nextBtn')?.addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
    renderCalendar(currentMonth, currentYear);
  });

  document.getElementById('sessionForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const date = document.getElementById('selectedDate')?.value;
    const skill = document.getElementById('skillSelect')?.value;
    const start = document.getElementById('startTime')?.value;
    const end = document.getElementById('endTime')?.value;
    if (!date || !skill || !start || !end) {
      alert('Please fill all fields.');
      return;
    }
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.textContent = `${date}, ${start}–${end} — ${skill}`;
    document.getElementById('upcomingList')?.appendChild(li);
    alert('Session scheduled (demo)!');
    e.target.reset();
  });
});

function renderCalendar(month, year) {
  const title = document.getElementById('calendarTitle');
  const grid = document.getElementById('calendarGrid');
  const selectedField = document.getElementById('selectedDate');
  if (!title || !grid) return;

  const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  title.textContent = `${monthNames[month]} ${year}`;

  grid.innerHTML = '';
  const firstDay = new Date(year, month, 1).getDay(); // 0-6
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Add weekday labels
  ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].forEach(d => {
    const lbl = document.createElement('div');
    lbl.className = 'text-center fw-semibold text-muted';
    lbl.textContent = d;
    grid.appendChild(lbl);
  });

  // Empty cells before first day
  for (let i = 0; i < firstDay; i++) {
    const empty = document.createElement('div');
    empty.className = 'calendar-cell bg-light';
    grid.appendChild(empty);
  }

  // Days
  for (let day = 1; day <= daysInMonth; day++) {
    const cell = document.createElement('div');
    cell.className = 'calendar-cell';
    cell.textContent = day;
    cell.addEventListener('click', () => {
      grid.querySelectorAll('.calendar-cell').forEach(c => c.classList.remove('selected'));
      cell.classList.add('selected');
      const dd = String(day).padStart(2, '0');
      const mm = String(month + 1).padStart(2, '0');
      selectedField.value = `${dd}-${mm}-${year}`;
    });
    grid.appendChild(cell);
  }
}
