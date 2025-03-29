<template>
    <div>
        <h2>메뉴 선택</h2>
        <div class="menu-list">
            <button v-for="menu in menus" @click="selectDrink(menu.name)" class="menu-button">
                {{ menu.name }} ({{ menu.price }}원)</button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'MenuList',
    props: {
        menus: {
            type: Array,
            required: true,
        },
    },
    methods: {
        selectDrink(drink) {
            this.$emit('select-drink', drink);
        }
    },
}
</script>

<style>
.menu-list {
    margin-top: 10px;
}

.menu-button {
    margin: 5px;
    padding: 10px;
    cursor: pointer;
    background-color: #f0f0f0;
    border: 1px solid #ddd;
    border-radius: 5px;
    transition: all 0.2s ease;
}

.menu-button:hover {
    background-color: #e0e0e0;
}

.active-button {
    border: 2px solid #007bff;
    background-color: #f0f8ff;
    font-weight: bold;
}
</style>