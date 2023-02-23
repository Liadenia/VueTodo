<template>
  <div>
  <h1> Second Component </h1>
  <p>{{ $route.params.title }}</p>
  </div>
</template>

<script>
export default{
  name:'SecondComponent',
}
</script>