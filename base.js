let btn = document.getElementById('btn');
let output = document.getElementById('output');
soundbtn = document.getElementById('sound');
copybtn = document.getElementById('copy');

let quote = 
    [
        '"The only way to do great work is to love what you do." - Steve Jobs',
        '"The only limit to our realization of tomorrow will be our doubts of today." - Franklin D. Roosevelt',
        '"The future belongs to those who believe in the beauty of their dreams." - Eleanor Roosevelt',
         '"Don\'t watch the clock; do what it does. Keep going." - Sam Levenson',
        '"Life is 10% what happens to us and 90% how we react to it." - Charles R. Swindoll',
        '"Believe you can and you are halfway there." - Theodore Roosevelt',
        '"Do not count the days; make the days count." - Muhammad Ali',
        '"The best way to predict the future is to create it." - Peter Drucker',
        '"Do not wait. The time will never be just right." - Napoleon Hill',
        '"In the end, we only regret the chances we did not take." - Lewis Carroll',
        '"If you want to achieve greatness stop asking for permission." - Anonymous',
        '"Happiness is not something ready-made. It comes from your own actions." - Dalai Lama',
        '"Life is short, and it is up to you to make it sweet." - Sarah Louise Delany',
        '"The harder I work, the luckier I get." - Samuel Goldwyn',
        '"Opportunities don\'t happen. You create them." - Chris Grosser',
        '"Life is either a daring adventure or nothing at all." - Helen Keller', 
        '"Life is about making an impact, not making an income." - Kevin Kruse',
        '"The road to success and the road to failure are almost exactly the same." - Colin R. Davis,
       '"The only person you are destined to become is the person you decide to be." - Ralph Waldo Emerson',
        '"Do not be afraid to give up the good to go for the great." - John D. Rockefeller',
    ];


btn.addEventListener('click', function(){
    var randomQ = quote[Math.floor(Math.random() * quote.length)]
    output.innerHTML = randomQ;
})

soundbtn.addEventListener("click", ()=>{
    let utterance = new SpeechSynthesisUtterance(`${output.innerText}`);
    speechSynthesis.speak(utterance);
});

copybtn.addEventListener("click", ()=>{
    navigator.clipboard.writeText(output.innerText);
    alert("Text copied!")
})
