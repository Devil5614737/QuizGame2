const nextBtn = document.querySelector(".btn");
let question = document.querySelector(".question");
let optionContainer = document.querySelector(".ol");
let scoreContainer = document.querySelector(".score");
let score_Container = document.querySelector(".scoreContainer");
let questionContainer = document.querySelector(".questionContainer");
let startBtn=document.querySelector('.startBtn')
let rules_container=document.querySelector('.rulesContainer')

let score = 0;

let questionIndex = 0;
let colorIndex = 0;
// random colors
const colorsArr = [
  "#006aff",
  "#6f5ff0",
  "#9754de",
  "#b249cb",
  "#c540b7",
  "#d23aa2",
];

const random_color =colorsArr[Math.floor(Math.random()*colorsArr.length-1)]

// dark mode functionality
function themeToggle() {
  const themeBtn = document.querySelector(".themeToggle");
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("active");
  });
}
themeToggle();

// adding some animations

function animations() {
  const t1 = gsap.timeline();
  t1.from(".scoreContainer", {
    opacity: 0,
    ease: "power2.easeIn",
    delay: 0.1,
    // stagger:.1
  });

  t1.from(".question", {
    opacity: 0,
    ease: "power2.easeInOut",
    delay: 0.2,
    // stagger:.3
    y: 22,
  });

  t1.from(".ol", {
    opacity: 0,
    ease: "power2.easeInOut",
    delay: 0.4,
    stagger:.3,
    y: 22,
  });
}

animations();

// questions data

const data = [
  {
    id: 1,
    question: "What is the capital of india?",
    options: [
      {
        text: "Delhi",
      },
      {
        text: "Hyderabad",
      },
      {
        text: "Mumbai",
      },
      {
        text: "Lucknow",
      },
    ],
    answer: "Delhi",
  },
  {
    id: 2,
    question: "Who is the prime minister of india?",
    options: [
      {
        text: "Arvind Kejriwal",
      },
      {
        text: "Narendra Modi",
      },
      {
        text: "Rahul Gandhi",
      },
      {
        text: "Ramnath Kovind",
      },
    ],
    answer: "Narendra Modi",
  },
  {
    id: 3,
    question: "Where is the TajMahal located?",
    options: [
      {
        text: "Pune",
      },
      {
        text: "Goa",
      },
      {
        text: "Karnatak",
      },
      {
        text: "Agra",
      },
    ],
    answer: "Agra",
  },
  {
    id: 4,
    question: "Which of the following is the value of Hubble constant?",
    options: [
      {
        text: "73 km/s per mega parsec",
      },
      {
        text: "75 km/s per mega parsec",
      },
      {
        text: "69 km/s per mega parsec",
      },
      {
        text: "77 km/s per mega parsec",
      },
    ],
    answer: "73 km/s per mega parsec",
  },
  {
    id: 5,
    question: "In which year the Jnanpith Award was first awarded?",
    options: [
      {
        text: "1965",
      },
      {
        text: "1955",
      },
      {
        text: "1972",
      },
      {
        text: "None of these",
      },
    ],
    answer: "1965",
  },
  {
    id: 6,
    question: "Who was the poet of kadambari?",
    options: [
      {
        text: "Tulsidas",
      },
      {
        text: "Bhavabhuti",
      },
      {
        text: "Rabindranath Tagore",
      },
      {
        text: "None of these",
      },
    ],
    answer: "Rabindranath Tagore",
  },
  {
    id: 7,
    question: "Which of the following is the least dense planet among all the planets?",
    options: [
      {
        text: "Earth",
      },
      {
        text: "Uranus",
      },
      {
        text: "Jupiter",
      },
      {
        text: "Saturn",
      },
    ],
    answer: "Saturn",
  },
  {
    id: 8,
    question:"Who is the author of book “Hitopadesha”?",
    options: [
      {
        text: "Kalidasa",
      },
      {
        text: "Narayan Pandit",
      },
      {
        text: "Vishnu Sharma",
      },
      {
        text: "None of these",
      },
    ],
    answer: "Narayan Pandit",
  },
  {
    id: 9,
    question:"Which of the following is not an equatorial crop?",
    options: [
      {
        text: "Coconut",
      },
      {
        text: "Rubber",
      },
      {
        text: "Oil Palm",
      },
      {
        text: "Banana",
      },
    ],
    answer: "Banana",
  },
  {
    id: 10,
    question:"Who was the writer of the book ‘Devdas’?",
    options: [
      {
        text: "Saratchandra Chattopadhyay",
      },
      {
        text: "Bankim Chandra Chattopadhyay",
      },
      {
        text: "Mulk Raj Anand",
      },
      {
        text: "None of these",
      },
    ],
    answer: "Saratchandra Chattopadhyay",
  },
];

// changing the color
function changeScoreColor(index){
  let color=colorsArr[index]
  scoreContainer.style.color = color;
  // scoreContainer.classList.add("active")
  console.log(index)
}

function reset() {
  question.textContent = "";
  optionContainer.textContent = "";
}


// display the data
function fetchData(){
  let q = data[questionIndex++];
 
  question.textContent = q.question;
  questionContainer.appendChild(question);
  optionContainer.textContent=""
  // display the options
  q.options.forEach((option) => {
    let li = document.createElement("li");
    li.textContent = option.text;
    optionContainer.appendChild(li);

    li.addEventListener("click", () => {
      if (li.innerText === q.answer) {
        li.classList.add("correct");
        li.classList.remove("incorrect");
        score_Container.classList.add("active");
        fetchData()
        colorIndex++
        score++
        scoreContainer.textContent = score;
       changeScoreColor(colorIndex);
        setTimeout(() => {
          score_Container.classList.remove("active");
        }, 300);
       
      } else if(li.innerText !== q.answer) {
        li.classList.add("incorrect");
        li.classList.remove("correct");
        if(score>0){
          score--
          scoreContainer.textContent=score
        }
      }
    });
  });
}
startBtn.addEventListener("click", () => {
  startBtn.classList.add('active')
  rules_container.classList.add('active')
 fetchData()
});
