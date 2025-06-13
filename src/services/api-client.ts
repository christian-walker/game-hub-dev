import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: 'bfc08a8397ff428c85497e5ae77e5c91',
    }
});