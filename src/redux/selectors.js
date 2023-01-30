// import { isInContact } from 'utils/isInContact';

export const selectFilter = state => state.filter;
// export const selectFilteredContacts = state => {
//   if (!state.filter) {
//     return state.contacts.item;
//   } else {
//     return isInContact(state.contacts.item, state.filter);
//   }
// };

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
