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

// Would You Rather Question One
 $("#set1option1").click(function () {
 
	$('input:radio[name=optionsRadiosOne]:nth(0)').attr('checked',true);
	//$('input:radio[name=One]')[0].checked = true;
    });

 $("#set1option2").click(function () {
 
	$('input:radio[name=optionsRadiosOne]:nth(1)').attr('checked',true);
	//$('input:radio[name=optionsRadiosOne]')[1].checked = true;
    });

 $("#set1option3").click(function () {
 
	$('input:radio[name=optionsRadiosOne]:nth(2)').attr('checked',true);
	//$('input:radio[name=optionsRadiosOne]')[2].checked = true;
    });

// Would You Rather Question Two
 $("#set2option1").click(function () {
 
	$('input:radio[name=optionsRadiosTwo]:nth(0)').attr('checked',true);
	//$('input:radio[name=optionsRadiosTwo]')[0].checked = true;
    });

 $("#set2option2").click(function () {
 
	$('input:radio[name=optionsRadiosTwo]:nth(1)').attr('checked',true);
	//$('input:radio[name=optionsRadiosTwo]')[1].checked = true;
    });

 $("#set2option3").click(function () {
 
	$('input:radio[name=optionsRadiosTwo]:nth(2)').attr('checked',true);
	//$('input:radio[name=optionsRadiosTwo]')[2].checked = true;
    });

// Would You Rather Question Three
 $("#set3option1").click(function () {
 
	$('input:radio[name=optionsRadiosThree]:nth(0)').attr('checked',true);
	//$('input:radio[name=optionsRadiosThree]')[0].checked = true;
    });

 $("#set3option2").click(function () {
 
	$('input:radio[name=optionsRadiosThree]:nth(1)').attr('checked',true);
	//$('input:radio[name=optionsRadiosThree]')[1].checked = true;
    });

 $("#set3option3").click(function () {
 
	$('input:radio[name=optionsRadiosThree]:nth(2)').attr('checked',true);
	//$('input:radio[name=optionsRadiosThree]')[2].checked = true;
    });


$('.submit').click(function(){
	console.log('Booya!');

	// Grab the input data from the form
	var firstname = $('input[name=firstName]').val();
	var lastname = $('input[name=lastName]').val();
	var fightinWords = $('input[name=fightinWords]').val();
	var ratherFirst = $('input:radio[name=optionsRadiosOne]:checked').val();
	var ratherSecond = $('input:radio[name=optionsRadiosTwo]:checked').val();
	var ratherThird = $('input:radio[name=optionsRadiosThree]:checked').val();

	// Gather the input data into a single array
	var wrestlerprofile = new Wrestler (firstname, lastname, fightinWords, ratherFirst, ratherSecond, ratherThird);

	var profiletmpl = _.template ($('#profiletmpl').text());

	$('.profile-column').prepend(profiletmpl(wrestlerprofile));

	event.preventDefault();
});


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


