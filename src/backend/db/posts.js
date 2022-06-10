import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "My name is Peter Parker and I've been Spider-Man since I was 15 years old.",
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },
    username: "peterparker@gmail.com",
    firstName: "Peter",
    lastName: "Parker",
    createdAt: new Date("Jun 06 2022 12:31:25"),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "Nothing Will Stop Me Now! For I Know At Last That A Man Can't Change His Destiny...And I Was Born To Be Spider-Man!",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    username: "peterparker@gmail.com",
    firstName: "Peter",
    lastName: "Parker",
    createdAt: new Date("Jun 01 2022 12:31:25"),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "Compromise where you can. Where you can't, don't. Even if everyone is telling you that something wrong is something right. Even if the whole world is telling you to move, it is your duty to plant yourself like a tree, look them in the eye, and say, 'No, you move.'",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    username: "steverogers@gmail.com",
    firstName: "Steve",
    lastName: "Rogers",
    createdAt: new Date("Feb 16 2022 12:31:25"),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "Anyone Can Win A Fight When The Odds Are Easy! It's When The Going's Tough, When There Seems To Be No Chance, That's When It Counts!",
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    username: "peterparker@gmail.com",
    firstName: "Peter",
    lastName: "Parker",
    createdAt: new Date("Mar 26 2021 12:31:25"),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content: "Before we get started, does anyone want to get out?",
    likes: {
      likeCount: 12,
      likedBy: [],
      dislikedBy: [],
    },
    username: "steverogers@gmail.com",
    firstName: "Steve",
    lastName: "Rogers",
    createdAt: new Date("Jan 16 2022 12:31:25"),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content: "If you're nothing without the suit, then you shouldn't have it.",
    likes: {
      likeCount: 8,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "Tony",
    lastName: "Stark",
    username: "tonystark@gmail.com",
    createdAt: new Date("July 16 2021 12:31:25"),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "The Amazing can only be created by facing fear, risk, and failure during the process.",
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "Clark",
    lastName: "Kent",
    username: "clarkkent@gmail.com",

    createdAt: new Date("Jan 20 2022 11:31:00"),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "If We Can't Accept Limitations Then We're No Better Than The Bad Guys.",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "Tony",
    lastName: "Stark",
    username: "tonystark@gmail.com",
    createdAt: new Date("Jan 31 2022 12:31:00"),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "I believe in second chances, I believe in redemption, but, mostly, I believe in my friends.",
    likes: {
      likeCount: 13,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "Clark",
    lastName: "Kent",
    username: "clarkkent@gmail.com",

    createdAt: new Date("Feb 14 2022 10:31:00"),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "There's One Thing You Can Never Take Away From Me: I Am Iron Man.",
    likes: {
      likeCount: 15,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "Tony",
    lastName: "Stark",
    username: "tonystark@gmail.com",
    createdAt: new Date("Jan 31 2022 09:31:00"),
    updatedAt: formatDate(),
    comments: [],
  },
];
