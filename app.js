// JavaScript code
const btn = document.querySelector('#New-quote');
const quoteElement = document.querySelector('.quote');
const personElement = document.querySelector('.person');

const quotes = [
  {
    quote: "It is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all.",
    person: "Mark Twain"
  },
  {
    quote: "Imagination is more important than knowledge.",
    person: "Albert Einstein"
  }, 
  {
    quote: "The only way to do great work is to love what you do.",
    person: "Steve Jobs"
  },
  {
    quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    person: "Maya Angelou"
  },
  {
    quote: "Education is the most powerful weapon which you can use to change the world",
    person: "Nelson Mandela"
  },
  {
    quote: "All the world's a stage, and all the men and women merely players.",
    person: "William Shakespeare"
  },
  {
    quote: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",
    person: "Steve Jobs"
  },
  {
    quote: "Let yourself be silently drawn by the strange pull of what you really love. It will not lead you astray.",
    person: "Rumi"
  },
  {
    quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    person: "Winston Churchill"
  },
  {
    quote: "In three words I can sum up everything I've learned about life: It goes on.",
    person: "Robert Frost"
  },
  {
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    person: "Nelson Mandela"
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    person: "John Lennon"
  },
  {
    quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    person: "Mother Teresa"
  },
  {
    quote: "The only limit to our realization of tomorrow will be our doubts of today.",
    person: "Franklin D. Roosevelt"
  },
  {
    quote: "Change your thoughts and you change your world.",
    person: "Norman Vincent Peale"
  },
  {
    quote: "It always seems impossible until it's done.",
    person: "Nelson Mandela"
  }
];

btn.addEventListener('click', function() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.textContent = quotes[randomIndex].quote;
  personElement.textContent = quotes[randomIndex].person;
});
