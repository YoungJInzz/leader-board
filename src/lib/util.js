export const getTime = (time) => {
  const min = String(parseInt(time / 60));
  const sec = String(parseInt(time % 60));
  const msec = String(Math.floor((time % 1) * 100));
  console.log("미리", time, String(Math.floor((time % 1) * 100) / 100));
  console.log("미리2", time, String(time % 1));
  return `${min.padStart(2, "0")}:${sec.padStart(2, "0")}:${msec.padEnd(
    2,
    "0"
  )}`;
};
