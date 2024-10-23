import "./AvatarGroupProperty1Variant2.css";
import { AvatarGroupProperty1Json } from "../AvatarGroupProperty1Json/AvatarGroupProperty1Json.jsx";

export const AvatarGroupProperty1Variant2 = ({
  property1 = "default",
  component0 = <AvatarGroupProperty1Json property1="json" />,
  component1 = <AvatarGroupProperty1Json property1="json" />,
  component2 = <AvatarGroupProperty1Json property1="json" />,
  className,
  ...props
}) => {
  const variantsClassName = "property-1-" + property1;

  return (
    <div
      className={
        "avatar-group-property-1-variant-2 " +
        className +
        " " +
        variantsClassName
      }
    >
      <AvatarGroupProperty1Json className="avatar-group-instance"></AvatarGroupProperty1Json>
      {component0}
      {component1}
      {component2}
    </div>
  );
};
