/* ================================================================
   AKASH KONDIMOENA — Portfolio JavaScript
   Author : Triopath Careers
   ================================================================ */

/* ── CANDIDATE CONFIG ──────────────────────────────────────────
   Update these values to customise the portfolio.              */
const CANDIDATE = {
	name: "Akash Kondimoena",
	role: "AI/ML Developer",
	phone: "+1 331-328-8484", // E.164 format (no + or spaces)
	phoneDisplay: "+1 331-328-8484",
	email: "akashkondimoena@gmail.com",
	linkedin: "https://www.linkedin.com/in/akash-kondimoena-6340132b1/", // ← Paste actual LinkedIn URL here
	github: "https://github.com/akashkondimoena",
	location: "Chicago, IL, USA", // determines copyright entity
	cvFile: "assets/Akash_AIML_Resume.pdf",
	whatsappMsg:
		"Hi, I came across your profile and found your background interesting. We have an opportunity that aligns with your experience. Would you be open to discussing this further?",
};

/* ── COPYRIGHT LOGIC ───────────────────────────────────────────
   India → Pvt Ltd  |  Anywhere else → LLC                     */
function getCopyright() {
	const isIndia = CANDIDATE.location.toLowerCase().includes("india");
	const entity = isIndia ? "Triopath Careers Pvt Ltd" : "Triopath Careers LLC";
	const year = new Date().getFullYear();
	return `All rights reserved &copy; ${year} ${entity}`;
}

/* ── WHATSAPP URL ──────────────────────────────────────────── */
function getWhatsAppURL() {
	const msg = encodeURIComponent(CANDIDATE.whatsappMsg);
	return `https://wa.me/${CANDIDATE.phone}?text=${msg}`;
}

/* ── FOOTER RENDER ─────────────────────────────────────────── */
function renderFooter() {
	const el = document.getElementById("site-footer");
	if (!el) return;

	el.innerHTML = /* html */ `
    <div class="footer-wrap">

      <!-- Top bar: Download CV + Contact buttons -->
      <div class="footer-main">

        <!-- Download CV -->
        <a href="${CANDIDATE.cvFile}" download class="btn-dl" aria-label="Download CV">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
               stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Download CV
        </a>

        <!-- Contact Buttons -->
        <div class="footer-contacts">

          <!-- Call -->
          <a href="tel:+${CANDIDATE.phone}" class="contact-pill call" title="Call ${CANDIDATE.phoneDisplay}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                 stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2
                       19.79 19.79 0 0 1-8.63-3.07
                       19.5 19.5 0 0 1-6-6
                       19.79 19.79 0 0 1-3.07-8.67
                       A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72
                       12.84 12.84 0 0 0 .7 2.81
                       2 2 0 0 1-.45 2.11L8.09 9.91
                       a16 16 0 0 0 6 6l1.27-1.27
                       a2 2 0 0 1 2.11-.45
                       12.84 12.84 0 0 0 2.81.7
                       A2 2 0 0 1 22 16.92z"/>
            </svg>
            <span class="pill-label">Call</span>
          </a>

          <!-- Email -->
          <a href="mailto:${CANDIDATE.email}" class="contact-pill email" title="Email">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                 stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            <span class="pill-label">Email</span>
          </a>

          <!-- GitHub -->
          <a href="${CANDIDATE.github}" target="_blank" rel="noopener noreferrer"
             class="contact-pill github" title="GitHub">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385
                       .6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235
                       -3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695
                       -.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23
                       1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605
                       -2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225
                       -.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23
                       .96-.27 1.98-.405 3-.405s2.04.135 3 .405
                       c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18
                       .765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925
                       .435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3
                       0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            <span class="pill-label">GitHub</span>
          </a>

          <!-- LinkedIn -->
          <a href="${CANDIDATE.linkedin}" target="_blank" rel="noopener noreferrer"
             class="contact-pill linkedin" title="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2
                       2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
            <span class="pill-label">LinkedIn</span>
          </a>

          <!-- WhatsApp -->
          <a href="${getWhatsAppURL()}" target="_blank" rel="noopener noreferrer"
             class="contact-pill wa" title="WhatsApp">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967
                       -.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164
                       -.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475
                       -.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606
                       .134-.133.298-.347.446-.52.149-.174.198-.298.298-.497
                       .099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207
                       -.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01
                       -.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479
                       0 1.462 1.065 2.875 1.213 3.074
                       .149.198 2.096 3.2 5.077 4.487
                       .709.306 1.262.489 1.694.625
                       .712.227 1.36.195 1.871.118
                       .571-.085 1.758-.719 2.006-1.413
                       .248-.694.248-1.289.173-1.413
                       -.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.562 4.14 1.532 5.875
                       L.057 23.869l6.101-1.6A11.933 11.933 0 0 0 12 24
                       c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818
                       a9.773 9.773 0 0 1-5.017-1.382l-.36-.213-3.626.95
                       .977-3.52-.234-.372A9.756 9.756 0 0 1 2.182 12
                       c0-5.418 4.4-9.818 9.818-9.818 5.418 0 9.818 4.4 9.818 9.818
                       0 5.418-4.4 9.818-9.818 9.818z"/>
            </svg>
            <span class="pill-label">WhatsApp</span>
          </a>

        </div>
      </div>

      <!-- Bottom bar: copyright + name -->
      <div class="footer-bottom">
        <p class="footer-copy">${getCopyright()}</p>
        <p class="footer-sig">${CANDIDATE.name}</p>
      </div>

    </div>
  `;
}

/* ── NAVBAR: scroll shadow ──────────────────────────────────── */
function initNavbar() {
	const nav = document.getElementById("navbar");
	if (!nav) return;
	const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 20);
	window.addEventListener("scroll", onScroll, { passive: true });
	onScroll(); // run once on load
}

/* ── HAMBURGER MENU ─────────────────────────────────────────── */
function initHamburger() {
	const btn = document.getElementById("hamburger");
	const menu = document.getElementById("navMenu");
	if (!btn || !menu) return;

	btn.addEventListener("click", () => {
		const open = menu.classList.toggle("open");
		btn.classList.toggle("open", open);
		btn.setAttribute("aria-expanded", open);
		document.body.style.overflow = open ? "hidden" : "";
	});

	// Close on link click
	menu.querySelectorAll(".nav-link").forEach((link) => {
		link.addEventListener("click", () => {
			menu.classList.remove("open");
			btn.classList.remove("open");
			document.body.style.overflow = "";
		});
	});

	// Close on outside click
	document.addEventListener("click", (e) => {
		if (
			!document.getElementById("navbar").contains(e.target) &&
			menu.classList.contains("open")
		) {
			menu.classList.remove("open");
			btn.classList.remove("open");
			document.body.style.overflow = "";
		}
	});
}

/* ── ACTIVE NAV LINK ────────────────────────────────────────── */
function setActiveNav() {
	const page = document.body.dataset.page;
	document.querySelectorAll(".nav-link").forEach((link) => {
		link.classList.toggle("active", link.dataset.page === page);
	});
}

/* ── SCROLL-TRIGGERED ANIMATIONS ───────────────────────────── */
function initAnimations() {
	const elements = document.querySelectorAll(".fade-in, .tl-item");

	if (!("IntersectionObserver" in window)) {
		elements.forEach((el) => el.classList.add("visible"));
		return;
	}

	const io = new IntersectionObserver(
		(entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) {
					e.target.classList.add("visible");
					io.unobserve(e.target);
				}
			});
		},
		{ threshold: 0.08 },
	);

	elements.forEach((el) => io.observe(el));

	// Hard fallback — show everything after 800ms no matter what
	setTimeout(() => {
		elements.forEach((el) => el.classList.add("visible"));
	}, 800);
}

/* ── ANIMATED COUNTER (home stats) ─────────────────────────── */
function animateCounter(el) {
	const target = parseInt(el.dataset.target, 10);
	const duration = 1400;
	const step = target / (duration / 16);
	let current = 0;
	const timer = setInterval(() => {
		current = Math.min(current + step, target);
		el.textContent = Math.floor(current) + (el.dataset.suffix || "");
		if (current >= target) clearInterval(timer);
	}, 16);
}

function initCounters() {
	const counters = document.querySelectorAll("[data-target]");
	if (!counters.length) return;
	const io = new IntersectionObserver(
		(entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) {
					animateCounter(e.target);
					io.unobserve(e.target);
				}
			});
		},
		{ threshold: 0.5 },
	);
	counters.forEach((c) => io.observe(c));
}

/* ── INIT ───────────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
	renderFooter();
	initNavbar();
	initHamburger();
	setActiveNav();
	initAnimations();
	initCounters();
});
