import Item, { VideoItem } from './search-item.model';

export default interface VideoItems {
  kind: string;
  etag: string;
  items: Item[];
  pageInfo: PageInfo;
}

export interface SearchVideoResponse {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: PageInfo;
  items: VideoItem[];
}
interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}
