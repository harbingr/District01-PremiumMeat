var breakpoints = {
    $mq_smaller: "screen and (max-width: 480px)",
    $mq_medium: "screen and (max-width: 768px)",
    $mq_large: "screen and (max-width: 1024px)",
    $mq_larger: "screen and (max-width: 1200px)"
};

//set show/hide of nav based on $mq_medium
$scope.$on('match', function(event, mq) {
    if (mq === '$mq_smaller') $scope.isCollapsed = true;
});
$scope.$on('unmatch', function(event, mq) {
    if (mq === '$mq_smaller') $scope.isCollapsed = false;
});