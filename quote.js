function showRandomQuote() {
    const birthdate = document.getElementById('birthdate').value;

    if (birthdate !== '') {
        const quotes = [
            "Wishing you a year filled with love, joy, and new adventures!",
            "May your birthday be the start of a year filled with good luck, good health, and much happiness.",
            "Another adventure-filled year awaits you. Welcome it with open arms!",
            "May These year be the window that opens a million new opportunities!",
            "Cheers to a new year and another chance for us to get it right.",
            "Write it on your heart that every day is the best day in the year.",
            "New beginnings are in order, and you are bound to feel some level of excitement as new chances come your way.",
            "This is a new year. A new beginning. And things will change.",
            "The magic in new beginnings is truly the most powerful of them all.",
            "Your success and happiness lie in you. Resolve to keep happy, and your joy and you shall form an invincible host against difficulties.",
            "May the New Year bring you courage to break your resolutions early! My own plan is to swear off every kind of virtue so that I triumph even when I fall!",
            // Add more quotes as needed
        ];

        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

        const popupWindow = window.open('', 'BirthdayQuote', 'width=400,height=200');
        popupWindow.document.write(`<p>${randomQuote}</p>`);
    } else {
        alert('Please enter your birth date.');
    }
}