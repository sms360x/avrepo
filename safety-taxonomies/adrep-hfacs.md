# Safety Taxonomies: ADREP & HFACS

This reference documents the structural integration between the International Civil Aviation Organization (ICAO) **ADREP (Accident/Incident Data Reporting)** taxonomy and the **HFACS (Human Factors Analysis and Classification System)** framework.

---

## 1. ICAO ADREP Occurrence Categories

The ICAO ADREP taxonomy categorizes aviation safety events (accidents, serious incidents, and occurrences) into standardized taxonomy codes to facilitate global cross-operator safety analysis.

### High-Priority Global Safety Categories

| ADREP Code | Occurrence Category | Operational Definition | Primary Context / Risks |
| :--- | :--- | :--- | :--- |
| **CFIT** | Controlled Flight Into Terrain | Inflight collision with terrain, water, or obstacles without prior crew awareness or lack of control | Mountainous terrain, IMC transitions, non-precision approaches |
| **LOC-I** | Loss of Control - Inflight | Aircraft deviation from intended flight path beyond aerodynamic envelope control | Aerodynamic stalls, spatial disorientation, icing, system degradation |
| **RE** | Runway Excursion | Veer-off or overrun off the runway surface during take-off or landing | Contaminated runways, tailwinds, unstabilized approaches |
| **MAC** | Midair Collision | Collision between aircraft in flight within controlled or uncontrolled airspace | Traffic density, visual blindspots, non-transponder traffic |
| **ARC** | Abnormal Runway Contact | Hard landings, tail strikes, gear collapses during landing phase | Unstable pitch, gusty crosswinds, high sink rate |
| **SCF-PP**| System / Component Failure (Powerplant)| Complete or partial engine failure, uncontained burst, engine fire | Turbine blade stress, fuel contamination, dual flameout |
| **SCF-NP**| System / Component Failure (Non-Powerplant)| Hydraulic, electrical, flight control, or pressurization malfunctions | Redundant system loss, uncommanded actuator movements |
| **WSTRW** | Windshear or Thunderstorm | Flight encounters with microbursts, extreme convective activity | Monsoonal squall lines, mountain lee-wave downbursts |
| **RI** | Runway Incursion | Unauthorized presence of an aircraft, vehicle, or person on the protected runway area | Misinterpreted ATC clearances, low visibility taxi operations |

---

## 2. HFACS Framework (Human Factors Analysis and Classification System)

Developed by Dr. Scott Shappell and Dr. Douglas Wiegmann, HFACS expands upon James Reason’s "Swiss Cheese" model by organizing systemic failures into four hierarchical tiers:

```
┌─────────────────────────────────────────────────────────────┐
│  Level 4: Organizational Influences                        │
│  (Resource Management, Climate, Operational Processes)     │
└──────────────────────────────┬──────────────────────────────┘
                               ▼
┌─────────────────────────────────────────────────────────────┐
│  Level 3: Unsafe Supervision                                │
│  (Inadequate Supervision, Planned Inappropriate Ops, etc.)  │
└──────────────────────────────┬──────────────────────────────┘
                               ▼
┌─────────────────────────────────────────────────────────────┐
│  Level 2: Preconditions for Unsafe Acts                     │
│  (Substandard Environmental, Operator, & Personnel States)   │
└──────────────────────────────┬──────────────────────────────┘
                               ▼
┌─────────────────────────────────────────────────────────────┐
│  Level 1: Unsafe Acts of Operators                          │
│  (Errors: Decision, Skill, Perceptual | Violations)         │
└─────────────────────────────────────────────────────────────┘
```

### Level 1: Unsafe Acts of Operators
- **Errors**:
  - *Decision Errors*: Choice of improper plan (e.g. continuing VFR into IMC, inappropriate diversion choice).
  - *Skill-Based Errors*: Stick-and-rudder, procedural slip (e.g. incorrect flap selection, rudder over-controlling).
  - *Perceptual Errors*: Degraded visual cues, spatial disorientation, black hole illusion during night approaches.
- **Violations**:
  - *Routine Violations*: Habitual bypassing of SOPs tolerated by peers.
  - *Exceptional Violations*: Isolated, non-characteristic willful departure from regulations or limits.

### Level 2: Preconditions for Unsafe Acts
- **Environmental Factors**: Physical environment (turbulence, mountain terrain, IMC) and Technological environment (cockpit automation anomalies, ergonomic friction).
- **Condition of Operators**: Adverse mental states (distraction, mental fatigue), adverse physiological states (hypoxia, illness, spatial disorientation), physical limitations.
- **Personnel Factors**: Crew Resource Management (CRM) breakdowns, communication breakdown, lack of assertiveness.

### Level 3: Unsafe Supervision
- **Inadequate Supervision**: Failure to provide training, oversight, or guidance to junior aircrews.
- **Planned Inappropriate Operations**: Pairing inexperienced crews in severe mountainous weather conditions.
- **Failed to Correct Known Problem**: Ignoring known airframe mechanical defects or deficient pilot habits.
- **Supervisory Violations**: Willful authorization of non-compliant flight plans or flight duty period (FDP) overruns.

### Level 4: Organizational Influences
- **Resource Management**: Allocation of flight crew assets, budget cuts affecting maintenance spares.
- **Organizational Climate**: Corporate culture, safety reporting transparency, punitive vs. just culture.
- **Operational Process**: Unrealistic scheduling pacing, standard operating procedure (SOP) design flaws.

---

## 3. ADREP to HFACS Taxonomy Mapping Matrix

| ADREP Occurrence Category | Typical Level 1 Act | Level 2 Precondition | Level 3 Supervisory Gap | Level 4 Organizational Contributor |
| :--- | :--- | :--- | :--- | :--- |
| **CFIT** | Decision Error (continuing VFR into IMC) | Spatial disorientation; high cockpit workload | Inadequate terrain awareness route training | Pressure on operational schedule vs. safety buffers |
| **LOC-I** | Perceptual & Skill-Based Error (improper stall recovery) | Startle effect, somatogravic illusion | Insufficient upset prevention and recovery training (UPRT) | Deficient simulator training curriculum |
| **RE** | Decision Error (landing beyond touchdown zone) | High approach speed, contaminated surface | Failure to enforce stabilized approach go-around criteria | Commercial pushback on go-around fuel expenditures |
| **ARC** | Skill-Based Slip (flare misjudgment in gusty winds) | Visual illusion, high crosswind shear | Deficient simulator crosswind checking | Fleet conversion training schedule compression |

---

## 4. Analytical Implementation & Tagging

When logging occurrences or conducting safety risk assessments (SRA), use dual-tagging:
- Format: `[ADREP-CATEGORY] / [HFACS-LEVEL-SUBCODE]`
- Example: `CFIT / L1-DEC-01 (VFR into IMC) + L2-ENV-PHYS (Mountain Valley Obscuration)`
