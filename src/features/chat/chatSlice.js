import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedChat: null,
  isChatSectionOpen: false,
  // You can add more state here as needed
  // chats: [],
  // loading: false,
  // error: null,
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setSelectedChat: (state, action) => {
      state.selectedChat = action.payload;
      state.isChatSectionOpen = true;
    },
    clearSelectedChat: (state) => {
      state.selectedChat = null;
      state.isChatSectionOpen = false; // Go back to contacts
    },
    setChatSectionOpen: (state, action) => {
      state.isChatSectionOpen = action.payload;
    }
    // Add more reducers as needed
    // clearSelectedChat: (state) => {
    //   state.selectedChat = null;
    // },
  },
});

export const { setSelectedChat, clearSelectedChat ,setChatSectionOpen } = chatSlice.actions;

// Selectors
export const selectSelectedChat = (state) => state.chat.selectedChat;

export const selectIsChatSectionOpen = (state) => state.chat.isChatSectionOpen;


export default chatSlice.reducer;