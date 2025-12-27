// src/data/career.js
// Central place to define work periods and career gaps.
// Dates should be ISO strings ("YYYY-MM-DD") or "present" for current role.

export const workPeriods = [
  // IT Engineer: Jan 1, 2022 - Oct 31, 2024
  { start: "2022-01-10", end: "2024-09-15" },

  // Gen AI Engineer: Nov 1, 2024 - present
  { start: "2025-11-24", end: "present" },
];

// Career gaps (periods when you were not working and should be excluded).
// Example: a break from Jun 15, 2023 to Dec 31, 2023.
export const gaps = [
  { start: "2024-09-16", end: "2025-11-23" },
  // Add more gaps if needed
];
