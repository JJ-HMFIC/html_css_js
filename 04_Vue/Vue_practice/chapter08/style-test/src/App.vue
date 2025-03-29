<!-- <template>
  <Child3 />
  <Child2></Child2>
  <Child1></Child1>
</template>
<script>
import Child1 from './components/Child1.vue';
import Child2 from './components/Child2.vue';
import Child3 from './components/Child3.vue';

export default {
  name: 'App',
  components: { Child1, Child2, Child3 },
};
</script>
 -->
<template>
    <div>
        <NoSlotTest />
        <SlotTest></SlotTest>
        <NamedSlotTest></NamedSlotTest>
    </div>
</template>
<script>
import NoSlotTest from "./components/NoSlotTest.vue";
import SlotTest from "./components/SlotTest.vue";
import NamedSlotTest from "./components/NamedSlotTest.vue";
export default {
    name: "App",
    components: { NoSlotTest, SlotTest,NamedSlotTest },
};
</script>
