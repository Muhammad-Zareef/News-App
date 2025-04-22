
console.log("Hello World!");

const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');

mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

function renderFeaturedSection(articles, category) {
    let featuredNews = document.querySelector('#featuredNews');
    featuredNews.innerHTML = "";
    featuredNews.innerHTML += `
    <article class="main-featured" onclick="window.open('${articles[0].url}', '_blank')">
        <img src="${articles[0].image}" alt="Featured News">
        <div class="main-featured-content">
            <span class="news-category">${category}</span>
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
        <article class="side-featured-article" onclick="window.open('${articles[i].url}', '_blank')">
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
}

function renderCards(articles, times, category) {
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

let heroSection = document.querySelector('#hero');

const allTabs = document.querySelectorAll('#navMenu a');
allTabs[0].classList.add('active');

function changeCategory(curr) {
    let category = curr.textContent;
    if (curr == "Home" || curr.textContent == "Home") {
        category = "sports";
        heroSection.className = "";
        renderHeroSection();
    } else {
        heroSection.innerHTML = "";
        heroSection.className = "section";
    }
    let url = getURL(category);
    getData(url, category);
    
    allTabs.forEach(tab => tab.classList.remove('active'));
    curr.classList.add('active');
}

renderHeroSection();

function renderHeroSection() {
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

function getURL(category) {
    // const apiKey = '57e0c4edb06ebe07bc2f0bc5038833fe'; // 1st
    const apiKey = '990d1d3ee0ae548225337c78af36c79d'; // 2nd
    // const apiKey = '2bd652ee5055f3315739af5f3761d77d'; // 3rd

    // let category = "business";

    category = category.toLowerCase();

    // let url = 'https://gnews.io/api/v4/top-headlines?category=' + category + '&lang=en&country=pak&max=10&apikey=' + apiKey;
    let url = 'https://gnews.io/api/v4/top-headlines?category=' + category + '&lang=en&country=us&max=10&apikey=' + apiKey;

    const gnewsURL = `https://gnews.io/api/v4/top-headlines?token=${apiKey}&lang=en&max=10`;

    const proxyURL = `https://api.allorigins.win/raw?url=${encodeURIComponent(gnewsURL)}`;

    return url;
}

const URL = getURL("sports");

getData(URL, "Sports");

async function getData(URL, category) {
    let response = await fetch(URL);
    let data = await response.json();
    console.log(data);
    renderFeaturedSection(data.articles, category);
    renderCards(data.articles, 5, category);
}
