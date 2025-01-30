
function getRandomQuote(): string[] {
  const quotes = [
    ["Some connections are made with wires, and some are made with blood, and some are made with bone, and some are made with wood, but they all matter.\n", "Sam Riegal as FCG"],
    ["We are story. All of us. What comes to matter then is the creation of the best possible story we can while we’re here; you, me, us, together.\n", "Richard Wagamese"],
    ["Of course it is happening inside your head, Harry, but why on earth should that mean that it is not real?\n", "Dumbledore"],
    ["Yasha: 'Yes here I am'\nCaduceus: 'and I think perhaps it's destiny... Do you believe in destiny?'\nYasha: 'No, but -'\nCaduceus: 'But you dream of islands and you go to them'", "Critical Role"],
    ["In the darkest times, hope is something you give yourself. That is the meaning of inner strength.\n", "Uncle Iroh"],
    ["Pride is not the opposite of shame, but its source. True humility is the antidote to shame.\n", "Uncle Iroh"],
    ["New directions in science are launched by new tools much more often than by new concepts. The effect of a concept-driven revolution is to explain old things in new ways. The effect of a tool-driven revolution is to discover new things that have to be explained.\n", "Freeman Dyson"],
    ["'I wish it need not have happened in my time,' said Frodo. 'So do I,' said Gandalf, 'and so do all who live to see such times. But that is not for them to decide. All we have to decide is what to do with the time that is given us.'\n", "Gandalf and Frodo from the Lord of the Rings"],
    ["Groovy\n", "Ash Williams from the Evil Dead"],
    ["I see now that the circumstances of one's birth is irrelevent, it is what you do with the gift of life that determines who you are.", "Mewtwo"],
    ["I'm through with playing by the rules of someone else's game. Too late for second-guessing. Too late to go back to sleep. It's time to trust my instincts, close my eyes and leap", "Elphaba"],
  ];

  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

export { getRandomQuote };


