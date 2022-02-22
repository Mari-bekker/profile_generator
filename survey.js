const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :): ', (answer1) => {
  rl.question('What\'s an activity you like doing? ', (answer2) => {
    rl.question('What do you listen to while doing that? ', (answer3) => {
      rl.question('Which meal is your favourite? ', (answer4) => {
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer5) => {
          rl.question('Which sport is your absolute favourite? ', (answer6) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer7) => {
              console.log(` My name is ${answer1} and I enjoy ${answer2} and like to listen to ${answer3} while doing that. ${answer4} is my favourite meal, the best part of which is ${answer5}. ${answer6} is my favourite sport. And my secret, not so secret superpower is ${answer7}`);
              rl.close();
            });
          });
        });
      });
    });
  });
});