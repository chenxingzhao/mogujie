<template>
   <div id="tab">
     <slot></slot>
   </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>
   #tab{
   display: flex;
   background-color: #f5f5f5;
   position: fixed;
   bottom: -1px;
   left: 0;
   right:0;
   box-shadow: 0 -2px 2px rgba(169,169,169,.1);
}

</style>
