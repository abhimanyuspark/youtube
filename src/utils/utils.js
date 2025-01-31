export function formatViews(views = "") {
  if (views >= 1000000) {
    return (views / 1000000).toFixed(2) + " M";
  } else if (views >= 1000) {
    return (views / 1000).toFixed(2) + " K";
  } else {
    return views.toString();
  }
}

export function formateSecounds(seconds = 0) {
  const hours = `${Math.floor(seconds / 3600)} : `;
  const minutes = `${Math.floor((seconds % 3600) / 60)} : `;
  const remainingSeconds = `${seconds % 60}`;

  return `${hours.toString().padStart(2, '0')} ${minutes.toString().padStart(2, '0')} ${remainingSeconds.toString().padStart(2, '0')}`;
}
