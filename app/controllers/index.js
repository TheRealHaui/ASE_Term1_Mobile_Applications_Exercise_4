
//Display page
$.mainWindowId.open();


function doSearchButtonClick(e){
	
	alert("clicked todo");
	
}



function doSearchFieldFocused(e){
	
	//alert("Searchfield focused");
	$.searchFieldId.value = "";
	
}




/**
var items = ['Television', 'Music System', 'Car', 'Bus', 'Train', 'Computer', 'Lap Top', 'I-Phone', 'Tablet', 'Electronics', 'Watch', 'Mouse'];
 
function fillData() {
    var data = [];
    for (var i = 0; i < items.length; i++) {
        var row = Ti.UI.createTableViewRow({
            height : 50,
            title : items[i],
            color : 'gray',
            hasChild : true,
            font : {
                fontSize : 11
            },
        });
        data.push(row);
    }
    $.table.setData(data);
}
fillData();
$.tabGroup.open();
**/