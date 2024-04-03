import { SIGNUP } from "./signupActions";

const initialState = {
  formData: {},
  currentUserId: null,
};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.payload.id]: action.payload.data,
        },
      };
    case "SET_CURRENT_USER_ID":
      return {
        ...state,
        currentUserId: action.payload,
      };
    case "UPDATE_USER_LANGUAGE":
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.payload.id]: {
            ...state.formData[action.payload.id],
            language: action.payload.language,
          },
        },
      };
      case "UPDATE_USER_CONTACT_DETAILS":
    return {
        ...state,
        formData: {
            ...state.formData,
            [action.payload.id]: {
                ...state.formData[action.payload.id],
                contactDetails: action.payload.contactDetails,
            },
        },
    };
    case "UPDATE_USER_COMPANY_DETAILS":
    return {
        ...state,
        formData: {
            ...state.formData,
            [action.payload.id]: {
                ...state.formData[action.payload.id],
                companyDetails: action.payload.companyDetails,
            },
        },
    };
    case "UPDATE_USER_COMPANY_TYPE":
    return {
        ...state,
        formData: {
            ...state.formData,
            [action.payload.id]: {
                ...state.formData[action.payload.id],
                companyDetails: {
                    ...state.formData[action.payload.id]?.companyDetails,
                    companyType: action.payload.companyType,
                },
            },
        },
    };
    case "UPDATE_USER_WEBSITE_URL":
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.payload.id]: {
            ...state.formData[action.payload.id],
            websiteUrl: action.payload.websiteUrl,
          },
        },
      };

    case "UPDATE_USER_COMPANY_LOGO":
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.payload.id]: {
            ...state.formData[action.payload.id],
            companyLogo: action.payload.companyLogo,
          },
        },
      };
      case "UPDATE_USER_PRODUCTS":
  return {
    ...state,
    formData: {
      ...state.formData,
      [action.payload.id]: {
        ...state.formData[action.payload.id],
        products: action.payload.products,
      },
    },
  };

    default:
      return state;
  }
};

export default signupReducer;
