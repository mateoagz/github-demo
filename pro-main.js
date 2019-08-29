var playPause = anime({
	targets:"div.box",
	translateX:[
		{ value: 200, duration:500},
		{ value:0, duration:800}
	],
	//rotate:'1turn',
	rotate:{
		value: '1turn',
		easing: 'easeInOutSine'
	},
	opacity:'0.7',
	backgroundColor:'#000',// only CamelCase
	delay: function(el,i,l){ return i * 1000},
	autoplay: false,
	loop: true
});

//playPause.play(); funciones predefinadas por la API
//playPause.pause();
document.querySelector('#boxes .play').onclick = playPause.play;
document.querySelector('#boxes .pause').onclick = playPause.pause;
