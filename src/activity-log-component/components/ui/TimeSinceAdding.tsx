import { useEffect, useState } from "react";
import SubText from "./SubText";
import { DateTime, Interval } from "luxon";

DateTime.now()
  .setZone("America/New_York")
  .minus({ weeks: 1 })
  .endOf("day")
  .toISO();

type TimeSinceAddingProps = {
  date: string;
};

function TimeSinceAdding({ date }: TimeSinceAddingProps) {
  const [entryAddedTime, setEntryAddedTime] = useState<string>(
    getEntryAddedTime(date)
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setEntryAddedTime(getEntryAddedTime(date));
    }, 60000);

    return () => {
      clearInterval(intervalId);
    };
  }, [date]);

  return <SubText>&nbsp;&bull;&nbsp;&nbsp;{entryAddedTime}</SubText>;
}

export default TimeSinceAdding;

const getEntryAddedTime = (added: string) => {
  const now = DateTime.now();
  const later = DateTime.fromISO(added);
  const diff = Interval.fromDateTimes(later, now);

  const diffSec = diff.length("seconds");
  if (diffSec < 60) {
    return `${Math.round(diffSec)}s`;
  }

  const diffMin = diff.length("minutes");
  if (diffMin < 60) {
    return `${Math.round(diffMin)}m`;
  }

  const diffHours = diff.length("hours");
  if (diffHours < 24) {
    return `${Math.round(diffHours)}h`;
  }

  const diffDays = diff.length("days");
  return `${Math.round(diffDays)}d`;
};
