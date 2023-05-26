export const logger = {
  info: (info: string) => {
    const date = new Date();
    console.log(
      `[${date.toLocaleDateString()} ${date.toLocaleTimeString()} INFO] ${info}`
    );
  },
  error: (error: string) => {
    const date = new Date();
    console.log(
      `[${date.toLocaleDateString()} ${date.toLocaleTimeString()} ERROR] ${error}`
    );
  }
};
