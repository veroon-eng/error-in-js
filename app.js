titles=document.getElementsByClassName("title")
Array.from(titles).forEach(function(item){
    console.log(item)
})

books=document.querySelectorAll("#book-list li .name");
Array.from(books).forEach(function(item){
    console.log(item.textContent)
})

Array.from(books).forEach(function(item){
    item.textContent="osama"
})
Array.from(books).forEach(function(item){
    item.textContent +="(megahed)"
})

booklist=document.querySelector("#book-list")
console.log(booklist.innerHTML)
booklist.innerHTML +="<h2>we can be like they are...</h2>"
console.log(booklist.innerHTML)
booklist.innerHTML += "<small>this is how you add some text</small>"


// #############################################################################################################################

banner=document.querySelector("#page-banner")
console.log("type is:",banner.nodeType)
console.log("name is:",banner.nodeName)
tit=document.querySelector("#book-list")
console.log("type of title is",tit.nodeType)
add=document.querySelector("#add-book")
console.log("type of title is",add.nodeName)
console.log("the childs of add are:",add.hasChildNodes())
add=banner.cloneNode(true)
// #############################################################################################################################
book_list=document.querySelector("#book-list")
console.log("the parent node is:",book_list.parentNode)
console.log("parent element is: ",book_list.parentElement)
console.log("parent element is: ",book_list.parentElement.parentElement)
console.log(" childs are: ",book_list.childNodes)
console.log(" childs are: ",book_list.children)
// #############################################################################################################################
book_list=document.querySelector("#book-list")
console.log("the next sibiling is: ",book_list.nextSibling)
console.log("the next sibiling element is: ",book_list.nextElementSibling)
console.log("the previous sibiling is: ",book_list.previousSibling)
console.log("the previous sibiling element is: ",book_list.previousElementSibling)
page_banner=document.querySelector("#page-banner")
page_banner.innerHTML +=("<br><p>this an editing with the old way(innerHTML)</p>")
book_list.previousElementSibling.querySelector("p").innerHTML+="<br><p>this an editing with the another way(previous sibling)</p>"
// #############################################################################################################################
btns=document.querySelectorAll("#book-list .delete")
Array.from(btns).forEach(function(item){
    item.addEventListener("click",function(e){
        my_li=e.target.parentElement
        my_li.parentNode.removeChild(my_li)
    })
})
// #############################################################################################################################
list=document.querySelector("#book-list ul");
list.addEventListener("click",function(e){
    if(e.target.className=="delete"){
        li=e.target.parentElement;
        list.removeChild(li)
    }
})
// #############################################################################################################################
// add_form=document.forms["add-book"]
// add_form.addEventListener("submit",function(e){
//     e.preventDefault()
//      my_value=add_form.querySelector('input[type="text"]').value;
//     console.log(my_value)
})
// #############################################################################################################################
                    // add elements ==>!!!!!!
// create elements
// li=document.createElement("li");
// book_name=document.createElement("span");
// delete_btn=document.createElement("span");

// // add content
// delete_btn.textContent="delete";
// // book_name.textContent = value;

// // add classes
// book_name.classList.add("name")
// delete_btn.classList.add("delete")

// // append to document
// // list=document.querySelector("#book-list ul")
// li.appendChild(book_name)
// li.appendChild(delete_btn)
// list.appendChild(li)
// #############################################################################################################################
                    // hide elements
hide_box=document.querySelector("#hide")
hide_box.addEventListener("change",function(e){
    if(hide_box.checked){
        list.style.display="none"
    }
    else{
        list.style.display="initial"
    }
})   
// #############################################################################################################################
                    // search ==>!!!!!!
// search_bar=document.forms["search-books"].querySelector("input")
// search_bar.addEventListener("keyup",function(e){
//     term=e.target.value.toLowerCase()
//     books=list.getElementsByTagName("li")
//     Array.from(books).forEach(function(item){
//         title=item.firstElementChild.textContent
//         if(title.toLowerCase().indexOf(term)!=-1){
//             book.style.display="block"
//         }
//         else{
//             book.style.display="none"

//         }
//     })
// })
// #############################################################################################################################
                    // tabbed content
// tabs=document.querySelector(".tabs")
// panelstabs=document.querySelectorAll(".panel")
// tabs.addEventListener('click',function(e){
//     if(e.target.tagName=="LI"){
//         targetPanel=document.querySelector(e.target.dataset.target)
//         panels.forEach(function(panel){
//             if(panel==targetPanel){
//                 panel.classList.add("active")

//             }
//             else{
//                 panel.classList.remove("active")
//             }
//         })
//     }
// })
// #############################################################################################################################
// #############################################################################################################################
// #############################################################################################################################
// #############################################################################################################################
// #############################################################################################################################
// #############################################################################################################################
// #############################################################################################################################
// #############################################################################################################################
// #############################################################################################################################










































