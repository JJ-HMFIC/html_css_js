<template>
    <div>
        X: <input type="text" v-model.number="x" /><br />
        Y: <input type="text" v-model.number="y" /><br />
        <button @click="calcAdd">계산</button>
        <div>결과 : {{ result }}</div>
    </div>
</template>

<script>
import { ref } from "vue";

export default {
    name: "Calc2",
    setup() {
        // 기본형 데이터는 반응성을 띄기 위해 ref로 감싸준다
        const x = ref(10);
        const y = ref(20);
        const result = ref(30);

        const calcAdd = () => {
            result.value = x.value + y.value;
        };
        return { x, y, result, calcAdd };
    },
};
</script>
