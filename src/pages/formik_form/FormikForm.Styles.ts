const formikFormStyles = {
  mainContainer: {
    minHeight: "100vh",
    width: "100%",
    background: "#2B4F50",
  },

  childContainer: {
    width: { xs: "95%", sm: "70%", md: "60%", lg: "90%" },
    margin: "auto",
    pt: "4px",
    pb: "20px",
  },

  header: {
    width: "100%",
    background: "transparent",
    height: "50px",
    // border: "1px solid black",
    boxShadow:
      "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
    borderRadius: "12px",
    px: "40px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  logoText: {
    fontFamily: "Roboto",
    fontSize: "17px",
    fontWeight: "800",
    color: "white",
  },

  bodyContainer: {
    width: "100%",
    // border: "1px solid red",
    mt: "15px",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
  },

  leftContainer: {
    width: { lg: "46%", xl: "50%" },
    // border: "3px solid green",
    display: { xs: "none", lg: "flex" },
    flexDirection: "column",
    gap: "50px",
  },

  logo: {
    width: "60px",
    height: "60px",
    borderRadius: "10px",
  },

  worldMapImage: {
    width: "100%",
    height: "650px",
  },

  rightContainer: {
    width: { xs: "100%", lg: "65%", xl: "55%" },
  },

  formParentContainer: {
    borderRadius: "14px",
    background: "##2B4F50",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    padding: { xs: "10px 6px", sm: "10px 20px 25px 25px" },
  },

  createAccountText: {
    fontFamily: "Roboto",
    fontSize: "27px",
    fontWeight: "800",
    color: "white",
    mb: "15px",
  },

  formContainer: {
    display: "flex",
    flexDirecton: { xs: "column", lg: "row" },
    alignItems: { xs: "strech", lg: "flex-start" },
    gap: "7px",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  labelInputContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "3px",
    width: { xs: "100%", lg: "49%" },
    // border: "2px solid red",
  },

  labelText: {
    fontFamily: "Roboto",
    fontSize: "12px",
    fontWeight: "200",
    color: "white",
  },
  inputField: {
    background: "#fff",
    // height: "45px",
    borderRadius: "7px",
    "& fieldset": {
      border: "none",
    },
    "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
      WebkitAppearance: "none",
      margin: 0,
    },
  },

  errorMsg: {
    fontFamily: "Roboto",
    color: "red",
  },

  checkboxTextContainer: {
    display: "flex",
    alignItems: "center",
    gap: "0px",
    width: "100%",
    // border: "1px solid red",
  },

  checkbox: {
    marginLeft: "-10px",
  },

  IAgreeText: {
    fontFamily: "Roboto",
    fontSize: { xs: "10px", sm: "12px" },
    fontWeight: "200",
    color: "white",
  },

  privacyPolicyText: {
    fontFamily: "Roboto",
    fontSize: { xs: "10px", sm: "12px" },
    fontWeight: "900",
    color: "white",
  },

  createAccountBtn: {
    background: "#E1AC02",
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: "300",
    color: "black",
    width: "100%",
    height: "46px",
    textTransform: "capitalize",
    "&:hover": {
      background: "#E1AC02",
    },
  },

  alreadyText: {
    textAlign: "center",
    mt: "10px",
  },

  passwordIconContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  infoOutlinedIcon: {
    color: "white",
    width: "16px",
    height: "16px",
  },

  passErrCloseIconContainer: {
    display: "flex",
    justifyContent: "space-beween",
    alignItems: "center",
    padding: "10px",
    background: "#FEE3E2",
    borderLeft: "2px solid red",
    borderRadius: "10px",
  },

  passwordError: {
    fontFamily: "Roboto",
    fontSize: "12px",
    fontWeight: "300",
    color: "red",
  },

  closeIcon: {
    width: "14px",
    height: "14px",
    color: "red",
  },
};

export default formikFormStyles;
