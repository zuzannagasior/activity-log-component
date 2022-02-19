import SubText from "./SubText";

type AndOthersTextProps = {
  count: number;
};

function AndOthersText({ count }: AndOthersTextProps) {
  if (count === 0) {
    return null;
  }
  return (
    <>
      <SubText>and</SubText> {count} {count === 1 ? "other" : "others"}
    </>
  );
}

export default AndOthersText;
