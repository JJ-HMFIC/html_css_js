<template>
  <div>
    <h2>App 컴포넌트</h2>
    <hr>
    <ul>
      <CheckboxItem2 v-for="idol in idols" :key="idol.id" 
      :idol = 'idol'/>
    </ul>
  </div>
</template>

<script>
import CheckboxItem2 from './components/CheckboxItem2.vue';
export default {
  name: 'App2',
  components: { CheckboxItem2 },
  data() {
    return {
      idols: [
        { id: 1, name: "BTS", checked: true },
        { id: 2, name: "Black Pink", checked: false },
        { id: 3, name: "EXO", checked: false },
        { id: 4, name: "ITZY", checked: false },
      ]
    }
  }
};
</script>