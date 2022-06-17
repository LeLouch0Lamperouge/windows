
function showDate() {
    var today = new Date();
    var date = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear();
    //var date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
    document.getElementById("currentDate").innerHTML = date;
}
showDate();