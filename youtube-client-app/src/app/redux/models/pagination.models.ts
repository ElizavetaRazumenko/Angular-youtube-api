export interface PaginationInfo {
  nextPageToken: string;
  prevPageToken: string;
  page: number;
}

export interface PaginationState {
  pagination: PaginationInfo;
}
