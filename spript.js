'use strict';

// alert('Hello');

// const result = confirm('Do you like apples?');
// console.log(result);

// const answer = prompt('Вам есть 18?', '18');
// console.log(answer);

// const answers = [];

// answers[0] = prompt('Как ваши дела?', '');
// answers[1] = prompt('Что делаете?', '');
// answers[2] = prompt('Какие у вас хобби?', '');

// document.write(answers);

// ОПЕРАТОРЫ

// console.log('array' + '- object');
// console.log( 4 + '- object');
// console.log( 4 + + '5');

// let incr = 10,
//     decr = 10;

// console.log(++incr);
// console.log(--decr);

// console.log(5%2);
// console.log(8%2);


// console.log(2*8 === 9);
// console.log(2*4 === 8);
// console.log(2*4 === '8');
// console.log(2*4 == '8');


// const isChecked = true,
//       isClose = false;

// console.log(isChecked && isClose);
// console.log(isChecked || isClose);
// console.log(!isChecked || isClose);


const numberOfFilms = +prompt('How many films have your watched?');


const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
   april: false
};


for (let i =0; i < 2; i++) {
   const lastWatchedFilm = prompt('Can you name any film you watched?'),
         FilmRating = prompt('How can you rate it?');
   
   if (lastWatchedFilm != null && FilmRating != null && 
      lastWatchedFilm != '' && FilmRating != '' && lastWatchedFilm.length < 50) {
         personalMovieDB.movies[lastWatchedFilm] = FilmRating;
      } else {
         i--;
         alert('Answer the questions, please');
      }
      
}

if (personalMovieDB.count < 10) {
   console.log('You did not watch a lot of movies');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <30 ) {
   console.log('You are an ordinary spectator');
} else if (personalMovieDB.count >= 30) {
   console.log ('You are a cinephile');
} else {
   console.log('Error occured');
}

console.log(personalMovieDB);