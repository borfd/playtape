import React from 'react';

// to load PLAYLIST and resolve it's data
// scPlayer.resolve('http://soundcloud.com/jxnblk/sets/yello', function (err, playlist) {
//     // do smth with array of `playlist.tracks` or playlist's metadata
//     // e.g. display playlist info in a view etc.
//     console.log(playlist);

//     // once playlist is loaded it can be played
//     scPlayer.play();

//     // for playlists it's possible to switch to another track in queue
//     // e.g. we do it here when playing track is finished 
//     scPlayer.on('ended', function () {
//         scPlayer.next();
//     });

//     // play specific track from playlist by it's index
//     scPlayer.play({playlistIndex: 2});
// });

var SoundCloudAudio = require('soundcloud-audio');
var scPlayer = new SoundCloudAudio('29a02c386427f70233fd17a8f38cb051');


var Sound = React.createClass({

  getInitialState: function() {
    return { url: document.getElementsByClassName('track_identifier'), pos: 0 };
  },

  play: function () {

      // // if you have an api stream url you can just play it like that
      // scPlayer.play({streamUrl: 'https://api.soundcloud.com/tracks/185533328/stream'});

      // OR in other cases you need to load TRACK and resolve it's data
      var track = this.state.url[this.state.pos].innerHTML
      console.log(track)

      scPlayer.resolve(track, function (err, track) {
          // do smth with track object
          // e.g. display data in a view etc.
          console.log(track); 

          // once track is loaded it can be played
          scPlayer.play();

          // stop playing track and keep silence
          // scPlayer.pause();
          scPlayer.on('timeupdate', function (audio) {
              console.log(scPlayer.audio.currentTime);
          });
      });

  },
  pause: function () {

      // // if you have an api stream url you can just play it like that
      // scPlayer.play({streamUrl: 'https://api.soundcloud.com/tracks/185533328/stream'});

      // OR in other cases you need to load TRACK and resolve it's data
      scPlayer.pause();
  },
  render: function() {
      return (
        <div id='controls'>
          <button id='play' onClick={this.play}>
            Play
          </button>
          <button id='pause' onClick={this.pause}>
            Pause
          </button>
        </div>
        );
  }
});
React.render(
  <Sound />,
  document.getElementById('controls')
);