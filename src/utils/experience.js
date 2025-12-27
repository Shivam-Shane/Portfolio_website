// src/utils/experience.js
// Reusable helpers to compute net work experience (months/years) after subtracting gaps.

const toDate = (d) => {
  if (!d) return null;
  if (d instanceof Date) return d;
  if (typeof d === "string") {
    if (d.toLowerCase() === "present") return new Date();
    if (/^\d{4}-\d{2}-\d{2}$/.test(d)) return new Date(d + "T00:00:00");
    const parsed = new Date(d);
    if (!isNaN(parsed)) return parsed;
  }
  return null;
};

const monthsBetween = (start, end) => {
  const s = toDate(start);
  const e = toDate(end);
  if (!s || !e || e <= s) return 0;

  let months = (e.getFullYear() - s.getFullYear()) * 12 + (e.getMonth() - s.getMonth());
  // If the end day-of-month is less than start day-of-month, last month isn't full
  if (e.getDate() < s.getDate()) months -= 1;
  return Math.max(0, months);
};

// returns overlap months between two periods
const overlapMonths = (aStart, aEnd, bStart, bEnd) => {
  const sA = toDate(aStart);
  const eA = toDate(aEnd);
  const sB = toDate(bStart);
  const eB = toDate(bEnd);
  if (!sA || !eA || !sB || !eB) return 0;
  const s = sA > sB ? sA : sB;
  const e = eA < eB ? eA : eB;
  if (e <= s) return 0;
  return monthsBetween(s, e);
};

/**
 * calculateExperience(workPeriods, gaps)
 *
 * workPeriods: [{ start: "YYYY-MM-DD", end: "YYYY-MM-DD" | "present" }, ...]
 * gaps: [{ start: "...", end: "..." }, ...]  // optional
 *
 * Returns:
 * {
 *   netMonths,         // total worked months after subtracting overlapping gaps
 *   human,             // "X years, Y months" (nice human readable)
 *   decimalYears,      // decimal years rounded to 1 decimal (e.g., 2.9)
 *   rawWorkMonths,     // sum of months across work periods before gaps
 *   gapOverlapMonths   // months subtracted due to overlap with gaps
 * }
 */
export const calculateExperience = (workPeriods = [], gaps = []) => {
  let rawWorkMonths = 0;

  const normalizedWork = workPeriods
    .map((p) => {
      const s = toDate(p.start);
      const e = p.end === "present" || p.end == null ? new Date() : toDate(p.end);
      if (!s || !e || e <= s) return null;
      rawWorkMonths += monthsBetween(s, e);
      return { start: s, end: e };
    })
    .filter(Boolean);

  const normalizedGaps = gaps
    .map((g) => {
      const s = toDate(g.start);
      const e = g.end === "present" || g.end == null ? new Date() : toDate(g.end);
      if (!s || !e || e <= s) return null;
      return { start: s, end: e };
    })
    .filter(Boolean);

  let gapOverlapMonths = 0;
  for (const w of normalizedWork) {
    for (const g of normalizedGaps) {
      gapOverlapMonths += overlapMonths(w.start, w.end, g.start, g.end);
    }
  }

  const netMonths = Math.max(0, rawWorkMonths - gapOverlapMonths);

  // formatting
  const years = Math.floor(netMonths / 12);
  const remMonths = netMonths % 12;
  const human = `${years > 0 ? `${years} year${years > 1 ? "s" : ""}` : ""}${
    years > 0 && remMonths > 0 ? ", " : ""
  }${remMonths > 0 ? `${remMonths} month${remMonths > 1 ? "s" : ""}` : ""}`.trim() || "0 months";

  const decimalYears = Math.round((netMonths / 12) * 10) / 10; // 1 decimal

  return {
    netMonths,
    human,
    decimalYears,
    rawWorkMonths,
    gapOverlapMonths,
  };
};

export default calculateExperience;
