document.addEventListener("DOMContentLoaded",  function (){
    const characterUrl= 'http://hp-api.herokuapp.com/api/characters'
    const hogwartStudentsUrl='http://hp-api.herokuapp.com/api/characters/students'
    const hogwartStaffUrl='http://hp-api.herokuapp.com/api/characters/staff'
    const ul = document.getElementById('staff-list')
    const studentList = document.getElementById("student-list")
           
    // fetching all the characters
    fetch(characterUrl)
    .then(response => response.json())
    .then(data=>{data.forEach(detail=>detail.image=renderImage(detail))})
     
    function renderImage(detail){
        const allCharacters = document.getElementById('characters-images-container')
        const characterName = document.createElement("h3")
        characterName.textContent= detail.name
        const image = document.createElement("img")
        image.src=detail.image
        allCharacters.append(image)
        allCharacters.append(characterName)
    }

    // characters who are hogwart staff
    fetch(hogwartStaffUrl)
    .then(response => response.json())
    .then(data => {data.forEach(characterStaff=>characterStaff.name = renderStaff(characterStaff))})
     
    // hide and seek with the staff button 
    function renderStaff(characterStaff){
        const li= document.createElement("li")
        li.innerText= characterStaff.name
        ul.append(li)
        ul.style.display="none"
        const staffBtn= document.getElementById("staff-click")
        staffBtn.addEventListener("click",  handleClick)
    }
    let staff= true
     function handleClick(){   
        staff=!staff;
        if(staff){
            ul.style.display="none"
        }else{
            ul.style.display="block"
        }
     }
    
    // hide and seek with student button
    fetch(hogwartStudentsUrl)
    .then(response => response.json())
    .then(data=>{data.forEach(detail=>detail.name=renderStudents(detail))})
    
    function renderStudents(detail){
        const li= document.createElement("li")
        li.innerText=detail.name
        studentList.append(li)
        studentList.style.display="none"
        const studentBtn = document.getElementById("student-click") 
        studentBtn.addEventListener("click", handleStudent)
    }
    
    
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
    
    function renderHouse(detail){
        const li=document.createElement("li")
        li.innerText = detail.house
        const drop = document.getElementById("house-dropdown") 
        drop.addEventListener("change", handleChange)
     }    
        
    function handleChange(e){
           let homes = e.target.value
           let filteredHouses= allHouses.filter(allHouses=>allHouses.startsWith(homes))
        allHouses.innerTextL=""
        renderHouse(filteredHouses)
    }

    // validation code for inputs
    function validate() {
        const userName=document.getElementById("userName").value
        const password=document.getElementById("password").value 
        if(userName=="uName" && password== "pwd"){
            alert("login succesfully")
            return false;
        }
        else{
            alert("login failed")
        }
    }
    
    // function to add comments
    const form = document.getElementById("comment-form")
    form.addEventListener("submit", (e)=>{
        e.preventDefault()
        handleSubmit(e.target.comment.value)
        form.reset()
    })
    
    // Adding a submt eventListener
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
    
    
    
    
    
    
    
    
    
    
    
    
    