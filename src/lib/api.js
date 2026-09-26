export const API_BASE = "https://api.abcz.workers.dev/api/fitlog";

export async function getWorkouts() {
  // Always fetch fresh so the library streams in behind its loading state.
  const res = await fetch(API_BASE, { cache: "no-store" });
  if (!res.ok) throw new Error(`Failed to load workouts (${res.status})`);
  return res.json();
}

// Returns null for unknown ids so the page can render the 404 screen.
export async function getWorkout(id) {
  const res = await fetch(`${API_BASE}/${encodeURIComponent(id)}`, {
    next: { revalidate: 3600 },
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`Failed to load workout ${id} (${res.status})`);
  return res.json();
}
