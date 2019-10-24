import { withStyles } from "@material-ui/core/styles";

import Home from "./Home";

const styles = () => ({
  homeImage: {
    width: "100%",
    height: "600px",
    backgroundImage: "url(./images/wellcome2.gif)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  }
});

export default withStyles(styles)(Home);
