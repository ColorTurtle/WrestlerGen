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


$('.submit').click(function(){
	// console.log('Booya!');

	// Grab the input data from the form
	var firstname = $('input[name=firstName]').val();
	var lastname = $('input[name=lastName]').val();
	var fightinWords = $('input[name=fightinWords]').val();
	var ratherFirst = $('input[name=wouldYouRatherOne]:checked').val();
	var ratherSecond = $('input[name=wouldYouRatherTwo]:checked').val();
	var ratherThird = $('input[name=wouldYouRatherThree]:checked').val();
	// console.log('Inputs grabbed');
	console.log(ratherFirst);
	console.log(ratherSecond);
	console.log(ratherThird);

	// Gather the input data into a single array via the constructor
	var wrestlerprofile = new Wrestler(firstname, lastname, fightinWords, ratherFirst, ratherSecond, ratherThird);
	console.log(wrestlerprofile);

	var wrestlerTemplate = _.template($('#wrestlerTemplate').text());
	// console.log('connecting the Constructor to template.');
	console.log(wrestlerTemplate)

	$('.profile-column').prepend(wrestlerTemplate(wrestlerprofile));

	$('.jsFighterForm').trigger("reset");

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
