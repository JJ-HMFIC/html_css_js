<template>
    <div>
        x : <input type="text" v-model.number="x" />
        <br />
        결과 : {{ result }}
    </div>
</template>

<script>
import { ref, watch } from "vue";
export default {
    name: "Cal5",
    setup() {
        // 기본형 데이터는 반응성을 띄기 위해 ref로 감싸준다
        const x = ref(0);
        const result = ref(0);
        // watch는 변경 전 후 데이터를 처리할 수 있다
        // watch(감시하려는 데이터 , 처리함수)
        // 받아온 데이터들은 모두 .value 처리가 되어있는 데이터다
        watch(x, (current, old) => {
            console.log(`${old} -> ${current}`);
            result.value = current * 2;
        });
        return { x, result };
    },
};
</script>
