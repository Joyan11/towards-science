/** @format */

import { watchListReducer } from "../watchlist-reducer";

/** @format */
describe("Testing like list", () => {
  test("add a video to watch list", () => {
    const initialState = {
      watchList: [],
    };

    const action = {
      type: "ADD_TO_WATCHLIST",
      payload: [
        {
          _id: "123",
          name: "video name",
          category: "others",
        },
      ],
    };

    let state = watchListReducer(initialState, action);

    expect(state).toEqual({
      watchList: [
        {
          _id: "123",
          name: "video name",
          category: "others",
        },
      ],
    });

    const action2 = {
      type: "ADD_TO_WATCHLIST",
      payload: [
        {
          _id: "123",
          name: "video name",
          category: "others",
        },
        {
          _id: "124",
          name: "video name 2",
          category: "others",
        },
      ],
    };

    state = watchListReducer(state, action2);

    expect(state).toEqual({
      watchList: [
        {
          _id: "123",
          name: "video name",
          category: "others",
        },
        {
          _id: "124",
          name: "video name 2",
          category: "others",
        },
      ],
    });
  });

  test("remove a video form watchlist", () => {
    const initialState = {
      watchList: [
        {
          _id: "123",
          name: "video name",
          category: "others",
        },
        {
          _id: "124",
          name: "video name 2",
          category: "others",
        },
      ],
    };

    const action = {
      type: "REMOVE_FROM_WATCHLIST",
      payload: "123",
    };

    let state = watchListReducer(initialState, action);

    expect(state).toEqual({
      watchList: [
        {
          _id: "124",
          name: "video name 2",
          category: "others",
        },
      ],
    });
  });

  test("reset like watchlist", () => {
    const initialState = {
      watchList: [
        {
          _id: "123",
          name: "video name",
          category: "others",
        },
        {
          _id: "124",
          name: "video name 2",
          category: "others",
        },
      ],
    };

    const action = {
      type: "RESET",
    };

    let state = watchListReducer(initialState, action);

    expect(state).toEqual({
      watchList: [],
    });
  });
});
