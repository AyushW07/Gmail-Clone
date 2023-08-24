import { createSlice } from "@reduxjs/toolkit";

export const mailSlice = createSlice({
  name: "mail",
  initialState: {
    sendMailIsOpen: false,
    selectedMail: null,
  },
  reducers: {
    openSendMail: (state) => {
      state.sendMailIsOpen = true;
    },
    closeSendMail: (state) => {
      state.sendMailIsOpen = false;
    },
    selectMail: (state, action) => {
      state.selectedMail = action.payload;
    },
  },
});

export const { openSendMail, closeSendMail, selectMail } = mailSlice.actions;

export const selectSendMailIsOpen = (state) => state.mail.sendMailIsOpen;

export const selectOpenMail = (state) => state.mail.selectedMail;

export default mailSlice.reducer;
