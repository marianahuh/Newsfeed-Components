// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(article) {
    // assign this.domElement to the passed in domElement
    this.articleOpen = article.querySelector('.article-open');
    this.articleClose = article.querySelector('.close');
    // create a reference to the ".expandButton" class.
    this.expandButton = article.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"

    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', () => this.expandArticle());
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    console.log('expand');
    this.articleOpen.classList.toggle('.article-open');
    this.articleClose.classList.toggle('.close');
  }
}

/* START HERE:

- Select all classes named ".article" and assign that value to the articles variable.


- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the constructor.

*/

let articles = document.querySelectorAll('.articles');
articles.forEach(article => new Article(article));