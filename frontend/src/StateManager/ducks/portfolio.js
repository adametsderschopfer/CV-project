import axios from "axios";

/* ACTION TYPES */
export const LOADING_ON = "APP/LOADING_ON";
export const LOADING_OFF = "APP/LOADING_OFF";

export const GET_ABOUT = "FETCH/GET_ABOUT";
export const GET_BOOKS = "FETCH/GET_BOOKS";
export const GET_PROJECTS = "FETCH/GET_PROJECTS";
export const GET_WORK_EXP = "FETCH/GET_WORK_EXP";
export const GET_TECHS = "FETCH/GET_TECHS";
export const GET_CERTS = "FETCH/GET_CERTS";
export const GET_CONTACTS = "FETCH/GET_CONTACTS";
export const GET_REFERENCES = "FETCH/GET_REFERENCES";

export const IS_NOTHING = "APP/IS_NOTHING";

/* Actions */

export function getDataAction(distributedType) {
  function typeSelection(_type) {
    const routeStart = "/api/portfolio/";

    switch (_type) {
      case GET_ABOUT:
        return {
          type: GET_ABOUT,
          route: routeStart + "aboutme",
          field: "about",
        };
      case GET_BOOKS:
        return { type: GET_BOOKS, route: routeStart + "books", field: "books" };
      case GET_PROJECTS:
        return {
          type: GET_PROJECTS,
          route: routeStart + "projects",
          field: "projects",
        };
      case GET_WORK_EXP:
        return {
          type: GET_WORK_EXP,
          route: routeStart + "workexp",
          field: "workexps",
        };
      case GET_TECHS:
        return {
          type: GET_TECHS,
          route: routeStart + "technologies",
          field: "techs",
        };
      case GET_CERTS:
        return { type: GET_CERTS, route: routeStart + "certs", field: "certs" };
      case GET_CONTACTS:
        return {
          type: GET_CONTACTS,
          route: routeStart + "contacts",
          field: "contacts",
        };
      case GET_REFERENCES:
        return {
          type: GET_REFERENCES,
          route: routeStart + "references",
          field: "references",
        };

      default:
        return undefined;
    }
  }

  return async (dispatch) => {
    if (!distributedType) {
      throw new Error("Action type is not found.");
    }

    const { type, route, field } = typeSelection(distributedType);

    await dispatch({ type: LOADING_ON });

    try {
      const { data } = await axios.get(route);

      if (data instanceof Array && !data.length) {
        await dispatch({ type: IS_NOTHING, whereNothing: field });
      }

      await dispatch({ type, [field]: { data } });
    } catch (error) {
      console.log(error);
    }

    await dispatch({ type: LOADING_OFF });
  };
}

/* Reducers */

const initialState = {
  about: { data: {} },
  books: { data: [], nothing: false },
  projects: { data: [], nothing: false },
  workexps: { data: [], nothing: false },
  techs: { data: [], nothing: false },
  certs: { data: [], nothing: false },
  contacts: { data: [], nothing: false },
  references: { data: [], nothing: false },

  loading: true,
};

export function portfolio(state = initialState, { type, ...action }) {
  switch (type) {
    case LOADING_ON:
      return { ...state, loading: true };
    case LOADING_OFF:
      return { ...state, loading: false };

    case IS_NOTHING:
      return { ...state, [action.whereNothing]: { nothing: true } };

    case GET_ABOUT:
      return { ...state, about: { data: action.about.data } };

    case GET_BOOKS:
      return { ...state, books: { ...state.books, data: action.books.data } };

    case GET_PROJECTS:
      return {
        ...state,
        projects: { ...state.projects, data: action.projects.data },
      };

    case GET_WORK_EXP:
      return {
        ...state,
        workexps: { ...state.workexps, data: action.workexps.data },
      };

    case GET_TECHS:
      return { ...state, techs: { ...state.techs, data: action.techs.data } };

    case GET_CERTS:
      return { ...state, certs: { ...state.certs, data: action.certs.data } };

    case GET_CONTACTS:
      return {
        ...state,
        contacts: { ...state.contacts, data: action.contacts.data },
      };

    case GET_REFERENCES:
      return {
        ...state,
        references: { ...state.references, data: action.references.data },
      };

    default:
      return state;
  }
}
