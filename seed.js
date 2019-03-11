'use strict'

const { db, Quote } = require('./models/db')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const quotes = await Quote.bulkCreate([
      {quote: "That brain of mine is something more than merely mortal; as time will show.", author: "Ada Lovelace", source: "https://www.bustle.com/articles/116737-ada-lovelaces-6-most-feminist-quotes-are-the-perfect-way-to-celebrate-ada-lovelace-day"},
      {quote: "I believe myself to possess a most singular combination of qualities exactly fitted to make me pre-eminently a discoverer of the hidden realities of nature.", author: "Ada Lovelace", source: "https://www.bustle.com/articles/116737-ada-lovelaces-6-most-feminist-quotes-are-the-perfect-way-to-celebrate-ada-lovelace-day"},
      {quote: "If it's a good idea, go ahead and do it. It's much easier to apologize than it is to get permission.", author: "Rear Admiral Grace Hopper", source: "https://www.thoughtco.com/grace-hopper-quotes-3530092"},
      {quote: "A ship in port is safe, but that is not what ships are for. Sail out to sea and do new things.", author: "Rear Admiral Grace Hopper", source: "https://www.thoughtco.com/grace-hopper-quotes-3530092"},
      {quote: "They told me computers could only do arithmetic.", author: "Rear Admiral Grace Hopper", source: "https://www.thoughtco.com/grace-hopper-quotes-3530092"},
      {quote: "I want to make sure we use all our talent, not just 25 percent.", author: "Mae Jemison", source: "https://www.thoughtco.com/mae-jemison-quotes-3530131"},
      {quote: "Don't let anyone rob you of your imagination, your creativity, or your curiosity. It's your place in the world; it's your life. Go on and do all you can with it, and make it the life you want to live.", author: "Mae Jemison", source: "https://www.thoughtco.com/mae-jemison-quotes-3530131"},
      {quote: "I love being wrong because that means in that instant, I learned something new that day.", author: "Neil deGrasse Tyson", source: "https://www.azquotes.com/author/14904-Neil_deGrasse_Tyson"},
      {quote: "Knowing how to think empowers you far beyond those who know only what to think.", author: "Neil deGrasse Tyson", source: "https://www.azquotes.com/author/14904-Neil_deGrasse_Tyson"},
      {quote: "Whatever you want to do, if you do it with all your heart, it will happen.", author: "William Kamkwamba", source: "https://www.goodreads.com/author/quotes/2908712.William_Kamkwamba"},
      {quote: "So many things around you are reusable. Where other see garbage, I see opportunity.", author: "William Kamkwamba", source: "https://www.goodreads.com/author/quotes/2908712.William_Kamkwamba"},
      {quote: "We build our computer (systems) the way we build our cities: over time, without a plan, on top of ruins.", author: "Ellen Ullman", source: "https://medium.com/statuscode/ten-inspiring-programming-quotes-7c2fe1b2e79a"},
      {quote: "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.", author: "Patrick McKenzie" , source: "https://medium.com/statuscode/ten-inspiring-programming-quotes-7c2fe1b2e79a"},
      {quote: "One of the best programming skills you can have is knowing when to walk away for awhile.", author: "Oscar Godson", source: "https://medium.com/statuscode/ten-inspiring-programming-quotes-7c2fe1b2e79a"},
      {quote: "Feeling a little uncomfortable with your skills is a sign of learning, and continuous learning is what the tech industry thrives on!", author: "Vanessa Hurst", source: "https://twitter.com/CodeWisdom/status/1104079448205336580"},
      {quote: "Know how to learn. Then, want to learn.", author: "Katherine Johnson", source: "https://twitter.com/CodeWisdom/status/1093570206537011201"},
      {quote: "I’m an engineer for the same reason anyone is an engineer: a certain love for the intricate lives of things, a belief in a functional definition of reality. I do believe that the operational definition of a thing—how it works—is its most eloquent self-expression.", author: "Ellen Ullman", source: "https://www.goodreads.com/author/quotes/80270.Ellen_Ullman"},
      {quote: "People think that computer science is the art of geniuses but the actual reality is the opposite, just many people doing things that build on each other, like a wall of mini stones.", author: "Donald Knuth", source: "https://eloquentjavascript.net/03_functions.html"},
      {quote: "Life is not easy for any of us. But what of that? We must have perseverance and above all confidence in ourselves. We must believe that we are gifted for something and that this thing must be attained.", author: "Marie Curie", source: "https://everydaypowerblog.com/marie-curie-quotes/"},
      {quote: "One never notices what has been done; one can only see what remains to be done.", author: "Marie Curie", source: "https://everydaypowerblog.com/marie-curie-quotes/"}
    ])

  console.log(
    `seeded ${quotes.length} quotes`
  )
  console.log(`seeded successfully`)
}

async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

runSeed()
