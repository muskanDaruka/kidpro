const { Schema, model, models } = require("mongoose");

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
        faqQues: String,
        faqAns: String,
        ctaBlogImg: String,
        ctaBlogImgUrl: String,
    },
    { timestamps: true }
);

const Blog = models?.blogs ?? model("blogs", blogSchema);

module.exports = Blog;
