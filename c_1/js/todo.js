
function updateItemStatus(){
	
	var cbId = this.id.replace("cb_", "");
	var itemText = document.getElementById("item_" + cbId);
	
	if (this.checked){
		itemText.className = "checked";
	}	else {
		itemText.className = "";
	}
	
}

function renameItem() {
	var newText = prompt("Nytt namn")
	
	 if (!newText || newText == "" || newText == " ") {
	return false; 
	 
 }
	this.innerText = newText;
	
}

function removeItem() {
	this.style.display = "none";
	
}
function addNewItem(list, itemText) {
	
	var date = new Date();
	var id =  "" + date.getHours() + date.getMinutes() + date.getSeconds () + date.getMilliseconds();
	
	var listItem = document.createElement("li");
	listItem.id = "li_" + id;
	listItem.ondblclick = removeItem;
	
	var checkBox = document.createElement("input");
	checkBox.type = "checkBox";
	checkBox.id = "cb_" + id;
	checkBox.onclick = updateItemStatus;
	
	
	
	var span = document.createElement("span");
	span.id = "item_" + id;
	span.innerText = itemText;
	span.onclick = renameItem;
	
	
	listItem.appendChild(checkBox);
	listItem.appendChild(span);
	
	
	list.appendChild(listItem);
	
	
}

 var inItemText	= document.getElementById("inItemText");
 inItemText.focus();
 inItemText.onkeyup = function(event) {

  if (event.which == 13) {
    var itemText = inItemText.value;
  
  if (itemText == "" || itemText == " ") {
	return false; 
	 
 }
	 
 addNewItem(document.getElementById("todolist"), itemText);

 inItemText.focus();
 inItemText.select();
   
 }
 
};