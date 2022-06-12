import "./Frame.scss";

interface FrameProps {
  children: React.ReactNode;
}

const Frame = ({ children }: FrameProps) => {
  return <div className="frame"> {children} </div>;
};

export default Frame;
