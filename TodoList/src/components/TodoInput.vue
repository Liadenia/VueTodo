<template>
  <div class="inputBox">
    <input type="text" v-model="newTodoItem" placeholder="할 일을 입력하세요">
    <button type="button" class="addBtn" @click="addTodo">+</button>

    <ErrorModal v-if="showModal" @close="showModal=false">
      <template v-slot:header>주의하세요</template>
      <template v-slot:footer>
        할 일을 입력해주세요
        <button class="closeBtn" @click="showModal=false">닫기</button>
      </template>
    </ErrorModal>
  </div>
</template>
<script>
  import ErrorModal from "./ErrorModal.vue"

  export default{
    name:'TodoInput',
    data(){
      return{
          newTodoItem:'',
          showModal:false,
        }
    },
    methods:{
      addTodo(){
        if(this.newTodoItem!==""){
          let value = this.newTodoItem && this.newTodoItem.trim();
          this.$emit('addTodo', value); //app.vue에 전달(addTodo이벤트, @로 작성된 emit명칭(이벤트),전송데이터)
          this.newTodoItem='';
          this.clearInput();
        }else{
          this.showModal = true;
        }
    },
      clearInput(){
        this.newTodoItem='';
    }
  },
  components:{
    ErrorModal
  }
  }
  
</script>
<style>
</style>