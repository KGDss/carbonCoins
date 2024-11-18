export type DecodedToken = {
  id: number;
  role: string;
};

export type SuccessResponse = {
  status: number;
  message: string;
};

export type BaseModel = {
  id: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
};

export type FindAllAndPagination<T> = {
  pagination: PaginationResponse;
  entities: T[];
};

export type PaginationResponse = {
  page: number;
  page_size: number;
  page_count: number;
  total: number;
};

export type PaginationFilter = {
  limit?: number;
  page?: number;
  sort?: number;
  reverse?: number;
  query?: number;
};

export type BaseAuth = {
  token: string;
};
