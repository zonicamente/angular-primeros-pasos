interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
};

interface Details {
    author:string;
    year:number;
};

const audioPlayer: AudioPlayer={
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: 'Ed Sheeran',
        year: 2015
    }
};

const {
    song:originalSong,
    songDuration:duration,
    details
} = audioPlayer;
const {author} = details;

// console.log('Song: ', originalSong);
// console.log('Duracion: ', duration);
// console.log('Autor: : ', author);
const [,,trunks='No hay peleador']: string[] = ['Goku','Vegeta','Trunks'];

console.log(trunks);
export {};