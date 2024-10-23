import "./AvatarGroupProperty1Csv.css";
import { AvatarGroup } from "../AvatarGroup/AvatarGroup.jsx";

export const AvatarGroupProperty1Csv = ({
  property1 = "json",
  className,
  ...props
}) => {
  const variantsClassName = "property-1-" + property1;

  return (
    <div
      className={
        "avatar-group-property-1-csv " + className + " " + variantsClassName
      }
    >
      <AvatarGroup className="avatar-group-instance"></AvatarGroup>
    </div>
  );
};
