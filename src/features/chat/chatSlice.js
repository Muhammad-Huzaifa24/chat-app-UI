import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedChat: null,
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
    },
    // Add more reducers as needed
    // clearSelectedChat: (state) => {
    //   state.selectedChat = null;
    // },
  },
});

export const { setSelectedChat } = chatSlice.actions;

// Selectors
export const selectSelectedChat = (state) => state.chat.selectedChat;

export default chatSlice.reducer;