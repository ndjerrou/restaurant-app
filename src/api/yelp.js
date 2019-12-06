import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer fp2tzZ1hUfy-Tk3rBs0rckkF1JtGzdU62bFc4e4NSc0OueHT_sFMluUqEq3ivPqFORjrL-JzQV5zl4EbgEQmArDdxszIDzsrkrZGt6cTnqk1HI7DTU9sV7Dtp7foXXYx"
  }
});
