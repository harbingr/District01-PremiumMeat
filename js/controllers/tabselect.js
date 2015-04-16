
function setSelected (item) {

	this.activateTab = function (tab){
		tab.active = true;
		$scope.selectedTab = tab;
	}

	scope.setSelectedTab = function (tab){
		if (tab) {
			self.activateTab(tab);
			var currentState = rootScope.$state.current;
			var stateForItem = state.get(tab.Item.name.toLowerCase());
				if (stateForItem != currentState) {
					state.go(tab.Item.name.toLowerCase());
				}
				} else {
					state.go('home');
				}
		}
	};

}

});