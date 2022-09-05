document.addEventListener("DOMContentLoaded",  function (){
    const characterUrl= 'http://hp-api.herokuapp.com/api/characters'
    const hogwartStudentsUrl='http://hp-api.herokuapp.com/api/characters/students'
    const hogwartStaffUrl='http://hp-api.herokuapp.com/api/characters/staff'
    const ul = document.getElementById('staff-list')
    const studentList = document.getElementById("student-list")
    const card=document.getElementById("characters-container")
    const house=document.getElementById("houses")

    // fetching all the characters
    fetch(characterUrl)
    .then(response => response.json())
    .then(data=>{data.forEach(user =>user.image=renderImages(user))})
    function renderImages(user){

        // const searchBtn=document.getElementById('search-button').addEventListener("click", ()=>{
        //     let search= document.getElementById("user-input").value
            // if(user.name===search){
                const li=document.createElement("li")
                li.innerText= user.name
                card.style.display="none"
                const image=document.createElement('img')
                image.src= user.image
                card.append(image)
                card.append(li)
                console.log(card)
    //         }else{console.log("error")}
    //     })
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
    let list= true
    function handleStudent(){
        list=!list
        if(list){
            studentList.style.display="none"
        }else{
            studentList.style.display="block"
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
        house.style.display="none"
        const drop = document.getElementById("house-dropdown") 
        drop.addEventListener("change", handleChange)
     }    
        
    function handleChange(e){
        let home= e.target.value
        let filteredHomes= house.filter(house=>house.startsWith(home))

    //        if(home===house){
    //         li.innerText=""
    //         return true
    //        }else{return false}

    //  newHomes=house.filter(handleChange)
    //  console.log(newHomes)
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
    
    
    
    
    
    
    
    
    
    
    
    
    