"use client";

import blogService from "../service/blogs.service"
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";

export const useAllBlogs = () => {
    return useQuery({
        queryKey: ["blogs"],
        queryFn: blogService.getAllBlogs,
    });
};

export const useCreateBlog = () => {
    return useMutation({
        mutationFn: blogService.createBlog,
    });
};

export const useDeleteBlog = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: blogService.deleteBlog,
        onSuccess() {
            queryClient.invalidateQueries({
                queryKey: ["blogs"],
            });
        },
    });
};

export const useUpdateBlog = (blog) => {
    return useMutation({
        mutationFn: (blog) => blogService.editBlog(blog),
    });
};

export const useBlogById = (id) => {
    return useQuery({
        queryKey: ["blogs"],
        queryFn: () => blogService.getBlogById(id),
    });
};
