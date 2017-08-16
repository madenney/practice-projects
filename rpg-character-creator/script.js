/**
 * Created by Matt on 8/16/2017.
 */

var statsOptions = ["dexterity", "strength", "intelligence", "charisma", "constitution", "willpower"];
var startingItems = ['helmet', 'chest armor', 'leg armor', 'hand armor', 'necklace', '2 rings', 'sword', 'shield'];


$(document).ready(function() {
   var game = new Game();
});



function Game() {

    var character = new Character();

}

function Character() {

    var stats = {};
    var name;
    var items = [];

    init();

    function init() {

        // Create name
        for(var i = 0; i < statsOptions.length; i++) {
            stats[statsOptions[i]] = diceRolls(6, 3);
        }
        console.log(stats);


        $.ajax({
            url: 'https://randomuser.me/api/',
            dataType: 'json',
            success: function(data) {
                name = data.results['0'].name.first+ " " + data.results['0'].name.last;
                displayCharacter();
            }
        });

        items.push(startingItems[Math.floor(Math.random() * startingItems.length)]);
    }

    function displayCharacter(){

        console.log("Character: ");
        console.log("Name: ", name);
        console.log("Starting Item: ", items);
        console.log("Stats: ", stats);

    }

}

function diceRolls(sides, numberOfRolls) {

    var value = 0;
    for(var i = 0; i < numberOfRolls; i++) {
        value += Math.floor(Math.random() * sides + 1);
    }
    return value;
}