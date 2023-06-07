import React from "react";
import "./App.css";
import { useDispatch, useSelector, useStore } from "react-redux";
import { GET_CASH, ADD_CASH } from "./store/cashReducer";
import { CHANGE_NICKNAME } from "./store/nickReducer";
import { ADD_USER, REMOVE_USER } from "./store/usersReducer";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state: any) => state.cash.cash);
  const nick = useSelector((state: any) => state.nick.username);
  const users = useSelector((state: any) => state.users.users);
  const store = useStore();

  console.log(store.getState());

  const addCash = (cash: number) => {
    dispatch(ADD_CASH(cash));
  };

  const getCash = (cash: number) => {
    dispatch(GET_CASH(cash));
  };

  const changeNick = (nick: string) => {
    dispatch(CHANGE_NICKNAME(nick));
  };

  const addUser = (user: string) => {
    dispatch(ADD_USER(user));
  };

  const removeUser = (user: string) => {
    dispatch(REMOVE_USER(user));
  };

  return (
    <div className='App'>
      <div>{cash}</div>
      <div>{nick}</div>
      <div>
        <button onClick={() => changeNick(prompt("Введите ник") || "Any")}>
          Сменить ник
        </button>
        <button onClick={() => addCash(Number(prompt("Введите сумму")))}>
          Положить деньги
        </button>
        <button onClick={() => getCash(Number(prompt("Введите сумму")))}>
          Снять деньги
        </button>
        <button onClick={() => addUser(prompt("Введите сумму") || "Any user")}>
          Добавить юзера
        </button>
      </div>
      {users.map((user: string) => {
        return (
          <div
            key={user}
            style={{ padding: "10px" }}
            onClick={() => {
              removeUser(user);
            }}>
            {user}
          </div>
        );
      })}
    </div>
  );
}

export default App;
