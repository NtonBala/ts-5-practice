function PrintMovieInfo(title: string, yearReleased?: number) {
  console.log(`Title: ${title}`);

  // ! When working with optional parameters, a developer has first to check if it contains an actual value
  if (yearReleased) {
    console.log(`Year Released: ${yearReleased}`);
  }
}

PrintMovieInfo('A New Hope', 1977);
