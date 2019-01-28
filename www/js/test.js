async function test() {
  let programs = await Program.find();
  console.log(programs);
}
test();