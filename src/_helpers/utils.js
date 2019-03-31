export const contdownTimerCalculator = (timeProp) => {
  const time = new Date(timeProp);

  const ms = parseInt(time.getMilliseconds() / 10, 10);
  const s = time.getSeconds();
  const m = time.getMinutes();
  const h = time.getHours();

  const milliseconds = ms < 10 ? `0${ms}` : ms;
  const seconds = s < 10 ? `0${s}` : s;
  const minutes = m < 10 ? `0${m}` : m;
  const hours = h < 10 ? `0${h}` : h;

  return `${hours}:${minutes}:${seconds}:${milliseconds}`;
};

export const lol = () => {};
