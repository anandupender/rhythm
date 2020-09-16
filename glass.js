// const synthA = new Tone.FMSynth().toDestination();
// const synthB = new Tone.FMSynth().toDestination();
var bpmGlass = 100;
var beatGlass = 60/bpmGlass;

var sampler1 = new Tone.Sampler({
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


var keys = [["C4", "E4", "G4", "C5"],["D4", "F#4", "A4", "D5"],["E4", "G#4", "B4", "E5"],["F4", "A4", "C4", "F5"] ];
var fourNotes = ["C4", "E4", "G4", "C5"];
var sixNotes = ["C4", "E4", "G4", "C5","G4","E4"];

document.querySelector('.start-glass-button')?.addEventListener('click', async () => {
    await Tone.start()
    console.log('audio is ready')

    const loopB = new Tone.Loop(time => {

        var random = Math.floor(Math.random() * 2);

        console.log(random);
        if(random){
            subdivideGlass(time,4, fourNotes);
        }else{
            subdivideGlass(time,6, sixNotes);
        }

    }, beatGlass).start(0);

    Tone.Transport.start()
})

var wait = .1;
var loop;

function subdivideGlass(time, interval, notes){
    var randomFlip = Math.floor(Math.random() * 2);

    for(var i = 0; i < interval;i++){
        sampler.triggerAttackRelease(notes[i], .1, time + i/interval*beatGlass);
    }
}