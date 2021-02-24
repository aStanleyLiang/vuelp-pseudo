export default (title, obj) => {
  console.log("\x1b[33m%s\x1b[0m", title);
  console.dir(obj, { depth: null });
};
