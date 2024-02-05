import { type Author } from "./author";
import { type Artist } from "./artist";

export type Post = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  author: Author;
  artistAttr: Artist;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
  preview?: boolean;
};
