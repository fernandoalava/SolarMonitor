import { blue, pink } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";
import styled from "styled-components";

export const Theme = createMuiTheme({
  overrides: {
    MuiInput: {
      input: {
        "&&": {
          width: "280px"
        }
      }
    }
  },
  palette: {
    primary: blue,
    secondary: pink
  },
  typography: {
    useNextVariants: true
  }
});

export const StyledRoot = styled.div`
  flexgrow: 1;
`;
