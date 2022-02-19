import SubText from "./SubText";

type ActivityLogEntryTimeProps = {
  date: string;
};

function ActivityLogEntryTime({ date }: ActivityLogEntryTimeProps) {
  const timeRender = () => {
    const now = new Date();
    const timeAdded = new Date(date);
    const diff = now.getTime() - timeAdded.getTime();

    return `${Math.round(diff / 100000)}m`;
  };
  return <SubText>&bull;&nbsp;{timeRender()}</SubText>;
}

export default ActivityLogEntryTime;
