const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/leaderboard');
var db = mongoose.connection;

db.on('error', (err) => {
  console.log('connection error', err);
});
db.once('open', () => {
  console.log('mongodb connected =========//')
})

let Schema = mongoose.Schema;

var leaderboardSchema = new Schema({
  seed: String,
  leaderboard: Array
});

var Leaderboard = mongoose.model('Leaderboard', leaderboardSchema);


const save = (dataObj, cb) => {
  console.log('dataObj', dataObj);
  Leaderboard.find({ seed }, (err, data) => {
    console.log('Leaderboard.find cb ran')
    console.log('data', data)
    if (err) {
      console.log('err', err)
    } else if (data === undefined) {
      const leaderboardDoc = new Leaderboard({ seed, collection })
      console.log('data undefined')
    } else {
      console.log('data is defined')
    }
  })
}



const getStoredRepos = (cb) => {
  console.log('getStoredRepos ran')

}

module.exports = {
  save,
  getStoredRepos
};
