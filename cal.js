const screen=document.getElementById('Screen')
function appendToScreen(input){
    screen.value+=input
}
function ClrScr(){
    screen.value="";
}
function Calculate(){
    try{
        screen.value=eval(screen.value);
    }
    catch(error){
        screen.value="Error"
    }
}
function del(){
    let len=(screen.value).length;
    screen.value=screen.value.substr(0,len-1);
}