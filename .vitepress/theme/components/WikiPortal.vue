<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const curatorDialogRef = ref(null)
const supportDialogRef = ref(null)
const searchInput = ref('')
const activeSupportTab = ref('support')

const updateForm = ref({
  registration: '',
  nature: '',
  contact: ''
})
const updateSubmitted = ref(false)

function openCuratorModal() {
  if (typeof window === 'undefined') return
  try {
    if (curatorDialogRef.value?.showModal) {
      curatorDialogRef.value.showModal()
    } else {
      const dialog = document.getElementById('curator-dialog')
      if (dialog?.showModal) {
        dialog.showModal()
      } else if (dialog) {
        dialog.setAttribute('open', '')
      }
    }
  } catch (err) {
    console.warn('Curator modal open error:', err)
  }
}

function closeCuratorModal() {
  if (typeof window === 'undefined') return
  try {
    if (curatorDialogRef.value?.close) {
      curatorDialogRef.value.close()
    } else {
      const dialog = document.getElementById('curator-dialog')
      if (dialog?.close) {
        dialog.close()
      } else if (dialog) {
        dialog.removeAttribute('open')
      }
    }
  } catch (err) {
    console.warn('Curator modal close error:', err)
  }
}

function openSupportModal(tab = 'support') {
  activeSupportTab.value = tab
  if (typeof window === 'undefined') return
  try {
    if (supportDialogRef.value?.showModal) {
      supportDialogRef.value.showModal()
    } else {
      const dialog = document.getElementById('support-dialog')
      if (dialog?.showModal) {
        dialog.showModal()
      } else if (dialog) {
        dialog.setAttribute('open', '')
      }
    }
  } catch (err) {
    console.warn('Support modal open error:', err)
  }
}

function closeSupportModal() {
  if (typeof window === 'undefined') return
  try {
    if (supportDialogRef.value?.close) {
      supportDialogRef.value.close()
    } else {
      const dialog = document.getElementById('support-dialog')
      if (dialog?.close) {
        dialog.close()
      } else if (dialog) {
        dialog.removeAttribute('open')
      }
    }
  } catch (err) {
    console.warn('Support modal close error:', err)
  }
}

function onCuratorBackdropClick(e) {
  if (e.target === curatorDialogRef.value || e.target?.id === 'curator-dialog') {
    closeCuratorModal()
  }
}

function onSupportBackdropClick(e) {
  if (e.target === supportDialogRef.value || e.target?.id === 'support-dialog') {
    closeSupportModal()
  }
}

function handleKeydown(e) {
  if (e.key === 'Escape') {
    closeCuratorModal()
    closeSupportModal()
  }
}

function submitCorrection() {
  if (!updateForm.value.registration && !updateForm.value.nature) return
  const reg = updateForm.value.registration || 'General Civil Register'
  const subject = encodeURIComponent(`[AvRepo Data Update] ${reg}`)
  const body = encodeURIComponent(
`Aircraft / Operator Registration:
${updateForm.value.registration}

Nature of Update / Correction:
${updateForm.value.nature}

Submitter Contact / Role:
${updateForm.value.contact || 'Not provided'}

---
Submitted via avrepo.gsacharya.com`
  )
  if (typeof window !== 'undefined') {
    window.location.href = `mailto:gsacharya.aviation@gmail.com?subject=${subject}&body=${body}`
  }
  updateSubmitted.value = true
}

function resetForm() {
  updateForm.value = {
    registration: '',
    nature: '',
    contact: ''
  }
  updateSubmitted.value = false
}

function triggerSearch(query = '') {
  if (typeof window === 'undefined') return
  const q = typeof query === 'string' ? query : searchInput.value

  const searchBtn = document.querySelector('#local-search button') 
    || document.querySelector('.DocSearch-Button') 
    || document.querySelector('.VPNavBarSearch button')

  if (searchBtn) {
    searchBtn.click()
    if (q) {
      setTimeout(() => {
        const modalInput = document.querySelector('.VPLocalSearchBox input.search-input') 
          || document.querySelector('.DocSearch-Input')
        if (modalInput) {
          modalInput.value = q
          modalInput.dispatchEvent(new Event('input', { bubbles: true }))
        }
      }, 100)
    }
  } else {
    window.dispatchEvent(new KeyboardEvent('keydown', {
      key: 'k',
      code: 'KeyK',
      keyCode: 75,
      which: 75,
      ctrlKey: true,
      metaKey: true,
      bubbles: true
    }))
  }
}

function onSearchSubmit(e) {
  if (e) e.preventDefault()
  triggerSearch(searchInput.value)
}

onMounted(() => {
  if (typeof window !== 'undefined') {
    window.addEventListener('keydown', handleKeydown)
  }
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('keydown', handleKeydown)
  }
})
</script>

<template>
  <div class="wiki-portal-wrapper">
    <!-- Portal Header -->
    <header class="wiki-portal-header">
      <h1 class="wiki-portal-title">AvRepo</h1>
    </header>

    <!-- Symmetrical Wikipedia-Style Axis Portal -->
    <main class="wiki-portal-axis">
      <!-- Left Column: Fleet & Regulations -->
      <section class="wiki-axis-column left">
        <a href="/fleet/nepal-civil-register" class="wiki-axis-card">
          <div class="wiki-axis-card-content">
            <div class="wiki-axis-card-title">
              <span>Fleet &amp; YOM Register</span>
              <span class="wiki-arrow">&rarr;</span>
            </div>
            <p class="wiki-axis-card-desc">
              Commercial turboprops, international jets, mountain STOL aircraft &amp; rotor-wing fleet tracking with Year of Manufacture vintage analysis.
            </p>
          </div>
        </a>

        <a href="/regulations/icao-annexes" class="wiki-axis-card">
          <div class="wiki-axis-card-content">
            <div class="wiki-axis-card-title">
              <span>CAAN &amp; ICAO Regulations</span>
              <span class="wiki-arrow">&rarr;</span>
            </div>
            <p class="wiki-axis-card-desc">
              Statutory compliance architecture connecting ICAO Annexes to CAR-19 (SMS), CAR-M, SSP Nepal, NASP, and AEPPM enforcement frameworks.
            </p>
          </div>
        </a>
      </section>

      <!-- Center Axis: Circular GA Logo Crest -->
      <section class="wiki-axis-center">
        <div class="wiki-logo-container">
          <img
            src="/ga-logo.png"
            alt="Ghanshyam Acharya Aviation Safety Crest"
            class="wiki-logo-img"
            width="220"
            height="220"
            loading="eager"
          />
        </div>
        <div class="wiki-center-caption">
          <span class="wiki-center-badge">An Aviation Repository</span>
        </div>
      </section>

      <!-- Right Column: Taxonomies & Mountain ADM -->
      <section class="wiki-axis-column right">
        <a href="/safety-taxonomies/adrep-hfacs" class="wiki-axis-card">
          <div class="wiki-axis-card-content">
            <div class="wiki-axis-card-title">
              <span>Safety Taxonomies</span>
              <span class="wiki-arrow">&rarr;</span>
            </div>
            <p class="wiki-axis-card-desc">
              ICAO ADREP occurrence categories (CFIT, LOC-I, RE) mapped to 4-tier HFACS error models for high-relief Himalayan airspace.
            </p>
          </div>
        </a>

        <a href="/human-factors/decision-making" class="wiki-axis-card">
          <div class="wiki-axis-card-content">
            <div class="wiki-axis-card-title">
              <span>Mountain ADM</span>
              <span class="wiki-arrow">&rarr;</span>
            </div>
            <p class="wiki-axis-card-desc">
              Aeronautical decision frameworks (DECIDE, FOR-DEC, PAVE, IMSAFE, TEM) calibrated for STOL airstrips and rapid weather shifts.
            </p>
          </div>
        </a>
      </section>
    </main>

    <!-- Central Wikipedia-Style Search Bar -->
    <div class="wiki-search-section">
      <form class="wiki-search-form" @submit.prevent="onSearchSubmit">
        <div class="wiki-search-box" @click="triggerSearch(searchInput)">
          <span class="wiki-search-icon" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </span>
          <input
            v-model="searchInput"
            type="text"
            placeholder="Search tail numbers (9N-*), operators, CAR-19, ADREP..."
            class="wiki-search-input"
            aria-label="Search aviation repository"
            @click.stop
            @keydown.enter.prevent="onSearchSubmit"
          />
          <button type="button" class="wiki-search-submit" @click.stop="triggerSearch(searchInput)">
            Search
          </button>
        </div>
      </form>

      <!-- Quick Search Chips -->
      <div class="wiki-search-chips">
        <span class="chips-label">Popular queries:</span>
        <button type="button" class="search-chip" @click="triggerSearch('9N-AMW')">9N-AMW</button>
        <button type="button" class="search-chip" @click="triggerSearch('Buddha Air')">Buddha Air</button>
        <button type="button" class="search-chip" @click="triggerSearch('CAR-19')">CAR-19</button>
        <button type="button" class="search-chip" @click="triggerSearch('CFIT')">CFIT</button>
        <button type="button" class="search-chip" @click="triggerSearch('Lukla')">Lukla</button>
        <button type="button" class="search-chip" @click="triggerSearch('YOM')">YOM Vintage</button>
      </div>

      <!-- Action Buttons: Curator Profile + Support & Data Updates -->
      <div class="wiki-actions-wrap">
        <button type="button" class="portal-action-btn curator-trigger" @click="openCuratorModal">
          Curator Profile / About &nearr;
        </button>
        <button type="button" class="portal-action-btn support-trigger" @click="openSupportModal('support')">
          Support &amp; Data Updates &nearr;
        </button>
      </div>
    </div>

    <!-- Minimalist Two-Line Disclaimer Footer -->
    <footer class="wiki-portal-footer">
      <p class="disclaimer-line">
        Operational &amp; Educational Reference Only. Does not supersede official aircraft flight manuals (AFM), airline AOC manuals, or statutory directives of the Civil Aviation Authority of Nepal (CAAN).
      </p>
      <p class="copyright-line">
        Curated by <a href="https://gsacharya.com" target="_blank" rel="noopener">Ghanshyam Acharya</a> &bull;
        <button type="button" class="footer-inline-btn" @click="openSupportModal('updates')">Submit Data Correction</button> &bull;
        <button type="button" class="footer-inline-btn" @click="openSupportModal('support')">Support AvRepo</button>
      </p>
    </footer>

    <!-- Native Glass-Morphism Curator Dialog Modal (100% Hydration Safe) -->
    <dialog
      id="curator-dialog"
      ref="curatorDialogRef"
      class="curator-modal"
      @click="onCuratorBackdropClick"
    >
      <div class="curator-modal-inner">
        <button type="button" class="curator-modal-close" aria-label="Close" @click="closeCuratorModal">&times;</button>
        
        <div class="curator-modal-header">
          <span class="curator-modal-badge">About the Curator</span>
          <h2 class="curator-modal-name">Ghanshyam R. Acharya</h2>
          <p class="curator-modal-role">Human Factors Analyst &bull; Aviation Safety Consultant &bull; HRO Specialist</p>
        </div>

        <div class="curator-modal-body">
          <p class="curator-modal-lead">
            This repository is curated by Ghanshyam R. Acharya, drawing on nearly five decades of operational leadership and flight safety oversight across Nepal's high-complexity Himalayan flight environment.
          </p>

          <div class="curator-highlights-grid">
            <div class="highlight-item">
              <strong>Certified Human Factors Instructor</strong>
              <span>Specializing in Aeronautical Decision Making (ADM) and Threat &amp; Error Management (TEM) for mountain aircrews.</span>
            </div>
            <div class="highlight-item">
              <strong>Trained Accident Investigator (MoCTCA)</strong>
              <span>Expertise in ICAO Annex 13 protocols, ADREP occurrence taxonomies, and systemic causal investigation.</span>
            </div>
            <div class="highlight-item">
              <strong>Former CEO &amp; Accountable Manager</strong>
              <span>Former Chief Executive Officer, Senior General Manager, and Accountable Manager of Sita Air (STOL &amp; trunk operations).</span>
            </div>
            <div class="highlight-item">
              <strong>Former DCA Flight Safety Inspector</strong>
              <span>Conducted regulatory flight surveillance, operator compliance audits, and PELR licensing with the Department of Civil Aviation (CAAN).</span>
            </div>
          </div>

          <div class="curator-newsletter-note">
            <strong>The Safety Layer:</strong> Author of the bi-weekly aviation safety newsletter analyzing operational hazards, regulatory enforcement, and systems-safety resilience in South Asian aviation.
          </div>

          <div class="curator-purpose-note">
            <strong>AvRepo Purpose:</strong> Centralizing fragmented fleet registers, CAAN statutory requirements (CAR-19, SSP, NASP), and mountain ADM models into a clean, searchable digital reference for flight crews, safety managers, auditors, and aviation researchers.
          </div>
        </div>
      </div>
    </dialog>

    <!-- Support & Data Updates Modular Tabbed Dialog Modal -->
    <dialog
      id="support-dialog"
      ref="supportDialogRef"
      class="curator-modal support-modal"
      @click="onSupportBackdropClick"
    >
      <div class="curator-modal-inner">
        <button type="button" class="curator-modal-close" aria-label="Close" @click="closeSupportModal">&times;</button>
        
        <!-- Segmented Tab Switcher -->
        <div class="support-modal-tabs">
          <button
            type="button"
            class="support-tab-btn"
            :class="{ active: activeSupportTab === 'support' }"
            @click="activeSupportTab = 'support'"
          >
            <span>☕ Support AvRepo</span>
          </button>
          <button
            type="button"
            class="support-tab-btn"
            :class="{ active: activeSupportTab === 'updates' }"
            @click="activeSupportTab = 'updates'"
          >
            <span>📝 Submit Fleet / Data Update</span>
          </button>
        </div>

        <!-- Tab 1: Support / Sustainability -->
        <div v-if="activeSupportTab === 'support'" class="support-tab-pane">
          <div class="curator-modal-header">
            <span class="curator-modal-badge">Operational Sustainability</span>
            <h2 class="curator-modal-name">Support Aviation Safety Infrastructure</h2>
            <p class="curator-modal-role">Directly funding open-access safety research &amp; real-time register upkeep in Nepal</p>
          </div>

          <div class="support-body">
            <p class="curator-modal-lead">
              AvRepo is a non-commercial, open-access public reference designed to empower pilots, safety officers, auditors, and mountain operators with rapid, unencumbered access to fleet aging data and safety compliance taxonomies.
            </p>

            <div class="support-qr-card">
              <div class="support-qr-frame">
                <img
                  src="/support-gateway.png"
                  alt="AvRepo Digital Support Payment Gateway QR"
                  class="support-qr-image"
                  width="180"
                  height="180"
                />
                <span class="support-qr-tag">Scan to support open-access aviation data infrastructure</span>
              </div>
              <div class="support-qr-info">
                <h3 class="qr-info-title">How Contributions Help</h3>
                <ul class="qr-info-list">
                  <li><strong>Domain &amp; Infrastructure:</strong> Maintains sub-second CDN response times and uptime for active flight crews.</li>
                  <li><strong>Register Verification:</strong> Funds manual cross-referencing of airworthiness directives and CAAN aircraft logs.</li>
                  <li><strong>Institutional Research:</strong> For research partnerships or safety analytics grants, reach out to <a href="mailto:gsacharya.aviation@gmail.com" class="qr-link">gsacharya.aviation@gmail.com</a>.</li>
                </ul>
                <div class="qr-sustainability-note">
                  100% of community contributions are allocated toward independent safety research and server operations.
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Tab 2: Fleet & Regulatory Update Form -->
        <div v-else class="support-tab-pane">
          <div class="curator-modal-header">
            <span class="curator-modal-badge">Community Verification</span>
            <h2 class="curator-modal-name">Submit Fleet or Regulatory Update</h2>
            <p class="curator-modal-role">Help maintain real-time accuracy across Nepal's civil aviation register</p>
          </div>

          <div v-if="updateSubmitted" class="update-success-banner">
            <div class="success-icon">✓</div>
            <h3 class="success-title">Submission Prepared</h3>
            <p class="success-desc">
              Your update details have been prepared for verification with the curator. If your default email client did not open automatically, you can also email directly to <strong>gsacharya.aviation@gmail.com</strong>.
            </p>
            <button type="button" class="btn-reset-form" @click="resetForm">
              Submit Another Correction
            </button>
          </div>

          <form v-else class="update-correction-form" @submit.prevent="submitCorrection">
            <p class="form-instructions">
              Notice a recent aircraft delivery, lease return, deregistration, MSN discrepancy, or CAAN regulatory circular update? Submit verified details below:
            </p>

            <div class="form-group">
              <label for="form-reg">Operator / Aircraft Registration (<code>9N-*</code>) <span class="required">*</span></label>
              <input
                id="form-reg"
                v-model="updateForm.registration"
                type="text"
                placeholder="e.g. 9N-AMW (Buddha Air) or Tara Air DHC-6 MSN 619"
                required
                class="form-input"
              />
            </div>

            <div class="form-group">
              <label for="form-nature">Nature of Update / Correction <span class="required">*</span></label>
              <textarea
                id="form-nature"
                v-model="updateForm.nature"
                rows="4"
                placeholder="Describe the update: Year of Manufacture correction, engine retrofit, AOC status, or CAR-19 / SSP amendment citation..."
                required
                class="form-textarea"
              ></textarea>
            </div>

            <div class="form-group">
              <label for="form-contact">Submitter Email / Role (Optional)</label>
              <input
                id="form-contact"
                v-model="updateForm.contact"
                type="text"
                placeholder="e.g. Capt. Sharma / Safety Officer (pilot@airline.com)"
                class="form-input"
              />
            </div>

            <div class="form-actions">
              <button type="submit" class="form-submit-btn">
                <span>Send Update to Curator &rarr;</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  </div>
</template>