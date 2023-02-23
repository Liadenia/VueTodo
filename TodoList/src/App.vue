<template>
  <div id="todo">
    <header>
      <h1> TODO it! </h1>
    </header>
    <TodoInput @addTodo="addTodo"></TodoInput>
    <TodoList :propsData="todoItems" @removeTodo="removeTodo"></TodoList> <!--removeTodo-->
    <TodoFooter @removeAll="clearAll"></TodoFooter><!--clearAll-->
  </div>
</template>

<script>
import TodoFooter from './components/TodoFooter.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';

export default {
  name: 'App',
  data(){
    return{
      todoItems:[],
    }
  },
  methods:{
    addTodo(todoItem){
      localStorage.setItem(todoItem,todoItem);
      this.todoItems.push(todoItem);
    },
    clearAll(){
      localStorage.clear();
      this.todoItems = [];
    },
    removeTodo(todoItem, index){
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index,1);
    }
  },
  created(){ // data, component  인지 후 실행
    if(localStorage.length>0){
      for(let i=0; i<localStorage.length; i++){
        this.todoItems.push(localStorage.key(i));
      }
    }
  },
  // mounted(){ data, component 출력 후 실행 }
  components: {
    TodoFooter,
    TodoInput,
    TodoList
}
}
</script>

<style>
#app {
  text-align: center;
}
h1{
  color: #356;
  margin: 2.3rem 0 1.0rem;
}
</style>
