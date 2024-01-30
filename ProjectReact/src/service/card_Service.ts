import { ICard } from "../@types/card";
import { Card } from "../database/model/card";

const createCard = async (cardData: ICard, userId: string) => {
  const card = new Card(cardData);

  card.userId = userId;
  while (true) {
    const random = Math.floor(Math.random() * 1000000);
    const dbRes = await Card.findOne({ bizNumber: random });
    if (!dbRes) {
      card.bizNumber = random;
      break;
    }
  }

  const saveCard = card.save();
  return saveCard;
};

export { createCard };
