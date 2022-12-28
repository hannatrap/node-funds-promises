let favNum = 17;
let baseURL = "http://numbersapi.com";


//Part 1:

//1:
// $.getJSON(`${baseURL}/${favNum}?json`).then(data => {console.log(data);
// });

//2:
// let nums = [2, 4, 6, 8];
// $.getJSON(`${baseURL}/${nums}?json`).then(data => {
//     console.log(data);
//   });

//3:



Promise.all(
    Array.from({ length:4 }, () => { return $.getJSON(`${baseURL}/${favNum}?json`);
    })
).then(facts => {
    facts.forEach( data => $("body").append(`<p>${data.text}</p>`));
});



