export function generateUUID() {
  let dt = new Date().getTime();
  const uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    function (char) {
      const rand = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);

      return (char === "x" ? rand : (rand & 0x3) | 0x8).toString(16);
    },
  );
  return uuid;
}
