import { User } from '@prisma/client';

export class UserEntity implements User {
  id: string;
  name: string;
  phoneNumber: string;
  address: string;
  addressDetail: string;
  email: string;
  password: string;
  biography: string;
  createdAt: Date;
  updatedAt: Date;
  //   buyerReviews: Review[];
  //   sellerReviews: Review[];
  //   images: User_image[];
  //   products: Product[];
  //   bid: Bid[];
  //   likedProducts: Product_liked[];
  //   chatRoomSeller: Chat_room[];
  //   chatRoomBuyer: Chat_room[];
  //   chatMessage: Chat_message[];
}
