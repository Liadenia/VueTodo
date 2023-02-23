<template>
  <div class="modal-mask" @click="$emit('close')">
    <div class="modal-wrapper">
      <div class="modal-header">
        <slot name="header">주의</slot>
      </div>
      <div class="modal-footer">
        <slot name="footer">입력하세요</slot>
      </div>
    </div>
  </div>
</template>
<script>

  export default{
    name:'ErrorModal'
  }

</script>
<style>
.modal-mask{
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgb(0,0,0,0.7);
  /* transition: ; */
}
.modal-wrapper{
  width: 300px;
  padding: 20px 30px;
  background: #fff;
  border-radius: 8px;
  margin: 40px auto;
}
.modal-header{
  color: #f60;
  margin-bottom: 20px;
}
.modal-footer{
  font-size: 1.5rem;
  
}
</style>