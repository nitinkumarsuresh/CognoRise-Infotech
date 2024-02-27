// Quiz data
const quizData = {
    general: [
        { question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"], answer: "Paris" },
        { question: "What is the largest planet in our solar system?", options: ["Jupiter", "Saturn", "Mars", "Earth"], answer: "Jupiter" },
        { question: "What is the powerhouse of the cell?", options: ["Nucleus", "Chloroplast", "Mitochondria", "Endoplasmic reticulum"], answer: "Mitochondria" },
        { question: "Who wrote 'To Kill a Mockingbird'?", options: ["Harper Lee", "Mark Twain", "J.K. Rowling", "Stephen King"], answer: "Harper Lee" },
        { question: "What is the boiling point of water in Celsius?", options: ["100°C", "0°C", "50°C", "150°C"], answer: "100°C" },
        { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: "4" },
        { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyper Text Makeup Language"], answer: "Hyper Text Markup Language" },
        { question: "What does CSS stand for?", options: ["Computer Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"], answer: "Cascading Style Sheets" },
        { question: "Which programming language is primarily used for web development?", options: ["Java", "Python", "JavaScript", "C++"], answer: "JavaScript" },
        { question: "What symbol is used to access jQuery?", options: ["$", "#", ".", "@"], answer: "$" }
    ],
    react: [
        { question: "What does JSX stand for?", options: ["JavaScript XML", "JavaScript Extension", "JavaScript Xtra", "Java Symbolic Expressions"], answer: "JavaScript XML" },
        { question: "What is the primary function of React?", options: ["To build user interfaces", "To handle server-side logic", "To manage databases", "To create mobile applications"], answer: "To build user interfaces" },
        { question: "Which lifecycle method is called after the component renders?", options: ["componentDidMount", "componentDidUpdate", "componentWillUnmount", "render"], answer: "componentDidMount" },
        { question: "What is a state in React?", options: ["A built-in React method", "An object that holds data", "A function that returns JSX", "A type of HTML element"], answer: "An object that holds data" },
        { question: "What is the purpose of PropTypes in React?", options: ["To specify the data types of props", "To define the structure of components", "To handle asynchronous actions", "To optimize rendering performance"], answer: "To specify the data types of props" },
        { question: "What is the virtual DOM?", options: ["A copy of the actual DOM", "A type of HTML element", "A React component", "A method for fetching data from a server"], answer: "A copy of the actual DOM" },
        { question: "What is a React component?", options: ["A JavaScript function or class that returns JSX", "A built-in HTML element", "A CSS stylesheet", "A folder containing React files"], answer: "A JavaScript function or class that returns JSX" },
        { question: "What is a prop in React?", options: ["Data passed from parent to child components", "A type of HTML element", "A state variable", "A method for fetching data from a server"], answer: "Data passed from parent to child components" },
        { question: "What is the purpose of keys in React lists?", options: ["To uniquely identify elements and improve rendering performance", "To add styling to components", "To handle user input", "To define the structure of components"], answer: "To uniquely identify elements and improve rendering performance" },
        { question: "Which method is used to update the state in a React component?", options: ["setState()", "updateState()", "modifyState()", "changeState()"], answer: "setState()" }
    ],
    django: [
        { question: "What is Django?", options: ["A Python web framework", "A JavaScript library", "A database management system", "An operating system"], answer: "A Python web framework" },
        { question: "Which programming language is used in Django?", options: ["Java", "Python", "JavaScript", "C++"], answer: "Python" },
        { question: "What is the purpose of Django's models?", options: ["To handle user authentication", "To define the structure of a database", "To create dynamic web pages", "To manage CSS stylesheets"], answer: "To define the structure of a database" },
        { question: "What is the default database used in Django?", options: ["MySQL", "SQLite", "PostgreSQL", "MongoDB"], answer: "SQLite" },
        { question: "What is a Django view?", options: ["A user interface component", "A Python function that takes a web request and returns a web response", "A JavaScript file", "A database table"], answer: "A Python function that takes a web request and returns a web response" },
        { question: "What is a Django template?", options: ["A Python package", "A JavaScript library", "A file containing HTML and Django template language", "A database table"], answer: "A file containing HTML and Django template language" },
        { question: "What is Django's admin interface?", options: ["A built-in tool for managing site content", "A programming language", "A version control system", "A database management tool"], answer: "A built-in tool for managing site content" },
        { question: "What command is used to start a new Django project?", options: ["django new", "django start", "django create", "django-admin startproject"], answer: "django-admin startproject" },
        { question: "What is Django's ORM?", options: ["Object-Relational Mapping", "Object-Rendering Model", "Online Resource Manager", "Operating Resource Manager"], answer: "Object-Relational Mapping" },
        { question: "What is the purpose of Django migrations?", options: ["To handle user authentication", "To create and apply database schema changes", "To manage CSS stylesheets", "To optimize rendering performance"], answer: "To create and apply database schema changes" }
    ]
};


let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    const category = document.getElementById('category').value;
    const questions = quizData[category];
    if (questions) {
        document.getElementById('category-selector').style.display = 'none';
        document.getElementById('quiz').style.display = 'block';
        document.getElementById('start-quiz-button').style.display = 'none';
        loadQuestion(questions[currentQuestionIndex]);
    }
}

function loadQuestion(questionObj) {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    questionElement.textContent = questionObj.question;
    optionsElement.innerHTML = '';
    questionObj.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = function() {
            checkAnswer(option, questionObj.answer);
        };
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedOption, correctAnswer) {
    if (selectedOption === correctAnswer) {
        score++;
    }
    if (currentQuestionIndex < quizData.general.length - 1) {
        currentQuestionIndex++;
        loadQuestion(quizData.general[currentQuestionIndex]);
    } else {
        showResult();
    }
    
}

function showResult() {
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('score').textContent = score + ' / ' + quizData.general.length;

    // Save score to local storage
    localStorage.setItem('quizScore', score);
}
function nextQuestion() {
    const category = document.getElementById('category').value;
    const questions = quizData[category];
    
    // Increase currentQuestionIndex to load the next question
    currentQuestionIndex++;
    
    // If there are more questions remaining
    if (currentQuestionIndex < questions.length) {
        loadQuestion(questions[currentQuestionIndex]);
    } else {
        // If all questions are answered, show the result
        showResult();
    }
}