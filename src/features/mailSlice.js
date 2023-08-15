import { createSlice } from "@reduxjs/toolkit";

export const mailSlice = createSlice({
  name: "mail",
  initialState: {
    sendMailIsOpen: false,
  },
  reducers: {
    openSendMail: (state) => {
      state.sendMailIsOpen = true;
    },
    closeSendMail: (state) => {
      state.sendMailIsOpen = false;
    },
  },
});

export const { openSendMail, closeSendMail } = mailSlice.actions;

export const selectSendMailIsOpen = (state) => state.mail.sendMailIsOpen;

export default mailSlice.reducer;
