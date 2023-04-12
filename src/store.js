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
        ],

        cardNewsArray: [
            {
                img: "img/news-1.jpg",
                description: "Increasing creativity is possible for everyone"
            },
            {
                img: "img/news-2.jpg",
                description: "Because market research is part of the business plan"
            },
            {
                img: "img/news-3.jpg",
                description: "Working from home is now a trend"
            }
        ]
    }
);