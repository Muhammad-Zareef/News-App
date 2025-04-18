
console.log("Hello World!");

let featureImage = document.querySelector('#feature-image');
let sideFeaturedImg1 = document.querySelector('#side-featured-img1');
let sideFeaturedImg2 = document.querySelector('#side-featured-img2');
let sideFeaturedImg3 = document.querySelector('#side-featured-img3');

let newsImg1 = document.querySelector('#news-img1');
let newsImg2 = document.querySelector('#news-img2');
let newsImg3 = document.querySelector('#news-img3');
let newsImg4 = document.querySelector('#news-img4');
let newsImg5 = document.querySelector('#news-img5');
let newsImg6 = document.querySelector('#news-img6');

function uploadeImages(articles) {
    featureImage.src = `${articles[0].image}`;
    sideFeaturedImg1.src = `${articles[1].image}`;
    sideFeaturedImg2.src = `${articles[2].image}`;
    sideFeaturedImg3.src = `${articles[3].image}`;

    newsImg1.src = `${articles[4].image}`;
    newsImg2.src = `${articles[5].image}`;
    newsImg3.src = `${articles[6].image}`;
    newsImg4.src = `${articles[7].image}`;
    newsImg5.src = `${articles[8].image}`;
    newsImg6.src = `${articles[9].image}`;
}

let newsTitle1 = document.querySelector('#news-title1');
let newsTitle2 = document.querySelector('#news-title2');
let newsTitle3 = document.querySelector('#news-title3');
let newsTitle4 = document.querySelector('#news-title4');
let newsTitle5 = document.querySelector('#news-title5');
let newsTitle6 = document.querySelector('#news-title6');
let newsTitle7 = document.querySelector('#news-title7');
let newsTitle8 = document.querySelector('#news-title8');
let newsTitle9 = document.querySelector('#news-title9');
let newsTitle10 = document.querySelector('#news-title10');

function uploadTitles(articles) {
    newsTitle1.textContent = `${articles[0].title}`;
    newsTitle2.textContent = `${articles[1].title}`;
    newsTitle3.textContent = `${articles[2].title}`;
    newsTitle4.textContent = `${articles[3].title}`;
    newsTitle5.textContent = `${articles[4].title}`;
    newsTitle6.textContent = `${articles[5].title}`;
    newsTitle7.textContent = `${articles[6].title}`;
    newsTitle8.textContent = `${articles[7].title}`;
    newsTitle9.textContent = `${articles[8].title}`;
    newsTitle10.textContent = `${articles[9].title}`;
}

const apiKey = '57e0c4edb06ebe07bc2f0bc5038833fe';
// const apiKey = '9eca228010cb4289a16860fc8d9877db';
// const apiKey = '182b1ca07013422f8261831bfc5a25e8';

const gnewsURL = `https://gnews.io/api/v4/top-headlines?token=${apiKey}&lang=en&max=10`;

const proxyURL = `https://api.allorigins.win/raw?url=${encodeURIComponent(gnewsURL)}`;

let category = "sports";

let url = 'https://gnews.io/api/v4/top-headlines?category=' + category + '&lang=en&country=pak&max=10&apikey=' + apiKey;
// let url = 'https://gnews.io/api/v4/top-headlines?category=' + category + '&lang=en&country=us&max=10&apikey=' + apiKey;

fetch(proxyURL)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        uploadeImages(data.articles);
        uploadTitles(data.articles);
        // data.articles.forEach(article => {});
    })
    .catch(err => console.error('Error:', err))


    //   You must activate your account to use the API. If you did not receive the email to activate your account, you can request a new one here: https://gnews.io/dashboard"
    //   length

    // Platzi Fake Store API
