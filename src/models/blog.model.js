const { Schema, model, models } = require("mongoose");

const faqSchema = new Schema({
    ques: String,
    ans: String
});

const blogSchema = new Schema(
    {
        blogImgUrl: String,
        name: String,
        summary: String,
        category: String,
        contents: String,
        postedOn: Date,
        trendingTopic: String,
        metaTitle: String,
        description: String,
        keywords: String,
        blogSlugUrl: String,
        faq: [faqSchema],
        ctaBlogImg: String,
        ctaBlogImgUrl: String,
    },
    { timestamps: true }
);

const Blog = models && models.Blog ? models.Blog : model("Blog", blogSchema);

module.exports = Blog;
