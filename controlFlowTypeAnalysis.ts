function GetReview(title: string): string | number {
  if (title === 'A New Hope') {
    return 'An instant classic!';
  } else {
    return Math.floor(Math.random() * 10);
  }
}

const movieTitle: string = 'The Empire Strikes Back';

let movieReview: string | number = GetReview(movieTitle);

console.log(`Movie title: ${movieTitle}`);

// ! Here movieReview is union type: string | number
if (typeof movieReview === 'string') {
  // ! Here movieReview is of type string
  console.log(`Review: ${movieReview}`);
} else {
  // ! Here movieReview is of type number
  console.log(`Rating: ${movieReview}/10`);
}
