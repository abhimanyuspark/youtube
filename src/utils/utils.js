export function formatViews(views = "") {
  if (views >= 1000000) {
    return (views / 1000000).toFixed(2) + " M";
  } else if (views >= 1000) {
    return (views / 1000).toFixed(2) + " K";
  } else {
    return views.toString();
  }
}
