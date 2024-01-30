import { RequestHandler } from "express";
import { Share } from "../database/model/share";

const changePrice: RequestHandler = async (req, res, next) => {
  try {
    let arrPrices = [];
    let arrNewPrices = [];
    const allShares = await Share.find();
    for (let i of allShares) {
      let newPrice = new Number();
      arrPrices.push(i.price[1]);
      let change = 5 + Math.floor(Math.random() * 10);
      let change2 = 1 + Math.floor(Math.random() * 10);

      if (change2 >= 6) {
        newPrice = +i.price[1] + +change;
      } else {
        newPrice = +i.price[1] - +change;
      }
      arrNewPrices.push({ price: [i.price[1], newPrice], _id: i._id });
    }
    req.sharePrice = arrNewPrices;
    next();
  } catch (e) {
    next(e);
  }
};

export default changePrice;
