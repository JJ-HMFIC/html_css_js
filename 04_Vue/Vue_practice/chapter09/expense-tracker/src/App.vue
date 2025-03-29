<template>
    <div class="container">
        <h1>💸 Simple Budget Diary</h1>
        <ExpenseForm @add-expense="addExpense"></ExpenseForm>
        <h2>🧾 지출 내역</h2>
        <!-- <ul>
            <li v-for="(expense, index) in expenses" :key="index">
                {{ expense.item }} : {{ formatCurrency(expense.amount) }}원
            </li>
        </ul> -->
        <ExpenseList
            :expenses="expenses"
            @delete-expense="deleteExpense"
        ></ExpenseList>
        <!-- <h2>📊 총 지출: {{ formatCurrency(totalExpense) }}원</h2> -->
        <h2>📊 카테고리별 지출 합계</h2>
        <ul>
            <li v-for="(amount, category) in expenses" :key="category">
                {{ category }} : {{ formatCurrency(amount) }} 원
            </li>
        </ul>
        <TotalAmount
            :format-number="formatCurrency"
            :total="totalExpense"
        ></TotalAmount>
    </div>
</template>

<script>
import { ref, computed } from "vue";
import ExpenseForm from "./components/ExpenseForm.vue";
import TotalAmount from "./components/TotalAmount.vue";
import ExpenseList from "./components/ExpenseList.vue";
export default {
    name: "App",
    components: { ExpenseForm, TotalAmount, ExpenseList },
    setup() {
        const expenses = ref([]);

        const addExpense = (expense) => {
            expenses.value.push(expense);
        };
        const deleteExpense = (index) => {
            expenses.value.splice(index, 1);
        };
        const totalExpense = computed(() => {
            return expenses.value.reduce(
                (sum, expense) => (sum += expense.amount),
                0
            );
        });
        const formatCurrency = (value) => {
            return "₩" + value.toLocaleString();
        };
        const categoryTotals = computed(() => {
            const totals = {};
            expenses.value.forEach((expense) => {
                if (!totals[expense.category]) totals[expense.category] = 0;
                totals[expense.category] += expense.amount;
            });
        });
        return {
            expenses,
            addExpense,
            totalExpense,
            formatCurrency,
            deleteExpense,
        };
    },
};
</script>

<style>
body {
    background-color: #121212;
    color: #00cec9;
    font-family: "Segoe UI", sans-serif;
}

.app {
    background-color: #1e1e1e;
    color: #f0f0f0;
    padding: 30px;
    font-family: "Segoe UI", sans-serif;
    max-width: 600px;
    margin: 50px auto;
    border-radius: 16px;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
    text-align: center;
}

h1 {
    font-size: 2rem;
    margin-bottom: 20px;
}

h2 {
    font-size: 1.5rem;
    margin: 15px 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    background-color: #333;
    color: #f0f0f0;
    margin: 5px 0;
    padding: 12px;
    border-radius: 8px;
    text-align: left;
}
</style>
