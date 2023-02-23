<template>
  <div class="clearContainer">
    <button type="button" class="clearAll" @click="clearTodo">전체삭제</button>
  </div>
</template>
<script>

export default{
  name:'TodoFooter',
  methods:{
    clearTodo(){
      this.$emit('removeAll');
    }
  }
}

</script>
<style>
.clearContainer{
  height: 40px;
  padding: 40px 0;
}
.clearAll{
  width: 200px;
  height: 50px;
  line-height: 50px;
  background: #caf;
  border: 0px none;
  border-radius: 5px;
  color: #fff;
}
</style>