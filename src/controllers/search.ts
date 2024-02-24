import { search as giphySearch } from '../lib/giphy';
import prisma from '../lib/prisma';

export const search = async (query: string, page: number) => {
  await prisma.searches.create({ data: { query } });

  // id, url, preview = images.preview_gif.url

  const { data: rawData, ...rest } = await giphySearch(query, page);

  const data = rawData.map(
    ({
      id,
      url,
      images: {
        preview_gif: { url: previewUrl }
      }
    }: any) => ({
      id,
      url,
      preview: previewUrl
    })
  );
  return {
    data,
    ...rest
  };
};

export const list = async () => {
  return prisma.searches.findMany();
};

export const wipe = async () => {
  return prisma.searches.deleteMany();
};
