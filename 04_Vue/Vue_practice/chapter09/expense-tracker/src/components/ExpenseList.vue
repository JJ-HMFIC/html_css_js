<template>
    <div class="container">
        <ul>
            <li v-for="(expense, index) in expenses" :key="index">
                {{ expense.item }} : {{ formatCurrency(expense.amount) }}원
                <button @click="deleteExpense(index)" class="delete-btn">❌</button>
            </li>
        </ul>
    </div>
</template>
<script setup>
import { defineProps } from "vue";
const props = defineProps({
    expenses: {
        type: Array,
        required: true,
    },
});
const formatCurrency = (value) => {
    return value.toLocaleString("ko-kr");
};
const emit = defineEmits(["deleteExpense"]);

const deleteExpense = (index) => {
    emit("deleteExpense", index);
};
</script>

<style scoped>
li {
    background-color: #333;
    color: #f0f0f0;
    margin: 5px 0;
    padding: 12px;
    border-radius: 8px;
    text-align: left;
    list-style-type: none;
    font-size: 1.1rem;
}
.delete-btn {
  background: none;
  border: none;
  color: red;
  font-size: 1.2rem;
  cursor: pointer;
}
</style>
