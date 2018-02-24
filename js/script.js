var pTags = document.getElementsByTagName('p');
var htmlVar =document.getElementsByTagName('*')[0];
var fontNames = document.getElementsByName('textFont');
var selectFont = document.getElementById('selectFont');
var colorPicker = document.getElementById('colorPicker');
var getInputValue = document.getElementById('getInput');
var sidebar = document.getElementById('sidebar');
var burger = document.getElementById('burger');
var sidebarHeight = sidebar.clientHeight;

burger.addEventListener('click' , function () {
    if(  sidebar.clientHeight !=0 ){
        sidebar.style.height = 0 + 'px';
    } else {
        sidebar.style.height = sidebarHeight + "px";
    }

} );

getInputValue.addEventListener('click', function() {
    var inputValue = fontSize.value;
    if ( inputValue < 8 || inputValue > 24 || inputValue % 1 != 0 ) {
        alert("Input integer value from 8 to 24");
    } else {
        for (var i = 0; i < pTags.length ; i++){
            pTags[i].style.fontSize = inputValue + "px";
        }
    }
});

colorPicker.addEventListener( 'change', function() {
    document.body.style.backgroundColor = colorPicker.value; 
} )

selectFont.addEventListener('click', function() {
    for( var i =0; i < fontNames.length; i++ ) {
        if ( fontNames[i].checked  && fontNames[i].value == 'Alegreya') {
            var checkedFont = "'Alegreya', serif";
        } else if ( fontNames[i].checked  && fontNames[i].value == 'Pacifico') {
            var checkedFont = "'Pacifico', cursive";
        } else if ( fontNames[i].checked  && fontNames[i].value == 'Questrial') {
            var checkedFont = "'Questrial', sans-serif";
        }
        htmlVar.style.fontFamily = checkedFont;
    }
});

document.getElementById('deleteLastP').addEventListener('click', function() {
    var i = pTags.length - 1;
    pTags[i].remove();
});
