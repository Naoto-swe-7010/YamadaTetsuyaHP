export interface Blog {
  id: string;
  title: string;
  body: string;
  photo: {
    url: string;
    height: number;
    width: number;
  };
  publishedAt: string;
  updatedAt: string;
  createdAt: string;
}

export interface BlogResponse {
  contents: Blog[];
  totalCount: number;
  offset: number;
  limit: number;
}