/**
 * Portion 911 | The Porsche 911 Enthusiast Chronicles
 * Vanilla JavaScript Implementation
 * 
 * Includes:
 * 1. Era Chronology Timeline (1964 - 1973 - 1989 - 1994 - 1998 - 2004 - 2011 - 2019)
 * 2. Model Dossier Modal with Technical Data
 * 3. Performance Stats Counter & Interactive Flat-Six Engine Blueprint
 * 4. Interactive 911 Visual Configurator & Price Calculator
 * 5. Filterable Gallery & Accessible Lightbox
 * 6. Newsletter Subscription Validation
 * 7. Web Audio Flat-Six Boxer Sound Synthesizer
 * 8. Header, Mobile Menu & Scroll Transitions
 */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. ERA CHRONOLOGY TIMELINE DATA & INTERACTION
     ========================================================================== */
  const eraData = {
    '1964': {
      code: 'TYPE 901 / ORIGINAL',
      period: '1964 – 1973',
      title: '1964 Original 911',
      lead: 'The birth of an immutable silhouette.',
      description: 'Presented as the successor to the 356, Ferdinand “Butzi” Porsche’s masterpiece debuted with a 2.0-liter, air-cooled boxer-six engine delivering 130 hp. With its fastback flyline, steep windscreen, and upright circular headlamps, it laid down the aesthetic DNA that would guide automotive design for the next six decades.',
      engine: '2.0L Air-Cooled Flat-6',
      power: '130 HP',
      accel: '8.3 sec',
      speed: '131 MPH',
      milestone: 'Milestone: First production 911 chassis #300057 rolled off Zuffenhausen line.',
      image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80',
      alt: '1964 Original Porsche 911 coupe in vintage silver'
    },
    '1973': {
      code: 'CARRERA RS 2.7',
      period: '1972 – 1973',
      title: '1973 Carrera RS 2.7',
      lead: 'The ducktail homologation that birthed Rennsport.',
      description: 'Built to qualify for Group 4 GT racing, the Carrera RS 2.7 was stripped down to just 960 kg in lightweight trim. Featuring the world’s first production rear spoiler—the iconic “Entenbürzel” (ducktail)—and mechanical fuel injection, it solidified the 911 as an untouchable motorsport champion.',
      engine: '2.7L MFI Flat-6',
      power: '210 HP',
      accel: '5.8 sec',
      speed: '152 MPH',
      milestone: 'Milestone: First production car equipped with factory front and rear aerodynamic spoilers.',
      image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80',
      alt: '1973 Porsche 911 Carrera RS with ducktail spoiler'
    },
    '1989': {
      code: 'TYPE 964',
      period: '1989 – 1994',
      title: '1989 Type 964',
      lead: 'Coil springs, all-wheel drive, and aerodynamic synthesis.',
      description: 'Porsche radically reimagined 85% of the 911’s components. The 964 introduced coil springs over ancient torsion bars, anti-lock brakes (ABS), power steering, and the groundbreaking Carrera 4 all-wheel drive derived from the legendary Paris-Dakar 959 supercar.',
      engine: '3.6L Twin-Spark Flat-6',
      power: '250 HP',
      accel: '5.5 sec',
      speed: '162 MPH',
      milestone: 'Milestone: Introduction of the deployable rear speed-activated spoiler.',
      image: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80',
      alt: 'Classic silver Porsche 964 coupe parked in atmospheric mountain overlook'
    },
    '1994': {
      code: 'TYPE 993',
      period: '1994 – 1998',
      title: '1994 Type 993',
      lead: 'The ultimate air-cooled masterpiece.',
      description: 'Revered by purists as the zenith of hand-built Stuttgart craftsmanship. Designed by Tony Hatter, the 993 introduced an innovative all-aluminum multi-link LSA rear subframe that eliminated trailing-throttle oversteer, paired with twin-turbo all-wheel drive in its Turbo variant.',
      engine: '3.6L VarioRam Flat-6',
      power: '272 HP',
      accel: '5.3 sec',
      speed: '168 MPH',
      milestone: 'Milestone: The final air-cooled generation produced in Porsche history.',
      image: 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?auto=format&fit=crop&w=1200&q=80',
      alt: 'Porsche 993 classic sports car rear angle'
    },
    '1998': {
      code: 'TYPE 996',
      period: '1998 – 2004',
      title: '1998 Type 996',
      lead: 'The water-cooled revolution and dawn of the GT3.',
      description: 'Facing stringent global emissions and performance benchmarks, Porsche engineered its first clean-sheet 911 chassis with a water-cooled 4-valve-per-cylinder flat-six. The 996 era gave birth to the GT3 moniker, forever transforming naturally aspirated track performance.',
      engine: '3.4L Water-Cooled Flat-6',
      power: '300 HP',
      accel: '4.9 sec',
      speed: '174 MPH',
      milestone: 'Milestone: First generation to exceed 300 hp in baseline Carrera trim.',
      image: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=1200&q=80',
      alt: 'Porsche 996 sports car generation in studio'
    },
    '2004': {
      code: 'TYPE 997',
      period: '2004 – 2011',
      title: '2004 Type 997',
      lead: 'Purity restored and the advent of the lightning PDK.',
      description: 'The 997 brought back the revered round headlights and muscular haunches, alongside direct fuel injection (DFI) and the dual-clutch Porsche Doppelkupplung (PDK) gearbox. It culminated in the GT3 RS 4.0—widely considered one of the finest driver’s cars ever crafted.',
      engine: '3.6L DFI Flat-6',
      power: '345 HP',
      accel: '4.5 sec',
      speed: '179 MPH',
      milestone: 'Milestone: Shift-times slashed to milliseconds with the revolutionary PDK dual-clutch.',
      image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1200&q=80',
      alt: 'Porsche 997 coupe sports car with round headlights'
    },
    '2011': {
      code: 'TYPE 991',
      period: '2011 – 2019',
      title: '2011 Type 991',
      lead: 'Aluminum-steel hybrid architecture and active aero.',
      description: 'Featuring a 100mm longer wheelbase for high-speed stability and an aluminum-steel composite shell that shed 45 kg while boosting torsional rigidity by 20%. The 991.2 sub-generation embraced standard turbocharging across all Carrera variants with electrifying low-end torque.',
      engine: '3.0L Twin-Turbo Flat-6',
      power: '370 HP',
      accel: '4.2 sec',
      speed: '183 MPH',
      milestone: 'Milestone: Active rear-axle steering introduced to shorten turning radius and sharpen turn-in.',
      image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80',
      alt: 'Porsche 991 generation speeding on road'
    },
    '2019': {
      code: 'TYPE 992',
      period: '2019 – PRESENT',
      title: '2019 Type 992',
      lead: 'The widest, most digital, and relentlessly capable benchmark.',
      description: 'The current zenith. Wide-body architecture standardized across every trim, continuous rear LED strip, flush electric door handles, and a high-definition digital cockpit anchored by an analog central tachometer. With up to 640 hp in the Turbo S, it redefines the limits of physics.',
      engine: '3.7L Twin VTG Flat-6',
      power: '640 HP (Turbo S)',
      accel: '2.6 sec',
      speed: '205 MPH',
      milestone: 'Milestone: Wet Mode acoustic road sensors provide proactive hydroplane protection.',
      image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=80',
      alt: 'Modern Porsche 992 in dark cinematic black with red highlights'
    }
  };

  const eraTabs = document.querySelectorAll('.era-tab');
  const eraImage = document.getElementById('era-image');
  const eraBadgeCode = document.getElementById('era-badge-code');
  const eraPeriod = document.getElementById('era-period');
  const eraTitle = document.getElementById('era-title');
  const eraLead = document.getElementById('era-lead');
  const eraDescription = document.getElementById('era-description');
  const eraSpecEngine = document.getElementById('era-spec-engine');
  const eraSpecPower = document.getElementById('era-spec-power');
  const eraSpecAccel = document.getElementById('era-spec-accel');
  const eraSpecSpeed = document.getElementById('era-spec-speed');
  const eraMilestone = document.getElementById('era-milestone');
  const eraDisplayCard = document.getElementById('era-content-panel');
  const timelineTrackWrapper = document.getElementById('timeline-track-wrapper');
  const btnPrevEra = document.getElementById('timeline-prev');
  const btnNextEra = document.getElementById('timeline-next');

  let currentEraIndex = 0;
  const eraKeys = Object.keys(eraData);

  function updateEraView(yearKey, scrollIntoView = false) {
    const data = eraData[yearKey];
    if (!data) return;

    currentEraIndex = eraKeys.indexOf(yearKey);

    // Update active tab state
    eraTabs.forEach(tab => {
      const isSelected = tab.getAttribute('data-era') === yearKey;
      tab.classList.toggle('active', isSelected);
      tab.setAttribute('aria-selected', isSelected ? 'true' : 'false');
      if (isSelected && scrollIntoView && timelineTrackWrapper) {
        tab.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    });

    // Subtle crossfade animation
    if (eraDisplayCard) {
      eraDisplayCard.style.opacity = '0.4';
      setTimeout(() => {
        if (eraImage) {
          eraImage.src = data.image;
          eraImage.alt = data.alt;
        }
        if (eraBadgeCode) eraBadgeCode.textContent = data.code;
        if (eraPeriod) eraPeriod.textContent = data.period;
        if (eraTitle) eraTitle.textContent = data.title;
        if (eraLead) eraLead.textContent = data.lead;
        if (eraDescription) eraDescription.textContent = data.description;
        if (eraSpecEngine) eraSpecEngine.textContent = data.engine;
        if (eraSpecPower) eraSpecPower.textContent = data.power;
        if (eraSpecAccel) eraSpecAccel.textContent = data.accel;
        if (eraSpecSpeed) eraSpecSpeed.textContent = data.speed;
        if (eraMilestone) eraMilestone.textContent = data.milestone;

        eraDisplayCard.style.opacity = '1';
      }, 150);
    }
  }

  // Click handlers on era tabs
  eraTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const era = tab.getAttribute('data-era');
      updateEraView(era, true);
    });
  });

  // Next / Prev button navigation
  if (btnPrevEra) {
    btnPrevEra.addEventListener('click', () => {
      currentEraIndex = (currentEraIndex - 1 + eraKeys.length) % eraKeys.length;
      updateEraView(eraKeys[currentEraIndex], true);
    });
  }

  if (btnNextEra) {
    btnNextEra.addEventListener('click', () => {
      currentEraIndex = (currentEraIndex + 1) % eraKeys.length;
      updateEraView(eraKeys[currentEraIndex], true);
    });
  }

  // Keyboard navigation on timeline
  const timelineTrack = document.getElementById('timeline-track');
  if (timelineTrack) {
    timelineTrack.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') {
        currentEraIndex = (currentEraIndex + 1) % eraKeys.length;
        updateEraView(eraKeys[currentEraIndex], true);
        eraTabs[currentEraIndex].focus();
      } else if (e.key === 'ArrowLeft') {
        currentEraIndex = (currentEraIndex - 1 + eraKeys.length) % eraKeys.length;
        updateEraView(eraKeys[currentEraIndex], true);
        eraTabs[currentEraIndex].focus();
      }
    });
  }


  /* ==========================================================================
     2. FEATURED MODELS DOSSIER MODAL
     ========================================================================== */
  const modelDossiers = {
    'carrera': {
      title: 'Porsche 911 Carrera',
      badge: 'THE TIMELESS BENCHMARK',
      price: '$114,400',
      image: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80',
      description: 'The foundation of the 911 ethos. Powered by a 3.0-liter twin-turbocharged boxer six, the baseline Carrera delivers effortless daily drivability and ferocious backroad agility.',
      specs: [
        { label: 'Displacement', val: '2,981 cc (3.0L Twin-Turbo Flat-6)' },
        { label: 'Power Output', val: '379 hp @ 6,500 rpm' },
        { label: 'Max Torque', val: '331 lb-ft @ 1,950–5,000 rpm' },
        { label: 'Transmission', val: '8-Speed Porsche Doppelkupplung (PDK)' },
        { label: '0–60 MPH', val: '4.0 sec (3.8 sec with Sport Chrono)' },
        { label: 'Top Track Speed', val: '182 mph' },
        { label: 'Curb Weight', val: '3,354 lbs' },
        { label: 'Brakes', val: '4-Piston Monobloc Calipers (330mm rotors)' }
      ]
    },
    'carrera-gts': {
      title: 'Porsche 911 Carrera GTS',
      badge: 'THE PURIST SWEET SPOT',
      price: '$150,900',
      image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80',
      description: 'Positioned precisely between the daily Carrera and the ballistic Turbo. Features Turbo-derived suspension, center-lock wheels, reduced sound insulation, and high-flow turbochargers for goosebump induction noise.',
      specs: [
        { label: 'Displacement', val: '2,981 cc (3.0L High-Boost Flat-6)' },
        { label: 'Power Output', val: '473 hp @ 6,500 rpm' },
        { label: 'Max Torque', val: '420 lb-ft @ 2,300–5,000 rpm' },
        { label: 'Transmission', val: '8-Speed PDK or 7-Speed Manual' },
        { label: '0–60 MPH', val: '3.2 sec' },
        { label: 'Top Track Speed', val: '193 mph' },
        { label: 'Suspension', val: 'PASM Sport Suspension (-10mm ride height)' },
        { label: 'Exhaust', val: 'Standard Sport Exhaust with dual center tips' }
      ]
    },
    'turbo-s': {
      title: 'Porsche 911 Turbo S',
      badge: 'THE SUPERCAR DESTROYER',
      price: '$230,400',
      image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=80',
      description: 'An absolute triumph of thermodynamic efficiency and launch traction. Powered by symmetrical Variable Turbine Geometry (VTG) turbos and Porsche Traction Management all-wheel drive, it delivers effortless sub-2.6s launches anytime, anywhere.',
      specs: [
        { label: 'Displacement', val: '3,745 cc (3.7L Twin VTG Flat-6)' },
        { label: 'Power Output', val: '640 hp @ 6,750 rpm' },
        { label: 'Max Torque', val: '590 lb-ft @ 2,500–4,000 rpm' },
        { label: 'Drive Layout', val: 'All-Wheel Drive (PTM) with active front diff' },
        { label: '0–60 MPH', val: '2.6 sec (Independently tested 2.2 sec)' },
        { label: 'Top Track Speed', val: '205 mph' },
        { label: 'Brakes', val: 'PCCB 420mm front carbon-ceramic 10-piston' },
        { label: 'Quarter Mile', val: '10.1 seconds @ 137 mph' }
      ]
    },
    'gt3': {
      title: 'Porsche 911 GT3',
      badge: '9,000 RPM NATURALLY ASPIRATED PURITY',
      price: '$182,900',
      image: 'https://images.unsplash.com/photo-1611821064430-0d40291d0f0b?auto=format&fit=crop&w=1200&q=80',
      description: 'Conceived in Weissach alongside the 911 RSR race car. Features a motorsport double-wishbone front axle, individual throttle bodies, and an engine that screams to an unearthly 9,000 rpm redline.',
      specs: [
        { label: 'Engine Type', val: '4.0L Naturally Aspirated Boxer-6' },
        { label: 'Power Output', val: '502 hp @ 8,400 rpm' },
        { label: 'Max Redline', val: '9,000 RPM' },
        { label: 'Front Suspension', val: 'Double-Wishbone with ball-joint bearings' },
        { label: 'Aerodynamics', val: 'Swan-neck top-hung rear wing (+50% downforce)' },
        { label: '0–60 MPH', val: '3.2 sec' },
        { label: 'Nürburgring Lap', val: '6:59.927 minutes (Nordschleife)' },
        { label: 'Transmission', val: '7-Speed GT Sport PDK or 6-Speed GT Manual' }
      ]
    },
    'dakar': {
      title: 'Porsche 911 Dakar',
      badge: 'ALL-TERRAIN HOMAGE TO 1984',
      price: '$222,000',
      image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80',
      description: 'A love letter to René Metge’s 1984 Paris-Dakar victory in the 953. Features a 50mm lift with hydraulic 30mm extra rise system, recalibrated Rallye Launch Control, and all-terrain reinforced sidewalls.',
      specs: [
        { label: 'Displacement', val: '2,981 cc (3.0L Twin-Turbo Flat-6)' },
        { label: 'Power Output', val: '473 hp @ 6,500 rpm' },
        { label: 'Ground Clearance', val: 'Up to 191 mm (hydraulic lift system)' },
        { label: 'Tires', val: 'Spec Pirelli Scorpion All-Terrain Plus (9mm tread)' },
        { label: 'Drive Modes', val: 'Rallye Mode & Offroad Mode' },
        { label: '0–60 MPH', val: '3.4 sec (on sand/gravel)' },
        { label: 'Cooling System', val: 'Borrowed from 911 Turbo S with GT3 engine mounts' },
        { label: 'Production', val: 'Strictly limited to 2,500 units worldwide' }
      ]
    }
  };

  const modelModal = document.getElementById('model-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalBodyContent = document.getElementById('modal-body-content');
  const viewDetailBtns = document.querySelectorAll('.view-details-btn');

  function openModelModal(modelId) {
    const data = modelDossiers[modelId];
    if (!data || !modelModal || !modalBodyContent) return;

    let specsHtml = '';
    data.specs.forEach(s => {
      specsHtml += `
        <tr>
          <td>${s.label}</td>
          <td>${s.val}</td>
        </tr>
      `;
    });

    modalBodyContent.innerHTML = `
      <div class="modal-header-hero">
        <img src="${data.image}" alt="${data.title}" class="modal-header-img">
        <div class="modal-header-overlay"></div>
      </div>
      <div class="modal-badge-row">
        <span class="badge red">${data.badge}</span>
      </div>
      <h3 class="modal-model-title" id="modal-title">${data.title}</h3>
      <span class="modal-price-tag">Starting MSRP: ${data.price}</span>
      <p class="modal-desc" style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.7;">${data.description}</p>
      
      <table class="modal-tech-specs-table">
        <tbody>
          ${specsHtml}
        </tbody>
      </table>

      <div style="display: flex; gap: 1rem; margin-top: 2rem; flex-wrap: wrap;">
        <a href="#configurator" class="btn btn-primary" onclick="selectConfigModel('${modelId}'); document.getElementById('model-modal').classList.remove('open');">
          Configure This Spec ↗
        </a>
        <button class="btn btn-outline" onclick="synthesizeEngineSound(true)">
          Test Fire Flat-Six Sound 🔊
        </button>
      </div>
    `;

    modelModal.classList.add('open');
    modelModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    modalCloseBtn?.focus();
  }

  function closeModelModal() {
    if (!modelModal) return;
    modelModal.classList.remove('open');
    modelModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  viewDetailBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modelId = btn.getAttribute('data-model-id');
      openModelModal(modelId);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModelModal);
  }

  if (modelModal) {
    modelModal.addEventListener('click', (e) => {
      if (e.target === modelModal) closeModelModal();
    });
  }

  // Global ESC key listener for modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModelModal();
      closeSaveModal();
      closeLightbox();
    }
  });


  /* ==========================================================================
     3. PERFORMANCE, PERFECTED: ANIMATED COUNTERS & ENGINE DIAGRAM
     ========================================================================== */
  const statCards = document.querySelectorAll('.stat-card');
  let hasAnimatedStats = false;

  function animateCounters() {
    statCards.forEach(card => {
      const target = parseFloat(card.getAttribute('data-target'));
      const isDecimal = card.hasAttribute('data-decimals');
      const numElem = card.querySelector('.stat-number');
      if (!numElem) return;

      let start = 0;
      const duration = 1800; // ms
      const startTime = performance.now();

      function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Easing: easeOutExpo
        const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const currentVal = start + (target - start) * ease;

        if (isDecimal) {
          numElem.textContent = currentVal.toFixed(1);
        } else {
          numElem.textContent = Math.floor(currentVal).toLocaleString();
        }

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          if (isDecimal) {
            numElem.textContent = target.toFixed(1);
          } else {
            numElem.textContent = target.toLocaleString();
          }
        }
      }

      requestAnimationFrame(update);
    });
  }

  const statsSection = document.getElementById('performance');
  if (statsSection && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimatedStats) {
          hasAnimatedStats = true;
          animateCounters();
        }
      });
    }, { threshold: 0.25 });
    observer.observe(statsSection);
  } else {
    animateCounters();
  }

  // Engine Blueprint Interactivity
  const engineSvg = document.querySelector('.engine-svg');
  const engineAnimToggle = document.getElementById('engine-anim-toggle');
  const engineToggleLabel = document.getElementById('engine-toggle-label');
  let isFiring = false;

  if (engineAnimToggle && engineSvg) {
    engineAnimToggle.addEventListener('click', () => {
      isFiring = !isFiring;
      engineSvg.classList.toggle('firing', isFiring);
      engineAnimToggle.setAttribute('aria-pressed', isFiring ? 'true' : 'false');
      if (engineToggleLabel) {
        engineToggleLabel.textContent = isFiring ? 'Stop Piston Cycle' : 'Start Piston Cycle';
      }
      if (isFiring) {
        synthesizeEngineSound(false);
      }
    });
  }

  // Hotspot Inspection Tooltips
  const hotspotInfo = {
    'boxer': {
      title: '1. Horizontally Opposed Crankcase',
      text: 'Opposed cylinders lie completely flat at 180 degrees. Pistons fire towards and away from each other simultaneously, canceling primary and secondary inertia for silky rev-matching and an ultra-low center of gravity.'
    },
    'opposed': {
      title: '2. Six Opposed Combustion Chambers',
      text: 'Bank 1 (cylinders 1–3) and Bank 2 (cylinders 4–6) feature dual overhead camshafts with VarioCam Plus electro-hydraulic valve timing to optimize both low-end torque and 9,000 rpm top-end breathing.'
    },
    'turbo': {
      title: '3. Variable Turbine Geometry (VTG)',
      text: 'Porsche is the pioneer of VTG on gasoline engines. Moveable internal vanes adapt exhaust gas entry angles, simulating a compact turbo at low revs and a cavernous high-boost turbine at maximum throttle.'
    },
    'pdk': {
      title: '4. Rear Transaxle & 8-Speed PDK',
      text: 'Mounted directly behind the engine, the wet dual-clutch transmission shifts in under 100 milliseconds without interrupting power delivery, sending torque through an electronically managed limited-slip differential.'
    }
  };

  const hotspots = document.querySelectorAll('.hotspot');
  const blueprintInfoTitle = document.getElementById('blueprint-info-title');
  const blueprintInfoText = document.getElementById('blueprint-info-text');

  hotspots.forEach(spot => {
    function activateHotspot() {
      const infoKey = spot.getAttribute('data-info');
      const data = hotspotInfo[infoKey];
      if (data && blueprintInfoTitle && blueprintInfoText) {
        blueprintInfoTitle.textContent = data.title;
        blueprintInfoText.textContent = data.text;
      }
    }
    spot.addEventListener('click', activateHotspot);
    spot.addEventListener('mouseenter', activateHotspot);
  });


  /* ==========================================================================
     4. DREAM 911 CONFIGURATOR & DYNAMIC SVG VEHICLE COMPOSITE
     ========================================================================== */
  const configState = {
    model: 'carrera-gts',
    modelName: '911 Carrera GTS',
    modelPrice: 150900,
    paint: 'guards-red',
    paintName: 'Guards Red',
    paintPrice: 0,
    paintGradients: {
      'guards-red': ['#ff3b4b', '#d5001c', '#9a0014', '#4f000a'],
      'racing-yellow': ['#ffe853', '#f2be00', '#b58c00', '#5c4500'],
      'gt-silver': ['#dcdfe6', '#989ca6', '#595d68', '#212328'],
      'chalk': ['#f0efe9', '#d8d7d2', '#97958e', '#454440'],
      'black': ['#383a42', '#141518', '#0c0d10', '#030304'],
      'shark-blue': ['#349df7', '#0b70c4', '#074e89', '#022646']
    },
    wheel: 'carrera-s',
    wheelName: '20"/21" Carrera S Wheels',
    wheelPrice: 0,
    interior: 'black',
    interiorName: 'Black Leather & Race-Tex',
    interiorPrice: 0,
    options: {
      chrono: { active: true, name: 'Sport Chrono Package', price: 2790 },
      pccb: { active: false, name: 'Porsche Ceramic Composite Brakes (PCCB)', price: 9860 },
      exhaust: { active: true, name: 'Sport Exhaust System', price: 2950 },
      lift: { active: false, name: 'Front Axle Lift System', price: 2770 }
    },
    lightingMode: 'cyber'
  };

  // Selectors for Configurator UI
  const previewModelBadge = document.getElementById('preview-model-badge');
  const previewColorBadge = document.getElementById('preview-color-badge');
  const summaryBasePrice = document.getElementById('summary-base-price');
  const summaryOptionsPrice = document.getElementById('summary-options-price');
  const summaryTotalPrice = document.getElementById('summary-total-price');
  const configCodePreview = document.getElementById('config-code-preview');
  const paintGlowElem = document.getElementById('car-paint-glow');
  const paintStop1 = document.getElementById('paint-stop-1');
  const paintStop2 = document.getElementById('paint-stop-2');
  const paintStop3 = document.getElementById('paint-stop-3');
  const paintStop4 = document.getElementById('paint-stop-4');
  const caliperFront = document.getElementById('caliper-front');
  const caliperRear = document.getElementById('caliper-rear');
  const spoilerPath = document.getElementById('spoiler-path');

  // Format currency helper
  function formatMoney(amount) {
    return '$' + amount.toLocaleString('en-US');
  }

  // Update Configurator UI and Graphics
  function updateConfigurator() {
    // 1. Calculate Option Prices
    let optionsSum = configState.paintPrice + configState.wheelPrice + configState.interiorPrice;
    for (const key in configState.options) {
      if (configState.options[key].active) {
        optionsSum += configState.options[key].price;
      }
    }
    const totalPrice = configState.modelPrice + optionsSum;

    // 2. Update Pricing Display
    if (summaryBasePrice) summaryBasePrice.textContent = formatMoney(configState.modelPrice);
    if (summaryOptionsPrice) summaryOptionsPrice.textContent = formatMoney(optionsSum);
    if (summaryTotalPrice) summaryTotalPrice.textContent = formatMoney(totalPrice);

    // 3. Update Labels & Badges
    if (previewModelBadge) previewModelBadge.textContent = configState.modelName.toUpperCase();
    if (previewColorBadge) previewColorBadge.textContent = `${configState.paintName} • ${configState.wheelName}`;

    // 4. Update SVG Paint Gradient
    const stops = configState.paintGradients[configState.paint] || configState.paintGradients['guards-red'];
    if (paintStop1) paintStop1.setAttribute('stop-color', stops[0]);
    if (paintStop2) paintStop2.setAttribute('stop-color', stops[1]);
    if (paintStop3) paintStop3.setAttribute('stop-color', stops[2]);
    if (paintStop4) paintStop4.setAttribute('stop-color', stops[3]);

    // 5. Update Ambient Glow
    if (paintGlowElem) {
      paintGlowElem.style.background = `radial-gradient(circle, ${stops[1]}35 0%, transparent 70%)`;
    }

    // 6. Update Brake Calipers (Yellow for PCCB, Red for Standard)
    const isPCCB = configState.options.pccb.active;
    const caliperColor = isPCCB ? '#f5c400' : '#d5001c';
    if (caliperFront) caliperFront.setAttribute('stroke', caliperColor);
    if (caliperRear) caliperRear.setAttribute('stroke', caliperColor);

    // 7. Update Rear Aero Wing depending on Model
    if (spoilerPath) {
      if (configState.model === 'gt3') {
        // High Swan-neck Wing
        spoilerPath.setAttribute('d', 'M 800 210 C 850 200, 920 200, 940 220 M 830 250 L 850 205 M 880 250 L 895 205');
        spoilerPath.setAttribute('stroke-width', '5');
      } else if (configState.model === 'turbo-s') {
        // Extended Turbo Wing
        spoilerPath.setAttribute('d', 'M 820 240 C 860 230, 910 235, 930 250');
        spoilerPath.setAttribute('stroke-width', '7');
      } else if (configState.model === 'dakar') {
        // Dakar Fixed Spoiler
        spoilerPath.setAttribute('d', 'M 830 248 C 860 242, 890 246, 920 255');
        spoilerPath.setAttribute('stroke-width', '6');
      } else {
        // Flush Ducktail / Carrera Active Aero
        spoilerPath.setAttribute('d', 'M 830 255 C 860 248, 890 252, 920 262');
        spoilerPath.setAttribute('stroke-width', '4');
      }
    }

    // 8. Generate Config Code
    const modelPrefix = configState.model.toUpperCase().replace('-', '');
    const colorCode = configState.paint.slice(0, 3).toUpperCase();
    const wheelCode = configState.wheel.slice(0, 3).toUpperCase();
    const configCode = `911-${modelPrefix}-${colorCode}-${wheelCode}-2026`;
    if (configCodePreview) configCodePreview.textContent = configCode;
  }

  // Model Variant Selection
  const modelRadios = document.querySelectorAll('input[name="car-model"]');
  modelRadios.forEach(radio => {
    radio.addEventListener('change', () => {
      const card = radio.closest('.config-radio-card');
      if (card) {
        document.querySelectorAll('.config-radio-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        configState.model = radio.value;
        configState.modelName = card.querySelector('.radio-card-name')?.textContent || 'Porsche 911';
        configState.modelPrice = parseInt(card.getAttribute('data-price') || '150900', 10);
        updateConfigurator();
      }
    });
  });

  // Global helper to select model from external buttons
  window.selectConfigModel = function(modelId) {
    const radio = document.querySelector(`input[name="car-model"][value="${modelId}"]`);
    if (radio) {
      radio.checked = true;
      radio.dispatchEvent(new Event('change'));
      // Switch to configurator tab 1
      const tab1 = document.getElementById('tab-model');
      if (tab1) tab1.click();
    }
  };

  // Color Swatch Selection
  const swatchBtns = document.querySelectorAll('.swatch-btn');
  swatchBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      swatchBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-checked', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-checked', 'true');

      configState.paint = btn.getAttribute('data-color') || 'guards-red';
      configState.paintName = btn.getAttribute('data-color-name') || 'Guards Red';
      configState.paintPrice = parseInt(btn.getAttribute('data-color-price') || '0', 10);
      updateConfigurator();
    });
  });

  // Wheel Architecture Selection
  const wheelCards = document.querySelectorAll('.wheel-option-card');
  wheelCards.forEach(card => {
    const radio = card.querySelector('input[type="radio"]');
    if (radio) {
      radio.addEventListener('change', () => {
        wheelCards.forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');

        configState.wheel = card.getAttribute('data-wheel') || 'carrera-s';
        configState.wheelName = card.getAttribute('data-wheel-name') || 'Carrera S Wheels';
        configState.wheelPrice = parseInt(card.getAttribute('data-wheel-price') || '0', 10);
        updateConfigurator();
      });
    }
  });

  // Interior Theme Selection
  const interiorCards = document.querySelectorAll('.interior-option-card');
  interiorCards.forEach(card => {
    const radio = card.querySelector('input[type="radio"]');
    if (radio) {
      radio.addEventListener('change', () => {
        interiorCards.forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');

        configState.interior = card.getAttribute('data-interior') || 'black';
        configState.interiorName = card.getAttribute('data-interior-name') || 'Black Leather';
        configState.interiorPrice = parseInt(card.getAttribute('data-interior-price') || '0', 10);
        updateConfigurator();
      });
    }
  });

  // Performance Packages Checkboxes
  const optionCheckboxes = document.querySelectorAll('input[name="perf-options"]');
  optionCheckboxes.forEach(chk => {
    chk.addEventListener('change', () => {
      const key = chk.value;
      if (configState.options[key]) {
        configState.options[key].active = chk.checked;
        updateConfigurator();
      }
    });
  });

  // Step Tabs Navigation inside Configurator
  const configTabs = document.querySelectorAll('.config-step-tab');
  const configPanels = document.querySelectorAll('.config-panel');

  configTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetPanel = tab.getAttribute('data-panel');

      configTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      configPanels.forEach(panel => {
        const isTarget = panel.id === `panel-${targetPanel}`;
        panel.classList.toggle('active', isTarget);
        if (isTarget) {
          panel.removeAttribute('hidden');
        } else {
          panel.setAttribute('hidden', '');
        }
      });
    });
  });

  // Stage View Angle Perspective Toggles
  const stageViewBtns = document.querySelectorAll('.stage-btn[data-view]');
  const carRenderContainer = document.getElementById('car-render-container');

  stageViewBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      stageViewBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');

      const view = btn.getAttribute('data-view');
      if (carRenderContainer) {
        if (view === 'front') {
          carRenderContainer.style.transform = 'perspective(800px) rotateY(-8deg) scale(0.97)';
        } else if (view === 'rear') {
          carRenderContainer.style.transform = 'perspective(800px) rotateY(10deg) scale(0.97)';
        } else {
          carRenderContainer.style.transform = 'none';
        }
      }
    });
  });

  // Studio Lighting Toggle
  const studioLightBtn = document.getElementById('studio-light-btn');
  const lightModeIcon = document.getElementById('light-mode-icon');
  const lightModeText = document.getElementById('light-mode-text');
  const carStageWrapper = document.querySelector('.car-stage-wrapper');

  if (studioLightBtn && carStageWrapper) {
    studioLightBtn.addEventListener('click', () => {
      configState.lightingMode = configState.lightingMode === 'cyber' ? 'daylight' : 'cyber';
      if (configState.lightingMode === 'daylight') {
        carStageWrapper.style.background = 'linear-gradient(180deg, #2a2d36 0%, #15171d 100%)';
        if (lightModeIcon) lightModeIcon.textContent = '☼';
        if (lightModeText) lightModeText.textContent = 'Daylight Track';
      } else {
        carStageWrapper.style.background = 'linear-gradient(180deg, #101217 0%, #08090c 100%)';
        if (lightModeIcon) lightModeIcon.textContent = '✦';
        if (lightModeText) lightModeText.textContent = 'Cyber Studio';
      }
    });
  }

  // Save Configuration Modal
  const saveConfigBtn = document.getElementById('save-config-btn');
  const saveConfigModal = document.getElementById('save-config-modal');
  const saveModalClose = document.getElementById('save-modal-close');
  const saveSpecDossier = document.getElementById('save-spec-dossier');
  const copyConfigCodeBtn = document.getElementById('copy-config-code-btn');
  const printConfigBtn = document.getElementById('print-config-btn');

  function openSaveModal() {
    if (!saveConfigModal || !saveSpecDossier) return;

    let selectedOptionsList = '';
    let optionsSum = configState.paintPrice + configState.wheelPrice + configState.interiorPrice;
    for (const key in configState.options) {
      if (configState.options[key].active) {
        optionsSum += configState.options[key].price;
        selectedOptionsList += `<div class="dossier-row"><span class="dossier-label">• ${configState.options[key].name}</span><span class="dossier-val">+${formatMoney(configState.options[key].price)}</span></div>`;
      }
    }
    const totalPrice = configState.modelPrice + optionsSum;
    const buildCode = configCodePreview?.textContent || '911-BESPOKE-2026';

    saveSpecDossier.innerHTML = `
      <div class="dossier-row">
        <span class="dossier-label">Archival Build Code:</span>
        <span class="dossier-val" style="color: var(--porsche-red); font-family: var(--font-mono);">${buildCode}</span>
      </div>
      <div class="dossier-row">
        <span class="dossier-label">Model Lineage:</span>
        <span class="dossier-val">${configState.modelName}</span>
      </div>
      <div class="dossier-row">
        <span class="dossier-label">Base MSRP:</span>
        <span class="dossier-val">${formatMoney(configState.modelPrice)}</span>
      </div>
      <div class="dossier-row">
        <span class="dossier-label">Exterior Lacquer:</span>
        <span class="dossier-val">${configState.paintName} (${configState.paintPrice === 0 ? 'Included' : '+' + formatMoney(configState.paintPrice)})</span>
      </div>
      <div class="dossier-row">
        <span class="dossier-label">Wheel Package:</span>
        <span class="dossier-val">${configState.wheelName} (${configState.wheelPrice === 0 ? 'Included' : '+' + formatMoney(configState.wheelPrice)})</span>
      </div>
      <div class="dossier-row">
        <span class="dossier-label">Interior Theme:</span>
        <span class="dossier-val">${configState.interiorName} (${configState.interiorPrice === 0 ? 'Included' : '+' + formatMoney(configState.interiorPrice)})</span>
      </div>
      ${selectedOptionsList}
      <div class="dossier-row dossier-total">
        <span class="dossier-label" style="font-weight: 700; color: var(--cream-light);">Total Estimated MSRP:</span>
        <span class="dossier-val">${formatMoney(totalPrice)}</span>
      </div>
    `;

    saveConfigModal.classList.add('open');
    saveConfigModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeSaveModal() {
    if (!saveConfigModal) return;
    saveConfigModal.classList.remove('open');
    saveConfigModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (saveConfigBtn) saveConfigBtn.addEventListener('click', openSaveModal);
  if (saveModalClose) saveModalClose.addEventListener('click', closeSaveModal);
  if (saveConfigModal) {
    saveConfigModal.addEventListener('click', (e) => {
      if (e.target === saveConfigModal) closeSaveModal();
    });
  }

  if (copyConfigCodeBtn) {
    copyConfigCodeBtn.addEventListener('click', () => {
      const code = configCodePreview?.textContent || '911-BESPOKE-2026';
      navigator.clipboard?.writeText(code).then(() => {
        copyConfigCodeBtn.innerHTML = '<span>✓ Code Copied to Clipboard</span>';
        setTimeout(() => {
          copyConfigCodeBtn.innerHTML = '<span>Copy Build Code</span>';
        }, 2500);
      }).catch(() => {
        alert('Build Code: ' + code);
      });
    });
  }

  if (printConfigBtn) {
    printConfigBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // Initial Configurator Render
  updateConfigurator();


  /* ==========================================================================
     5. GALLERY (MASONRY FILTERING & LIGHTBOX MODAL)
     ========================================================================== */
  const galleryItems = [
    {
      src: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1920&q=85',
      category: 'TRACK',
      caption: 'Apex Precision: GT3 RS on Track'
    },
    {
      src: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1920&q=85',
      category: 'HERITAGE',
      caption: 'Origin 1964: Chrome & Air-Cooled Soul'
    },
    {
      src: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1920&q=85',
      category: 'ROAD',
      caption: 'Dusk Transit: 911 in the Mountain Mist'
    },
    {
      src: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1920&q=85',
      category: 'DETAIL',
      caption: 'Light Architecture: Continuous Rear Beam'
    },
    {
      src: 'https://images.unsplash.com/photo-1611821064430-0d40291d0f0b?auto=format&fit=crop&w=1920&q=85',
      category: 'TRACK',
      caption: 'Weissach Pure: GT3 Swan-Neck Aero'
    },
    {
      src: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1920&q=85',
      category: 'HERITAGE',
      caption: 'The Ducktail Era: 1973 RS 2.7'
    },
    {
      src: 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?auto=format&fit=crop&w=1920&q=85',
      category: 'DETAIL',
      caption: 'Analog Soul: The Central Tachometer'
    },
    {
      src: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1920&q=85',
      category: 'ROAD',
      caption: 'Guards Red Heritage on the Open Pacific'
    },
    {
      src: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1920&q=85',
      category: 'TRACK',
      caption: 'Beyond Asphalt: Dakar All-Terrain'
    },
    {
      src: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1920&q=85',
      category: 'DETAIL',
      caption: 'Stuttgart Crest: Centered in Weissach Steel'
    },
    {
      src: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1920&q=85',
      category: 'HERITAGE',
      caption: 'Pure Fastback: Unbroken 60-Year Flyline'
    },
    {
      src: 'https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?auto=format&fit=crop&w=1920&q=85',
      category: 'DETAIL',
      caption: 'Acoustic Symphony: Flat-Six Exhaust Exit'
    }
  ];

  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItemElems = document.querySelectorAll('.gallery-item');
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');
  const lightboxImg = document.getElementById('lightbox-image');
  const lightboxCategory = document.getElementById('lightbox-category');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxCurrentNum = document.getElementById('lightbox-current-num');
  const lightboxTotalNum = document.getElementById('lightbox-total-num');

  let currentLightboxIndex = 0;
  let activeVisibleIndices = galleryItems.map((_, i) => i);

  // Filter functionality
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');

      const filter = btn.getAttribute('data-filter') || 'all';
      activeVisibleIndices = [];

      galleryItemElems.forEach((elem, index) => {
        const itemCat = elem.getAttribute('data-category');
        const matches = (filter === 'all' || itemCat === filter);
        elem.classList.toggle('hidden', !matches);
        if (matches) {
          activeVisibleIndices.push(index);
        }
      });
    });
  });

  // Lightbox Open & Navigation
  function showLightboxImage(index) {
    if (!galleryItems[index]) return;
    currentLightboxIndex = index;

    const item = galleryItems[index];
    if (lightboxImg) {
      lightboxImg.src = item.src;
      lightboxImg.alt = item.caption;
    }
    if (lightboxCategory) lightboxCategory.textContent = item.category;
    if (lightboxCaption) lightboxCaption.textContent = item.caption;
    if (lightboxCurrentNum) lightboxCurrentNum.textContent = (activeVisibleIndices.indexOf(index) + 1).toString();
    if (lightboxTotalNum) lightboxTotalNum.textContent = activeVisibleIndices.length.toString();
  }

  function openLightbox(index) {
    if (!lightboxModal) return;
    showLightboxImage(index);
    lightboxModal.classList.add('open');
    lightboxModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    lightboxClose?.focus();
  }

  function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('open');
    lightboxModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function stepLightbox(direction) {
    const curPos = activeVisibleIndices.indexOf(currentLightboxIndex);
    let nextPos;
    if (direction === 'next') {
      nextPos = (curPos + 1) % activeVisibleIndices.length;
    } else {
      nextPos = (curPos - 1 + activeVisibleIndices.length) % activeVisibleIndices.length;
    }
    showLightboxImage(activeVisibleIndices[nextPos]);
  }

  galleryItemElems.forEach(elem => {
    elem.addEventListener('click', () => {
      const idx = parseInt(elem.getAttribute('data-index') || '0', 10);
      openLightbox(idx);
    });
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener('click', () => stepLightbox('prev'));
  if (lightboxNext) lightboxNext.addEventListener('click', () => stepLightbox('next'));

  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });
  }

  // Keyboard controls for lightbox
  document.addEventListener('keydown', (e) => {
    if (lightboxModal && lightboxModal.classList.contains('open')) {
      if (e.key === 'ArrowRight') {
        stepLightbox('next');
      } else if (e.key === 'ArrowLeft') {
        stepLightbox('prev');
      }
    }
  });


  /* ==========================================================================
     6. NEWSLETTER VALIDATION & COMMUNITY DISPATCH
     ========================================================================== */
  const newsletterForm = document.getElementById('newsletter-form');
  const newsletterEmail = document.getElementById('newsletter-email');
  const newsletterFeedback = document.getElementById('newsletter-feedback');
  const newsletterSubmitBtn = newsletterForm?.querySelector('.btn-newsletter');

  if (newsletterForm && newsletterEmail && newsletterFeedback) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const emailVal = newsletterEmail.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      newsletterFeedback.textContent = '';
      newsletterFeedback.className = 'form-feedback';

      if (!emailVal) {
        newsletterFeedback.textContent = 'Please enter a valid email address.';
        newsletterFeedback.classList.add('error');
        newsletterEmail.focus();
        return;
      }

      if (!emailRegex.test(emailVal)) {
        newsletterFeedback.textContent = 'The address provided is formatted incorrectly. Example: driver@portion911.com';
        newsletterFeedback.classList.add('error');
        newsletterEmail.focus();
        return;
      }

      // Simulate loading state
      if (newsletterSubmitBtn) newsletterSubmitBtn.classList.add('loading');

      setTimeout(() => {
        if (newsletterSubmitBtn) newsletterSubmitBtn.classList.remove('loading');
        newsletterFeedback.textContent = '✓ Welcome to the Inner Drive. Issue #01 dispatch has been queued for your inbox.';
        newsletterFeedback.classList.add('success');
        newsletterEmail.value = '';
      }, 700);
    });
  }


  /* ==========================================================================
     7. WEB AUDIO API: FLAT-SIX BOXER ENGINE SOUND SYNTHESIZER
     ========================================================================== */
  let audioCtx = null;
  let isSoundActive = false;

  window.synthesizeEngineSound = function(isRevBlip = true) {
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return;

      if (!audioCtx) {
        audioCtx = new AudioContextClass();
      }

      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }

      const now = audioCtx.currentTime;

      // Master Gain
      const masterGain = audioCtx.createGain();
      masterGain.gain.setValueAtTime(0.001, now);
      masterGain.connect(audioCtx.destination);

      // Low rumble flat-six fundamental oscillator (Boxer firing pulses)
      const osc1 = audioCtx.createOscillator();
      osc1.type = 'sawtooth';
      osc1.frequency.setValueAtTime(75, now); // ~75 Hz idle rumble

      // Secondary harmonic oscillator for high-rev induction howl
      const osc2 = audioCtx.createOscillator();
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(150, now);

      // Waveshaper distortion for visceral exhaust crunch
      const distortion = audioCtx.createWaveShaper();
      function makeDistortionCurve(k = 50) {
        const n_samples = 44100;
        const curve = new Float32Array(n_samples);
        const deg = Math.PI / 180;
        for (let i = 0; i < n_samples; ++i) {
          const x = (i * 2) / n_samples - 1;
          curve[i] = ((3 + k) * x * 20 * deg) / (Math.PI + k * Math.abs(x));
        }
        return curve;
      }
      distortion.curve = makeDistortionCurve(20);
      distortion.oversample = '4x';

      // Lowpass Filter simulating engine bay & muffler
      const filter = audioCtx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(450, now);
      filter.Q.setValueAtTime(4.0, now);

      // Connect nodes
      osc1.connect(distortion);
      osc2.connect(distortion);
      distortion.connect(filter);
      filter.connect(masterGain);

      // Envelope modulation
      if (isRevBlip) {
        // Quick visceral throttle blip up to 6,500 rpm harmonic equivalent
        masterGain.gain.exponentialRampToValueAtTime(0.28, now + 0.15);
        osc1.frequency.exponentialRampToValueAtTime(280, now + 0.35); // Rev up
        osc2.frequency.exponentialRampToValueAtTime(560, now + 0.35);
        filter.frequency.exponentialRampToValueAtTime(1800, now + 0.35);

        // Rev down back to rumble
        osc1.frequency.exponentialRampToValueAtTime(80, now + 0.9);
        osc2.frequency.exponentialRampToValueAtTime(160, now + 0.9);
        filter.frequency.exponentialRampToValueAtTime(500, now + 0.9);
        masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);

        osc1.start(now);
        osc2.start(now);
        osc1.stop(now + 1.25);
        osc2.stop(now + 1.25);
      } else {
        // Gentle sustained idle rumble
        masterGain.gain.exponentialRampToValueAtTime(0.18, now + 0.2);
        masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);

        osc1.start(now);
        osc2.start(now);
        osc1.stop(now + 1.85);
        osc2.stop(now + 1.85);
      }

      // Button visual state
      const engineSoundBtn = document.getElementById('engine-sound-btn');
      if (engineSoundBtn) {
        engineSoundBtn.classList.add('playing');
        setTimeout(() => {
          engineSoundBtn.classList.remove('playing');
        }, 1250);
      }

    } catch (err) {
      console.warn('Web Audio API not supported or blocked:', err);
    }
  };

  const soundBtn = document.getElementById('engine-sound-btn');
  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      synthesizeEngineSound(true);
    });
  }


  /* ==========================================================================
     8. SITE HEADER, MOBILE MENU & SCROLL REVEAL OBSERVER
     ========================================================================== */
  const siteHeader = document.getElementById('site-header');
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  // Sticky header background transition
  window.addEventListener('scroll', () => {
    if (siteHeader) {
      siteHeader.classList.toggle('scrolled', window.scrollY > 40);
    }
  }, { passive: true });

  // Mobile Drawer Toggle
  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener('click', () => {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      mobileToggle.setAttribute('aria-expanded', !isExpanded ? 'true' : 'false');
      mobileNav.classList.toggle('open', !isExpanded);
      mobileNav.setAttribute('aria-hidden', isExpanded ? 'true' : 'false');
      document.body.style.overflow = !isExpanded ? 'hidden' : '';
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileNav.classList.remove('open');
        mobileNav.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      });
    });
  }

  // Scroll Entrance Reveal Elements
  const revealElements = document.querySelectorAll('.reveal-elem');
  if ('IntersectionObserver' in window && revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('visible'));
  }

  // Footer Year
  const yearElem = document.getElementById('current-year');
  if (yearElem) {
    yearElem.textContent = new Date().getFullYear();
  }

});
