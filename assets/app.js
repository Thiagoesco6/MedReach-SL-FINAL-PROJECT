/* ============ SHARED FUNCTIONALITY — MedReach SL ============ */

/* ---- Mobile menu ---- */
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  if (menu) menu.classList.toggle('open');
}

/* ---- Shared data ---- */
const clinicData = [
  { name: 'Connaught Hospital',          district: 'Western Area Urban (Freetown)', dist: '0.8 km',  services: 'Emergency, Maternity, Surgery', type: 'Government' },
  { name: 'Lumley Government Hospital',  district: 'Western Area Urban (Freetown)', dist: '3.2 km',  services: 'General OPD, Pharmacy', type: 'Government' },
  { name: 'Goderich Community Clinic',   district: 'Western Area Rural',            dist: '5.1 km',  services: 'Primary Care, Malaria Treatment', type: 'Community' },
  { name: 'Bo Government Hospital',      district: 'Bo',       dist: '1.4 km',  services: 'General OPD, Maternity, ART', type: 'Government' },
  { name: 'Serabu Catholic Mission',     district: 'Bo',       dist: '8.7 km',  services: 'Surgery, Maternity, TB Care', type: 'NGO/Mission' },
  { name: 'Kenema Government Hospital',  district: 'Kenema',   dist: '2.1 km',  services: 'General OPD, Lassa Fever Unit', type: 'Government' },
  { name: 'Makeni Regional Hospital',    district: 'Bombali',  dist: '1.9 km',  services: 'Emergency, Paediatrics, Pharmacy', type: 'Government' },
  { name: 'Koidu Government Hospital',   district: 'Kono',     dist: '3.4 km',  services: 'General OPD, Malaria, TB Care', type: 'Government' },
  { name: 'Port Loko District Hospital', district: 'Port Loko',dist: '2.6 km',  services: 'General OPD, Maternity', type: 'Government' },
  { name: 'Pujehun Community Health Centre', district: 'Pujehun', dist: '4.0 km', services: 'Primary Care, Vaccination', type: 'Community' },
  { name: 'Moyamba District Hospital',   district: 'Moyamba',  dist: '3.1 km',  services: 'General OPD, Maternity', type: 'Government' },
  { name: 'Kailahun Government Hospital',district: 'Kailahun', dist: '2.8 km',  services: 'General OPD, Surgery', type: 'Government' },
];

const medicineData = [
  { drug: 'Malaria Treatment (ACT)', district: 'Western Area Urban (Freetown)', clinic: 'Connaught Hospital', status: 'Available' },
  { drug: 'Malaria Treatment (ACT)', district: 'Bo',     clinic: 'Bo Government Hospital', status: 'Available' },
  { drug: 'Malaria Treatment (ACT)', district: 'Kenema', clinic: 'Kenema Government Hospital', status: 'Limited Stock' },
  { drug: 'ARVs (Antiretrovirals)',  district: 'Bo',     clinic: 'Bo Government Hospital', status: 'Limited Stock' },
  { drug: 'ARVs (Antiretrovirals)',  district: 'Western Area Urban (Freetown)', clinic: 'Connaught Hospital', status: 'Available' },
  { drug: 'TB Drugs',                district: 'Bo',     clinic: 'Bo Government Hospital', status: 'Out of Stock' },
  { drug: 'TB Drugs',                district: 'Bombali',clinic: 'Makeni Regional Hospital', status: 'Available' },
  { drug: 'Oral Rehydration Salts',  district: 'Kono',   clinic: 'Koidu Government Hospital', status: 'Available' },
  { drug: 'Paracetamol',             district: 'Port Loko', clinic: 'Port Loko District Hospital', status: 'Available' },
  { drug: 'Amoxicillin',             district: 'Kailahun', clinic: 'Kailahun Government Hospital', status: 'Limited Stock' },
  { drug: 'Vaccines (Routine EPI)',  district: 'Pujehun', clinic: 'Pujehun Community Health Centre', status: 'Available' },
  { drug: 'Insulin',                 district: 'Western Area Urban (Freetown)', clinic: 'Lumley Government Hospital', status: 'Out of Stock' },
];

const chwData = [
  { name: 'Fatu Koroma',   district: 'Bo',     specialty: 'Maternal Health', avail: 'Available today' },
  { name: 'Ibrahim Sesay', district: 'Kenema', specialty: 'Malaria & Child Health', avail: 'Available today' },
  { name: 'Mariama Bangura', district: 'Western Area Urban (Freetown)', specialty: 'General Health Advisory', avail: 'Available tomorrow' },
  { name: 'Mohamed Kamara', district: 'Bombali', specialty: 'TB & Respiratory Care', avail: 'Available today' },
  { name: 'Aminata Conteh', district: 'Kono', specialty: 'Nutrition & Sanitation', avail: 'Available today' },
  { name: 'Alusine Turay', district: 'Port Loko', specialty: 'Vaccination & Immunization', avail: 'Available tomorrow' },
];

/* ---- Badge class helper for medicine status ---- */
function statusBadgeClass(status) {
  if (status === 'Available') return 'avail';
  if (status === 'Limited Stock') return 'limited';
  return 'out';
}

/* ============ CLINIC SEARCH (clinics.html) ============ */
function searchClinics() {
  const query = (document.getElementById('clinicSearch')?.value || '').trim().toLowerCase();
  const districtFilter = document.getElementById('clinicDistrict')?.value || '';
  const results = document.getElementById('clinic-results');
  if (!results) return;
  results.innerHTML = '';

  let matches = clinicData;
  if (districtFilter) matches = matches.filter(c => c.district === districtFilter);
  if (query) matches = matches.filter(c => c.name.toLowerCase().includes(query) || c.district.toLowerCase().includes(query) || c.services.toLowerCase().includes(query));

  if (matches.length === 0) {
    results.innerHTML = '<p class="empty-msg">No clinics found. Try a different district or search term.</p>';
    return;
  }
  matches.forEach(c => {
    const el = document.createElement('div');
    el.className = 'list-item';
    el.innerHTML = '<div><h4>' + c.name + '</h4><p>' + c.district + ' · ' + c.type + ' · ' + c.services + '</p></div><span class="list-tag">📍 ' + c.dist + '</span>';
    results.appendChild(el);
  });
}

function initClinicsPage() {
  const districtSelect = document.getElementById('clinicDistrict');
  if (districtSelect) {
    const districts = [...new Set(clinicData.map(c => c.district))].sort();
    districts.forEach(d => {
      const opt = document.createElement('option');
      opt.value = d; opt.textContent = d;
      districtSelect.appendChild(opt);
    });
  }
  searchClinics(); // show all by default
  document.getElementById('clinicSearch')?.addEventListener('keydown', e => { if (e.key === 'Enter') searchClinics(); });
  document.getElementById('clinicSearch')?.addEventListener('input', searchClinics);
  districtSelect?.addEventListener('change', searchClinics);
}

/* ============ MEDICINE STOCK TRACKER (medicine.html) ============ */
function filterMedicine() {
  const drugFilter = document.getElementById('medDrug')?.value || '';
  const districtFilter = document.getElementById('medDistrict')?.value || '';
  const tbody = document.getElementById('medicine-results');
  if (!tbody) return;
  tbody.innerHTML = '';

  let matches = medicineData;
  if (drugFilter) matches = matches.filter(m => m.drug === drugFilter);
  if (districtFilter) matches = matches.filter(m => m.district === districtFilter);

  if (matches.length === 0) {
    tbody.innerHTML = '<tr><td colspan="4" class="empty-msg">No records found for that combination.</td></tr>';
    return;
  }
  matches.forEach(m => {
    const tr = document.createElement('tr');
    tr.innerHTML = '<td>' + m.drug + '</td><td>' + m.district + '</td><td>' + m.clinic + '</td><td><span class="badge ' + statusBadgeClass(m.status) + '">' + m.status + '</span></td>';
    tbody.appendChild(tr);
  });
}

function initMedicinePage() {
  const drugSelect = document.getElementById('medDrug');
  const districtSelect = document.getElementById('medDistrict');
  if (drugSelect) {
    [...new Set(medicineData.map(m => m.drug))].sort().forEach(d => {
      const opt = document.createElement('option'); opt.value = d; opt.textContent = d; drugSelect.appendChild(opt);
    });
  }
  if (districtSelect) {
    [...new Set(medicineData.map(m => m.district))].sort().forEach(d => {
      const opt = document.createElement('option'); opt.value = d; opt.textContent = d; districtSelect.appendChild(opt);
    });
  }
  filterMedicine();
  drugSelect?.addEventListener('change', filterMedicine);
  districtSelect?.addEventListener('change', filterMedicine);
}

/* ============ CHW DIRECTORY (chw.html) ============ */
function renderCHWs() {
  const grid = document.getElementById('chw-grid');
  if (!grid) return;
  grid.innerHTML = '';
  chwData.forEach(c => {
    const initials = c.name.split(' ').map(n => n[0]).join('');
    const card = document.createElement('div');
    card.className = 'chw-card';
    card.innerHTML = `
      <div class="chw-avatar">${initials}</div>
      <h3>${c.name}</h3>
      <div class="chw-role">${c.specialty}</div>
      <p>${c.district} District · <span class="online-dot"></span>${c.avail}</p>
      <a href="contact.html?chw=${encodeURIComponent(c.name)}" class="btn-outline">Contact ${c.name.split(' ')[0]}</a>
    `;
    grid.appendChild(card);
  });
}

/* ============ CONTACT / CHW FORM (contact.html) ============ */
function initContactForm() {
  const params = new URLSearchParams(window.location.search);
  const chwParam = params.get('chw');
  const chwSelect = document.getElementById('contactCHW');
  if (chwSelect) {
    chwData.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c.name; opt.textContent = c.name + ' — ' + c.specialty + ' (' + c.district + ')';
      chwSelect.appendChild(opt);
    });
    if (chwParam) chwSelect.value = chwParam;
  }
}

function submitContactForm() {
  const name = document.getElementById('contactName')?.value.trim();
  const email = document.getElementById('contactEmail')?.value.trim();
  const chw = document.getElementById('contactCHW')?.value;
  const message = document.getElementById('contactMessage')?.value.trim();
  const msg = document.getElementById('contact-msg');

  msg.className = 'form-msg';
  if (!name || !email || !chw || !message) {
    msg.textContent = 'Please fill in all fields before sending.';
    msg.className = 'form-msg error';
    return;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    msg.textContent = 'Please enter a valid email address.';
    msg.className = 'form-msg error';
    return;
  }
  msg.textContent = '✅ Message sent to ' + chw + '! They will respond within 24 hours via email.';
  msg.className = 'form-msg success';
  ['contactName','contactEmail','contactMessage'].forEach(id => document.getElementById(id).value = '');
}

/* ============ REGISTRATION FORM (index.html) ============ */
function submitForm() {
  const fname    = document.getElementById('fname')?.value.trim();
  const lname    = document.getElementById('lname')?.value.trim();
  const email    = document.getElementById('email')?.value.trim();
  const district = document.getElementById('district')?.value;
  const msg      = document.getElementById('form-msg');

  msg.className = 'form-msg';
  if (!fname || !lname || !email || !district) {
    msg.textContent = 'Please fill in all required fields (name, email, and district).';
    msg.className = 'form-msg error';
    return;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    msg.textContent = 'Please enter a valid email address.';
    msg.className = 'form-msg error';
    return;
  }
  msg.textContent = '✅ Welcome, ' + fname + '! Your account has been created. You\'ll receive health alerts for ' + district + '.';
  msg.className = 'form-msg success';
  ['fname','lname','email','phone','message'].forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
  document.getElementById('district').value = '';
}

/* ============ MOCK LOGIN (login.html) ============ */
function submitLogin() {
  const email = document.getElementById('loginEmail')?.value.trim();
  const password = document.getElementById('loginPassword')?.value.trim();
  const msg = document.getElementById('login-msg');

  msg.className = 'form-msg';
  if (!email || !password) {
    msg.textContent = 'Please enter both email and password.';
    msg.className = 'form-msg error';
    return;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    msg.textContent = 'Please enter a valid email address.';
    msg.className = 'form-msg error';
    return;
  }
  if (password.length < 4) {
    msg.textContent = 'Password must be at least 4 characters.';
    msg.className = 'form-msg error';
    return;
  }
  msg.textContent = '✅ Login successful! Welcome back to MedReach SL, ' + email.split('@')[0] + '.';
  msg.className = 'form-msg success';
}

/* ============ CHATBOT (all pages) ============ */
const chatbotResponses = [
  { keywords: ['malaria'], reply: 'For malaria, ACT (Artemisinin-based Combination Therapy) is the recommended treatment. Check the Medicine Stock Tracker page to see availability near you, and visit your nearest clinic for diagnosis and treatment.' },
  { keywords: ['clinic', 'hospital', 'nearest', 'near me'], reply: 'You can find clinics near you on the Clinics page — search by district or facility name to see services and distance.' },
  { keywords: ['medicine', 'drug', 'stock', 'available'], reply: 'Visit the Medicine Stock Tracker page to filter by drug and district and see real-time availability at clinics.' },
  { keywords: ['chw', 'community health worker', 'worker'], reply: 'Our CHW Directory lists verified community health workers by district and specialty. You can message them directly from their profile.' },
  { keywords: ['emergency', 'urgent', 'help now'], reply: 'For medical emergencies, please go to your nearest government hospital immediately or call the National Ambulance Service. MedReach SL is for information, not emergency dispatch.' },
  { keywords: ['register', 'sign up', 'account'], reply: 'You can create a free account on the homepage under "Register for MedReach SL" to receive health alerts for your district.' },
  { keywords: ['fever', 'headache', 'pain', 'sick', 'symptom'], reply: 'I can\'t diagnose conditions, but I\'d recommend visiting your nearest clinic — use the Clinics page to find one near you. If symptoms are severe, seek care immediately.' },
  { keywords: ['hello', 'hi', 'hey'], reply: 'Hello! I\'m the MedReach SL health assistant. Ask me about clinics, medicines, CHWs, or how to use the platform.' },
  { keywords: ['thank', 'thanks'], reply: 'You\'re welcome! Stay healthy. 🌿' },
];

function chatbotReply(text) {
  const lower = text.toLowerCase();
  for (const r of chatbotResponses) {
    if (r.keywords.some(k => lower.includes(k))) return r.reply;
  }
  return 'I\'m a basic health assistant — I can help with questions about clinics, medicine availability, CHWs, or registering on MedReach SL. Try asking about one of those!';
}

function toggleChatbot() {
  const win = document.getElementById('chatbotWindow');
  win.classList.toggle('open');
}

function sendChatMessage(text) {
  const input = document.getElementById('chatbotInput');
  const messages = document.getElementById('chatbotMessages');
  const value = text || input.value.trim();
  if (!value) return;

  const userMsg = document.createElement('div');
  userMsg.className = 'chat-msg user';
  userMsg.textContent = value;
  messages.appendChild(userMsg);

  const botMsg = document.createElement('div');
  botMsg.className = 'chat-msg bot';
  botMsg.textContent = chatbotReply(value);
  messages.appendChild(botMsg);

  input.value = '';
  messages.scrollTop = messages.scrollHeight;
}

function initChatbot() {
  document.getElementById('chatbotInput')?.addEventListener('keydown', e => { if (e.key === 'Enter') sendChatMessage(); });
}

/* ============ SCROLL FADE-IN ============ */
function initScrollFade() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)'; }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.feature-card, .step, .sdg-card, .news-card, .chw-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity .5s ease, transform .5s ease';
    observer.observe(el);
  });
}

/* ============ INIT ON LOAD ============ */
document.addEventListener('DOMContentLoaded', () => {
  initScrollFade();
  initChatbot();
  if (document.getElementById('clinic-results')) initClinicsPage();
  if (document.getElementById('medicine-results')) initMedicinePage();
  if (document.getElementById('chw-grid')) renderCHWs();
  if (document.getElementById('contactCHW')) initContactForm();
});
