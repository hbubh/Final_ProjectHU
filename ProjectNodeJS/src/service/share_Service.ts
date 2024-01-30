import { IShare, IShareS } from "../@types/share";
import { Share } from "../database/model/share";

const createShare = async (shareData: IShare, userId: string) => {
  const share = new Share(shareData);
  share.userId = userId;
  share.price = [300, 310];
  if (share.image.url == "") {
    share.image.url =
      "https://th.bing.com/th/id/OIP.m0AMNtyZhP1w-mPGms6dHgHaDt?rs=1&pid=ImgDetMain";
    share.image.alt = "stock-market";
  }

  while (true) {
    const random = Math.floor(Math.random() * 1000000);
    const dbRes = await Share.findOne({ bizNumber: random });
    if (!dbRes) {
      share.bizNumber = random;
      break;
    }
  }

  const savedShare = share.save();
  return savedShare;
};

export { createShare };
