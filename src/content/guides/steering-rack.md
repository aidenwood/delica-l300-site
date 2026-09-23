---
title: "Power Steering Gear Box (Rack) — R&R, Specs, and Rebuild vs Replace"
description: "The full removal/installation procedure for the L300 / Delica power steering gear box, plus the actual backlash spec that decides whether a rebuild is worth it or you should just replace it."
group: "Steering"
manualGroup: "Steering — factory service manual (DelicaUSA L300_steering.pdf)"
manualPages: "pp. 2–41 (general info, gear box, pump, linkage)"
applicability: "L300 / Delica Star Wagon — ball-and-nut steering gear with integral vane-type power steering pump."
tools:
  - "MB991113 or MB990635 — steering linkage puller (pitman arm / tie rod ball joints)"
  - "MB990915 — pitman arm puller"
  - "MB990803 — steering wheel puller"
  - "MB990685 — torque wrench; MB990326 / MB991006 / MB990228 — preload sockets"
  - "MB990993 / MB991217 / MB990994 / MB990662 — oil pressure gauge + adapters (pump output test)"
  - "MB990948 — linkage joint gauge (ball joint shaft-direction check)"
lastUpdated: "2026-09-23"
totalTime: "PT4H"
---

## The decision this guide actually answers

Before spending on a full replacement rack: the manual's own criterion for rebuild vs. replace is **ball groove backlash under 0.05 mm** (measured during disassembly, see below). Over that limit — or if internal seals are worn — replace it. If only external seals or ball joints are worn and the backlash checks out, a rebuild with a seal kit and the special tools above is workable.

## Steering wheel free play (a quick before-you-touch-anything check)

- **Engine running:** max 50 mm at the wheel rim.
- **Engine stopped:** 10 mm or less at the wheel rim.

If you're outside these, that alone doesn't tell you whether it's the rack, the linkage, or a ball joint — it's the starting diagnostic, not the diagnosis.

## Torque specifications

| Fastener | Nm | ft·lbs |
|---|---|---|
| Steering wheel hub bolt | 39 | 29 |
| Tie rod end nut | 40 | 30 |
| Tie rod end ball joint starting torque | 3.0 | 2.2 |
| Pitman arm ball joint starting torque | 0.98–2.94 | 0.7–2.2 |
| Gear box shaft coupling bolt | 18 | 13 |
| **Gear box main mounting nut (to frame)** | **54–64** | **40–47** |
| Pressure hose connector | 18 | 13 |
| Return tube | 15 | 11 |
| Mainshaft locknut (after preload set) | 50 | — |
| Cross-shaft / pitman arm assembly | 127–147 | 94–108 |
| Idler arm to frame | 137 | 101 |
| Relay rod to pitman arm | 44–54 | 33–40 |
| Idler arm ball joint | 44–54 | 33–40 |
| Pump bracket fasteners | 20 / 22 / 24 | — |
| Pump drive pulley | 59, or 69–78 | — |
| Pump suction/return hose banjo bolts | 11 | — |

## Power steering fluid and pressure specs

- **Fluid:** ATF, DEXRON or DEXRON II — capacity **1.0 L**.
- **Oil pump relief pressure:** 8.3–9.0 MPa (1205–1305 psi).
- **No-load pressure:** 0.8–1.0 MPa (116–145 psi).
- **Steering gear retention pressure:** 8.3–9.0 MPa (i.e. the gear should hold relief pressure — a pressure test that drops well below this with the gear held at full lock points at internal gear wear, not the pump).
- **Oil pressure switch:** turns ON at 1.5–2.0 MPa, OFF at 0.7–1.2 MPa.

## Alignment reference (for after the job)

- Inner wheel angle: 29°40′–32°40′
- Outer wheel angle: 29°30′
- Steering gear backlash limit: **0.5 mm** at the wheel (different measurement from the internal ball-groove backlash below — this one's the symptom you'd feel as play at the wheel).

## Removing the gear box

1. Drain the power steering fluid via the return hose.
2. Remove the split pin, then disconnect the steering shaft coupling bolt from the gear box (18 Nm fastener).
3. Disconnect the pitman arm ball joint — loosen the nut, don't remove it from the joint, then use the steering linkage puller (MB991113 or MB990635) to break the taper. Support the puller with a cord so it doesn't drop when the joint lets go.
4. Disconnect the pressure tube from the pump side.
5. Disconnect the return tube from the reservoir and remove its O-ring.
6. Remove the self-locking nut holding the gear box to the frame (54–64 Nm — this is the main mount, replace the nut on reassembly).
7. Withdraw the gear box assembly.

## Reinstalling

1. Fit the gear box and secure it with a **new** self-locking nut, 54–64 Nm.
2. Fit the pressure tube (18 Nm) and return tube with new O-rings.
3. Reconnect the pitman arm ball joint, 44–54 Nm.
4. Reconnect the steering shaft coupling bolt, 18 Nm.
5. Reconnect the return hose.
6. Fill the reservoir with DEXRON/DEXRON II ATF to the lower mark on the filter.
7. Bleed the system: turn the wheel lock-to-lock 5–6 times with the engine idling.
8. Check the steering wheel sits straight with the wheels pointed straight ahead.
9. Get the front wheel alignment checked.
10. Check the pitman and idler arm ball joint dust covers for cracks — replace if damaged, they're cheap insurance next to the labour you've just put in.

## If you're rebuilding rather than replacing

The manual's internal disassembly covers rack piston neutral positioning, cross-shaft removal via the side cover, and mainshaft preload adjustment via an adjusting plate (preload torque 0.69–1.28 Nm before the 50 Nm locknut). **The ball-groove backlash limit is 0.05 mm** — measure this before committing time to a full rebuild. Past that limit, the internal wear means a rebuild won't hold adjustment for long; replace the unit instead.

---

*Converted from the Mitsubishi factory service manual excerpt distributed by DelicaUSA (`L300_steering.pdf`, [download](https://www.delicausa.com/wp-content/uploads/2017/09/L300_steering.pdf)). See also the [parts cross-reference](/guides/parts-cross-reference) for the 2WD (MB351502) and 4WD (MB351852) rack part numbers, and [Resources](/resources) for the forum threads on refurb sourcing and the 2WD-rack-into-4WD swap some owners have done.*
