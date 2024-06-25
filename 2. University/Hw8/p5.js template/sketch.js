var bookShelves = [
    ['The Surgeon', 'The Apprentice', 'The Sinner',
     'Body Double','Vanish'], //5
    ['The Mephisto Club', 'The Keepsake', 'Ice Cold', 'Freaks', 'The Silent Girl'], //5
    ['Last to Die','Die Again', 'Golden Cup', 'Financier', 'Martin Iden' ], //5
    ['50 Shades of Grey', '50 Shades Darker', '50 Shades of Freedom', 'The Catcher in the Rye '] //4
];

var totalNum;

function setup()
{
	createCanvas(800, 600);
    firstBook();
    totalBooks();
    allBooks();
    bookOnShelf(3);
    bookName('Golden Cup');
    bookName('Golden Cups');
}

function firstBook() {
  for (var i=0; i<bookShelves.length; i++) {
      for (var j=0; j<bookShelves[i].length; j++) {
          console.log(bookShelves[i][0]);
      }
  }
}

function totalBooks() {
  totalNum = 0;
  for (var i=0; i<bookShelves.length; i++) {
    totalNum += bookShelves[i].length;
  }
  console.log(`Total number of books:`, totalNum);
}

function allBooks() {
  for (var i=0; i<bookShelves.length; i++) {
      for (var j=0; j<bookShelves[i].length; j++) {
          console.log(bookShelves[i][j]);
      }
  }
}

function bookOnShelf(shelfNum) {
    console.log(`Books on shelf`, shelfNum + `:`, bookShelves[shelfNum-1].join(", "));
}

function bookName(book) {
  for (let i=0; i<bookShelves.length; i++) {
    if (bookShelves[i].includes(book)) {
      console.log(book, "is on shelf number", i+1);
      return;
    }
  }
  console.log(book, "is not on the shelves.");
}