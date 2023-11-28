let articles = document.querySelectorAll('.news-container article');
let currentArticle = 0;

function showArticle(index) {
    articles[currentArticle].classList.remove('active');
    currentArticle = (index + articles.length) % articles.length;
    articles[currentArticle].classList.add('active');
}

function nextArticle() {
    showArticle(currentArticle + 1);
}

function prevArticle() {
    showArticle(currentArticle - 1);
}