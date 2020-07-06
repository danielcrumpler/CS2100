var app = new Vue({
    el: '#app',
    data: {
        projects1302: [{
           id: 1,
           url: "./projects/CS2Project2DanielCrumpler.zip",
           altText: "A Java Casino",
           image: "./images/blackjack_project_picture.png",
           pdf: "./pdfs/project2.pdf"
        }], 

        projects2100: [{
           id: 1,
           url: "./projects/calculator/index.html",
           altText: "Simple Calculator",
           image: "./images/calculator_picture.png",
        }, {
            id: 2,
            url: "./projects/douglasville_swim/index.html",
            altText: "Douglasville Swim",
            image: "./images/douglasville_swim_picture.png",
        }],

        projectsnon: [{
           id: 1,
           url: "./projects/cwb/index.html",
           altText: "Weight and Balance Calculator for Cessna 172",
           image: "./images/cwb_picture.png",
        }],  
    },
});
