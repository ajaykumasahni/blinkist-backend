class ApiFeatures {
    constructor(query, queryStr) {
      this.query = query;
      this.queryStr = queryStr;
    }
  
    search(){
    const keyword = this.queryStr.keyword
      ? {
          author: {
            $regex: this.queryStr.keyword,
            $options: "i",
          },
        }
      : {};

    this.query = this.query.find({ ...keyword });
    return this;
      }
    // search() {
    //   const keyword = this.queryStr.keyword
    //     ? {
    //         "$or": [
    //           {author: { $regex: req.queryStr.keyword, $options: "i" }} ,
    //           { bookCategory: { $regex: req.queryStr.keyword, $options: "i" } },
    //         ],
    //       }
    //     : {};
  
    //   this.query = this.query.find({ ...keyword });
    //   return this;
    // }
  }
  
  module.exports = ApiFeatures;