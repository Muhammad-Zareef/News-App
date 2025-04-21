
console.log("Hello World!");

function generateCard(articles, times, category) {
    let featuredNews = document.querySelector('#featuredNews');
    featuredNews.innerHTML = "";
    featuredNews.innerHTML += `
        <article class="main-featured">
            <img src="${articles[0].image}" alt="Featured News">
            <div class="main-featured-content">
                <span class="news-category">Politics</span>
                <h2 class="news-title">${articles[0].title}</h2>
                <div class="news-meta">
                    <span>By ${articles[0].source.name}</span>
                    <span>2 hours ago</span>
                </div>
            </div>
        </article>
        <div class="side-featured" id="sideFeatured">
        </div>
    `;
    let sideFeatured = document.getElementById('sideFeatured');
    sideFeatured.innerHTML = "";
    for(let i = 1; i <= 3; i++) {
        sideFeatured.innerHTML += `
        <article class="side-featured-article">
            <div class="side-featured-img">
                <img src="${articles[i].image}" alt="Tech News">
            </div>
            <div class="side-featured-content">
                <span class="news-category">${category}</span>
                <h3 class="news-title">${articles[i].title}</h3>
            </div>
        </article>
        `;
    }
    let newsGrid = document.querySelector('#news-grid');
    newsGrid.innerHTML = "";
    for(let i = 4; i <= 9; i++) {
    newsGrid.innerHTML += `
    <article class="news-card" onclick="window.open('${articles[i].url}', '_blank')">
        <div class="news-img">
            <img src="${articles[i].image}" alt="News-Image">
        </div>
        <div class="news-content">
            <span class="news-category">${category}</span>
            <h3 class="news-title">${articles[i].title}</h3>
            <p class="news-excerpt">${articles[i].description}</p>
            <div class="news-meta">
                <span>By ${articles[i].source.name}</span>
                <span>5 hours ago</span>
            </div>
        </div>
    </article>
    `;
    }
}

// const apiKey = '57e0c4edb06ebe07bc2f0bc5038833fe'; // 1st
// const apiKey = '990d1d3ee0ae548225337c78af36c79d'; // 2nd
const apiKey = '2bd652ee5055f3315739af5f3761d77d'; // 3rd
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
        generateCard(data.articles, 9, 'Sports');
        // data.articles.forEach(article => {});
    })
    .catch(err => console.error('Error:', err))

    //   You must activate your account to use the API. If you did not receive the email to activate your account, you can request a new one here: https://gnews.io/dashboard"
    //   length

    // Platzi Fake Store API

    changeCategory('Home');

function changeCategory(curr) {
    if (curr == "Home" || curr.textContent == "Home") {
        let heroSection = document.querySelector('#hero');
        heroSection.innerHTML = `
        <section class="hero" id="hero">
        <div class="container">
            <div class="hero-content">
                <h1>Stay Informed with the Latest News</h1>
                <p>Get real-time updates on global events, business, technology, and more. Your trusted source for accurate and timely information.</p>
                <a href="#" class="btn">Subscribe Now</a>
            </div>
        </div>
    </section>
    `;
    }
    let category = curr.textContent;
    // generateCard(data.category, 1, category);
}

