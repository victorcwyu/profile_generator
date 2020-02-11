const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (name) => {
  rl.question('What is your favourite pizza topping? ', (pizza) => {
    rl.question('What is your favourite colour? ', (colour) => {
      rl.question('What do you think is the best pop? ', (pop) => {
        rl.question('What is your favourite beer? ', (beer) => {
          rl.question('What is your favourite season? ', (season) => {
            rl.question('What month were you born in? ', (month) => {
              rl.close();
              console.log(`${name} loves ${pizza} on their pizza, loves the colour ${colour}, thinks ${pop} is the best pop, but only drinks ${beer}.  ${name}'s favourite season is ${season} and was born in ${month}!`);
            });
          });
        });
      });
    });
  });
});