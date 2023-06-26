export function onlyFileName(s: String) {
  s = s.substring(s.lastIndexOf("/") + 1);
  s = s.replace(/\.webp/, "");
  return s;
}
