import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const channelsAdapter = createEntityAdapter();

const initialState = channelsAdapter.getInitialState();

const slice = createSlice({
    name: 'channels',
    initialState,
    reducers: {
        addChannel: channelsAdapter.addOne,
        addChannels: channelsAdapter.addMany,
        removeChannel: channelsAdapter.removeOne,
        updateChannel: channelsAdapter.updateOne,
    }
})
export default slice.reducer;

export const {
    addChannel, addChannels, removeChannel, updateChannel,
  } = slice.actions;