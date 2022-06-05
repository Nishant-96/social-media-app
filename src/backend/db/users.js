import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Chris",
    lastName: "Gayle",
    email: "chrisgayle@gmail.com",
    username: "chrisgayle@gmail.com",
    bio: "I am a Potato.",
    password: "chris123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Yuvraj",
    lastName: "Singh",
    email: "yuvrajsingh@gmail.com",
    username: "yuvrajsingh@gmail.com",
    bio: "I am a Racer.",
    password: "yuvraj123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Heath",
    lastName: "Ledger",
    email: "heathledger@gmail.com",
    username: "heathledger@gmail.com",
    bio: "Madness is a lot like gravity.",
    password: "heath123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Christian",
    lastName: "Bale",
    email: "christianbale@gmail.com",
    username: "christianbale@gmail.com",
    bio: "I am Batman.",
    password: "chistian123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Peter",
    lastName: "Parker",
    email: "peterparker@gmail.com",
    username: "peterparker@gmail.com",
    bio: "With great power comes great responsibility.",
    password: "peter123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
