export function onlyFileName(s: String) {
  s = s.substring(s.lastIndexOf("/") + 1);
  s = s.replace(/\.webp/, "");
  let sdot = s.indexOf('.')
  if(sdot != -1) s = s.substring(0, sdot)
  return s;
}
