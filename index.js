const form = document.getElementById("form"); 
const btn = document.getElementById("button"); 
const ul =document.getElementById("ul"); 

btn.onclick = function (event) {
    event.preventDefault();
    //b1: lấy dữ liệu đầu vào từ người dùng
    const title= (form.title.value); 
    console.log(form.title.value);
    //b2: tạo thẻ li và hộp thông tin, button delete
    const newli = document.createElement("div"); 
    const todo = document.createElement("form")
    const xbtn = document.createElement("button");
    const txt = document.createElement("p");
    const newIcon = document.createElement("i");
    // thêm các thuộc tính cho thẻ
    newli.style.width="770px";
    newli.style.display="flex"; 
    newli.style.flexDirection="row";
    newli.style.justifyContent="space-between"; 
    xbtn.style.width="50px"; 
    xbtn.style.border="none";
    xbtn.style.backgroundColor="white";
    todo.style.display="flex";
    todo.style.flexDirection="row";
    //b3: Gán các nội dung cho thẻ
    txt.innerText = title;
    xbtn.innerText ="x"; 
    form.title.value="";
    //B4: appendchild
    newIcon.className += "fas fa-check";
    newIcon.style.display="none";
    todo.appendChild(newIcon);
    ul.appendChild(newli);
    newli.appendChild(todo);
    newli.appendChild(xbtn);
    todo.appendChild(txt); 
    //button "x" onclick
    xbtn.onclick = function() {
        newli.remove();
    }
    todo.onclick = function () {
        todo.firstChild.style.display="inline";
        todo.lastChild.style.textDecorationLine='line-through';
        }
}