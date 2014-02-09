var avatarLibrary = [
"images/Mask1c.jpg",
"images/Mask2c.jpg",
"images/Mask3c.jpg",
"images/Mask4c.jpg",
"images/Mask5c.jpg"
];

var fighterNickNames = [
	"'The Syntax Snake'",
	"'The Tech Terminator'",
	"'El Diablo Div'",
	"'The Crypt Scrypter'",
	"'The Hell-vetica Raiser'",
	"'The jQuery Inquisitioner'",
	"'The JavaScript Crusher'",
	"'The Parsing Pulverizer'",
	"'The Underscorcher'",
	"'The AsSASSin'",
	"'The Terror Error'",
	"'The Git Grabber'",
	"'The Cunning Container'",
	"'The Looping Lunatic'"
];

// Would You Rather Question One
 $('.jsQuestionOne').click(function() {
	$('input[name=wouldYouRatherOne]:checked', '#jsFighterForm').val()
    });

// Would You Rather Question Two
 $('.jsQuestionTwo').click(function() {
	$('input[name=wouldYouRatherTwo]:checked', '#jsFighterForm').val()
    });

// Would You Rather Question Three
 $('.jsQuestionThree').click(function() {
	$('input[name=wouldYouRatherThree]:checked', '#jsFighterForm').val()
    });





$('.submit').click(function(){
	console.log('Booya!');

	// Grab the input data from the form
	var firstname = $('input[name=firstName]').val();
	var lastname = $('input[name=lastName]').val();
	var fightinWords = $('input[name=fightinWords]').val();
	var ratherFirst = $('input[name=wouldYouRatherOne]').val();
	var ratherSecond = $('input[name=wouldYouRatherTwo]').val();
	var ratherThird = $('input[name=wouldYouRatherThree]').val();

	// Gather the input data into a single array via the constructor
	var wrestlerprofile = new Wrestler (firstname, lastname, fightinWords, ratherFirst, ratherSecond, ratherThird);

	var wrestlerTemplate = _.template ($('#wrestlerTemplate').text());

	$('.profile-column').prepend(wrestlerTemplate(wrestlerprofile));

	$('#jsFighterForm').trigger("reset");

	// event.preventDefault();
});

// Constructor
function Wrestler (firstname, lastname, fightinWords, nickname, avatar, ratherFirst, ratherSecond, ratherThird) {
	this.firstname = firstname;
	this.lastname = lastname;
	this.fightinWords = fightinWords;
	this.nickname = _.sample(fighterNickNames);
	this.avatar = _.sample(avatarLibrary);
	this.ratherFirst = ratherFirst;
	this.ratherSecond = ratherSecond;
	this.ratherThird = ratherThird;
};
