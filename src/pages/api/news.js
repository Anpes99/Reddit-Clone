import axios from "axios";

export default async (req, res) => {
  axios
    .get(
      `https://newsapi.org/v2/top-headlines?pageSize=4&country=us&apiKey=${process.env.NEWS_API_KEY}`
    )
    .then((result) => {
      console.log(result.data);
      return res.json(result.data);
    })
    .catch((e) => {
      console.log(e);
      res.status(400).json(e.messsage);
    });
};
