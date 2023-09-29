$(function () {
    $(".product__stars, .reviews__stars--unfill").rateYo({
        rating: 4,
        starWidth: "16px",
        normalFill: "#C1C1C1",
        ratedFill: "#FFB800",
        spacing: "6px"
    });

    $(".reviews__stars").rateYo({
        rating: 4,
        starWidth: "16px",
        normalFill: "#C1C1C1",
        ratedFill: "#FFB800",
        spacing: "6px",
        readOnly: true
    });
});