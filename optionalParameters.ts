function PrintMovieInfo(title: string, yearReleased?: number) {
  console.log(`Title: ${title}`);

  if (yearReleased) {
    console.log(`Year Released: ${yearReleased}`);
  }
}

PrintMovieInfo('A New Hope', 1977);
