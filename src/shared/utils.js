export const apiUrl = (path) => {
  if (/^\/([^/]|$)/.test(path)) {
    const apiRoute = process.env ? process.env.API : "";
    return `${apiRoute}${path}`;
  }
  return "invalid-path";
};