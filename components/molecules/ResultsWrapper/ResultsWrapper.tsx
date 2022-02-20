import { useEffect, useState, ReactNode } from "react";
import Scroll from "react-scroll";

const Element = Scroll.Element;

interface ResultsWrapperProps {
  children: ReactNode;
  scrollToResults: () => void;
  wrapperId: string;
}

const ResultsWrapper = ({
  children,
  scrollToResults,
  wrapperId,
}: ResultsWrapperProps) => {
  const [didScroll, setDidScroll] = useState(false);

  useEffect(() => {
    if (!didScroll) {
      scrollToResults();
      setDidScroll(true);
    }
  }, [didScroll, setDidScroll]);

  return <Element name={wrapperId}>{children}</Element>;
};

export default ResultsWrapper;
