import React from "react";
import PropTypes from "prop-types";

const shapes = {
  icbCircleBorder20: "rounded-radius20",
  RoundedBorder4: "rounded-radius4",
};
const variants = {
  icbFillTeal900: "bg-teal_900",
  FillBluegray900: "bg-bluegray_900 text-white_A700",
};
const sizes = {
  smIcn: "xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px]",
  sm: "lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["icbCircleBorder20", "RoundedBorder4"]),
  variant: PropTypes.oneOf(["icbFillTeal900", "FillBluegray900"]),
  size: PropTypes.oneOf(["smIcn", "sm"]),
};
Button.defaultProps = {
  className: "",
  leftIcon: null,
  rightIcon: null,
  shape: "icbCircleBorder20",
  variant: "icbFillTeal900",
  size: "smIcn",
};

export { Button };
