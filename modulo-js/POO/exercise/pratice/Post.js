const Comment = require('./Comment')
class Post {
  constructor(author, title, text) {
    this.author = author
    this.title = title
    this.text = text
    this.comments = []
  }
  addComment(author, text) {
    this.comments.push(new Comment(author, text))
  }
}

module.exports = Post