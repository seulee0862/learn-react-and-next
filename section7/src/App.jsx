import Header from "./component/Header";
import "./App.css";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";
import { useState, useReducer, useRef, useCallback } from "react";
import { TodoContext } from "./TodoContext";

const mockData = [
  {
    id: 0,
    isDone: true,
    content: "React 공부하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "React 음악듣기",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: true,
    content: "React 축구하기",
    createdDate: new Date().getTime(),
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE": {
      return [...state, action.data];
    }
    case "UPDATE": {
      return state.map((it) =>
        it.id === action.data ? { ...it, isDone: !it.isDone } : it
      );
    }
    case "DELETE": {
      return state.filter((it) => it.id !== action.data);
    }
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content,
        createdDate: new Date().getTime(),
      },
    });
  };

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      data: targetId,
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      data: targetId,
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <TodoContext.Provider
        value={{
          todos,
          onCreate,
          onUpdate,
          onDelete,
        }}
      >
        <TodoEditor />
        <TodoList />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
