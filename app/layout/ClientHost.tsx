export var host: string | undefined;
if (typeof window == 'undefined') {
  host = undefined;
} else {
  const url = new URL(window.location.href);
  host = url.host;
}
