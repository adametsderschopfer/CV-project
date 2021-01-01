import axios from "axios";

/* ACTIO TYPES */

export const FORM_LOADING_ON = "APP/FORM_LOADING_ON";
export const FORM_LOADING_OFF = "APP/FORM_LOADING_OFF";
export const EMAIL_WAS_SENDED = "APP/EMAIL_WAS_SENDED";

export const IS_ERROR = "APP/IS_ERROR";
export const CANCEL_IS_ERROR = "APP/CANCEL_IS_ERROR";

/* Actions */

export function sendEmail(formData) {
  return async (dispatch) => {
    dispatch({ type: FORM_LOADING_ON });

    try {
      await axios.post("/api/portfolio/feedback", formData);
      dispatch({ type: EMAIL_WAS_SENDED });
    } catch (error) {
      console.log(error);
      dispatch({ type: IS_ERROR });
    }

    dispatch({ type: FORM_LOADING_OFF });
  };
}

/* Reducers */

const initialState = {
  formLoading: false,
  sended: false,
  isError: false,
  msg: "",
};

export function contact(state = initialState, { type }) {
  switch (type) {
    case FORM_LOADING_ON:
      return { ...state, formLoading: true };

    case FORM_LOADING_OFF:
      return { ...state, formLoading: false };

    case IS_ERROR:
      return {
        ...state,
        isError: true,
        msg: `Произошла ошибка при отправке сообщения, повторите попытку вновь.`,
      };

    case CANCEL_IS_ERROR:
      return { ...state, isError: false };

    case EMAIL_WAS_SENDED:
      return { ...state, sended: true, msg: `Сообщение отправленно успешно.` };

    default:
      return state;
  }
}
