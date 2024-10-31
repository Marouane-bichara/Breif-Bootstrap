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


function showSection(sectionNumber) {
    document.querySelectorAll('.section').forEach(section => section.classList.add('d-none'));
    document.getElementById('section' + sectionNumber).classList.remove('d-none');

}

function nextSection(sectionNumber) {

    showSection(sectionNumber);
    

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
                            <div class="col-md-5  justify-content-center align-items-center text-center fs-4 fw-bold text-dark mb-3" style="height: 50px; display: flex; border-radius: 5px">First name : ${information[0].firstname}</div>
                        </div>
                        <div class="row" style="display: flex; justify-content: center;">
                            <div class="col-md-5  justify-content-center align-items-center text-center fs-4 fw-bold text-dark" style="height: 50px; display: flex; border-radius: 5px;">Last name : ${information[0].lastname} </div>
                        </div>
                        <div class="row my-3" style="display: flex; justify-content: center;">
                            <div class="col-md-5  justify-content-center align-items-center text-center fs-4 fw-bold text-dark" style="height: 50px; display: flex; border-radius: 5px">Age : ${information[0].agee}</div>
                        </div>
                        <div class="row my-3" style="display: flex; justify-content: center;">
                            <div class="col-md-5  justify-content-center align-items-center text-center fs-4 fw-bold text-dark" style="height: 50px; display: flex; border-radius: 5px">Gender : ${information[0].genderr}</div>
                        </div>
                        <div class="row my-3" style="display: flex; justify-content: center;">
                            <div class="col-md-5  justify-content-center align-items-center text-center fs-4 fw-bold text-dark" style="height: 50px; display: flex; border-radius: 5px">Email : ${information[0].emaill}</div>
                        </div>
                        <div class="row my-3" style="display: flex; justify-content: center;">
                            <div class="col-md-5  justify-content-center align-items-center text-center fs-4 fw-bold text-dark" style="height: 50px; display: flex; border-radius: 5px">Phone Number : ${information[0].phonee}</div>
                        </div>
                        <div class="row my-3" style="display: flex; justify-content: center;">
                            <div class="col-md-5  justify-content-center align-items-center text-center fs-4 fw-bold text-dark" style="height: 50px; display: flex; border-radius: 5px">Job : ${information[0].job}</div>
                        </div>
                        <div class="row my-3" style="display: flex; justify-content: center;">
                            <div class="col-md-5  justify-content-center align-items-center text-center fs-4 fw-bold text-dark" style="height: 50px; display: flex; border-radius: 5px">Your feedback : ${information[0].feedbackk}</div>
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
                        <div class="col-md-6 border-bottom  d-flex justify-content-center align-items-center fs-5 fw-bold rounded" style = "max-width: 100%">FirstName : ${userarray[i][i].firstname}</div>
                        <div class="col-md-6  border-bottom d-flex justify-content-center align-items-center fs-5 fw-bold rounded">Last name : ${userarray[i][i].lastname}</div>
                        <div class="col-md-6  border-bottom d-flex justify-content-center align-items-center fs-5 fw-bold rounded">Gender : ${userarray[i][i].genderr}</div>
                        <div class="col-md-6  border-bottom d-flex justify-content-center align-items-center fs-5 fw-bold rounded">Age : ${userarray[i][i].agee}</div>
                        <div class="col-md-6  border-bottom d-flex justify-content-center align-items-center fs-5 fw-bold rounded">Email : ${userarray[i][i].emaill}</div>
                        <div class="col-md-6  border-bottom d-flex justify-content-center align-items-center fs-5 fw-bold rounded">Phone : ${userarray[i][i].phonee}</div>
                        <div class="col-md-6  border-bottom d-flex justify-content-center align-items-center fs-5 fw-bold rounded">Job : ${userarray[i][i].job}</div>
                        <div class="col-md-6  border-bottom d-flex justify-content-center align-items-center fs-5 fw-bold rounded">FeedBack : ${userarray[i][i].feedbackk}</div>
                    </div>

            `
           }


    
}

afficher() 
