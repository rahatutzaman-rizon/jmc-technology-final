import { useQuery, useQueryClient } from "@tanstack/react-query";

export const useBlogs = (blogCategory) => {
  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["blogs", blogCategory], // Include category in the query key
    queryFn: async () => {
      const url = blogCategory
        ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/blogs/categories/${blogCategory}`
        : `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/blogs`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    enabled: !!blogCategory || blogCategory === undefined, // Only run query if category is provided or undefined
  });

  // Function to invalidate and refetch the blogs query
  const refetchBlogs = () => {
    queryClient.invalidateQueries(["blogs"]);
  };

  const { blogs, success } = data || {};

  return { isLoading, error, blogs, success, refetchBlogs };
};
