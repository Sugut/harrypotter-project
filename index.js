document.addEventListener("DOMContentLoaded",  function (){
    const characterUrl= 'http://hp-api.herokuapp.com/api/characters'
    const hogwartStudentsUrl='http://hp-api.herokuapp.com/api/characters/students'
    const hogwartStaffUrl='http://hp-api.herokuapp.com/api/characters/staff'
    const ul = document.getElementById('staff-list')
    const studentList = document.getElementById("student-list")
    const userCardContainer= document.getElementById("all-characters")
    const card=document.getElementById("characters-container")
    const house=document.getElementById("houses")

    let users=[]

    // fetching all the characters
    fetch(characterUrl)
    .then(response => response.json())
    .then(data=>{data.forEach(user =>user.image=renderImages(user))})
    function renderImages(user){
        const li=document.createElement("li")
        li.innerText= user.name
        card.append(li)
        const image=document.createElement('img')
        image.src= user.image
        card.append(image)
        card.style.display="none"
        const characterBtn= document.getElementById('characters')
        characterBtn.addEventListener("click", handleChar)
      }
    function handleChar(){
        if(card.style.display=="none"){
            card.style.display=="block"
        }else{
            card.style.display=="none"
        }
    }
    
    // characters who are hogwart staff
    fetch(hogwartStaffUrl)
    .then(response => response.json())
    .then(data => {data.forEach(characterStaff=>characterStaff.name = renderStaff(characterStaff))})
     
    // added a click eventListener 
    function renderStaff(characterStaff){
        const li= document.createElement("li")
        li.innerText= characterStaff.name
        ul.append(li)
        ul.style.display="none"
        const staffBtn= document.getElementById("staff-click")
        staffBtn.addEventListener("click",  handleClick)
    }
    // hide and seek with the staff button
    let staff= true
     function handleClick(){   
        staff=!staff;
        if(staff){
            ul.style.display="none"
        }else{
            ul.style.display="block"
        }
     }
    
    // all students
    fetch(hogwartStudentsUrl)
    .then(response => response.json())
    .then(data=>{data.forEach(detail=>detail.name=renderStudents(detail))})
    
    // added a click eventListener
    function renderStudents(detail){
        const li= document.createElement("li")
        li.innerText=detail.name
        studentList.append(li)
        studentList.style.display="none"
        const studentBtn = document.getElementById("student-click") 
        studentBtn.addEventListener("click", handleStudent)
    }
    // hide and seek with the student button
    function handleStudent(){
        if(studentList.style.display=="none"){
            studentList.style.display="block"
        }else{
            studentList.style.display="none"
        }
     }
    //  all houses
    fetch(characterUrl)
    .then(response => response.json())
    .then(data=>data.forEach(detail =>detail.house=renderHouse(detail)))
    
    // adding a change eventListener
    function renderHouse(detail){
        const li=document.createElement("li")
        li.innerText = detail.house
        house.append(li)
        const drop = document.getElementById("house-dropdown") 
        drop.addEventListener("change", handleChange)
     }    
        
    function handleChange(e){
        let home= e.target.value
           if(home===house){
            return true
           }else{return false}
     newHomes=house.filter(handleChange)
     li.innerText=""
    }

    // validation code for inputs
    
    // function to add comments with a submit eventListener
    const form = document.getElementById("comment-form")
    form.addEventListener("submit", (e)=>{
        e.preventDefault()
        handleSubmit(e.target.comment.value)
        form.reset()
    })
    
    // Adding a click eventListener
    function handleSubmit(toComment){
        let li = document.createElement("li")
        let button = document.createElement("button")
        button.addEventListener("click", deleteComments)
        button.textContent="x"
        li.textContent= toComment
        li.appendChild(button)
        document.querySelector("#list").appendChild(li)
    }
    
    // function to delete comments
    function deleteComments(e){
        e.target.parentNode.remove()
    }
    })
    
    
    
    
    
    
    
    
    
    
    
    
    