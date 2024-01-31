import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled, Box } from "@mui/system";
import * as Checkbox from "@radix-ui/react-checkbox";
import { useId } from "react";

export function MyCheckbox({ children }: React.PropsWithChildren) {
  const id = useId();
  return (
    <Box sx={{ display: 'flex', gap: 4, alignItems: 'center'}}>
      <Root id={id}>
        <Checkbox.Indicator>
          <FontAwesomeIcon icon={faCoffee} />
        </Checkbox.Indicator>
      </Root>
      <label htmlFor={id}>{children}</label>
    </Box>
  );
}

const Root = styled(Checkbox.Root)(({theme}) => ({
  border: "1px solid",
  padding: "4px",
  height: theme.spacing(4),
  width: theme.spacing(4),
  display: "grid",
  placeItems: "center",
  borderRadius: 2,
}));
