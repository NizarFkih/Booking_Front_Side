import img1 from "./assets/hotel-1.jpg";
import img2 from "./assets/hotel-2.jpg";
import img3 from "./assets/hotel-3.jpg";
import img4 from "./assets/hotel-4.jpg";
import img5 from "./assets/hotel-5.jpg";

import user1 from "./assets/user-1.jpg";
import user2 from "./assets/user-3.jpg";
import user3 from "./assets/user-4.jpg";
import user4 from "./assets/user-5.jpg";
const feedbacks = [
  {
    username: "nick smith",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.",
    rate: 7.8,
    createdAt: "Feb 23rd, 2017",
  },
  {
    username: "Mary Thomas",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi. ",
    rate: 6.2,
    createdAt: "Feb 23rd, 2017",
  },
  {
    username: "nick smith",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.",
    rate: 8,
    createdAt: "Feb 23rd, 2017",
  },
  {
    username: "nick smith",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi. ",
    rate: 7.8,
    createdAt: "Feb 23rd, 2017",
  },
  {
    username: "nick smith",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi. ",
    rate: 6.9,
    createdAt: "Feb 23rd, 2017",
  },
];

const hotel = {
  name: "hotel las palms",
  stars: 3,
  rate: 8.6,
  votes: 486,
  location: "Albuf, Portugal",
  descriptions: [
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.",
    "Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus, inventore iure aliquid aliquam.",
  ],
  services: [
    "Close to the beach",
    "Air conditioning and heating",
    "Breakfast included",
    "Pets allowed",
    "Free airport shuttle",
    "We speak all languages",
    "Free wifi in all rooms",
    "Perfect for families",
  ],
  recommendedBy: [user1, user2, user3, user4],
  feedbacks,
  pictures: [img1, img2, img3,img5, img4],
};
export const galleryData = () => {
  return [img1, img2, img3, img4];
};
export const feedbacksData = () => {
  return feedbacks;
};

export const hotelData = () => {
  return hotel;
};
