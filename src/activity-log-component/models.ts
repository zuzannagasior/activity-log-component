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

type Cluster = {
  id: string;
  name: string;
  coverImage: string;
};

type Element = {
  id: string;
  image: string;
};

export interface ActivityLogEntry {
  id: string;
  date: string;
  user: Profile;
  __typename: string;
}

export interface CollaborationActivityLogEntry extends ActivityLogEntry {
  id: string;
  date: string;
  user: Profile;
  cluster: Cluster;
}

export interface ConnectionActivityLogEntry extends ActivityLogEntry {
  id: string;
  date: string;
  user: Profile;
  count: number;
  element: Element;
}

export interface FollowActivityLogEntry extends ActivityLogEntry {
  id: string;
  date: string;
  user: Profile;
  count: number;
  cluster: Cluster;
}

export interface NewClusterActivityLogEntry extends ActivityLogEntry {
  id: string;
  date: string;
  user: Profile;
  cluster: Cluster;
}

export type ActivityLogEntryEdge = {
  cursor: string;
  node: ActivityLogEntry;
};

export type PaginatedActivityLogEntry = {
  edges: ActivityLogEntryEdge[];
  pageInfo: PageInfo;
};
