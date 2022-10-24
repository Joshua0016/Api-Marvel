import axios from "axios";

const baseUrl = "https://gateway.marvel.com:443/v1/public/";
const params = "ts=1&apikey=77afea74ec2e258a9034560343acbb0b&hash=bc1be547b7da2d07ab4d94ed8fd90a3a";

export async function getCharacters(limit: number = 20, offset: number = 0, query: string = "") {
    try {
        const { data } = await axios.get(
            `${baseUrl}/characters?${params}&limit=${limit}&offset=${offset}${query ? `&nameStartsWith=${query}` : ""}`
        );
        return data.data;
    } catch (error) {
        console.log(error);
    }
}

export default {
    getCharacters
};