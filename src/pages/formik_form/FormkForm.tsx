import { Box, Button, Checkbox, FormHelperText, TextField, Typography, } from "@mui/material";
import formikFormStyles from "./FormikForm.Styles";
import Header from "../../components/header/Header";
import { Field, Form, Formik, FormikProps } from "formik";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import * as Yup from "yup"
import YupPassword from 'yup-password'
import "yup-phone-lite";
import { useState } from "react";
YupPassword(Yup)


interface IState {

}


const FormikForm = () => {

    const [checked, setChecked] = useState(false);
    const [textColor, setTextColor] = useState('white')



    const validationSchema = Yup.object({
        givenName: Yup.string()
            .min(3, "Given Name must be minimum 3 characters")
            .required("*Given Name Required"),
        familyName: Yup.string()
            .min(3, "Family Name must be minimum 3 characters")
            .required("*Family Name Required"),
        preferredName: Yup.string()
            .min(3, "Preferred Name must be minimum 3 characters")
            .required("*Preferred Name Required"),
        phoneNumber: Yup.string()
            .phone("IN", "Please enter a valid phone number")
            .min(10, "too short")
            .max(10, "too long")
            .required("Required"),
        email: Yup.string().email("Invalid email address").required("*Email Required"),
        password: Yup.string()
            .minLowercase(1, "password must contain at least 1 lower case letter")
            .minUppercase(1, "password must contain at least 1 upper case letter")
            .minNumbers(1, "password must contain at least 1 number")
            .minSymbols(1, "password must contain at least 1 special character")
            .required("*Password Required"),
        country: Yup.string().required("*Country Required"),
        city: Yup.string().required("*City Required"),
        designation: Yup.string().required("*Designation Required"),
        companyOrganisation: Yup.string().required("*Company Required"),
        approxNumOfAssets: Yup.string().required("*Assets Required"),
    });


    const handleSubmit = () => {
        console.log("form submitted")
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
        setTextColor("white")
        console.log(event.target.checked)
    };

    const onClickCreateAccountButton = () => {
        // console.log(checked)
        if (!checked) setTextColor("yellow");
        else setChecked(false);
    }

    return (
        <Box sx={formikFormStyles.mainContainer}>
            {/* <Header/> */}
            <Box sx={formikFormStyles.childContainer}>
                <Box sx={formikFormStyles.header}>
                    <Typography sx={formikFormStyles.logoText}>LOGO</Typography>
                </Box>
                <Box sx={formikFormStyles.bodyContainer}>
                    <Box sx={formikFormStyles.leftContainer}>
                        <Box component="img" src="https://img.freepik.com/premium-vector/nature-smooth-logo-vector-art-design_860056-30.jpg" alt="logo" sx={formikFormStyles.logo} />
                        <Box component="img" src="https://freedomhouse.org/sites/default/files/2023-02/FH_World_map_2023_master.png" alt="world-map" sx={formikFormStyles.worldMapImage} />
                    </Box>
                    <Box sx={formikFormStyles.rightContainer}>
                        <Box sx={formikFormStyles.formParentContainer}>
                            <Typography sx={formikFormStyles.createAccountText}>Create Account</Typography>
                            <Formik
                                initialValues={{ givenName: "", familyName: "", preferredName: "", email: '', password: "", address: "", phoneNumber: "", country: "", city: "", designation: "", companyOrganisation: "", approxNumOfAssets: "", name: "checkbox" }}
                                onSubmit={handleSubmit}
                                validationSchema={validationSchema}
                                validateOnBlur={true}
                                validateOnChange={true}

                            >
                                {({ errors, touched, }) => (
                                    <Form>
                                        <Box sx={formikFormStyles.formContainer}>
                                            <Box sx={formikFormStyles.labelInputContainer}>
                                                <Box component="label" sx={formikFormStyles.labelText} htmlFor="givenName">
                                                    Given Name*
                                                </Box>
                                                <Field id="givenName" type="text" name="givenName" as={TextField} sx={formikFormStyles.inputField} />
                                                {((checked || touched.givenName)) && (
                                                    (() => {
                                                        console.log("inside jsx" ,checked);
                                                        return <FormHelperText sx={formikFormStyles.errorMsg}>{errors.givenName}</FormHelperText>;
                                                    })()
                                                )}
                                            </Box>
                                            <Box sx={formikFormStyles.labelInputContainer}>
                                                <Box component="label" sx={formikFormStyles.labelText} htmlFor="familyName">
                                                    Family Name*
                                                </Box>
                                                <Field id="familyName" type="text" name="familyName" as={TextField} sx={formikFormStyles.inputField} />

                                                <FormHelperText sx={formikFormStyles.errorMsg}>{errors.familyName}</FormHelperText>

                                            </Box>
                                            <Box sx={formikFormStyles.labelInputContainer}>
                                                <Box component="label" sx={formikFormStyles.labelText} htmlFor="preferredName">
                                                    Preferred Name
                                                </Box>
                                                <Field id="preferredName" type="text" name="preferredName" as={TextField} sx={formikFormStyles.inputField} />
                                                {checked && errors.preferredName && touched.preferredName && (
                                                    <FormHelperText sx={formikFormStyles.errorMsg}>{errors.preferredName}</FormHelperText>
                                                )}
                                            </Box>
                                            <Box sx={formikFormStyles.labelInputContainer}>
                                                <Box component="label" sx={formikFormStyles.labelText} htmlFor="email">
                                                    Email*
                                                </Box>
                                                <Field id="email" type="text" name="email" as={TextField} sx={formikFormStyles.inputField} />
                                                {errors.email && touched.email && (
                                                    <FormHelperText sx={formikFormStyles.errorMsg}>{errors.email}</FormHelperText>
                                                )}
                                            </Box>
                                            <Box sx={formikFormStyles.labelInputContainer}>
                                                <Box sx={formikFormStyles.passwordIconContainer}>
                                                    <Box component="label" sx={formikFormStyles.labelText} htmlFor="password">
                                                        Password*
                                                    </Box>
                                                    <InfoOutlinedIcon sx={formikFormStyles.infoOutlinedIcon} />
                                                </Box>
                                                <Field id="password" type="text" name="password" as={TextField} sx={formikFormStyles.inputField} />
                                                {errors.password && touched.password && (
                                                    <FormHelperText sx={formikFormStyles.errorMsg}>{errors.password}</FormHelperText>
                                                )}
                                                <Box sx={formikFormStyles.passErrCloseIconContainer}>
                                                    <Typography sx={formikFormStyles.passwordError}>Password must be a combination of uppercase and lowercase letters, numbers and special character(s).</Typography>
                                                    <CloseOutlinedIcon sx={formikFormStyles.closeIcon} />
                                                </Box>
                                            </Box>
                                            <Box sx={formikFormStyles.labelInputContainer}>
                                                <Box component="label" sx={formikFormStyles.labelText} htmlFor="address">
                                                    Address
                                                </Box>
                                                <Field id="address" type="text" name="address" as={TextField} sx={formikFormStyles.inputField} />
                                                {errors.address && touched.address && (
                                                    <FormHelperText sx={formikFormStyles.errorMsg}>{errors.address}</FormHelperText>
                                                )}
                                            </Box>
                                            <Box sx={formikFormStyles.labelInputContainer}>
                                                <Box component="label" sx={formikFormStyles.labelText} htmlFor="phoneNumber">
                                                    Phone Number*
                                                </Box>
                                                <Field id="phoneNumber" type="text" name="phoneNumber" as={TextField} sx={formikFormStyles.inputField} />
                                                {errors.phoneNumber && touched.phoneNumber && (
                                                    <FormHelperText sx={formikFormStyles.errorMsg}>{errors.phoneNumber}</FormHelperText>
                                                )}
                                            </Box>
                                            <Box sx={formikFormStyles.labelInputContainer}>
                                                <Box component="label" sx={formikFormStyles.labelText} htmlFor="country">
                                                    Country*
                                                </Box>
                                                <Field id="country" type="text" name="country" as={TextField} sx={formikFormStyles.inputField} />
                                                {errors.country && touched.country && (
                                                    <FormHelperText sx={formikFormStyles.errorMsg}>{errors.country}</FormHelperText>
                                                )}
                                            </Box>
                                            <Box sx={formikFormStyles.labelInputContainer}>
                                                <Box component="label" sx={formikFormStyles.labelText} htmlFor="city">
                                                    City*
                                                </Box>
                                                <Field id="city" type="text" name="city" as={TextField} sx={formikFormStyles.inputField} />
                                                {errors.city && touched.city && (
                                                    <FormHelperText sx={formikFormStyles.errorMsg}>{errors.city}</FormHelperText>
                                                )}
                                            </Box>
                                            <Box sx={formikFormStyles.labelInputContainer}>
                                                <Box component="label" sx={formikFormStyles.labelText} htmlFor="designation">
                                                    Designation*
                                                </Box>
                                                <Field id="designation" type="text" name="designation" as={TextField} sx={formikFormStyles.inputField} />
                                                {errors.designation && touched.designation && (
                                                    <FormHelperText sx={formikFormStyles.errorMsg}>{errors.designation}</FormHelperText>
                                                )}
                                            </Box>
                                            <Box sx={formikFormStyles.labelInputContainer}>
                                                <Box component="label" sx={formikFormStyles.labelText} htmlFor="companyOrganisation">
                                                    Company/Organisation*
                                                </Box>
                                                <Field id="companyOrganisation" type="text" name="companyOrganisation" as={TextField} sx={formikFormStyles.inputField} />
                                                {errors.companyOrganisation && touched.companyOrganisation && (
                                                    <FormHelperText sx={formikFormStyles.errorMsg}>{errors.companyOrganisation}</FormHelperText>
                                                )}
                                            </Box>
                                            <Box sx={formikFormStyles.labelInputContainer}>
                                                <Box component="label" sx={formikFormStyles.labelText} htmlFor="approxNumOfAssets">
                                                    Approximate Number of Assets*
                                                </Box>
                                                <Field id="approxNumOfAssets" type="text" name="approxNumOfAssets" as={TextField} sx={formikFormStyles.inputField} />
                                                {errors.approxNumOfAssets && touched.approxNumOfAssets && (
                                                    <FormHelperText sx={formikFormStyles.errorMsg}>{errors.approxNumOfAssets}</FormHelperText>
                                                )}
                                            </Box>
                                            <Box sx={formikFormStyles.checkboxTextContainer}>
                                                <Checkbox onChange={handleChange} color="secondary" sx={formikFormStyles.checkbox} checked={checked} name="checkbox"
                                                />
                                                <Typography sx={{ ...formikFormStyles.IAgreeText, color: textColor }}>I agree with <Box sx={{ ...formikFormStyles.privacyPolicyText, color: textColor }} component="span" >Privacy Policy and Terms & Conditions</Box></Typography>
                                            </Box>
                                            <Button sx={formikFormStyles.createAccountBtn} onClick={onClickCreateAccountButton}>Create Account</Button>
                                        </Box>
                                    </Form>
                                )}
                            </Formik>
                            <Typography sx={{ ...formikFormStyles.IAgreeText, ...formikFormStyles.alreadyText }}>Already have an account ? <Box sx={formikFormStyles.privacyPolicyText} component="span">log in</Box></Typography>
                        </Box>
                    </Box>

                </Box>
            </Box>

        </Box>
    )
}


export default FormikForm