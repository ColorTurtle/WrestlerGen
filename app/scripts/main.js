var avatarLibrary = [
"images/Mask1c.jpg",
"images/Mask2c.jpg",
"images/Mask3c.jpg",
"images/Mask4c.jpg",
"images/Mask5c.jpg"
]

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
]


$('.submit').click(function(){
	console.log('Booya!');
	event.preventDefault();

	// Grab the input data from the form
	var firstname = $('input[name=firstName]').val();
	var lastname = $('input[name=lastName]').val();
	var fightinWords = $('input[name=fightinWords]').val();

	// Gather the input data into a single array
	var wrestlerprofile = new Wrestler (firstname,lastname, fightinWords);

	var profiletmpl = _.template ($('#profiletmpl').text());

	$('.right-content').append(profiletmpl(wrestlerprofile))

});

function Wrestler (firstname, lastname, fightinWords, nickname, avatar){
	this.firstname = firstname;
	this.lastname = lastname;
	this.fightinWords = fightinWords;
	this.nickname = _.sample(fighterNickNames);
	this.avatar = _.sample(avatarLibrary);
};


