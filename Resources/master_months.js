// master_months.js
var MASTER_MONTHS= {};

(function(){
	var win = Titanium.UI.currentWindow;
	var tableData = [
	 Ti.UI.createTableViewRow({title:'January'}),
	 Ti.UI.createTableViewRow({title:'February'}),
	 Ti.UI.createTableViewRow({title:'March'}),
	 Ti.UI.createTableViewRow({title:'April'}),
	 Ti.UI.createTableViewRow({title:'May'}),
	 Ti.UI.createTableViewRow({title:'June'}),
	 Ti.UI.createTableViewRow({title:'July'}),
	 Ti.UI.createTableViewRow({title:'August'}),
	 Ti.UI.createTableViewRow({title:'September'}),
	 Ti.UI.createTableViewRow({title:'October'}),
	 Ti.UI.createTableViewRow({title:'Novenmber'}),
	 Ti.UI.createTableViewRow({title:'December'})
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
	MASTER_MONTHS.init = function(){

	
		var tableview = Titanium.UI.createTableView({
			data:tableData
		});
		win.add(tableview);		
		
		tableview.addEventListener('click',tableClick);						
	}
	
})();
MASTER_MONTHS.init();