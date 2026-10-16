//your JS code here. If required.
const dropdown = document.getElementById("colorSelect");
const dltBtn = document.getElementById("dlt");
dltBtn.addEventListener("click",function () {
	const si = dropdown.selectedIndex;
	// if(si!==-1||dropdown.options[si].value!==""){
		dropdown.remove(selectedIndex);	
	// }
});