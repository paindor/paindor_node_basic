function Initializer(){

	this.vendingMachine = function(){
		VendingMachine.prototype.setChange = function(change){_change = change}
		VendingMachine.prototype.setItemNo = function(change){_itemNo = change}
		VendingMachine.prototype.setItemList = function(change){_itemList = change}
		VendingMachine.prototype.setItemNoList = function(change){_itemNoList = change}
		VendingMachine.prototype.getChange = function(){return _change}
		VendingMachine.prototype.getItemNo = function(){return _itemNo}
		VendingMachine.prototype.getItemList = function(){return _itemList}
		VendingMachine.prototype.getItemNoList = function(){return _itemNoList}

	}
}
function VendingMachineService(){
	this.insertCoin = function(coin){ 
		const init =  new Initializer()
		init.vendingMachine()

		const vm = new VendingMachine()
		vm.setChange(coin)

		alert( `${vm.getChange()}원 투입 `)}
	this.selectItem = function(itemNo, quantity){}
	this.returnChage = function(){}
	this.handleOrder = function(quantity, price, itemName){}
	//change, _itemNo, _itemList, _itemNoList
}
	
