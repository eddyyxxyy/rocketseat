export function hourDiff(timestamp) {
  let timeString = timestamp;

  let timeParts = timeString.split(':');
  let timeDate = new Date();
  timeDate.setHours(timeParts[0], timeParts[1], 0, 0);

  let now = new Date();

  let diff = Math.abs(now - timeDate) / 36e5;

  return Math.round(diff);
}
