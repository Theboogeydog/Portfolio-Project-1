//The array containing the quotes and their author

let authorAndQuotes = [["Nelson Mandela","The greatest glory in living lies not in never falling, but in rising every time we fall."],
["Walt Disney","The way to get started is to quit talking and begin doing. "],
["Steve Jobs","Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma, which is living with the results of other people's thinking."],
["Eleanor Roosevelt","he future belongs to those who believe in the beauty of their dreams. "],
["Oprah Winfrey","If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."],
["James Cameron","If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success."],
["John Lennon","You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one."],
["Mahatma Gandhi","You must be the change you wish to see in the world."],
["Mother Teresa","Spread love everywhere you go. Let no one ever come to you without leaving happier."],
["Franklin D. Roosevelt","The only thing we have to fear is fear itself."],
["Martin Luther King Jr","Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that. "],
["Eleanor Roosevelt","Do one thing every day that scares you. "],
["Benjamin Franklin","Well done is better than well said. "],
["Helen Keller","The best and most beautiful things in the world cannot be seen or even touched, they must be felt with the heart."],
["Aristotle","It is during our darkest moments that we must focus to see the light."],
["Ralph Waldo Emerson","Do not go where the path may lead, go instead where there is no path and leave a trail."],
["Oscar Wilde","Be yourself; everyone else is already taken."],
["Maya Angelou","You will face many defeats in life, but never let yourself be defeated."],
["Henry David Thoreau","Go confidently in the direction of your dreams! Live the life you've imagined."],
["Abraham Lincoln","In the end, it's not the years in your life that count. It's the life in your years."],
["Babe Ruth","Never let the fear of striking out keep you from playing the game. "],
["Mother Teresa","In this life we cannot do great things. We can only do small things with great love. "],
["Thomas A. Edison","Many of life's failures are people who did not realize how close they were to success when they gave up."],
["Dr. Seuss","You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose."]];


//The array continaing the jibs and quips of the quote generator

let computerSentences = ["","","","","","","","",];

const quoteGen = (quoteList) => {
    let randomAuthor = Math.floor(Math.random()*quoteList.length);
    let secRandomAuthor = randomAuthor;
    while (secRandomAuthor===randomAuthor) {
        secRandomAuthor = Math.floor(Math.random()*quoteList.length);
    } 
    console.log(`Feeling down are we? Here is a quote from ${quoteList[randomAuthor][0]} that might boost your moral, and if not so at least give you purpose: "${quoteList[randomAuthor][1]}" What? You want more? You think it is nonsense? Fine. Here, i dare you to say this one is bad. "${quoteList[secRandomAuthor][1]}" - ${quoteList[secRandomAuthor][0]}.`);

}

quoteGen(authorAndQuotes);