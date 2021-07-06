interface Query {
  [key: string]: undefined | string | string[] | Query | Query[];
}

interface HttpRequest {
  headers?: Record<string, string | string[] | undefined>;
  params?: Record<string, string>;
  query?: Query;
  body?: unknown;
  user: HttpRequestUser;
}

interface HttpResponse {
  status: number;
  body?: unknown;
}

interface HttpRequestUser {
  email: string;
  name: string;
}

export { HttpRequest, HttpResponse };
