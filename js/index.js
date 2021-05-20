var header = new Vue({
    el: "header",
    data: {
        title: "BECAREFUL - сайт о других сайтах. Отзывы и рейтинги. Будь в курсе того кому можно верить, а кому нет",
        links: [
            {link: "/about", text: "О нас"},
            {link: "/referals", text: "Рекламодателям"},
            {link: "/referals", text: "Владельцам сайтов"},
            {link: "/new", text: "Оставить отзыв"},
        ],
    }
});

var reviews = new Vue({
    el: "#currentReviewsContainer",
    data: {
        reviews: []
    },
    created: function(){
        axios.post("https://becareful.online/api/getCurrentReviewList",
            JSON.stringify({
                collumns: [
                    'rating', 'mainpagescreen', 'mainurl', 'messagecount', 'username', 'userrating', 'images'
                ]
            }), {
                "Content-Type": "application/json"
            })
            .then(function(response){
                reviews.reviews = response.data;
            });
    }
})