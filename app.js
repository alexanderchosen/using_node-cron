const cron = require("node-cron")

// The * are called CRON STRINGS. Each one represent a time.
// From LHS, the first * represents seconds and is optional, they can be represented with */0-59 to represents 60 seconds in a minute
//  the next * represents minutes, they can be represented with */ 0-59 which shows that we have just 60 minutes in an hour,
//  the next * represents hour, they can be represented with */ 0-23 which shows that we have 24 hours in a day
//  the next * represents Day of the month, they can be represented with */ 1-31 which shows that each month has  maximum number of 31 days
//  the next * represents Month, they can be represented with */1-12 which implies that we have 12 months in a year
// the next * represents Days of the week, they can be represented with */ 0-7 / Mon-Sun / Monday-Sunday where 0 & 7 represents sunday, 1 - Monday...

// using all * means every seconds, of every minute, of every hour, of every day of the month, of every month of the year, of every day of the week
// cron.schedule("* * * * * *", ()=>{
//     console.log("I'm in love with you Rachel !")
// })

// // using 02 for minutes means every 2nd minute in every hour...
// cron.schedule("* 02 * * * *", ()=>{
//     console.log("Yes, I love you baby !")
// })

// // using Ranges
// cron.schedule("10-30 22 * * * *", ()=>{
//     console.log(" You deserve a gentleman like me. let's jump on this love boat together, my baby Racheli. I'll be right here waiting for you!")
// })

//  selecting certain time points
// cron.schedule("10,12,48 * 0,12,21,22 * Jan,Feb,Mar *", ()=>{
//     console.log("Rachel, I can't wait for what our future holds")
// })

 //  using step values
 cron.schedule("*/2 10,15,25 * * * *", ()=>{
    console.log("I think i need to get a sweet pet name for you, my baby Rachel")
 })


