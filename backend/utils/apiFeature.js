class ApiFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  searchByAuthor() {
    const keyword = this.queryStr.author
      ? {
          author: {
            $regex: this.queryStr.author,
            $options: "i",
          },
        }
      : {};

    this.query = this.query.find({ ...keyword });
    return this;
  }

  searchByCategory() {
    const keyword = this.queryStr.bookCategory
      ? {
          bookCategory: {
            $regex: this.queryStr.bookCategory,
            $options: "i",
          },
        }
      : {};

    this.query = this.query.find({ ...keyword });
    return this;
  }

  searchByStatus() {
    const keyword = this.queryStr.status
      ? {
          bookCategory: {
            $regex: this.queryStr.status,
            $options: "i",
          },
        }
      : {};

    this.query = this.query.find({ ...keyword });
    return this;
  }

  search() {
    const keyword = this.queryStr.keyword 
      ? {
          $or: [
            { author: { $regex: this.queryStr.keyword, $options: "i" } },
            { bookCategory: { $regex: this.queryStr.keyword, $options: "i" } },
            { status: { $regex: this.queryStr.keyword, $options: "i" } },
          ],
        }
      : {};

    this.query = this.query.find({ ...keyword });
    return this;
  }
}

module.exports = ApiFeatures;
