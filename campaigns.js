// ===== FILTER =====
const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.camp-full-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    cards.forEach(card => {
      card.style.display = (filter === 'all' || card.dataset.cat === filter) ? 'grid' : 'none';
    });
  });
});

// ===== SEARCH =====
const searchInput = document.getElementById('searchInput');
if (searchInput) {
  searchInput.addEventListener('input', () => {
    const q = searchInput.value.toLowerCase();
    cards.forEach(card => {
      const text = card.innerText.toLowerCase();
      card.style.display = text.includes(q) ? 'grid' : 'none';
    });
  });
}

// ===== DONATE MODAL =====
function openDonate(name) {
  document.getElementById('modal-campaign-name').textContent = name;
  document.getElementById('donateModal').classList.add('open');
  event.preventDefault();
}
function closeDonate() {
  document.getElementById('donateModal').classList.remove('open');
  document.querySelectorAll('.amount-btn').forEach(b => b.classList.remove('selected'));
}
function selectAmount(btn, amount) {
  document.querySelectorAll('.amount-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
}
function confirmDonate() {
  closeDonate();
  showToast('🎉 Donation recorded! Points added to your account.');
}
document.getElementById('donateModal').addEventListener('click', function(e) {
  if (e.target === this) closeDonate();
});

// ===== TOAST =====
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3500);
}
