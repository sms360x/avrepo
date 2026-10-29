<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isModalOpen = ref(false)

function openModal() {
  isModalOpen.value = true
}

function closeModal() {
  isModalOpen.value = false
}

function handleKeydown(e) {
  if (e.key === 'Escape' && isModalOpen.value) {
    closeModal()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <div class="wiki-portal-wrapper">
    <!-- Header -->
    <header class="wiki-portal-header">
      <h1 class="wiki-portal-title">AvRepo</h1>
      <p class="wiki-portal-subtitle">
        Aviation Operational Intelligence &bull; Nepalese Civil Register &bull; Safety Frameworks
      </p>
    </header>

    <!-- Symmetrical Axis Menu -->
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

      <!-- Center Axis: Circular GA Logo Emblem & Curator Trigger -->
      <section class="wiki-axis-center">
        <div class="wiki-logo-container">
          <img src="/ga-logo.png" alt="Ghanshyam Acharya Aviation Safety Crest" class="wiki-logo-img" />
        </div>
        <div class="wiki-center-caption">
          <span class="wiki-center-badge">Civil Aviation Knowledge Base</span>
        </div>
        <button type="button" class="curator-bio-trigger" @click="openModal">
          Curator Profile / About &nearr;
        </button>
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

    <!-- Minimalist Two-Line Disclaimer Footer -->
    <footer class="wiki-portal-footer">
      <p class="disclaimer-line">
        Operational &amp; Educational Reference Only. Does not supersede official aircraft flight manuals (AFM), airline AOC manuals, or statutory directives of the Civil Aviation Authority of Nepal (CAAN).
      </p>
      <p class="copyright-line">
        Curated by Ghanshyam R. Acharya &bull; &copy; 2026 G.S. Acharya. All rights reserved &bull;
        <a href="https://gsacharya.com" target="_blank" rel="noopener">gsacharya.com</a>
      </p>
    </footer>

    <!-- Modular Glass-Morphism Curator Popup Modal -->
    <Teleport to="body">
      <div v-if="isModalOpen" class="curator-modal-overlay" @click.self="closeModal">
        <div class="curator-modal-card" role="dialog" aria-modal="true">
          <button type="button" class="curator-modal-close" aria-label="Close" @click="closeModal">&times;</button>
          
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
      </div>
    </Teleport>
  </div>
</template>
