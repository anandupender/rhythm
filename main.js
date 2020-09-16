
var bpm = 60;
var beat = 60/bpm;

var sampler = new Tone.Sampler({
	urls: {
		"C4": "C4.mp3"
	},
	release: 1,
	baseUrl: "https://tonejs.github.io/audio/salamander/",
}).toDestination();

var sampler2 = new Tone.Sampler({
	urls: {
		"C4": "C4.mp3"
	},
	release: 1,
	baseUrl: "https://tonejs.github.io/audio/salamander/",
}).toDestination();

var sampler3 = new Tone.Sampler({
	urls: {
		"C4": "C4.mp3"
	},
	release: 1,
	baseUrl: "https://tonejs.github.io/audio/salamander/",
}).toDestination();

var sampler4 = new Tone.Sampler({
	urls: {
		"C5": "C5.mp3"
	},
	release: 1,
	baseUrl: "https://tonejs.github.io/audio/salamander/",
}).toDestination();

var keys = [["C4", "D#4", "F4", "B5"],["D4", "F#4", "A4", "D5"],["E4", "G#4", "B4", "E5"],["F4", "A4", "C4", "F5"] ];
var currKey = 0;

document.querySelector('.start-button')?.addEventListener('click', async () => {
    await Tone.start()
    console.log('audio is ready')

    const loopA = new Tone.Loop(time => {
        var checkKeyChange = Math.floor(Math.random() * 10) + 1;
        console.log(checkKeyChange);
        if(checkKeyChange >= 9){
          currKey =   Math.floor(Math.random() * keys.length);
        }
        currKey = 0;

        var random = Math.floor(Math.random() * 2)+1;
        subdivide(time,random, keys[currKey][0]);

        var random2 = Math.floor(Math.random() * 4)+1;
        subdivide2(time,random2, keys[currKey][1]);

        var random3 = Math.floor(Math.random() * 6)+1;
        subdivide3(time,random3, keys[currKey][2]);

        var random4 = Math.floor(Math.random() * 2)+1;
        subdivide4(time,random4, keys[currKey][3]);

    }, beat).start(0);

    // Tone.Transport.scheduleRepeat(function(time){

    //     var random2 = Math.floor(Math.random() * 4)+1;
    //     random2 = 4;
    //     subdivideTest(time,random2);

    // }, beat)

    Tone.Transport.start()
})

var wait = .1;
var loop;

function subdivideTest(time, interval){

    var iter = 0;
    loop = new Tone.Loop(function(time){
        document.querySelector("#second-4").children.item(iter).style.backgroundColor = "red";
        iter++;
        if(iter >= 4){
            iter = 0;
        }
    }, beat/interval).start(0)
    loop.iterations = 5;

    // Tone.Draw.schedule(function(){
    //     document.querySelector("#second-4").children.item(0).style.backgroundColor = "#ccc";
    // }, time + 0/interval*beat + wait)

    for(var i = 0; i < interval;i++){
        // Tone.Transport.schedule(function(time){
        //     sampler2.triggerAttackRelease("E4", .1, time + i/interval*beat);
        //     console.log(i);
        // },time + i/interval*beat)   
        console.log(i);
        sampler2.triggerAttackRelease("E4", .1, time + i/interval*beat);

        // Tone.Draw.schedule(function(i){
        //     document.querySelector("#second-4").children.item(1).style.backgroundColor = "red";
        // }, time + 1/interval*beat)
        // Tone.Draw.schedule(function(i){
        //     document.querySelector("#second-4").children.item(1).style.backgroundColor = "#ccc";
        // }, time + 1/interval*beat + wait)

        // Tone.Draw.schedule(function(i){
        //     document.querySelector("#second-4").children.item(2).style.backgroundColor = "red";
        // }, time + 2/interval*beat)
        // Tone.Draw.schedule(function(i){
        //     document.querySelector("#second-4").children.item(2).style.backgroundColor = "#ccc";
        // }, time + 2/interval*beat + wait)

        // Tone.Draw.schedule(function(i){
        //     document.querySelector("#second-4").children.item(3).style.backgroundColor = "red";
        // }, time + 3/interval*beat)
        // Tone.Draw.schedule(function(i){
        //     document.querySelector("#second-4").children.item(3).style.backgroundColor = "#ccc";
        // }, time + 3/interval*beat + wait)
    }
}

function draw(time, interval){
    var elementName = "#second-"+interval;
    var element = document.querySelector(elementName);
    var wait = .2;
    // console.log(children);
    Tone.Draw.schedule(function(){
        document.querySelector("#second-4").children.item(0).style.backgroundColor = "red";
    }, time + 0/interval*beat)
    Tone.Draw.schedule(function(){
        document.querySelector("#second-4").children.item(0).style.backgroundColor = "#ccc";
    }, time + 0/interval*beat + wait)

    Tone.Draw.schedule(function(){
        document.querySelector("#second-4").children.item(1).style.backgroundColor = "red";
    }, time + 1/interval*beat)
    Tone.Draw.schedule(function(){
        document.querySelector("#second-4").children.item(1).style.backgroundColor = "#ccc";
    }, time + 1/interval*beat + wait)

    Tone.Draw.schedule(function(){
        document.querySelector("#second-4").children.item(2).style.backgroundColor = "red";
    }, time + 2/interval*beat)
    Tone.Draw.schedule(function(){
        document.querySelector("#second-4").children.item(2).style.backgroundColor = "#ccc";
    }, time + 2/interval*beat + wait)


    Tone.Draw.schedule(function(){
        document.querySelector("#second-4").children.item(3).style.backgroundColor = "red";
    }, time + 3/interval*beat)
    Tone.Draw.schedule(function(){
        document.querySelector("#second-4").children.item(3).style.backgroundColor = "#ccc";
    }, time + 3/interval*beat + wait)
}


function subdivide(time, interval, key){
    for(var i = 0; i < interval;i++){
        sampler.triggerAttackRelease(key, .8, time + i/interval*beat);
    }
}

function subdivide2(time, interval, key){
    for(var i = 0; i < interval;i++){
        sampler2.triggerAttackRelease(key, .8, time + i/interval*beat);
    }
}

function subdivide3(time, interval, key){
    for(var i = 0; i < interval;i++){
        var random = Math.random();
        if(random > .8){
            sampler3.triggerAttackRelease(key, .8, time + i/interval*beat);
        }
    }
}

function subdivide4(time, interval, key){
    for(var i = 0; i < interval;i++){
        sampler4.triggerAttackRelease(key, .8, time + i/interval*beat);
    }
}