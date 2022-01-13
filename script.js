let quotes = [
   'There is always light. If only we are brave enough to see it. If only we are brave enough to be it. - Amanda Gorman',
   'One of the lessons that I grew up with was to always stay true to yourself and never let what somebody else says distract you from your goals. -  Michelle Obama',
   'Keep your face always toward the sunshine, and shadows will fall behind you. — Walt Whitman',
   'Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill',
   'You are never too old to set another goal or to dream a new dream. — Malala Yousafzai',
   'Learning how to be still, to really be still and let life happen—that stillness becomes a radiance. — Morgan Freeman',
   'If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.— Roald Dahl',
   'Real change, enduring change, happens one step at a time. — Ruth Bader Ginsburg',
   'Wake up determined, go to bed satisfied.— Dwayne “The Rock” Johnson',
   'Clouds come floating into my life, no longer to carry rain or usher storm, but to add color to my sunset sky.— Rabindranath Tagore',
   'Never bend your head. Always hold it high. Look the world straight in the eye - Helen Keller',
];

function newQuote() {
let randomNumber = Math.floor(Math.random() * (quotes.length));
document.getElementById('quote-display').innerHTML = quotes[randomNumber];
}

