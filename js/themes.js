    console.log('is this working?');
    $(document).ready(function() {

        if (true) {
            console.log('condition is true');
        } else {
            console.log('this will never execute.');
        }

        var currentTime = new Date().getHours();
                if (0 <= currentTime&&currentTime < 1) {
            console.log("It is between Midnight and 1:00 am");

            $('body').css({
                'background': 'black',
                'color': 'gold', //body text
                'fill': 'gold', //marque
            })
            $('a').css({
              'color': 'white'
            })
            $('nav').css({
              'color': 'rgba(45, 45, 45, .9)' //mobile dropdown nav background
            })
        }
                if (1 <= currentTime&&currentTime < 2) {
            console.log("It is between 1-2 am");

            $('body').css({
                'background': 'black',
                'color': 'silver', //body text
                'fill': 'silver' //marque
            })
            $('a').css({
              'color': 'white'
            })
            $('nav').css({
              'color': 'rgba(45, 45, 45, .9)' //mobile dropdown nav background
            })
        }
                if (2 <= currentTime&&currentTime < 3) {
            console.log("It is between 2-3 am");

            $('body').css({
                'background': 'linear-gradient(lightgray, darkgray)',
                'color': 'whitesmoke', //body text
                'fill': 'black' //marque
            })
            $('a').css({
              'color': 'whitesmoke'
            })
            $('nav').css({
              'color': 'rgba(100, 100, 100, .95)' //mobile dropdown nav background
            })
        }
                if (3 <= currentTime&&currentTime < 4) {
            console.log("It is between 3-4 am");

            $('body').css({
                'background': 'linear-gradient(white, black)',
                'color': 'lightgray', //body text
                'fill': 'lightgray' //marque
            })
            $('a').css({
              'color': 'white'
            })
            $('nav').css({
              'color': 'rgba(100, 100, 100, .9)' //mobile dropdown nav background
            })
        }
                if (4 <= currentTime&&currentTime < 5) {
            console.log("It is between 4-5 am");

            $('body').css({
                'background': '#002E2D',
                'color': 'lightgray', //body text
                'fill': 'tomato' //marque
            })
            $('div.centerLogo').css({
              'color': 'tomato' //logotype
            })
            $('a').css({
              'color': 'whitesmoke'
            })
            $('nav').css({
              'color': 'rgba(51, 88, 87, .9)' //mobile dropdown nav background
            })
        }
                if (5 <= currentTime&&currentTime < 6) {
            console.log("It is between 5-6 am");

            $('body').css({
                'background': 'linear-gradient(linen, tomato, linen)',
                'color': 'linen', //body text
                'fill': 'tomato' //marque
            })
            $('div.centerLogo').css({
              'color': 'tomato' //logotype
            })
            $('a').css({
              'color': 'black'
            })
            $('nav').css({
              'color': 'linen' //mobile dropdown nav background
            })
        }
                if (6 <= currentTime&&currentTime < 7) {
            console.log("It is between 6-7 am");

            $('body').css({
                'background': 'linear-gradient(darkslategray, silver, darkslategray)',
                'color': 'darkslategray', //body text
                'fill': 'mediumaquamarine' //marque
            })
            $('div.centerLogo').css({
              'color': 'mediumaquamarine' //logotype
            })
            $('a').css({
              'color': 'whitesmoke' //links
            })
            $('nav').css({
              'color': 'darkslategray' //mobile dropdown nav background
            })
        }
                if (7 <= currentTime&&currentTime < 8) {
            console.log("It is between 7-8 am");

            $('body').css({
                'background': 'linear-gradient(midnightblue, whitesmoke, midnightblue)',
                'color': 'midnightblue', //body text
                'fill': 'whitesmoke' //marque
            })
            $('div.centerLogo').css({
              'color': 'whitesmoke' //logotype
            })
            $('a').css({
              'color': 'whitesmoke'
            })
            $('nav').css({
              'color': 'midnightblue' //mobile dropdown nav background
            })
        }
                if (8 <= currentTime&&currentTime < 9) {
            console.log("It is between 8-9 am");

            $('body').css({
                'background': 'rgba(235, 235, 235, 1)',
                'color': 'black', //body text
                'fill': 'black' //marque
            })
            $('div.centerLogo').css({
              'color': 'black' //logotype
            })
            $('a').css({
              'color': 'orangered'
            })
            $('nav').css({
              'color': 'rgba(245, 245, 245, .99)' //mobile dropdown nav background
            })
        }
                if (9 <= currentTime&&currentTime < 10) {
            console.log("It is between 9-10am");

            $('body').css({
                'background': 'seashell',
                'color': '#011c40', //body text
                'fill': 'tomato' //marque
            })
            $('div.centerLogo').css({
              'color': 'tomato' //logotype
            })
            $('a').css({
              'color': 'tomato'
            })
            $('nav').css({
              'color': '#011c40' //mobile dropdown nav background
            })
        }
                if (10 <= currentTime&&currentTime < 11) {
            console.log("It is between 10-11 am");

            $('body').css({
                'background': 'linear-gradient(darkslategray, silver, darkslategray)',
                'color': 'darkslategray', //body text
                'fill': 'mediumaquamarine' //marque
            })
            $('div.centerLogo').css({
              'color': 'mediumaquamarine' //logotype
            })
            $('a').css({
              'color': 'white'
            })
            $('nav').css({
              'color': 'darkslategray' //mobile dropdown nav background
            })
        }
                if (11 <= currentTime&&currentTime < 12) {
            console.log("It is between 11:00 am and Noon");

            $('body').css({
                'background': 'linear-gradient(darkslategray, silver, darkslategray)',
                'color': 'darkslategray', //body text
                'fill': 'greenyellow' //marque
            })
            $('div.centerLogo').css({
              'color': 'greenyellow' //logotype
            })
            $('a').css({
              'color': 'white'
            })
            $('nav').css({
              'color': 'rgba(38, 63, 63, .9)' //mobile dropdown nav background
            })
        }
                if (12 <= currentTime&&currentTime < 13) {
            console.log("It is between Noon and 1:00 pm");

            $('body').css({
                'background': 'linear-gradient(silver, darkslategray, silver)',
                'color': 'greenyellow', //body text
                'fill': 'greenyellow' //marque
            })
            $('div.centerLogo').css({
              'color': 'greenyellow' //logotype
            })
            $('a').css({
              'color': 'white'
            })
            $('nav').css({
              'color': 'rgba(38, 63, 63, .9)' //mobile dropdown nav background
            })
        }
                if (13 <= currentTime&&currentTime < 14) {
            console.log("It is between 1-2 pm");

            $('body').css({
                'background': 'linear-gradient(slategray, darkslategray, slategray)',
                'color': 'mediumaquamarine', //body text
                'fill': 'whitesmoke' //marque
            })
            $('div.centerLogo').css({
              'color': 'whitesmoke' //logotype
            })
            $('a').css({
              'color': 'whitesmoke'
            })
            $('nav').css({
              'color': 'rgba(38, 63, 63, .9)' //mobile dropdown nav background
            })
        }
                if (14 <= currentTime&&currentTime < 15) {
            console.log("It is between 2-3 pm");

            $('body').css({
                'background': 'linear-gradient(burlywood, peru, burlywood)',
                'color': 'whitesmoke', //body text
                'fill': 'deeppink' //marque
            })
            $('div.centerLogo').css({
              'color': 'deeppink' //logotype
            })
            $('a').css({
              'color': 'white'
            })
            $('nav').css({
              'color': 'rgba(178, 147, 108, .9)' //mobile dropdown nav background
            })
        }
                if (15 <= currentTime&&currentTime < 16) {
            console.log("It is between 3-4 pm");

            $('body').css({
                'background': '#533118',
                'color': '#ff8c47', //body text
                'fill': '#ff8c47' //marque
            })
            $('div.centerLogo').css({
              'color': '#ff8c47' //logotype
            })
            $('a').css({
              'color': 'white'
            })
            $('nav').css({
              'color': 'rgba(58, 33, 14, .9)' //mobile dropdown nav background
            })
        }
                if (16 <= currentTime&&currentTime < 17) {
            console.log("It is between 4-5 pm");

            $('body').css({
                'background': 'linear-gradient(midnightblue, deeppink, midnightblue)',
                'color': 'black', //body text
                'fill': 'orange' //marque
            })
            $('div.centerLogo').css({
              'color': 'mediumaquamarine' //logotype
            })
            $('a').css({
              'color': 'white'
            })
            $('nav').css({
              'color': 'rgba(45, 45, 45, .9)' //mobile dropdown nav background
            })
        }
                if (17 <= currentTime&&currentTime < 18) {
            console.log("It is between 5-6 pm");

            $('body').css({
                'background': 'linear-gradient(slategray, silver, slategray)',
                'color': 'darkslategray', //body text
                'fill': 'gold' //marque
            })
            $('div.centerLogo').css({
              'color': 'gold' //logotype
            })
            $('a').css({
              'color': 'white'
            })
            $('nav').css({
              'color': 'rgba(90, 102, 115, .9)' //mobile dropdown nav background
            })
        }
                if (18 <= currentTime&&currentTime < 19) {
            console.log("It is between 6-7 pm");

            $('body').css({
                'background': 'linear-gradient(coral, indigo, coral)',
                'color': 'coral', //body text
                'fill': 'coral' //marque
            })
            $('div.centerLogo').css({
              'color': 'coral' //logotype
            })
            $('a').css({
              'color': 'white'
            })
            $('nav').css({
              'color': 'rgba(60, 0, 104, .9)' //mobile dropdown nav background
            })
        }
                if (19 <= currentTime&&currentTime < 20) {
            console.log("It is between 7-8 pm");

            $('body').css({
                'background': 'linear-gradient(midnightblue, deeppink, midnightblue)',
                'color': 'whitesmoke', //body text
                'fill': 'deeppink' //marque
            })
            $('div.centerLogo').css({
              'color': 'deeppink' //logotype
            })
            $('a').css({
              'color': 'white'
            })
            $('nav').css({
              'color': 'rgba(20, 20, 90, .9)' //mobile dropdown nav background
            })
        }
                if (20 <= currentTime&&currentTime < 21) {
            console.log("It is between 8-9 pm");

            $('body').css({
                'background': 'linear-gradient(midnightblue, black)',
                'color': 'whitesmoke', //body text
                'fill': '#A1A1C5' //marque
            })
            $('div.centerLogo').css({
              'color': '#A1A1C5' //logotype
            })
            $('a').css({
              'color': 'white'
            })
            $('nav').css({
              'color': 'rgba(20, 20, 90, .9)' //mobile dropdown nav background
            })
        }
                if (21 <= currentTime&&currentTime < 22) {
            console.log("It is between 9-10 pm");

            $('body').css({
                'background': 'midnightblue',
                'color': 'deepskyblue', //body text
                'fill': 'deeppink' //marque
            })
            $('div.centerLogo').css({
              'color': 'deeppink' //logotype
            })
            $('a').css({
              'color': 'white'
            })
            $('nav').css({
              'color': 'rgba(67, 67, 123, .9)' //mobile dropdown nav background
            })
        }
                if (22 <= currentTime&&currentTime < 23) {
            console.log("It is between 10-11 pm");

            $('body').css({
                'background': '#011c40',
                'color': '#EC7E9C', //body text
                'fill': '#d9043d' //marque
            })
            $('div.centerLogo').css({
              'color': '#d9043d' //logotype
            })
            $('a').css({
              'color': 'white'
            })
            $('nav').css({
              'color': 'rgba(52, 73, 102, .9)' //mobile dropdown nav background
            })
        }
                if (23 <= currentTime&&currentTime < 24) {
            console.log("It is between 11 pm and Midnight");

            $('body').css({
                'background': 'linear-gradient(black, midnightblue)',
                'color': 'silver', //body text
                'fill': 'darkgoldenrod' //marque
            })
            $('div.centerLogo').css({
              'color': 'darkgoldenrod' //logotype
            })
            $('a').css({
              'color': 'white'
            })
            $('nav').css({
              'color': 'rgba(45, 45, 45, .9)' //mobile dropdown nav background
            })
        }


    });
