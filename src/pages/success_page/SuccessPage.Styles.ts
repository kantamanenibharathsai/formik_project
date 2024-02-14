const successPageStyles = {
  mainContainer: {
    height: "100vh",
  },

  childContainer: {
    width: "90%",
    margin: "auto",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "30px"
  },

  successfulImage: {
    width: {xs:"100%", sm:"70%", md:"60%", lg:"550px"},
    height:  {xs:"370px", sm:"470px", md:"550px", lg:"600px"},
    borderRadius: "14px",
  },

  contentsContainer : {
    border: "1px solid black",
    borderRadius: "7px",
    width: {xs:"100%", md:"70%", lg:"60%"},
    overflowX: "scroll",
    padding: "15px",
    display: "flex",
    flexDirection: "column",
    gap: '14px'
  },

  accountCreatedText : {
    fontSize: {xs:"19px", sm:"20px", md:"25px"},
    fontFamily: "Roboto",
    fontWeight: "700"
  },

  giveNameText : {
    fontWeight: "700",
    fontSize: "17px"
  }
};

export default successPageStyles;
