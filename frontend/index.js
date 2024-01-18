function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  //  ✨ add your code here
  const widgets = document.querySelectorAll('section div')
  widgets.forEach((element) => element.classList.add('widget'))
  // 👉 TASK 2 - Build a "Quote of the Day" widget
  //  ✨ add your code here
  let randQ = Math.floor(Math.random()*quotes.length)
  const quoteWig = document.querySelector('.quoteoftheday')
  const quoteText = document.createElement('div')
  const quoteAut = document.createElement('div')
  quoteWig.appendChild(quoteText)
  quoteWig.appendChild(quoteAut)
  quoteText.textContent = quotes[randQ]['quote']
  quoteAut.textContent = `${quotes[randQ]['author']} in ${quotes[randQ]['date']}`
  if (quotes[randQ]['date'] === null) {
    quoteAut.textContent = `${quotes[randQ]['author']} in an unkown date`
  }
  
  
  // 👉 TASK 3 - Build a "Corporate Speak" widget
  //  ✨ add your code here
  const verbRandom1 = verbs[Math.floor(Math.random()*verbs.length)]
  const verbRandom2 = verbs[Math.floor(Math.random()*verbs.length)]
  const nounRandom1 = nouns[Math.floor(Math.random()*nouns.length)]
  const nounRandom2 = nouns[Math.floor(Math.random()*nouns.length)]
  const adverbRandom1 = adverbs[Math.floor(Math.random()*adverbs.length)]
  const adverbRandom2 = adverbs[Math.floor(Math.random()*adverbs.length)]
  
  const csWig = document.querySelector('.corporatespeak')
  const paragraph = document.createElement('p')
  csWig.appendChild(paragraph)
  paragraph.textContent = `We need to ${verbRandom1} our ${nounRandom1} ${adverbRandom1}
  in order to ${verbRandom2} our ${nounRandom2} ${adverbRandom2}.`
  

  // 👉 TASK 4 - Build a "Countdown" widget
  //  ✨ add your code here
  const cDown = document.querySelector('.countdown')
  const theCount = document.createElement('p')
  let num = 5;
  theCount.textContent = `T-minus ${num}...`
  cDown.appendChild(theCount)


  setInterval(() => {
    num--;
    theCount.textContent = `T-minus ${num}...`
    if (num < 1) {
      theCount.textContent = 'Liftoff! 🚀'
    }
  }, 1000);

  

  // 👉 TASK 5 - Build a "Friends" widget
  //  ✨ add your code here
  const friendWig = document.querySelector('.friends')
  const primeFriend = Math.floor(Math.random()*people.length)
  const frWText = document.createElement('p')
  let birthdate = people[primeFriend]['dateOfBirth']
  let dateSplit = birthdate.split('-')
  friendWig.appendChild(frWText)
  let frIDlist = people[primeFriend]['friends']

  let phase1 = `${people[primeFriend]['fname']} ${people[primeFriend]['lname']} was born in ${dateSplit[0]} and `
  
   
    let friendsArr = []

  for (let i = 0; i < frIDlist.length; i++) {
    const friend = people.find(p => p.id === frIDlist[i])
    const ffullname = `${friend.fname} ${friend.lname}`
    let isLastI = i === frIDlist.length - 1;
    let isNextToLastI = i === frIDlist.length - 2;
    friendsArr.push(ffullname)
  }
    const lastFriend = friendsArr.pop()
    let phase2 = `is friends with `
    
    if (frIDlist.length === 0) {
     frWText.textContent = phase1 += 'has no friends.'
   } else if (frIDlist.length === 1) {
    frWText.textContent = phase1 += phase2 += lastFriend
   } else {
    frWText.textContent = phase1 += phase2 += `${friendsArr} and ${lastFriend}.`
   }





  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here
 quoteWig.setAttribute('tabindex', '1')
 csWig.setAttribute('tabindex', '2')
 cDown.setAttribute('tabindex','3')
friendWig.setAttribute('tabindex', '4')


  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
