import { useMutation } from "react-query";
import { TodoInterface } from "../../interfaces";
import axios from "axios";

const todoServer = "http://localhost:5000/todos";

export const usePatch = () => {
  return useMutation(async (todoID: string) => {
    return await axios.put(`${todoServer}/complete/${todoID}`);
  });
};

export const usePost = () => {
  return useMutation((todo: TodoInterface.NewTodo) => {
    return axios.post(`${todoServer}/new`, todo);
  });
};

export const useRemove = () => {
  return useMutation(async (id: string) => {
    return await axios.delete(`${todoServer}/remove/${id}`);
  });
};

export const useUpdate = () => {
  return useMutation(async (reorderedTodo: TodoInterface.Todo[]) => {
    return await axios.patch(`${todoServer}/todo/complete/`, reorderedTodo);
  });
};
