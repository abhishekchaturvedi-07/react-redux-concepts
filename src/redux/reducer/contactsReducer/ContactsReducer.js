import {
  CREATE_CONTACT,
  DELETE_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT,
  SELECT_CONTACT,
  CLEAR_CONTACT,
  DELETE_SELECTED_CONTACT,
} from "../../../utils/types";
const initialState = {
  contacts: [
    {
      id: 1,
      name: "Abhishek Chaturvedi ",
      username: "abhishek.chaturvedi",
      email: "abhishek.chaturvedi@netccecntric.biz",
      phone: "9999999999",
    },
    {
      id: 2,
      name: "Ramba Singhania ",
      username: "desouza.rambo",
      email: "rambo.desouza@abccomp.biz",
      phone: "876543572",
    },
    {
      id: 3,
      name: "Terry Jom",
      username: "terry.jom",
      email: "terry.jom@abccomp.biz",
      phone: "9999999999",
    },
    {
      id: 4,
      name: "Este R",
      username: "este.r",
      email: "este.r@abccomp.biz",
      phone: "656765568",
    },
  ],
  contact: null,
  selectedContacts: [],
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    case GET_CONTACT:
      let arr = state.contacts.filter(
        (contact) => contact.id === action.payload
      );
      arr = arr.values();
      for (let val of arr) {
        arr = val;
      }
      return {
        ...state,
        contact: arr,
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        ),
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case SELECT_CONTACT:
      return {
        ...state,
        selectedContacts: action.payload,
      };
    case CLEAR_CONTACT:
      return {
        ...state,
        selectedContacts: [],
      };
    case DELETE_SELECTED_CONTACT:
      return {
        ...state,
        contacts: [],
      };
    default:
      return state;
  }
};

export default contactsReducer;
