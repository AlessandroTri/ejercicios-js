const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

// toLowerCase es para cambiar la primera letra en minuscula

const legends = streamers.filter(streamer => {
const toReturn = streamer.gameMorePlayed.
toLowerCase().includes("legends");

if (toReturn && streamer.age > 35){
  streamer.gameMorePlayed = streamer.
  gameMorePlayed.toUpperCase();
}

return toReturn;
});
console.log(legends);







 //otra opcion
//const gamer = streamers.filter((stream) => {
  //if (stream.gameMorePlayed.includes('Legends')) {
    //if (stream.age > 35) {
      //stream.gameMorePlayed = stream.gameMorePlayed.toUpperCase()
    //}
    //return stream;
//}
//});

//console.log(gamer);
