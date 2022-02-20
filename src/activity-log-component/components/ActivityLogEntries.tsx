import { useEffect, useRef } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import styled from "styled-components";
import { ActivityLogEntryEdge } from "../models";
import ActivityLogEntry from "./activity-log-entry/ActivityLogEntry";
import ActivityLogInfo from "./ActivityLogInfo";
import Loader from "./ui/Loader";

const ActivityLogEntriesUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

type ActivityLogEntriesProps = {
  edges: ActivityLogEntryEdge[];
  hasMore: boolean;
  onLoadMore: () => void;
  subscribeToNewActivityLogEntries: () => void;
};

function ActivityLogEntries({
  edges,
  hasMore,
  onLoadMore,
  subscribeToNewActivityLogEntries,
}: ActivityLogEntriesProps) {
  const subscribe = useRef(subscribeToNewActivityLogEntries);

  useEffect(() => {
    subscribe.current();
  }, []);

  if (edges.length === 0) {
    return <ActivityLogInfo />;
  }
  return (
    <ActivityLogEntriesUl>
      <InfiniteScroll
        dataLength={edges.length}
        next={onLoadMore}
        hasMore={hasMore}
        loader={<Loader />}
        scrollableTarget="scrollable"
      >
        {edges.map((edge) => (
          <ActivityLogEntry key={edge.node.id} {...edge.node} />
        ))}
      </InfiniteScroll>
    </ActivityLogEntriesUl>
  );
}

export default ActivityLogEntries;
