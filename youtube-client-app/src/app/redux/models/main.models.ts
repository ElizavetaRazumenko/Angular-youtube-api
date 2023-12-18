export interface MainCard {
  id: string;
  publishedAt: string;
  title: string;
  description: string;
  defaultURL: string;
  highURL: string;
  channelTitle: string;
  viewCount: string;
  likeCount: string;
  favoriteCount: string;
  commentCount: string;
}

export interface MainState {
  main: MainCard[];
}
