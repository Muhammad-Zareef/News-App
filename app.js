
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
                <span>${new Date(articles[0].publishedAt).toDateString()}</span>
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

function renderCards(articles, category) {
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
                <span>${new Date(articles[i].publishedAt).toDateString()}</span>
            </div>
        </div>
    </article>
    `;
    }
}

let heroSection = document.querySelector('#hero');

const allTabs = document.querySelectorAll('#navMenu a');
allTabs[0].classList.add('active');

let cat = "Sports";
let count = "us";

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
    let k = getKey(2);
    let url = getURL(category, count, k);
    getData(url, category.slice(0,1).toUpperCase() + category.slice(1));
    cat = category;
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

function getKey(num) {
    const apiKeys = [
        '5a4578c67778a767a69a09ee5d31f4c1',
        '8598e46c17f0f84fa83416b68fb80064',
        '92fd1b6f572f0210fd0cb313e0a4d6a9',
        '3a65f28e0ea1151cc16e2f50805543f7'
    ];
    return apiKeys[num];
}

function getURL(category, country, apiKey) {
    cat = category;
    category = category.toLowerCase();

    let url = 'https://gnews.io/api/v4/top-headlines?category=' + category + '&lang=en&country=' + country + '&max=10&apikey=' + apiKey;

    return url;
}

let key = getKey(0);

const URL = getURL("sports", count, key);

getData(URL, cat.slice(0,1).toUpperCase() + cat.slice(1));

async function getData(URL, category) {
    try {
        const response = await fetch(URL);
        const data = await response.json();
        renderFeaturedSection(data.articles, category);
        renderCards(data.articles, category);
    } catch (error) {
        console.log('Error: ', error);
    }
}

function handleCountryChange(select) {
    let value = select.value;
    for(let i = 0; i < allTabs.length; i++) {
        if (allTabs[i].classList.value == "active") {
            cat = allTabs[i].innerHTML;
        }
    }
    if (cat == "Home") {
        cat = "sports";
    }
    count = value;
    let apiKey = getKey(1);
    let url = getURL(cat, value, apiKey);
    getData(url, cat.slice(0,1).toUpperCase() + cat.slice(1));
}
