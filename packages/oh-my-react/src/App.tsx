import React, { useState, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import TodoList from './TodoList'
import { useTodos } from './hooks'

/**
 * 提取todoList组件
 * 自定义hooks
 * todoFilter 过滤组件
 * css module
 * classnames
 * styled-components
 */

const STORAGE_KEY = "todomvc-react"
export type Todo = { id: number, title: string, completed: boolean }
export const todoStorage = {
  fetch() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
  },
  save(todos: Todo[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }
}
export default function App() {
  const { todos, addTodos, updateTodos, removeTodo } = useTodos(todoStorage.fetch())



  // 表示新增的待办事项的名称
  const [newTodo, setNewTodo] = useState("");
  const changeNewTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };
  // 用户回车且输入框有内容则添加一个新待办
  const onAddTodo = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter" && newTodo) {
      addTodos(newTodo)
      setNewTodo("")
    }
  };

  return (
    <div className="App">
      <h2>待办事项</h2>
      <div>
        <input
          className="new-todo"
          autoFocus
          autoComplete="off"
          placeholder="该学啥了?"
          value={newTodo}
          onChange={changeNewTodo}
          onKeyUp={e => onAddTodo(e)}
        />
      </div>
      <TodoList {...{ todos, removeTodo, updateTodos }} ></TodoList>
    </div>
  );
}
