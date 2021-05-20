

Vue.component('menu-link', {
    props: ['text', 'link'],
    template: "<a v-bind:href=\"link\">{{text}}</a>"
});

Vue.component('short-review', {
    props: {
        mainpagescreen: String,
        mainlink: String,
        commonscore: Number,
        counter: Number,
        content: String,
        username: String,
        userrating: Number,
    },
    template: "<div class=\"block row ml-2 mr-2 mt-2\" title=\"Читать отзыв целиком\">" +
        "            <div class=\"main-photo col-2 m-2\">" +
        "                <img v-bind:src=\"mainpagescreen\"/>" +
        "            </div>" +
        "            <div class=\"data col-1 mr-3\">" +
        "                <a href=\"#\">{{mainlink}}</a>" +
        "                <div class=\"rating\">" +
        "                    <div class=\"empty\">" +
        "                        <i class=\"rating-star\">☆</i>" +
        "                        <i class=\"rating-star\">☆</i>" +
        "                        <i class=\"rating-star\">☆</i>" +
        "                        <i class=\"rating-star\">☆</i>" +
        "                        <i class=\"rating-star\">☆</i>" +
        "                    </div>" +
        "                    <div class=\"fill\" v-bind:style=\"'width:'+commonscore+'px; height: 20px'\"><!--Ширина используется для управления строкой рейтинга-->" +
        "                        <i class=\"rating-star-fill\">★</i>" +
        "                        <i class=\"rating-star-fill\">★</i>" +
        "                        <i class=\"rating-star-fill\">★</i>" +
        "                        <i class=\"rating-star-fill\">★</i>" +
        "                        <i class=\"rating-star-fill\">★</i>" +
        "                    </div>" +
        "                </div>" +
        "                <div class=\"messages row\">" +
        "                    <img src=\"imgs/chat.png\">" +
        "                    <div class=\"message-count\">{{counter}}</div>" +
        "                </div>" +
        "            </div>" +
        "" +
        "            <div class=\"content col-9 m-1\">{{content}}" +
        "                <div class=\"white-block\"></div>" +
        "                <div class=\"user-data row\">" +
        "                    <div class=\"username\">{{username}}</div>" +
        "                    <div class=\"userrating\">" +
        "                        <div class=\"rating ml-2\">" +
        "                            <div class=\"empty\">" +
        "                                <i class=\"rating-star\">☆</i>" +
        "                                <i class=\"rating-star\">☆</i>" +
        "                                <i class=\"rating-star\">☆</i>" +
        "                                <i class=\"rating-star\">☆</i>" +
        "                                <i class=\"rating-star\">☆</i>" +
        "                            </div>" +
        "                            <div class=\"fill\" v-bind:style=\"'width: '+userrating+'px; max-height: 20px'\"><!--Ширина используется для управления строкой рейтинга-->" +
        "                                <i class=\"rating-star-fill\">★</i>" +
        "                                <i class=\"rating-star-fill\">★</i>" +
        "                                <i class=\"rating-star-fill\">★</i>" +
        "                                <i class=\"rating-star-fill\">★</i>" +
        "                                <i class=\"rating-star-fill\">★</i>" +
        "                            </div>" +
        "                        </div>" +
        "                    </div>" +
        "                </div>" +
        "            </div>" +
        "        </div>"
});