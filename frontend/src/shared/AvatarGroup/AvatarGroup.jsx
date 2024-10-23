import "./AvatarGroup.css";

export const AvatarGroup = ({ className, ...props }) => {
  return (
    <div className={"avatar-group " + className}>
      <img className="shape" src="shape0.png" />
    </div>
  );
};
