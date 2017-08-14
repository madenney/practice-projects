


$(document).ready(function() {
    var game = new Game();
    game.init();
});


function Game() {

    var deck;
    var players = [];
    var playerCount = 4;
    var suits = ['hearts', 'spades', 'clubs', 'diamonds'];


    this.init = function() {
        createDeck();
        createPlayers();
        deal();
        displayHands();
    };

    function createDeck() {
        for(var i = 0; i < 13; i++) {
            for(var j = 0; j < suits.length; j++) {
                deck.push({
                    number: i,
                    suit: suits[j]
                });
            }
        }
    }

    function createPlayers() {

        for(var i = 0; i < playerCount; i++) {
            players.push({
                id: i,
                hand: []
            });
        }
    }

    function deal() {

        var deckLength = deck.length;
        for(var i = 0; i < deckLength; i++) {
            for(var j = 0; j < players.length; j++) {
                players[i].hand.push(deck.splice(Math.floor(Math.random() * deck.length)));
            }
        }
    }

    function displayHands() {

        for(var i = 0; i < players.length; i++) {
            console.log("Player: " + players[i].id + "  NumberOfCards: " + players[i].hand.length);
            console.log("Hand: ", players[i].hand);
        }
    }
}