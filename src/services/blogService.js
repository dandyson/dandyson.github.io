// src/services/blogService.js
import { createClient } from 'contentful';

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

export const getCategories = async () => {
  const response = await client.getEntries({ content_type: 'category' });
  return response.items.map(item => item.fields);
};

export const getAllPosts = async () => {
  const entries = await client.getEntries({ content_type: 'post' });
  console.log({entries});
  return entries.items.map((item) => ({
    id: item.sys.id,
    createdAt: item.sys.createdAt,
    title: item.fields.title,
    content: item.fields.content,
    category: item.fields.category.fields.name,
  }));
};

export const getPost = async (id) => {
  const response = await client.getEntry(id);
  const { title, content, publishedDate, category } = response.fields;
  return {
    title,
    content,
    publishedDate,
    category: category.fields.name,
  };
};

export const getLatestEntries = async () => {
  const entries = await client.getEntries({
    content_type: 'post',
    order: '-sys.createdAt',
    limit: 2,
  });
  return entries.items.map((item) => ({
    id: item.sys.id,
    createdAt: item.sys.createdAt,
    title: item.fields.title,
    content: item.fields.content,
    category: item.fields.category.fields.name,
  }));
};

export const getPostsByCategory = async (categoryName) => {
  const categories = await getCategories();
  const category = categories.find(cat => cat.name === categoryName);
  if (!category) return [];
  
  const response = await client.getEntries({
    content_type: 'post',
    'fields.category.sys.id': category.id
  });
  return response.items.map(item => {
    const { title, content, publishedDate, category } = item.fields;
    return {
      id: item.sys.id,
      title,
      content,
      publishedDate,
      category: category.fields.name,
    };
  });
};
