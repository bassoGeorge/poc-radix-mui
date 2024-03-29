import { styled } from "@mui/system";

const Button = styled("button", { slot: "root", name: "MyButton" })(
  ({ theme }) => ({
    backgroundColor: theme.vars.palette.info.primary,
    border: `1px solid ${theme.vars.palette.primary.dark}`,
    color: theme.vars.palette.text.default,
  })
);

export default Button;
