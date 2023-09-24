// *****Very Important look into it very carefully******

let myYoutubeVideoOne = {
    title: 'Loops in JavaScript',
    videoLength: 15,
    videoCreator: 'Prakash',
    videoDescription: 'This is a video description'
}

let myYoutubeVideoTwo = {
    title: 'Function in JavaScript',
    videoLength: 12,
    videoCreator: 'Prakash',
    videoDescription: 'This is a video description'
}

// console.log(`Hey new video on ${myYoutubeVideo.title} by ${myYoutubeVideo.videoCreator} `);

// myYoutubeVideo.title = "ForEach loop in JavaScript"
// console.log(`Hey new video on ${myYoutubeVideo.title} by ${myYoutubeVideo.videoCreator} `);
// console.log(myYoutubeVideo);


let changeVideoLength = function(myObject) {
    return {
        formatOne: `Time of this video is: ${myObject.videoLength + 2}`,
        formattwo: `Time of this video is: ${myObject.videoLength + 1}`,
    }

}

let addOne = changeVideoLength(myYoutubeVideoOne)

console.log(addOne.formattwo);

console.log(changeVideoLength(myYoutubeVideoTwo))
