let myImage=document.querySelector('img');
myImage.onclick=function(){
    let mySrc=myImage.getAttribute('src');
    if(mySrc=='images/水运板块.png'){
        myImage.setAttribute('src','images/内业板块.png');
    }
    else{
        myImage.setAttribute('src','images/水运板块.png');
    }    
}

/*点击按钮，弹出个性化信息 */
let myButton=document.querySelector('button');
let myHeading=document.querySelector('h1');

function setUserName(){
    let myName=prompt('请输入你的名字');
    if(!myName){
        setUserName();
    }
    else{
        localStorage.setItem('name',myName);
        myHeading.textContent='Test Image'+myName;
    } 
}

if(!localStorage.getItem('name')){
    setUserName();
}
else{
    let storedName=localStorage.getItem('name');
    myHeading.textContent='Test Image'+storedName;
}

myButton.onclick=function(){
    setUserName();
}