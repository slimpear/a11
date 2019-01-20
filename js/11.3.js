const restaurantsList = [
    {
        "name":     "LuLa am Markt",
        "subtitle": "Café",
        "img":      "https://lh5.googleusercontent.com/p/AF1QipMHUGKUTwadfNz-tuMr4OSbuH4ng5IKrqQoLk7w=w284-h160-k-no",
        "address":  "Lauterstraße 14, 12159 Berlin",
        "url":      "http://lula-berlin.de",
        "tel":      "030 12345678"
    },
    {
        "name":     "KAWA Cafe-Deli",
        "subtitle": "Veganes Restaurant",
        "img":      "https://lh5.googleusercontent.com/p/AF1QipOfkiCHPK6KAIMyrGtm-184QCauoIwmO6sTiRPK=w213-h160-k-no",
        "address":  "Moltkestraße 1, 12203 Berlin",
        "url":      "http://www.cafekawa.de",
        "tel":      "030 12345678"
    },
    {
        "name":     "Curry 36",
        "subtitle": "Snack Bar",
        "img":      "https://lh5.googleusercontent.com/p/AF1QipOTqap7-04d-rfhnlI8EgOvXWX_Z73ZE2B3ts2B=w213-h160-k-no",
        "address":  "Mehringdamm 36, 10961 Berlin",
        "url":      "http://www.curry36.de",
        "tel":      "030 12345678"
    },
];

let b = '{'+
    '"restaurantsList": {'+
        '"res1": {'+
            '"name":     "LuLa am Markt",'+
            '"subtitle": "Café",'+
            '"img":      "https://lh5.googleusercontent.com/p/AF1QipMHUGKUTwadfNz-tuMr4OSbuH4ng5IKrqQoLk7w=w284-h160-k-no",'+
            '"address":  "Lauterstraße 14, 12159 Berlin",'+
            '"url":      "http://lula-berlin.de",'+
            '"tel":      "030 12345678"'+
        '},'+
        '"res2": {'+
            '"name":     "KAWA Cafe-Deli",'+
            '"subtitle": "Veganes Restaurant",'+
            '"img":      "https://lh5.googleusercontent.com/p/AF1QipOfkiCHPK6KAIMyrGtm-184QCauoIwmO6sTiRPK=w213-h160-k-no",'+
            '"address":  "Moltkestraße 1, 12203 Berlin",'+
            '"url":      "http://www.cafekawa.de",'+
            '"tel":      "030 12345678"'+
        '},'+
        '"res3": {'+
            '"name":     "Curry 36",'+
            '"subtitle": "Snack Bar",'+
            '"img":      "https://lh5.googleusercontent.com/p/AF1QipOTqap7-04d-rfhnlI8EgOvXWX_Z73ZE2B3ts2B=w213-h160-k-no",'+
            '"address":  "Mehringdamm 36, 10961 Berlin",'+
            '"url":      "http://www.curry36.de",'+
            '"tel":      "030 12345678"'+
        '}'+
    '}'+
'}'

let a = '{'+
    '"restaurantsList": '+
    '['+
        '{'+
            '"name":     "LuLa am Markt",'+
            '"subtitle": "Café",'+
            '"img":      "https://lh5.googleusercontent.com/p/AF1QipMHUGKUTwadfNz-tuMr4OSbuH4ng5IKrqQoLk7w=w284-h160-k-no",'+
            '"address":  "Lauterstraße 14, 12159 Berlin",'+
            '"url":      "http://lula-berlin.de",'+
            '"tel":      "030 12345678"'+
        '},'+
        '{'+
            '"name":     "KAWA Cafe-Deli",'+
            '"subtitle": "Veganes Restaurant",'+
            '"img":      "https://lh5.googleusercontent.com/p/AF1QipOfkiCHPK6KAIMyrGtm-184QCauoIwmO6sTiRPK=w213-h160-k-no",'+
            '"address":  "Moltkestraße 1, 12203 Berlin",'+
            '"url":      "http://www.cafekawa.de",'+
            '"tel":      "030 12345678"'+
        '},'+
        '{'+
            '"name":     "Curry 36",'+
            '"subtitle": "Snack Bar",'+
            '"img":      "https://lh5.googleusercontent.com/p/AF1QipOTqap7-04d-rfhnlI8EgOvXWX_Z73ZE2B3ts2B=w213-h160-k-no",'+
            '"address":  "Mehringdamm 36, 10961 Berlin",'+
            '"url":      "http://www.curry36.de",'+
            '"tel":      "030 12345678"'+
        '}'+
    ']'+
'}'

hashchangeblabla();

window.addEventListener("hashchange", function(e){ 
    hashchangeblabla();
});
  
//window.onhashchange = hashchangeblabla();
// var t = document.querySelector('#intro');
// var clone = document.importNode(t.content, true);
// document.getElementsByTagName("MAIN")[0].appendChild(clone);


function hashchangeblabla() {
    if (location.hash === "#intro" || location.hash === "") {
        console.log("jumping in #intro...");
        jumpIntro();
    } else if (location.hash === "#restaurants") {
        console.log("jumping in #restaurants...");
        jumpRestaurants();
    } else {
        console.log("jumping in #intro... from nowhere...");
        jumpIntro();
    }
}

function onClickIntro() {
    location.hash = "intro";
}

function jumpIntro() {
    $("main").empty();
    var t = document.querySelector('#intro');
    var clone = document.importNode(t.content, true);
    document.getElementsByTagName("MAIN")[0].appendChild(clone);
    location.hash = "intro";
}

function onClickRestaurants() {
    location.hash = "restaurants";
}


function getRestaurants() {
    
    $.get('https://wt1819-queleba.c9users.io/restaurants.json').done(function(data) {
        console.log(data);
        return data;
    }).fail(function(data) {
        console.log('Error: ' + data);
    });
    return null;

    // return resList;
}
function jumpRestaurants() {
    if (false) { //9.2
        $("main").empty();
        var t = document.querySelector('#restaurants');
        var clone = document.importNode(t.content, true);
        document.getElementsByTagName("MAIN")[0].appendChild(clone);
        location.hash = "restaurants";
    } else { //9.2.4
        $("main").empty();
        let data = getRestaurants();
        // let data = JSON.parse(a);

        if (data !== null) {

            let resText = document.createElement('h2');
            resText.innerHTML += "Restaurants";
            document.getElementsByTagName("MAIN")[0].appendChild(resText);
            let cards = document.createElement('div');
            cards.setAttribute("class", "cards");
            // console.log(data.restaurantsList.res1);
            // console.log(data);

            // create and add elements on the fly before adding to "main". Could be done by adding to "main" and getElementById too.
            // data.forEach(res => {
            for (let i=0; i<3; i++) {
                let res = data.restaurantsList[i];
                console.log(res);
                let card = document.importNode(document.querySelector("#cardTemplate").content, true);
                
                card.querySelector('img').src = res.img;
                let h3 = card.querySelector('h3');
                h3.innerHTML += res.name;
                card.querySelector('h3').querySelector('div').textContent = res.subtitle;
                
                let section = card.querySelector('section');
                
                
                let d1 = document.createElement("div");
                d1.innerHTML += (res.address);
                
                let d2 = document.createElement("div");
                let d21 = document.createElement("a");
                d21.setAttribute('href', res.url);
                d21.innerHTML += res.url;
                d2.appendChild(d21);
                
                let d3 = document.createElement("div");
                let d31 = document.createElement("a");
                d31.setAttribute('href', res.tel);
                d31.innerHTML += res.tel;
                d3.appendChild(d31);
                
                section.appendChild(d1);
                section.appendChild(d2);
                section.appendChild(d3);
                
                // card.appendChild(section);
                cards.appendChild(card);
            // });
            // break;
            }
            var clone = document.importNode(cards, true);
            document.getElementsByTagName("MAIN")[0].appendChild(clone);
            //location.hash = "restaurants";
        }
    }
        
}
    
