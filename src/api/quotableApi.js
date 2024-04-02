import axios from "axios";

const url = "https://api.quotable.io/quotes/random";

export const getQuotes = async () => {
    const { data } = await axios.get(url);
    return data
}