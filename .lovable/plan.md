
# Plan: Expand "Our Team" Section Content

## Overview
Add more descriptive content to the "Our Team" section by expanding the heading, paragraph text, and adding more stats to create a richer, more impactful section.

## Current Content
- **Heading**: "75+ BIM Professionals Powering Your Projects"
- **Paragraph**: 2 sentences about the team
- **Stats**: 2 stats (75+ Team Members, 10+ Years Avg. Experience)

## Proposed Expanded Content

### 1. Enhanced Heading
**Current:** "75+ BIM Professionals Powering Your Projects"

**New:** "75+ BIM Professionals Dedicated to Powering Your Most Complex Projects"

### 2. Expanded Description Paragraph
**Current:** 2 sentences (~40 words)

**New:** 3-4 sentences (~80 words) covering:
- Team composition (architects, engineers, MEP specialists, VDC managers)
- Experience level and industry expertise
- Certifications and software proficiency
- Working approach and commitment to quality

**Proposed text:**
> Our multidisciplinary team brings together architects, structural engineers, MEP specialists, and VDC managers with an average of 10+ years of industry experience. Certified in Autodesk Revit, Navisworks, and BIM 360, our professionals work across all LOD levels from concept through construction. We operate 24/7 across multiple time zones, ensuring your projects never stop moving. We don't just model — we understand construction from the ground up.

### 3. Additional Stats
**Current:** 2 stats

**New:** 4 stats in a row:
| Stat | Label |
|------|-------|
| 75+ | Team Members |
| 10+ | Years Avg. Experience |
| 24/7 | Global Operations |
| 500+ | Projects Delivered |

## Technical Changes

### File to Modify
- `src/pages/About.tsx` (lines 271-291)

### Visual Layout

```text
┌──────────────────────────────────────────────────────────────┐
│                     "Our Team" Section                        │
├──────────────────────────────────────────────────────────────┤
│  Background: office-team.png + dark overlay                   │
│  ┌──────────────────────────────────────────────────────────┐│
│  │  [Our Team] badge                                         ││
│  │                                                           ││
│  │  75+ BIM Professionals Dedicated to Powering              ││
│  │  Your Most Complex Projects  ← LONGER HEADING             ││
│  │                                                           ││
│  │  Our multidisciplinary team brings together...            ││
│  │  Certified in Autodesk Revit, Navisworks, and BIM 360...  ││
│  │  We operate 24/7 across multiple time zones...            ││
│  │  We don't just model — we understand construction...      ││
│  │                               ↑ MORE PARAGRAPHS           ││
│  │                                                           ││
│  │  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐                  ││
│  │  │ 75+  │  │ 10+  │  │ 24/7 │  │ 500+ │  ← MORE STATS    ││
│  │  │Team  │  │Years │  │Global│  │Projects│                ││
│  │  └──────┘  └──────┘  └──────┘  └──────┘                  ││
│  └──────────────────────────────────────────────────────────┘│
└──────────────────────────────────────────────────────────────┘
```

## Summary of Changes
1. **Longer heading** with more impactful wording
2. **Expanded paragraph** from 2 to 4 sentences with certifications and 24/7 operations messaging
3. **4 stats instead of 2** adding "24/7 Global Operations" and "500+ Projects Delivered"
