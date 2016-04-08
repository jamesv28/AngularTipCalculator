app.service('mealDataService', function ($http) {
    var meals = [];
    var totals = {};



    return {
        getMeals: function () {
            return meals;
        },
        getCuulaltiveTotals: function () {
        },
        addMeal: function (newMeal) {
            meals.push(newMeal);
        },
        resetAll: function () {
            //clear everything;
            return everything;
        }
    };

});
