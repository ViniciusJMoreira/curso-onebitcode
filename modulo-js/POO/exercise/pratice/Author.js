const Post = require("./Post")

class Author {
  constructor(author) {
    this.author = author
    this.posts = []
  }
  writePost(title,text) {
    const newPost = new Post(this.author, title, text)
    this.posts.push(newPost)
    return newPost
  }
}

module.exports = Author