/** @format */

import { likeReducer } from "../like-reducer";

/** @format */
describe("Testing like list", () => {
  test("add a liked video to list", () => {
    const initialState = {
      likeList: [],
    };

    const action = {
      type: "ADD_TO_LIKES",
      payload: [
        {
          _id: "123",
          name: "video name",
          category: "others",
        },
      ],
    };

    let state = likeReducer(initialState, action);

    expect(state).toEqual({
      likeList: [
        {
          _id: "123",
          name: "video name",
          category: "others",
        },
      ],
    });

    const action2 = {
      type: "ADD_TO_LIKES",
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

    state = likeReducer(state, action2);

    expect(state).toEqual({
      likeList: [
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

  test("remove a video form likes", () => {
    const initialState = {
      likeList: [
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
      type: "REMOVE_FROM_LIKES",
      payload: "123",
    };

    let state = likeReducer(initialState, action);

    expect(state).toEqual({
      likeList: [
        {
          _id: "124",
          name: "video name 2",
          category: "others",
        },
      ],
    });
  });

  test("reset like list", () => {
    const initialState = {
      likeList: [
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

    let state = likeReducer(initialState, action);

    expect(state).toEqual({
      likeList: [],
    });
  });
});
