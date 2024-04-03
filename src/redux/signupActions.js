import { v4 as uuidv4 } from 'uuid';

export const SIGNUP = 'SIGNUP';
export const SET_CURRENT_USER_ID = 'SET_CURRENT_USER_ID';
export const UPDATE_USER_LANGUAGE = 'UPDATE_USER_LANGUAGE';
export const UPDATE_USER_CONTACT_DETAILS = 'UPDATE_USER_CONTACT_DETAILS';
export const UPDATE_USER_COMPANY_DETAILS = 'UPDATE_USER_COMPANY_DETAILS';
export const UPDATE_USER_COMPANY_TYPE = 'UPDATE_USER_COMPANY_TYPE';
export const UPDATE_USER_WEBSITE_URL = 'UPDATE_USER_WEBSITE_URL';
export const UPDATE_USER_COMPANY_LOGO = 'UPDATE_USER_COMPANY_LOGO';
export const UPDATE_USER_PRODUCTS = 'UPDATE_USER_PRODUCTS';

export const signup = (data) => (dispatch) => {
    const id = uuidv4(); // Generate a unique ID

    dispatch({
        type: SIGNUP,
        payload: { id, data },
    });
    dispatch({
        type: SET_CURRENT_USER_ID,
        payload: id,
    });
    return id;
};

export const updateUserLanguage = (id, language) => ({
    type: UPDATE_USER_LANGUAGE,
    payload: { id, language },
});

export const updateUserContactDetails = (id, contactDetails) => ({
    type: UPDATE_USER_CONTACT_DETAILS,
    payload: { id, contactDetails },
});
export const updateUserCompanyDetails = (id, companyDetails) => ({
    type: UPDATE_USER_COMPANY_DETAILS,
    payload: { id, companyDetails },
});
export const updateUserCompanyType = (id, companyType) => ({
    type: UPDATE_USER_COMPANY_TYPE,
    payload: { id, companyType },
});
export const updateUserWebsiteUrl = (id, websiteUrl) => ({
    type: UPDATE_USER_WEBSITE_URL,
    payload: { id, websiteUrl },
});

export const updateUserCompanyLogo = (id, companyLogo) => ({
    type: UPDATE_USER_COMPANY_LOGO,
    payload: { id, companyLogo },
});
export const updateUserProducts = (id, products) => ({
    type: UPDATE_USER_PRODUCTS,
    payload: { id, products },
});