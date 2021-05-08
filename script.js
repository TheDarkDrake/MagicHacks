const quizDB=[
    {
        question: "Who is Harry Potter's godfather?",
        a:"Lord Voldemort",
        b:"Sirius Black",
        c:"Eldred Worple",
        d:"Dumbledore",
        ans:"ans2"
    },
    {
        question: "What is the name of Harry Potter's owl?",
        a:"Dobby",
        b:"Nagini",
        c:"Griphook",
        d:"Hedwig",
        ans:"ans4"
    },
    {
        question: "What position does Harry play on the Quidditch team?",
        a:"Chaser",
        b:"Snitch",
        c:"Keeper",
        d:"Seeker",
        ans:"ans4"
    }, 
    {
        question: "Who poses as Mad-Eye Moody, Harry's 4th year Defense Against the Dark Arts professor?",
        a:"Barty Crouch, Jr.",
        b:"Remus Lupin",
        c:"Dudley Dursley, Jr.",
        d:"Newt Scamander",
        ans:"ans1"
    },
    {
        question: "Who was Hermione’s date at the Yule Ball?",
        a:"Viktor Krum",
        b:"Ron Weasley",
        c:"Harry Potter",
        d:"Oliver Wood",
            ans:"ans1"
    },
    {
        question: "V2hhdCBpcyB0aGUgc3Bl bGwgdXNlZCB0byB kaXNhcm0gc29tZW9uZT8=" ,
        a:"Capacious Extremis",
        b:"Expelliarmus",
        c:"Disapparate",
        d:"Engorgio",
        ans:"ans2"
    },
    {
        question: "Jung jnf gur svefg Ubepehk gb or qrfgeblrq?",
        a:"Marvolo Gaunt's Ring",
        b:"Salazar Slytherin's Locket",
        c:"Tom Riddle's diary",
        d:"Helga Hufflepuff's Cup",
        ans:"ans3"
    },
    {
        question: "VjJoaG RDQmpjbVZoZ EhWeVpTQnBjeUJCY21GbmIyYy8=",
        a:"Dementors",
        b:"Obscurus",
        c:"Acromantula",
        d:"Thestrals",
        ans:"ans3"
    },
    {
        question: "(92E A=2E7@C> 5@ DEF56?ED ?665 E@ 42E49 E96 EC2:? 2E z:?8VD rC@DD $E2E:@?n",
        a:"Platform 9 3/4",
        b:"Platform 8 2/4 ",
        c:"Platform 11 3/2",
        d:"Platform 4 8/9",
        ans:"ans1"
    },
    {
        question: "U3BlbGwgdGhlIGluY2FudG F0aW9uIGZvciBvbmUgb2YgdGh lIEhhbGYtQmxvb2QgUH JpbmNl4oCZcyBzcGVsbHM=",
        a:"Finite Incantatem",
        b:"Impedimenta",
        c:"Sectumsempra",
        d:"Legilimens",
        ans:"ans3"
    },
    
];
const question = document.querySelector('.question');
const option1= document.querySelector('#option1');
const option2= document.querySelector('#option2');
const option3= document.querySelector('#option3');
const option4= document.querySelector('#option4');

const submit= document.querySelector('#submit');

const answers=document.querySelectorAll('.answer');

const showscore= document.querySelector('#showscore');






let questionCount=0;
let score=0;



const loadQuestion = () =>{

    

    question.innerText= quizDB[questionCount].question;
    option1.innerText= quizDB[questionCount].a;
    option2.innerText= quizDB[questionCount].b;
    option3.innerText= quizDB[questionCount].c;
    option4.innerText= quizDB[questionCount].d;

}

loadQuestion();


const getCheckAnswer = () => {

    let answer;

    answers.forEach((i) => {
        if(i.checked){
            answer = i.id
        };
       
    });
    return answer;

 
};

const deselectAll = () => {
    answers.forEach((i) => i.checked = false);
}



submit.addEventListener('click', () =>{

    const checkedAnswer = getCheckAnswer();
    
    
    
    if(checkedAnswer=== quizDB[questionCount].ans){
        score++;
    }

    questionCount++;

    

    if(questionCount<quizDB.length){
        loadQuestion();
    }else{

       

        showScore.innerHTML = `   
        <h3 style="color: #ff8400; font-weight:1000;"> <strong> Yayy ur score ${score}/${quizDB.length}</strong> </h3>

        <br>

        <div class="home" style=" text-align: center;">
    <button style="background-color:black ; border: none;" ><a href="finalpage.html"><p style="color:#ff8400">Go to Final Page</p></a></button>
     </div>
    
        `
        ;

        showScore.classList.remove('scoreArea')
    }

    
    



  

    
});

