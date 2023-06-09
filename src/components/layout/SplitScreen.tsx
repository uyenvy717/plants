import { Children, ReactNode } from "react";

export const SplitScreen = ({
  leftWidth,
  middleWidth,
  rightWidth,
  className,
  children,
}: {
  leftWidth?: number;
  middleWidth?: number;
  rightWidth?: number;
  className?: string;
  children: ReactNode;
}) => {
  const [left, middle, right] = Children.toArray(children);
  return (
    <div className={`flex w-full ${className}`}>
      <div className="flex place-content-center" style={{ flex: `${leftWidth}` }}>{left}</div>
      <div className="flex place-content-center" style={{ flex: `${middleWidth}` }}>{middle}</div>
      <div className="flex place-content-center" style={{ flex: `${rightWidth}` }}>{right}</div>
    </div>
  );
};

SplitScreen.defaultProps = {
    className: "",
    leftWidth: 4,
    middleWidth: 4,
    rightWidth: 4,
}