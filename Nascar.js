


// function show(hiddenList) { 
//     if(document.getElementById('hiddenList').style.display=='none') { 
//         document.getElementById('hiddenList').style.display=='block'; 
//     } 
//     console.log("yyo");
//     return false;
// } 
// function hide(hiddenList) { 
//     if(document.getElementById('hiddenList').style.display=='block') { 
//         document.getElementById('hiddenList').style.display=='none'; 
//     } 
//     return false;
// }   

function toggle() {
	if (document.getElementById('hiddenList').style.display == 'none') {
		document.getElementById('hiddenList').style.display = '';
	} else {
		document.getElementById('hiddenList').style.display = 'none';
    }
    console.log("yo")
}