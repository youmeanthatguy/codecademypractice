class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  set isCheckedOut(status) {
    this._isCheckedOut = status;
  }

  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }

  getAverageRating() {
    const reducer = (accumulator, currentValue) => { accumulator + currentValue;
    let totalRatings = this._ratings.reduce(reducer);
    let averageRating = (totalRatings / this._ratings.length);
    }
  }

  addRating(newRating) {
    return ratings.push(newRating);
  }
}

class Book extends Media {
  constructor(author, pages) {
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
}