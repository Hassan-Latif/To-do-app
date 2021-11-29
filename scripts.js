//For removing items when del icon is clicked
let elements=document.getElementsByClassName('en')

for(let i=0;i<elements.length;i++){
    element[i].onclick=function() {
        let div=this.parentElement
        div.style.display='none'
    }
}

document.getElementById('inpp').addEventListener('focus',function() {
    document.getElementById('err-msg-txt').innerHTML=''
})

function errorMessage(){
    document.getElementById('err-msg-txt').innerHTML='Please enter some text first.'
}

// Function for adding records when Add button is clicked
let count=0
function addList(){
    
    let list=document.createElement('li')

    let textValue = document.getElementById("inpp").value   
    //Creating input of checkbox
    let checkbox =document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.name = "name";
    checkbox.value = "value";
    checkbox.id = "id";
    checkbox.className='chk';
    //Creating respective label
    let label = document.createElement('label')
    label.className='lab';
    label.htmlFor = "id";

    label.appendChild(document.createTextNode(textValue));

    //Appending both chkbox and label
    list.appendChild(checkbox);
    list.appendChild(label);

    if (textValue==''){
        errorMessage()
    }
    else{
        document.getElementById('liss').appendChild(list)
        count++
    }

    document.getElementById("inpp").value=''
    //Adding del icon.
    let getSpan = document.createElement('SPAN')
    getSpan.className='en'
    let getIcon=document.createElement('i')
    getIcon.className='far fa-trash-alt'
    getSpan.appendChild(getIcon)
    list.appendChild(getSpan)

    if (count>0){
        document.getElementById('ii').style.display='none'
    }

    let clo=document.getElementsByClassName('en')

    for(let i=0;i<clo.length;i++){
        clo[i].onclick=function() {
            let div=this.parentElement
            div.style.display='none'
        }
    }
}
// For entering records when enter key is pressed
document.addEventListener("keypress", function(e){
    if(e.key==='Enter'){
        addList()
        document.getElementById('inpp').blur()
    }

    })