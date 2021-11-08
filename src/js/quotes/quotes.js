export default function initializeQuotes() {
  const quoteChanger = document.querySelector('.change-quote');

  generateQuote(true);

  quoteChanger.addEventListener('click', () => generateQuote(false));
}

function getRandomNumber() {
  let num = Math.floor(Math.random() * 7) + 1;

  setIndex(num);

  return num
}

async function generateQuote(isRandom) {
  const quote = document.querySelector('.quote');
  const author = document.querySelector('.author');
  let num = getQuoteIndex(isRandom);
  const quotes = await getQuotes();

  quote.innerHTML = '"' + quotes[num].text + '"';
  author.innerHTML = quotes[num].author;
}

function getQuoteIndex(isRandom) {
  let num;

  if (isRandom) {
    num = getRandomNumber();
  } else {
    num = Number(localStorage.getItem('quoteIndex'));
    num = num == 7 ? 0 : num + 1; 
    setIndex(num);
  }

  return num
}

async function getQuotes() {
  const quotes = ('./js/quotes/rusQuotes.json');

  return await fetch(quotes)
    .then(res => res.json())
}

function setIndex(index) {
  localStorage.setItem('quoteIndex', index);
}