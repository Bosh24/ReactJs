export type AnswerOption = {
    text: string;
    correct: boolean;
};

export type Question = {
    id: string;
    prompt: string;
    answers: AnswerOption[]; // exactly 4 options, one correct
};

// ใช้ ai gen คำถาม 25 ข้อ เพราะเร็วครับ 
export const ALL_QUESTIONS: Question[] = [
    {
        id: "q1",
        prompt: "What is the capital of France?",
        answers: [
            { text: "Paris", correct: true },
            { text: "Lyon", correct: false },
            { text: "Marseille", correct: false },
            { text: "Nice", correct: false }
        ]
    },
    {
        id: "q2",
        prompt: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Mars", correct: true },
            { text: "Venus", correct: false },
            { text: "Jupiter", correct: false },
            { text: "Mercury", correct: false }
        ]
    },
    {
        id: "q3",
        prompt: "What is 9 × 7?",
        answers: [
            { text: "63", correct: true },
            { text: "56", correct: false },
            { text: "72", correct: false },
            { text: "64", correct: false }
        ]
    },
    {
        id: "q4",
        prompt: "Who wrote 'Romeo and Juliet'?",
        answers: [
            { text: "William Shakespeare", correct: true },
            { text: "Charles Dickens", correct: false },
            { text: "Mark Twain", correct: false },
            { text: "Jane Austen", correct: false }
        ]
    },
    {
        id: "q5",
        prompt: "Which gas do plants primarily absorb for photosynthesis?",
        answers: [
            { text: "Carbon dioxide", correct: true },
            { text: "Oxygen", correct: false },
            { text: "Nitrogen", correct: false },
            { text: "Hydrogen", correct: false }
        ]
    },
    {
        id: "q6",
        prompt: "What is the largest ocean on Earth?",
        answers: [
            { text: "Pacific Ocean", correct: true },
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Arctic Ocean", correct: false }
        ]
    },
    {
        id: "q7",
        prompt: "Which language is primarily used for styling web pages?",
        answers: [
            { text: "CSS", correct: true },
            { text: "HTML", correct: false },
            { text: "Python", correct: false },
            { text: "SQL", correct: false }
        ]
    },
    {
        id: "q8",
        prompt: "What is the boiling point of water at sea level?",
        answers: [
            { text: "100°C", correct: true },
            { text: "90°C", correct: false },
            { text: "80°C", correct: false },
            { text: "120°C", correct: false }
        ]
    },
    {
        id: "q9",
        prompt: "Which metal is liquid at room temperature?",
        answers: [
            { text: "Mercury", correct: true },
            { text: "Iron", correct: false },
            { text: "Aluminum", correct: false },
            { text: "Copper", correct: false }
        ]
    },
    {
        id: "q10",
        prompt: "What is the chemical symbol for gold?",
        answers: [
            { text: "Au", correct: true },
            { text: "Ag", correct: false },
            { text: "Gd", correct: false },
            { text: "Go", correct: false }
        ]
    },
    {
        id: "q11",
        prompt: "Which country hosted the 2016 Summer Olympics?",
        answers: [
            { text: "Brazil", correct: true },
            { text: "China", correct: false },
            { text: "UK", correct: false },
            { text: "Japan", correct: false }
        ]
    },
    {
        id: "q12",
        prompt: "Which organ pumps blood throughout the body?",
        answers: [
            { text: "Heart", correct: true },
            { text: "Liver", correct: false },
            { text: "Lungs", correct: false },
            { text: "Kidneys", correct: false }
        ]
    },
    {
        id: "q13",
        prompt: "What is the square root of 144?",
        answers: [
            { text: "12", correct: true },
            { text: "14", correct: false },
            { text: "10", correct: false },
            { text: "16", correct: false }
        ]
    },
    {
        id: "q14",
        prompt: "Which continent is the Sahara Desert located on?",
        answers: [
            { text: "Africa", correct: true },
            { text: "Asia", correct: false },
            { text: "Australia", correct: false },
            { text: "South America", correct: false }
        ]
    },
    {
        id: "q15",
        prompt: "Which is the smallest prime number?",
        answers: [
            { text: "2", correct: true },
            { text: "1", correct: false },
            { text: "3", correct: false },
            { text: "0", correct: false }
        ]
    },
    {
        id: "q16",
        prompt: "In computing, what does CPU stand for?",
        answers: [
            { text: "Central Processing Unit", correct: true },
            { text: "Computer Personal Unit", correct: false },
            { text: "Central Print Unit", correct: false },
            { text: "Control Program Utility", correct: false }
        ]
    },
    {
        id: "q17",
        prompt: "Which instrument has keys, pedals, and strings?",
        answers: [
            { text: "Piano", correct: true },
            { text: "Violin", correct: false },
            { text: "Flute", correct: false },
            { text: "Drum", correct: false }
        ]
    },
    {
        id: "q18",
        prompt: "Which element has the chemical symbol O?",
        answers: [
            { text: "Oxygen", correct: true },
            { text: "Osmium", correct: false },
            { text: "Oganesson", correct: false },
            { text: "Gold", correct: false }
        ]
    },
    {
        id: "q19",
        prompt: "How many continents are there on Earth?",
        answers: [
            { text: "7", correct: true },
            { text: "6", correct: false },
            { text: "5", correct: false },
            { text: "8", correct: false }
        ]
    },
    {
        id: "q20",
        prompt: "Which animal is known as the 'Ship of the Desert'?",
        answers: [
            { text: "Camel", correct: true },
            { text: "Horse", correct: false },
            { text: "Donkey", correct: false },
            { text: "Elephant", correct: false }
        ]
    },
    {
        id: "q21",
        prompt: "What is H2O commonly known as?",
        answers: [
            { text: "Water", correct: true },
            { text: "Hydrogen", correct: false },
            { text: "Oxygen", correct: false },
            { text: "Salt", correct: false }
        ]
    },
    {
        id: "q22",
        prompt: "Which country is famous for the maple leaf symbol?",
        answers: [
            { text: "Canada", correct: true },
            { text: "USA", correct: false },
            { text: "Germany", correct: false },
            { text: "Australia", correct: false }
        ]
    },
    {
        id: "q23",
        prompt: "Which device measures atmospheric pressure?",
        answers: [
            { text: "Barometer", correct: true },
            { text: "Thermometer", correct: false },
            { text: "Altimeter", correct: false },
            { text: "Hygrometer", correct: false }
        ]
    },
    {
        id: "q24",
        prompt: "Which continent is the largest by land area?",
        answers: [
            { text: "Asia", correct: true },
            { text: "Africa", correct: false },
            { text: "North America", correct: false },
            { text: "Europe", correct: false }
        ]
    },
    {
        id: "q25",
        prompt: "What is the freezing point of water?",
        answers: [
            { text: "0°C", correct: true },
            { text: "-10°C", correct: false },
            { text: "10°C", correct: false },
            { text: "-5°C", correct: false }
        ]
    }
];


