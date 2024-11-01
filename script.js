let firstnome = document.getElementById('first-name');
let lastnome = document.getElementById('last-name');
let age = document.getElementById('age');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let jobtitle = document.getElementById('job-title');
let feedback = document.getElementById('feedback');
let section4 = document.getElementById('section4');
let gender = document.getElementById('form-gender');
let section1 = document.getElementById('section1');
let allinputs = document.querySelectorAll('input');
let nextbtn = document.getElementById('nextbtn');
let nextbtn2 = document.getElementById('nextbtn2');
let nextbtn3 = document.getElementById('nextbtn3');
let validerbtn = document.getElementById('valider');
let validerbtn2 = document.getElementById('valider2');
let validerbtn3 = document.getElementById('valider3');
let sectionstorage = document.getElementById("sectionstorage");
let emailmessage = document.getElementById('emailmessage');
let changecolor = document.getElementById("changecolor");
let bodyy = document.getElementById('body');
let allblue = document.getElementsByClassName("textbeforinpu");
let card = document.getElementById('card');
let textnum = document.getElementById('textnum');
let buttonseconds = document.getElementById('buttonseconds')
let buttonseconds2 = document.getElementById('buttonseconds2')
let labelfirstnamee = document.getElementById('labelfirstname')
let labellastname = document.getElementById('labellastname')
let labelage = document.getElementById('labelage')
let textofjobtitle = document.getElementById("textofjobtitle");
    
    changecolor.addEventListener('click', ()=>
    {
        
       localStorage.setItem('color' , JSON.stringify('color',"textbeforinpu2"));
       localStorage.setItem('color' , JSON.stringify('colorr',"var(--light-color)"));
       let te = JSON.parse(localStorage.getItem('color'))
        console.log(te);
        
        document.body.classList.toggle("bg-dark");
        card.classList.toggle("backgroundcolor");
        for(let i = 0 ; i<allblue.length;i++){
        allblue[i].classList.toggle(te);
        allblue[i].classList.remove("textbeforinpu1");
        }
    }
    );
    let secondsbutton = 10;
    function secondsleft1()
    {

        setInterval(()=>
        {
            if(secondsbutton > 0)
            {
                buttonseconds.innerHTML = secondsbutton;
                secondsbutton--;
            }
            else if(secondsbutton == 0)
            {
                if(firstnome.value.trim() == '')
                {
                    labelfirstnamee.innerHTML = '<span style="color: red;">First name is empty</span>'
                }
                if(lastnome.value.trim() == '')
                {
                    labellastname.innerHTML = '<span style="color: red;">Last name is empty</span>'
                }
                if(age.value.trim() == '')
                {
                    labelage.innerHTML = '<span style="color: red;">Age is empty</span>'
                }
                if(gender.value.trim() == '')
                {
                    gender.innerHTML = `<option">Gender is empty</option>
                    
                        <option value="">Select Gender</option>
                        <option value="woman">Woman</option>
                        <option value="man" >Man</option>
                    
                    `
                    gender.style.color = "red";
                }

            }
        }
        ,1000
        )
    }
    secondsleft1()

    let secondsbutton2 = 10
    function secondsleft2()
    {

        setInterval(()=>
        {
            if(secondsbutton2 > 0)
            {
                buttonseconds2.innerHTML = secondsbutton2;
                secondsbutton2--;
            }
            else if(secondsbutton2 == 0)
            {
                if(email.value.trim() == '')
                {
                    emailmessage.innerHTML = '<span style = "color: red;">Email input is empty</span>'
                }
                if(phone.value.trim() == '')
                {
                    textnum.innerHTML = '<span style = "color: red;">Phone input is empty</span>'
                }
                if(jobtitle.value.trim() == '')
                {
                    textofjobtitle.innerHTML = '<span style = "color: red;">Job input is empty</span>'
                }
            }
        }
        ,1000
        )
    }




function showSection(sectionNumber) {
    document.querySelectorAll('.section').forEach(section => section.classList.add('d-none'));
    document.getElementById('section' + sectionNumber).classList.remove('d-none');

}

function nextSection(sectionNumber) {

    showSection(sectionNumber);
    secondsbutton = 10
    buttonseconds.classList.add('d-none')
    secondsleft2()
}

function prevSection(sectionNumber) {
    showSection(sectionNumber);

}


function backTO()
{
    alert("Form submitted successfully!");
    document.getElementById("multiSectionForm").reset(); // Reset form field
    showSection(1); // Reset to the first section
    window.refre
    location.reload();
}



    setInterval(() => {
        validerbtn.click();
    }, 500);
    setInterval(() => {
        validerbtn2.click();
    }, 500);
    setInterval(() => {
        validerbtn3.click();
    }, 500);


function checks1()
{
    validerbtn.addEventListener('click', ()=>
        {
            if(firstnome.value.trim() == '' || lastnome.value.trim() == '' || age.value.trim() == '' || age.value >100 || age.value < 18 || gender.value == '')
                {
                    nextbtn.classList.add("d-none");
                }
                else
                {
                    nextbtn.classList.remove("d-none");
                }
                if(!firstnome.value.trim() == '')
                    {
                        labelfirstnamee.innerHTML = '<label for="name" class="textbeforinpu" id="labelfirstname">First Name:</label>'
                    }
                    if(!lastnome.value.trim() == '')
                    {
                        labellastname.innerHTML = '<label for="name" class="textbeforinpu" id="labellastname">Last name :</label>'
                    }
                    if(!age.value.trim() == '')
                    {
                        labelage.innerHTML = '<label for="age" class="textbeforinpu" id="labelage">Age (Between 18 & 100) :</label>'
                    }
                    if(!gender.value.trim() == '')
                    {

                        gender.style.color = "black";
                    }
                
        }
        )

}
checks1()




function checks2()
{

    validerbtn2.addEventListener('click', ()=>
        {
            if(email.value.trim() == '' || phone.value.trim() == '' || jobtitle.value.trim() == '')
                {
                    nextbtn2.classList.add("d-none");
                }
                else
                {
                    nextbtn2.classList.remove("d-none");
                }
                if(!email.value.trim() == '')
                    {
                        emailmessage.innerHTML = '<label for="email" id="emailmessage" class="textbeforinpu">Email:</label>'
                    }
                    if(!phone.value.trim() == '')
                    {
                        textnum.innerHTML = '<label for="phone" class="textbeforinpu" id="textnum">Phone Number:</label>'
                    }
                    if(!jobtitle.value.trim() == '')
                    {
                        textofjobtitle.innerHTML = '<label for="phone" class="textbeforinpu" id="textofjobtitle">Job title:</label>'
                    }
        }
        )

}
checks2()
function checks3()
{
    validerbtn3.addEventListener('click', ()=>
        {
            if(feedback.value.trim() == '')
                {
                    nextbtn3.classList.add("d-none");
                }
                else
                {
                    nextbtn3.classList.remove("d-none");
                }
        }
        )
}

checks3()






let arrayofinfo = [];

let information = [];
let count  = 0 


function submitForm(event) {
    let objectUser = 
{
    firstname : firstnome.value,
    lastname : lastnome.value,
    genderr : gender.value,
    agee : age.value,
    emaill : email.value,
    phonee : phone.value,
    job : jobtitle.value,
    feedbackk : feedback.value
}
    event.preventDefault(); 
    information.push(objectUser)
    arrayofinfo.push(information);

    localStorage.setItem('userdata', JSON.stringify(information));
    localStorage.setItem('datauser', JSON.stringify(arrayofinfo));


    section4.innerHTML = `                   
                    <div class="conatainer border my-5 ">
                        <div class="row" style="display: flex; justify-content: center;">
                            <div  class="col-md-5  justify-content-center align-items-center text-center fs-4 fw-bold  mb-3 textbeforinpu" style="height: 50px; display: flex; border-radius: 5px">First name : ${information[0].firstname}</div>
                        </div>
                        <div class="row" style="display: flex; justify-content: center;">
                            <div class="col-md-5  justify-content-center align-items-center text-center fs-4 fw-bold textbeforinpu" style="height: 50px; display: flex; border-radius: 5px;">Last name : ${information[0].lastname} </div>
                        </div>
                        <div class="row my-3" style="display: flex; justify-content: center;">
                            <div class="col-md-5  justify-content-center align-items-center text-center fs-4 fw-bold textbeforinpu" style="height: 50px; display: flex; border-radius: 5px">Age : ${information[0].agee}</div>
                        </div>
                        <div class="row my-3" style="display: flex; justify-content: center;">
                            <div class="col-md-5  justify-content-center align-items-center text-center fs-4 fw-bold textbeforinpu" style="height: 50px; display: flex; border-radius: 5px">Gender : ${information[0].genderr}</div>
                        </div>
                        <div class="row my-3" style="display: flex; justify-content: center;">
                            <div class="col-md-5  justify-content-center align-items-center text-center fs-4 fw-bold textbeforinpu" style="height: 50px; display: flex; border-radius: 5px">Email : ${information[0].emaill}</div>
                        </div>
                        <div class="row my-3" style="display: flex; justify-content: center;">
                            <div class="col-md-5  justify-content-center align-items-center text-center fs-4 fw-bold textbeforinpu" style="height: 50px; display: flex; border-radius: 5px">Phone Number : ${information[0].phonee}</div>
                        </div>
                        <div class="row my-3" style="display: flex; justify-content: center;">
                            <div class="col-md-5  justify-content-center align-items-center text-center fs-4 fw-bold textbeforinpu" style="height: 50px; display: flex; border-radius: 5px">Job : ${information[0].job}</div>
                        </div>
                        <div class="row my-3" style="display: flex; justify-content: center;">
                            <div class="col-md-5  justify-content-center align-items-center text-center fs-4 fw-bold textbeforinpu" style="height: 50px; display: flex; border-radius: 5px">Your feedback : ${information[0].feedbackk}</div>
                        </div>
                    <div class="d-flex justify-content-end">
                        <button type="button" class="btn btn-success mt-3 mx-3 my-3 bg-primary" onclick="backTO()">Done</button>
                    </div>
                    </div>`;
}




 



function afficher()
{
 
    let Getuserdata = JSON.parse(localStorage.getItem('userdata'));
    let userarray = JSON.parse(localStorage.getItem('datauser'));

    


           for(let i = 0 ;i < userarray.length ;i++)
           {
            console.log(userarray.length);
            
            sectionstorage.innerHTML += 
            `

                    <div class="form-group d-flex flex-column justify-content-center align-items-center my-5 text-center" style="height: 45px;">
                        <div class="col-md-6 textbeforinpu border-bottom  d-flex justify-content-center align-items-center fs-5 fw-bold rounded" style = "max-width: 100%" >FirstName : ${userarray[i][i].firstname}</div>
                        <div class="col-md-6 textbeforinpu border-bottom d-flex justify-content-center align-items-center fs-5 fw-bold rounded">Last name : ${userarray[i][i].lastname}</div>
                        <div class="col-md-6 textbeforinpu border-bottom d-flex justify-content-center align-items-center fs-5 fw-bold rounded">Gender : ${userarray[i][i].genderr}</div>
                        <div class="col-md-6 textbeforinpu border-bottom d-flex justify-content-center align-items-center fs-5 fw-bold rounded">Age : ${userarray[i][i].agee}</div>
                        <div class="col-md-6 textbeforinpu border-bottom d-flex justify-content-center align-items-center fs-5 fw-bold rounded">Email : ${userarray[i][i].emaill}</div>
                        <div class="col-md-6 textbeforinpu border-bottom d-flex justify-content-center align-items-center fs-5 fw-bold rounded">Phone : ${userarray[i][i].phonee}</div>
                        <div class="col-md-6 textbeforinpu border-bottom d-flex justify-content-center align-items-center fs-5 fw-bold rounded">Job : ${userarray[i][i].job}</div>
                        <div class="col-md-6 textbeforinpu border-bottom d-flex justify-content-center align-items-center fs-5 fw-bold rounded">FeedBack : ${userarray[i][i].feedbackk}</div>
                    </div>

            `
           }


    
}

afficher() 
