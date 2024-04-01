"use client";

import axios from "axios";

class BlogService {
    /**
     * Get All posts
     * @retutn
     */
    async getAllBlogs() {
        return await axios.get("/api/blog");
    }

    /**
     * Create a blog
     * @return
     */
    async createBlog(blogData) {
        return await axios.post("/api/blog", blogData);
    }

    /**
     * Delete a blog
     * @param id: string
     */
    async deleteBlog(id) {
        return await axios.delete(`/api/blog?id=${id}`);
    }

    /**
     * Edit the blog by id
     * @param blog IBlog
     */
    async editBlog(blog) {
        console.log(blog)
        return await axios.put(`/api/blog`, blog);
    }

    /**
     * Get blog by id
     * @param id string
     */
    async getBlogById(id) {
        return await axios.get(`/api/blog?id=${id}`);
    }
}

const blogService = new BlogService();

export default blogService;
