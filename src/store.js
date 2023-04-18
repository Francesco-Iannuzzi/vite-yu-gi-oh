import { reactive } from 'vue'
import axios from 'axios';

export const store = reactive({
    loading: true,
    API_URL: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=100&offset=0',
    cards: [],
    archetype: '',
    generateYugiCards(url) {

        if (this.archetype !== '') {
            url += `&archetype=${this.archetype}`;
        }

        axios
            .get(url)
            .then(response => {
                this.cards = response.data.data;
            })
            .catch(err => {
                console.log(err);
                console.error(err.message);
            })
    }
});