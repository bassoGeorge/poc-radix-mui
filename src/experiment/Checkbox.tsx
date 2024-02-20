import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled, Box } from "@mui/system";
import * as Checkbox from "@radix-ui/react-checkbox";
import { useId } from "react";

export function MyCheckbox({ children }: React.PropsWithChildren) {
  const id = useId();
  return (
    <Box sx={{ display: 'flex', gap: 4, alignItems: 'center'}}>
      <StyledRoot id={id}>
        <Checkbox.Indicator>
          <FontAwesomeIcon icon={faCoffee} />
        </Checkbox.Indicator>
      </StyledRoot>
      <label htmlFor={id}>{children}</label>
    </Box>
  );
}

const StyledRoot = styled(Checkbox.Root)(({theme}) => ({
  border: "1px solid",
  padding: "4px",
  height: theme.spacing(5),
  width: theme.spacing(5),
  display: "grid",
  placeItems: "center",
  borderRadius: 2,
  '&[data-state="checked"]': {
    backgroundColor: theme.vars.palette.info.primary,
  }
}));