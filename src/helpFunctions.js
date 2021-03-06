export const secondsToDisplay = (seconds) => {
  if (seconds === 0) {
    return "00:00:00";
  }

  const min = Math.trunc(seconds / 60);

  const secondsDisplay = seconds % 60;
  const minutesDisplay = Math.trunc(seconds / 60) % 60;
  const hoursDisplay = Math.trunc(min / 60);

  return `${hoursDisplay < 10 ? `0${hoursDisplay}` : hoursDisplay}:${
    minutesDisplay < 10 ? `0${minutesDisplay}` : minutesDisplay
  }:${secondsDisplay < 10 ? `0${secondsDisplay}` : secondsDisplay}`;
};
