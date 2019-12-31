<template>
  <div class="app">
    {{message}}
    <router-view/>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      
    }
  },
  computed: {
    message(){
      const mess = 'Okesd';
      return mess;
    }
  }
}
</script>