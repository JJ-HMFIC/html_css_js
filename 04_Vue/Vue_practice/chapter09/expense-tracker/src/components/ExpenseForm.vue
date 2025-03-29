<template>
    <div class="input-box">
        <input type="text" v-model="item" placeholder="항목명 입력" />
        <input type="text" v-model.number="amount" placeholder="0" />
        <select v-model="category">
            <option>식비</option>
            <option>교통비</option>
            <option>쇼핑</option>
        </select>
        <button @click="addExpense">추가</button>
    </div>
</template>

<script>
import { ref } from "vue";
export default {
    name: "ExpenseForm",
    emits: [],
    setup(props, context) {
        const item = ref("");
        const amount = ref(0);
        const category = ref("식비");
        const addExpense = () => {
            context.emit("add-expense", {
                item: item.value,
                amount: amount.value,
                category: category.value,
            });
            item.value = "";
            amount.value = 0;
        };

         return { item, amount, addExpense };
    },
};
</script>

<style scoped>
.input-box {
    display: flex;
    gap: 8px;
    margin: 10px 0;
    justify-content: center;
}

input {
    padding: 10px;
    margin: 5px;
    border: none;
    border-radius: 8px;
    background-color: #333;
    color: #f0f0f0;
}

button {
    background-color: #00cec9;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.2s ease;
}

button:hover {
    background-color: #0984e3;
}
</style>
