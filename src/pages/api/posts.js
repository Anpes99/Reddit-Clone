import axios from "axios";
const Sequelize = require("sequelize");
const {
  User,
  Comment,
  Post,
  Subreddit,
  UserSubreddits,
} = require("../../models/index");

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("database connected");
  } catch (err) {
    console.log("connecting database failed", err);
    //return process.exit(1);
    return null;
  }

  return null;
};
connectToDatabase();

export default async (req, res) => {
  if (req.method === "GET") {
    const posts = await Post.findAll({ include: { model: User } });
    console.log(posts);
    res.json(posts);
  }
};
