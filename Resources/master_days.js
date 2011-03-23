// master_days.js
var MASTER_DAYS = {};

(function(){
	var win = Titanium.UI.currentWindow;
	var tableData = [
	 Ti.UI.createTableViewRow({title:'Monday'}),
	 Ti.UI.createTableViewRow({title:'Tuesday'}),
	 Ti.UI.createTableViewRow({title:'Wednesday'}),
	 Ti.UI.createTableViewRow({title:'Thursday'}),
	 Ti.UI.createTableViewRow({title:'Friday'}),
	 Ti.UI.createTableViewRow({title:'Saturday'}),
	 Ti.UI.createTableViewRow({title:'Sunday'})
	];
	
	/**
	* on click event, fireEvent, detail window is listening
	*/
	function tableClick(evt) {
		var evtData = {
			"row" : evt.index,
			"title": evt.row.title 
		}
		Ti.App.fireEvent('app:rowClicked', evtData);

	}
	
	/**
	* initialize the window
	*/
	MASTER_DAYS.init = function(){

	
		var tableview = Titanium.UI.createTableView({
			data:tableData
		});
		win.add(tableview);		
		
		tableview.addEventListener('click',tableClick);						
	}
	
})();
MASTER_DAYS.init();