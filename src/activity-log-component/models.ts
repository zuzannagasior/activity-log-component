type PageInfo = {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string;
  endCursor: string;
};

type Profile = {
  id: string;
  username: string;
  avatar: string;
};

export interface ActivityLogEntry {
  id: string;
  date: string;
  user: Profile;
}

type ActivityLogEntryEdge = {
  cursor: string;
  node: ActivityLogEntry;
};

export type PaginatedActivityLogEntry = {
  edges: ActivityLogEntryEdge[];
  pageInfo: PageInfo;
};
