app.service('mealDataService', function ($http) {
    var meals = [];
    var totals = {};



    return {
        getMeals: function () {
            return meals;
        },
        getCumulativeTotal: function () {

            //after i get all of the data i need to run this for the math
            //of actually finding the actual tip,tax amounts
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
