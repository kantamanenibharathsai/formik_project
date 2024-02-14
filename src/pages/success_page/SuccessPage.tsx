import { Box, Typography } from "@mui/material"
import successPageStyles from "./SuccessPage.Styles"
import { useLocation } from "react-router-dom"


const SuccessComponent = () => {
    const location = useLocation()
    const parsedData = JSON.parse(location.state)
    console.log(parsedData.checked)

    return (
        <Box sx={successPageStyles.mainContainer}>
            <Box sx={successPageStyles.childContainer}>
                <Typography sx={successPageStyles.accountCreatedText}>Account Created Successfully with the below Details</Typography>
                <Box sx={successPageStyles.contentsContainer}>
                    <Typography>Given Name : <Box component="span" sx={successPageStyles.giveNameText}>{parsedData.givenName}</Box></Typography>
                    <Typography>Family Name : <Box component="span" sx={successPageStyles.giveNameText}>{parsedData.familyName}</Box></Typography>
                    <Typography>preferred Name : <Box component="span" sx={successPageStyles.giveNameText}>{parsedData.preferredName}</Box></Typography>
                    <Typography>Email : <Box component="span" sx={successPageStyles.giveNameText}>{parsedData.email}</Box></Typography>
                    <Typography>City : <Box component="span" sx={successPageStyles.giveNameText}>{parsedData.city}</Box></Typography>
                    <Typography>Password : <Box component="span" sx={successPageStyles.giveNameText}>{parsedData.password}</Box></Typography>
                    <Typography>Phone Number : <Box component="span" sx={successPageStyles.giveNameText}>{parsedData.phoneNumber}</Box></Typography>
                    <Typography>Company Organisation : <Box component="span" sx={successPageStyles.giveNameText}>{parsedData.companyOrganisation}</Box></Typography>
                    <Typography>Address : <Box component="span" sx={successPageStyles.giveNameText}>{parsedData.address}</Box></Typography>
                </Box>
            </Box>
        </Box>
    )
}


export default SuccessComponent