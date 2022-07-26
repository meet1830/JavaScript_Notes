// 2347b8e81818b4936b8c79073bd68ae7
// this is our api key from newsapi website. In the website, go to sources, copy link and at last replace API_KEY to our api key number and hit enter. we get our api result.
// to make it human readable, install JSON formatter extension from chrome web store.
// both news api and gnew api files included locally for local ajax request

//initialize news api parameters
let source = "Gnews";
let apiKey = "a4818b712a128bd9a6e6eda0752184be";

//grab news container
let newsAccordion = document.getElementById("newsAccordion");

//create an AJAX get request
const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  `https://gnews.io/api/v4/search?q=example&token=${apiKey}`,
  true
);

xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;

    // we just want articles
    // console.log(articles);
    // we want to display title and content

    // for (let news in articles) {
    // console.log(articles[news]); //iterating through articles
    //   let newsHTML = '';
    //   // same code as below for each loop
    //     // now we will insert this in newsAccordion
    //     newsHTML += news;
    // }

    // for in loop above can be used only if articles is an object but it is an array hence have to use for each loop for that

    //articles is an array hence have to use forEach loop
    let newsHTML = "";
    articles.forEach((element, index) => {
      // here element=articles
      // console.log(articles[news]); //iterating through articles
      // console.log(element, index);

      let news = `
      <div class="card">
        <div class="card-header" id="heading${index}">
          <h2 class="mb-0">
            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
            <b>Breaking News ${index + 1}:</b> ${element["title"]}
            </button>
          </h2>
        </div>

        <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
          <div class="card-body"> ${element["content"]}. 
            <a href="${element["url"]}" target="_blank" >Read more here</a>  
          </div> 
        </div>
      </div>`;

      //now we will insert this in newsAccordion
      //after insertion = here no way to view full content of articles. hence we will give url of website to view article. to open it in new tab include - target='_blank'.
      //index added here as argument to resolve error in console -> `cannot read property 'querySelectorAll' of null`, in collapse.js. So replace #collapseOne in innerhtml as collapse${index} and also headingOne as heading${index}. also change parentAccordion as newsAccordion.
      //delete 'show' from class='collapse show' in second para to make all accordions closed by default
      newsHTML += news;
    });
    newsAccordion.innerHTML = newsHTML;
  } else {
    console.log("Some error occured.");
  }
};

xhr.send();
