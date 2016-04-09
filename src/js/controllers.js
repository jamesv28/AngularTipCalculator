app.controller('myController', ['$scope', function($scope) {
    $scope.greeting = "Hello World!";
}]);

app.controller('detailsController', ['$scope' ,'mealDataService', function($scope, mealDataService) {

    $scope.form = {};
    $scope.pushMeal = function () {
        mealDataService.addMeal($scope.form);
        console.log('isnerting into form', $scope.form);
        $scope.form = {};
    };

}]); //end of details controller


app.controller('earningsController', ['$scope', 'mealDataService', function($scope, mealDataService) {


    $scope.theMeals = mealDataService.getMeals();

    console.log('all of the meals', $scope.theMeals);

    $scope.theMeals.forEach(function(meal) {

        var tips = 0;
        var taxes = 0;
        var tip = 0;
        var tax = 0;

        tip = meal.tip * meal.price;
        tips = tip + tips;
        $scope.theTips = tips;
        tax = meal.tax * meal.price;
        taxes = tax + taxes;
        $scope.theTaxes = taxes;
    });

}]); //end of earningController

app.controller('chargesController', ['$scope','mealDataService', function($scope, mealDataService) {

    $scope.theMeals = mealDataService.getMeals();
    $scope.tax = 0;
    $scope.tip = 0;
    $scope.price = 0;

    console.log('this is the meals', $scope.theMeals);

    $scope.showIndividual = function() {
        $scope.firstOne = $scope.theMeals[0];
        $scope.tip = $scope.firstOne.tip;
        $scope.tax = $scope.firstOne.tax;
        $scope.price = $scope.firstOne.total
    }

}]);
