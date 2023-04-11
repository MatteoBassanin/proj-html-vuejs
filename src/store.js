import { reactive } from 'vue';

export const store = reactive(
    {
        cardArray: [
            {
                img: "img/gallery-3.jpg",
                title: "Technology",
                description: "Focused on developing technology solutions adapted to our client's needs"
            },
            {
                img: "img/gallery-5.jpg",
                title: "Transport",
                description: "We develop operational strategies to improve logistical efficiency."
            }
        ]
    }
);