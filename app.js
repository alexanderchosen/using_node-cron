const cron = require("node-cron")

// The * are called CRON STRINGS. Each one represent a time.
// From LHS, the first * represents seconds and is optional, they can be represented with */0-59 to represents 60 seconds in a minute
//  the next * represents minutes, they can be represented with */ 0-59 which shows that we have just 60 minutes in an hour,
//  the next * represents 
cron.schedule("* * * * * *", ()=>{
    console.log("I'm in love with racheal !")
})
