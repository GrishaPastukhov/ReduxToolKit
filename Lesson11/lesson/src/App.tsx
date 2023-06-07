import React from "react";
import "./App.css";
import { useDispatch, useSelector, useStore } from "react-redux";
import {
  addCashAction,
  addUserAction,
  changeNickAction,
  getCashAction,
  removeUserAction,
} from "./store/actions";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state: any) => state.cash.cash);
  const nick = useSelector((state: any) => state.nick.username);
  const users = useSelector((state: any) => state.users.users);
  const store = useStore();

  console.log(store.getState());

  const addCash = (cash: number) => {
    dispatch(addCashAction(cash));
  };

  const getCash = (cash: number) => {
    dispatch(getCashAction(cash));
  };

  const changeNick = (nick: string) => {
    dispatch(changeNickAction(nick));
  };

  const addUser = (user: string) => {
    dispatch(addUserAction(user));
  };

  const removeUser = (user: string) => {
    dispatch(removeUserAction(user));
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
