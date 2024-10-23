import "./AvatarGroupProperty1Json.css";
import { AvatarGroup } from "../AvatarGroup/AvatarGroup.jsx";

export const AvatarGroupProperty1Json = ({
  property1 = "json",
  className,
  ...props
}) => {
  const variantsClassName = "property-1-" + property1;

  return (
    <div
      className={
        "avatar-group-property-1-json " + className + " " + variantsClassName
      }
    >
      <AvatarGroup className="avatar-group-instance"></AvatarGroup>
    </div>
  );
};
