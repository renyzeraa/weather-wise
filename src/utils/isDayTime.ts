export function isDayTime(): boolean {
  const hours = new Date().getHours();
  return hours > 6 && hours < 18;
}