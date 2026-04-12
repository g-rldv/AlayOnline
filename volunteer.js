// ===== VOLUNTEER MODAL =====
function openVolSignup(shift) {
  document.getElementById('vol-shift-name').textContent = shift;
  document.getElementById('volModal').classList.add('open');
}
function closeVolSignup() {
  document.getElementById('volModal').classList.remove('open');
}
function confirmVol() {
  closeVolSignup();
  const t = document.getElementById('toast');
  t.textContent = '✅ Slot reserved! Check your email for confirmation details.';
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3500);
}
document.getElementById('volModal').addEventListener('click', function(e) {
  if (e.target === this) closeVolSignup();
});
