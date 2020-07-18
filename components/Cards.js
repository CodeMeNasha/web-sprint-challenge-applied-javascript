// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.


const articles = document.querySelector(".cards-container");
axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then( response => {
        console.log(response);
        for(const articleTopic in response.data.articles) {
          response.data.articles[articleTopic].forEach(article => {
              articles.appendChild(articleMaker(article));
              console.log(article.authorName)        
          })  
        }
    })
    .catch( err => {
        console.log(err);
    })

    function articleMaker(item) {
        const oneCard = document.createElement("div");
        const oneHeadline = document.createElement("div");
        oneHeadline.textContent = item.headline;

        const oneAuthor = document.createElement("div");
        const imgDiv = document.createElement("div");
        const oneImg = document.createElement("img");
        oneImg.src = item.authorPhoto;
        const oneName = document.createElement("span");
        oneName.textContent = item.authorName;

        oneCard.classList.add("card");
        oneHeadline.classList.add("headline");
        oneAuthor.classList.add("author");
        oneImg.classList.add("img-container");

       // const cardsContainer = document.querySelector("cards-container")  
        //cardsContainer.appendChild(oneCard);
        oneCard.appendChild(oneHeadline);
        oneCard.appendChild(oneAuthor);
        oneAuthor.appendChild(imgDiv);
        imgDiv.appendChild(oneImg);
        oneAuthor.appendChild(oneName);

        return oneCard;
    }