import { ReactNode } from "react";
import ActionButton from "../ui/ActionButton";
import FollowButton from "../ui/FollowButton";
import Element from "../ui/Element";
import {
  ActivityLogEntry,
  CollaborationActivityLogEntry,
  ConnectionActivityLogEntry,
  FollowActivityLogEntry,
  NewClusterActivityLogEntry,
} from "../../models";
import SubText from "../ui/SubText";
import AndOthersText from "./AndOthers";

type ActivityLogEntryContent = {
  textColumn: ReactNode;
  lastColumn: ReactNode;
};

export function useActivityLogEntryContent(
  entry: ActivityLogEntry
): ActivityLogEntryContent {
  const typename = entry.__typename;

  if (typename === "CollaborationActivityLogEntry") {
    const e = entry as CollaborationActivityLogEntry;
    return {
      textColumn: (
        <>
          <SubText>invated you to collaborate on</SubText>&nbsp;{e.cluster.name}
        </>
      ),
      lastColumn: <ActionButton />,
    };
  }
  if (typename === "NewClusterActivityLogEntry") {
    const e = entry as NewClusterActivityLogEntry;

    return {
      textColumn: (
        <>
          <SubText>made a new cluster called</SubText>&nbsp;{e.cluster.name}
        </>
      ),
      lastColumn: <FollowButton />,
    };
  }
  if (typename === "FollowActivityLogEntry") {
    const e = entry as FollowActivityLogEntry;

    return {
      textColumn: (
        <>
          <AndOthersText count={e.count} />
          &nbsp;<SubText>follow</SubText>&nbsp;
          {e.cluster.name}
        </>
      ),
      lastColumn: <Element imageUrl={e.cluster.coverImage} />,
    };
  }
  if (typename === "ConnectionActivityLogEntry") {
    const e = entry as ConnectionActivityLogEntry;

    return {
      textColumn: (
        <>
          <AndOthersText count={e.count} />
          &nbsp;
          <SubText>connected your element</SubText>
        </>
      ),
      lastColumn: <Element imageUrl={e.element.image} />,
    };
  }
  return {
    textColumn: null,
    lastColumn: null,
  };
}
