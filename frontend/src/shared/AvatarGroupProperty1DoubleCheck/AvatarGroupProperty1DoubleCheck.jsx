import "./AvatarGroupProperty1DoubleCheck.css";
import { AvatarGroup } from "../AvatarGroup/AvatarGroup.jsx";

export const AvatarGroupProperty1DoubleCheck = ({
  property1 = "json",
  className,
  ...props
}) => {
  const variantsClassName = "property-1-" + property1;

  return (
    <div
      className={
        "avatar-group-property-1-double-check " +
        className +
        " " +
        variantsClassName
      }
    >
      <AvatarGroup className="avatar-group-instance"></AvatarGroup>
    </div>
  );
};
