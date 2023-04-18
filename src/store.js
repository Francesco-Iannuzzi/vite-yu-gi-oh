import { reactive } from 'vue'
import axios from 'axios';

export const store = reactive({
    loading: true,
    API_URL: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=100&offset=0',
    cards: [],
    archetype: 'Select Archetype',
    generateYugiCards(url) {
        axios
            .get(url)
            .then(response => {
                console.log(response.data.data);
                this.cards = response.data.data;
                console.log(this.cards);
            })
            .catch(err => {
                console.log(err);
                console.error(err.message);
            })
    }
});