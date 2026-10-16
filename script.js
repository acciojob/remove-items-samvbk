//your JS code here. If required.
const dropdown = document.getElementNyId("colorSelect");
const dltBtn = document.getElementById("dlt");
dltBtn.addEventListener("click",function () {
	const si = dropdown.selectedIndex;
	dropdown.remove(selectedIndex);
});