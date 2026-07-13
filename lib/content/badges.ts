// Pure, framework-agnostic helpers with no Node.js (fs) dependency, so they
// are safe to import from both server and client components.

const NEW_BADGE_WINDOW_DAYS = 90;

// Shows a "NEW" badge for 3 months (90 days) after a machine's release date.
// Evaluated at build/render time, so it naturally stops showing once expired.
export function isNewMachine(releaseDate: string | undefined, now: Date = new Date()): boolean {
  if (!releaseDate) return false;
  const release = new Date(releaseDate);
  if (Number.isNaN(release.getTime())) return false;
  const diffDays = (now.getTime() - release.getTime()) / (1000 * 60 * 60 * 24);
  return diffDays >= 0 && diffDays <= NEW_BADGE_WINDOW_DAYS;
}
