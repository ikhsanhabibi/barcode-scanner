import { db } from "./Firebase";

export const addProduct = item => {
  db.ref("/items").push({
    name: item
  });
};
