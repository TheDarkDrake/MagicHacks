const quizDB=[
    {
        question: "What type of a surgeon was Dr. Strange?",
        a:"Neuro Surgeon",
        b:"Cardiothoracic Surgeon",
        c:"Oculoplastic Surgeon",
        d:"General Surgeon",
        ans:"ans1"
    },
    {
        question: "Why did Dr.Strange go to Kamar Taj?",
        a:"To meet the Ancient One",
        b:"To heal himself ",
        c:"As a part of tour",
        d:"To attend a Birthday Party",
        ans:"ans2"
    },
    {
        question: "What was the first trick Dr.Strange performed using the Eye of Agamotto?",
        a:"Kill the Ancient One",
        b:"Retrieve the Lost Pages of the Cagliostro Book",
        c:"Make himself invisible",
        d:"Used a time loop on a biten apple to restore it back",
        ans:"ans4"
    },
    {
        question: "Who was Dr.Strange's teacher at Kamar Taj?",
        a:"The Ancient One",
        b:"Hamir",
        c:"Kaecilius",
        d:"Dormamu",
        ans:"ans1"
    },
    {
        question: "What was used to create portals to go from place to place?",
        a:"Bare Hands",
        b:"Slip Ring",
        c:"Eye of Agamotto",
        d:"Sling Ring",
        ans:"ans4"
    },
    {
        question: "RnJvbSB3aGVyZS BkaWQgdGhlIEFuY2llbnQg T25lIGRyYXcgaGVyIHBvd2VycyB0 byBiZWNvbWUgaW1tb3J0YWw/",
        a:"From a Cafe",
        b:"From The New York Sanctrum",
        c:"From The Dark Dimension",
        d:"From Kamar Taj",
        ans:"ans3"
    },
    {
        question: "V(6 5@?VE =@D6 @FC 56>@?D[ |@C5@]  (6 @?=J =62C? E@ =:G6 23@G6 E96>]V (2D D2:5 3Jn",
        a:"Dr.Strange",
        b:"Dormamu",
        c:"Kaecilius",
        d:"The Ancient One",
        ans:"ans4"
    },
    {
        question: "TmFtZSB0aGUgQm9 vayB0aGF0IEthZWNpb Gl1cyB0 b3JlIHBhZ2VzIGZyb20= ",
        a:"Diary of The Ancient One",
        b:"Book of Cagliostro",
        c:"Road To The Dark Dimension",
        d:"Book of Agamotto",
        ans:"ans2"
    },
    {
        question: "Ubj qvq Qe.Fgenatr trg Qbeznzh gb gnxr uvf gebbcf njnl sebz Rnegu?",
        a:"Using an endless Time Loop to Bargain",
        b:"Using the most powerfull Magic Spell",
        c:"Begged Dormamu to leave!",
        d:"By Hypnotizing Dormamu",
        ans:"ans1"
    }, 
    {
        question: "U25WemRDQlhiMjVuUH lCTWFXdGxJRUZrWld 4bFB5Y2dWMkZ6SUh OaGFXUWdZbmsv",
        a:"Mordo",
        b:"Chrisitine Palmer",
        c:"Stan Lee(the Bus Driver)",
        d:"Dr.Strange",
        ans:"ans4"
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