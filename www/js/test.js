async function test() {
  let movies = await Movie.find();
  console.log(movies);
}
test();