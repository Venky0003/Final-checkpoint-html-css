var tablists = document.getElementsByClassName("tab-list");
var tabcontents = document.getElementsByClassName("tab-contents");

function openTab(tabname) {
    for (tablist of tablists) {
        tablist.classList.remove("active");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    // function myFunction(event){
    event.currentTarget.classList.add("active");
    document.getElementById(tabname).classList.add("active-tab");
}