var MASTER_WINDOW = {};

(function(){
	var win = Titanium.UI.currentWindow;
	var navGroup = win.navGroup;
	var tableData = [
	 Ti.UI.createTableViewRow({title:'Months of the Year', url:'master_months.js'}),
	 Ti.UI.createTableViewRow({title:'Days of the Week', url:'master_days.js'})
	];
	
	/**
	* on click event, fireEvent, detail window is listening
	*/
	function tableClick(evt) {
		var newWin = Ti.UI.createWindow({
		    title:evt.row.title,
		    backgroundColor: '#fff',
		    url:evt.row.url
		});
		navGroup.open(newWin);
	}
	
	/**
	* initialize the window
	*/
	MASTER_WINDOW.init = function(){
	
		var tableview = Titanium.UI.createTableView({
			data:tableData
		});
		win.add(tableview);		
		
		tableview.addEventListener('click',tableClick);						
	}
	
})();
MASTER_WINDOW.init();