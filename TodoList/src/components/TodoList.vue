<template>
  <section>
    <transition-group name="list" tag="ul">
      <li v-for="(data,idx) in propsData" :key="data">
        {{ data }}
        <button @click="removeTodo(data,idx)" class="removeBtn" type="button">-</button>
        <!-- removeTodo event -->
      </li>
    </transition-group>
  </section>
</template>
<script>

export default{
  name:'TodoList',
  props:['propsData'],
  methods:{
    removeTodo(todoItem, index){
      this.$emit('removeTodo', todoItem, index);
    }
  }
}

</script>
<style>
  ul{
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: left;
  }
  li{
    list-style: none;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.6rem 0;
    padding: 0 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .removeBtn{
    margin-left: auto;
    color: #d44;
    height: 28px;
    width: 28px;
  }
  .list-enter-active, .list-leave-active{
    transition: all .3s;
  }
  .list-enter-from{
    opacity: 0;
    transform: translateY(-20px);
  }
  .list-leave-to{
    opacity: 0;
    transform: translateY(20px);
  }
</style>