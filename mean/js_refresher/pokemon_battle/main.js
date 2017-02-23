'use strict';

$(document).ready(function(){
  var game = {
    players: [],
    addPlayer: function(name){
      this.players.push(playerConstructor(name));
    }
  };

  function playerConstructor(name){
    var player = {};
    player.name = name;
    player.card = null;
    player.hand = [];
    player.addCard = function(card){
      player.hand.push(card);
    };
    return player;
  }

  $('.newPlayer').submit(function(e){
    e.preventDefault();
    var name = $(this).children('input').val();
    game.addPlayer(name);
    $('.arena').append('<div class="player' + name + '">' + '<p>' + name + '</p>' + '<p class="pokemon"></p>' + '</div>');
    $(this).children('input').val('');
  });

  $('.pokemonAssign').submit(function(e){
    e.preventDefault();
    var calls = [];
    for (let i = 0; i < game.players.length; i++) {
      let player = game.players[i];
      player.hand = [];
      let random = Math.floor(Math.random() * 151);
      $.ajax({
        url: 'http://pokeapi.co/api/v1/pokemon/' + random,
        type: 'GET',
        success: function(data){
          let name = data.name;
          $('.player' + player.name).children('.pokemon').text('').text(name);
          game.players[i].addCard(data);
        }
      });
    }
  });
  // THS WAY ALLOWS US TO PUT DATA ON THE SCREEN AT ONCE WITH PROMISES
  //$('.pokemonAssign').submit(function(e){
  //  e.preventDefault();
  //  var calls = [];
  //  for (let i = 0; i < game.players.length; i++) {
  //    let player = game.players[i];
  //    player.hand = [];
  //    let random = Math.floor(Math.random() * 151);
  //    calls.push(new Promise((resolve, reject) => {
  //      $.ajax({
  //        url: 'http://pokeapi.co/api/v1/pokemon/' + random,
  //        type: 'GET',
  //        success: function(data){
  //          resolve(data);
  //        }
  //      });
  //    }));
  //  }
  //  Promise.all(calls).then(data =>{
  //    for (let i = 0; i < game.players.length; i++) {
  //      let name = data[i].name;
  //      $('.player' + game.players[i].name).children('.pokemon').text('').text(name);
  //      game.players[i].addCard(data[i]);
  //    }
  //  });
  //});
});
