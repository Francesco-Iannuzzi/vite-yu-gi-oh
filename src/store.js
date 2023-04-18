import { reactive } from 'vue'
import axios from 'axios';

export const store = reactive({
    loading: true,
    API_URL: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=500&offset=0',
    API_URL_archetype: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    cards: [],
    archetypeList: [],
    archetype: '',
    generateYugiCards(url) {

        if (this.archetype !== '') {
            url += `&archetype=${this.archetype}`;
        }

        axios
            .get(url)
            .then(response => {
                this.cards = response.data.data;
                console.log(this.cards);
            })
            .catch(err => {
                console.log(err);
                console.error(err.message);
            })
    },
    generateYugiArchetype(url) {

        axios
            .get(url)
            .then(response => {
                this.archetypeList = response.data;
                console.log(this.archetypeList)
            })
            .catch(err => {
                console.log(err);
                console.error(err.message);
            })
    },
});