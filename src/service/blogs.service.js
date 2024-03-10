"use client";

import axios from "axios";

class BlogService {
    /**
     * Get All posts
     * @retutn
     */
    async getAllBlogs() {
        return await axios.get("/api/blogs");
    }

    /**
     * Create a blog
     * @return
     */
    async createBlog(blogData) {
        return await axios.post("/api/blogs", blogData);
    }

    /**
     * Delete a blog
     * @param id: string
     */
    async deleteBlog(id) {
        return await axios.delete(`/api/blogs?id=${id}`);
    }

    /**
     * Edit the blog by id
     * @param blog IBlog
     */
    async editBlog(blog) {
        console.log(blog)
        return await axios.put(`/api/blogs`, blog);
    }

    /**
     * Get blog by id
     * @param id string
     */
    async getBlogById(id) {
        return await axios.get(`/api/blogs?id=${id}`);
    }
}

const blogService = new BlogService();

export default blogService;
