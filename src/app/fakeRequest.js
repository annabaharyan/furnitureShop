import items from "../products";

export const request = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(items);
  }, 1000);
});
