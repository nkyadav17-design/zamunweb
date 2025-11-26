export const blogListQuery = `
*[_type == "post"]{
  _id,
  title,
  slug,
  "image": mainImage.asset->url,
  "category": categories[0]->title,
  excerpt,
  publishedAt
} | order(publishedAt desc)
`;
