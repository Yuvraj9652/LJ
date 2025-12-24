// frontend/js/main.js
function validateSignup() {
  const name = document.getElementById('name')?.value.trim();
  const email = document.getElementById('email')?.value.trim();
  const pw = document.getElementById('password')?.value;
  const cpw = document.getElementById('confirmPassword')?.value;

  if (!name || !email) {
    alert('Please fill in all fields.');
    return false;
  }
  if (pw !== cpw) {
    alert('Passwords do not match!');
    return false;
  }
  if (pw.length < 6) {
    alert('Password must be at least 6 characters.');
    return false;
  }

  alert('Signup successful (demo)!');
  return false; // prevent actual submit in demo
}

// Simple add/remove handlers on profile page (demo only)
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove-item')) {
    e.target.closest('li')?.remove();
  }
});

document.getElementById('teachForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = document.getElementById('teachInput');
  const list = document.getElementById('teachList');
  const value = (input?.value || '').trim();
  if (!value) return;
  const li = document.createElement('li');
  li.className = 'list-group-item d-flex justify-content-between align-items-center';
  li.innerHTML = `${value} <button class="btn btn-sm btn-outline-danger remove-item">Remove</button>`;
  list?.appendChild(li);
  input.value = '';
});

document.getElementById('learnForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = document.getElementById('learnInput');
  const list = document.getElementById('learnList');
  const value = (input?.value || '').trim();
  if (!value) return;
  const li = document.createElement('li');
  li.className = 'list-group-item d-flex justify-content-between align-items-center';
  li.innerHTML = `${value} <button class="btn btn-sm btn-outline-danger remove-item">Remove</button>`;
  list?.appendChild(li);
  input.value = '';
});
