export const TimerBomb = (): Promise<string> => {
  return new Promise((_resolve, reject) => {
    setTimeout(() => {
      reject("Bummmmm");
    }, 2000);
  });
};
