import { createClient } from 'microcms-js-sdk';
import { Blog, BlogResponse } from '@/types/blog';

if (!process.env.MICROCMS_API_KEY) {
  throw new Error('MICROCMS_API_KEY is required');
}

export const client = createClient({
  serviceDomain: 'ty-official-hp',
  apiKey: process.env.MICROCMS_API_KEY,
});

export const getBlogs = async (limit: number = 10): Promise<BlogResponse> => {
  try {
    const data = await client.get({
      endpoint: 'blog',
      queries: {
        limit,
        orders: '-publishedAt',
      },
    });
    return data;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    throw error;
  }
};

export const getBlogById = async (id: string): Promise<Blog> => {
  try {
    const data = await client.get({
      endpoint: 'blog',
      contentId: id,
    });
    return data;
  } catch (error) {
    console.error('Error fetching blog:', error);
    throw error;
  }
};

export const getLatestBlogs = async (limit: number = 6): Promise<Blog[]> => {
  try {
    const data = await getBlogs(limit);
    return data.contents;
  } catch (error) {
    console.error('Error fetching latest blogs:', error);
    return [];
  }
};