const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];



const gamer = streamers.filter (stream => stream.gameMorePlayed === "League of Legends" && stream.age < 30);

console.log(gamer);




//const gamer = streamers.filter ((stream) => {
  //  if (stream.gameMorePlayed == 'League of Legends' && stream.age < 30 ){
    //    return stream;
    //}
//});

//console.log(gamer);