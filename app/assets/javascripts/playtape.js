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


var Playtape = React.createClass({

  getInitialState: function() {
    var track_urls = document.getElementsByClassName('track_identifier');
    var current_position = 0;
    var current_url = track_urls[current_position];
    return { urls: track_urls, pos: current_position, url: current_url };
  },

  play: function play() {

      // // if you have an api stream url you can just play it like that
      // scPlayer.play({streamUrl: 'https://api.soundcloud.com/tracks/185533328/stream'});

      // OR in other cases you need to load TRACK and resolve it's data

      var track = this.state.url.innerHTML
      

      scPlayer.resolve(track, function (err, track) {
          // do smth with track object
          // e.g. display data in a view etc.
          // console.log(track); 
          scPlayer.stop();
          // once track is loaded it can be played
          scPlayer.play();
          // console.log(scPlayer._track.title);

          // stop playing track and keep silence
          // scPlayer.pause();
          scPlayer.on('timeupdate', function (audio) {
              // console.log(scPlayer.audio.currentTime);
              // console.log(scPlayer.audio.duration);
          });

          scPlayer.on('ended', function (audio) {
            // this.state.pos +1
          });
      });

  },
  pause: function pause() {

      // // if you have an api stream url you can just play it like that
      // scPlayer.play({streamUrl: 'https://api.soundcloud.com/tracks/185533328/stream'});

      // OR in other cases you need to load TRACK and resolve it's data
      scPlayer.pause();
  },
  next_track: function () {
    var pos = this.state.pos + 1;
    var url = this.state.urls[pos].innerHTML
    var urls = this.state.urls
    this.replaceState({url: url, pos: pos, urls: urls});
    console.log(this.state.pos);
    scPlayer.resolve(url, function (err, track) {
        // do smth with track object
        // e.g. display data in a view etc.
        // console.log(track); 
        scPlayer.stop();
        // once track is loaded it can be played
        scPlayer.play();
        // console.log(scPlayer._track.title);

        // stop playing track and keep silence
        // scPlayer.pause();
        scPlayer.on('timeupdate', function (audio) {
            // console.log(scPlayer.audio.currentTime);
            // console.log(scPlayer.audio.duration);
        });

        scPlayer.on('ended', function (audio) {
          // this.state.pos +1
        });
    });
    
    console.log(this.state.url);
  },
  prev_track: function () {
    var pos = this.state.pos - 1;
    var url = this.state.urls[pos].innerHTML
    var urls = this.state.urls
    this.replaceState({url: url, pos: pos, urls: urls});
    scPlayer.resolve(url, function (err, track) {
        scPlayer.stop();
        scPlayer.play();
        scPlayer.on('timeupdate', function (audio) {
            // todo: progress bar
        });

        scPlayer.on('ended', function (audio) {
          // todo: this.state.pos +1
        });
    });
    console.log(pos);
  },
  render: function() {
    var nextButton;
    var prevButton;

    if (this.state.pos < this.state.urls.length - 1) { 
      nextButton = <button id='next' onClick={this.next_track}>next</button>;
    }
    if (this.state.pos > 0) { 
      prevButton = <button id='prev' onClick={this.prev_track}>prev</button>;
    }

      return (
        <div id='controls'>
          {prevButton}
          <button id='play' onClick={this.play}>
            Play
          </button>
          <button id='pause' onClick={this.pause}>
            Pause
          </button>
          {nextButton}
        </div>
        );
  }
});
React.render(
  <Playtape />,
  document.getElementById('controls')
);