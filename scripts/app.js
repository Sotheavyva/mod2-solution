(function (){
	'use strict';
	angular
		.module('ShoppingListCheckOff', [])
		.controller('ToBuyController', ToBuyController)
		.controller('AlreadyBoughtController', AlreadyBoughtController)
		.service('ShoppingListCheckOffService', ShoppingListCheckOffService);
	
	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyController(ShoppingListCheckOffService){
		var toBuyList = this;
		toBuyList.items = ShoppingListCheckOffService.getToBuyItems();
		
		toBuyList.buyItem = function(itemIndex){
			ShoppingListCheckOffService.buyItem(itemIndex);
		};
	}
	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtController(ShoppingListCheckOffService){
		var alreadyBoughtList = this;
		
		alreadyBoughtList.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
	}
	function ShoppingListCheckOffService(){
		var service = this;
		
		var toBuyItems = [
							{name: "cookies", quantity: 10},
							{name: "milk", quantity: 10},
							{name: "water", quantity: 10},
							{name: "cokes", quantity: 10},
							{name: "sugar", quantity: 10},
						];
		var alreadyBoughtItems = [];
		
		service.buyItem = function(itemIndex){
			var item = toBuyItems[itemIndex];
			alreadyBoughtItems.push(item);
			toBuyItems.splice(itemIndex, 1);
		};
		service.getToBuyItems = function (){
			return toBuyItems;
		};
		service.getAlreadyBoughtItems = function(){
			return alreadyBoughtItems;
		};
	}
	
}
)();
