/** @format */

import { playlistReducer } from "../playlist-reducer";

describe("testing playlist", () => {
  test("testing create playlist", () => {
    const initialState = {
      playList: [],
    };

    const action = {
      type: "CREATE_PLAY_LIST",
      payload: [
        {
          list: [],
          name: "new playlist 1",
          _id: "123",
        },
      ],
    };

    let state = playlistReducer(initialState, action);

    expect(state).toEqual({
      playList: [
        {
          list: [],
          name: "new playlist 1",
          _id: "123",
        },
      ],
    });

    const action2 = {
      type: "CREATE_PLAY_LIST",
      payload: [
        {
          list: [],
          name: "new playlist 1",
          _id: "123",
        },
        {
          list: [],
          name: "new playlist 2",
          _id: "124",
        },
      ],
    };

    state = playlistReducer(state, action2);

    expect(state).toEqual({
      playList: [
        {
          list: [],
          name: "new playlist 1",
          _id: "123",
        },
        {
          list: [],
          name: "new playlist 2",
          _id: "124",
        },
      ],
    });
  });

  test("save video to playlist", () => {
    const initialState = {
      playList: [
        {
          list: [],
          name: "new playlist 1",
          _id: "123",
        },
        {
          list: [],
          name: "new playlist 2",
          _id: "124",
        },
      ],
    };

    const action = {
      type: "SAVE_TO_PLAYLIST",
      payload: [
        {
          list: [
            {
              _id: "abcd",
              name: "coronavirus video",
              category: "viruses",
            },
          ],
          name: "new playlist 1",
          _id: "123",
        },
        {
          list: [],
          name: "new playlist 2",
          _id: "124",
        },
      ],
    };
    let state = playlistReducer(initialState, action);

    expect(state).toEqual({
      playList: [
        {
          list: [
            {
              _id: "abcd",
              name: "coronavirus video",
              category: "viruses",
            },
          ],
          name: "new playlist 1",
          _id: "123",
        },
        {
          list: [],
          name: "new playlist 2",
          _id: "124",
        },
      ],
    });
  });

  test("remove video from playlist", () => {
    const initialState = {
      playList: [
        {
          list: [
            {
              _id: "abcd",
              name: "coronavirus video",
              category: "viruses",
            },
          ],
          name: "new playlist 1",
          _id: "123",
        },
        {
          list: [],
          name: "new playlist 2",
          _id: "124",
        },
      ],
    };

    const action = {
      type: "REMOVE_FROM_PLAYLIST",
      payload: [
        {
          list: [],
          name: "new playlist 1",
          _id: "123",
        },
        {
          list: [],
          name: "new playlist 2",
          _id: "124",
        },
      ],
    };

    let state = playlistReducer(initialState, action);

    expect(state).toEqual({
      playList: [
        {
          list: [],
          name: "new playlist 1",
          _id: "123",
        },
        {
          list: [],
          name: "new playlist 2",
          _id: "124",
        },
      ],
    });
  });

  test("remove delete a playlist", () => {
    const initialState = {
      playList: [
        {
          list: [
            {
              _id: "abcd",
              name: "coronavirus video",
              category: "viruses",
            },
          ],
          name: "new playlist 1",
          _id: "123",
        },
        {
          list: [],
          name: "new playlist 2",
          _id: "124",
        },
      ],
    };

    const action = {
      type: "REMOVE_FROM_PLAYLIST",
      payload: [
        {
          list: [],
          name: "new playlist 2",
          _id: "124",
        },
      ],
    };

    let state = playlistReducer(initialState, action);

    expect(state).toEqual({
      playList: [
        {
          list: [],
          name: "new playlist 2",
          _id: "124",
        },
      ],
    });
  });

  test("reset playlist", () => {
    const initialState = {
      playList: [
        {
          list: [],
          name: "new playlist 1",
          _id: "123",
        },
        {
          list: [],
          name: "new playlist 2",
          _id: "124",
        },
      ],
    };

    const action = {
      type: "REMOVE_FROM_PLAYLIST",
      payload: [],
    };

    let state = playlistReducer(initialState, action);

    expect(state).toEqual({
      playList: [],
    });
  });
});
