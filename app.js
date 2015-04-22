//Demo of the .css method of JQuery
$(document).ready(function(){
	$("#sBtn").on('click', function(event){
		var hexVal = "#" + document.getElementById("hexValue").value;
		event.preventDefault();
		$("#btn").css("background-color", hexVal);
		document.getElementById("hexValue").value = null;
	});
});