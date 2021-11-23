//For removing items when del icon is clicked
var clo=document.getElementsByClassName('en')
let i=0
for(i=0;i<clo.length;i++){
    clo[i].onclick=function() {
        let div=this.parentElement
        div.style.display='none'
    }
}


// Function for adding records when Add button is clicked
function addLi(){
 
    var li=document.createElement('li')

    var te = document.getElementById("inpp").value   
    //Creating input of checkbox
    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.name = "name";
    checkbox.value = "value";
    checkbox.id = "id";
    checkbox.className='chk'
    //Creating respective label
    var label = document.createElement('label')
    label.className='lab'
    label.htmlFor = "id";
    label.appendChild(document.createTextNode(te));

    //Appending both chkbox and label
    li.appendChild(checkbox);
    li.appendChild(label);

    if (te==''){
        alert("You must enter some text")
    }
    else{
        document.getElementById('liss').appendChild(li)
    }
    document.getElementById("inpp").value=''
    //Adding del icon.
    var x = document.createElement('SPAN')
    x.className='en'
    var ico=document.createElement('i')
    ico.className='far fa-trash-alt'
    x.appendChild(ico)
    li.appendChild(x)

    var clo=document.getElementsByClassName('en')
    let i=0
    for(i=0;i<clo.length;i++){
        clo[i].onclick=function() {
            let div=this.parentElement
            div.style.display='none'
        }
    }


}
// For entering records when enter key is pressed
document.addEventListener("keypress", function(e){
    if(e.key==='Enter'){
        addLi()
    }

    })