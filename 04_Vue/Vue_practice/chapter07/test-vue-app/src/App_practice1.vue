<template>
    <div class="container">
        <h1>카페 주문 앱</h1>
        <MenuList :menus="menuList" @select-drink='handleSelectedDrink'></MenuList>
        <div v-if="selectedDrink" class="selected-drink">
            선택한 음료 : {{ selectedDrink }}
        </div>
        <!-- 음료 옵션 선택 화면  -->
        <DrinkOptions v-if="selectedDrink" class="selected-options" @options-changed="updatedOptions" />
        <!-- 선택된 옵션 표시 -->
        <div v-if="selectedOptions" class="selected-options">
            <h4>현재 선택 옵션 :</h4>
            <p>사이즈 : {{ selectedOptions.size }}</p>
            <p>추가샷 : {{ selectedOptions.extraShot }}</p>
            <p>얼음 양 : {{ selectedOptions.ice }}</p>
        </div>
    </div>
</template>

<script>
import MenuList from './components/MenuList.vue';
import DrinkOptions from './components/DrinkOptions.vue';
export default {
    name: 'App',
    components: { DrinkOptions, MenuList },
    data() {
        return {
            menuList: [
                { name: "아메리카노", price: 4000 },
                { name: "카페라떼", price: 4500 },
                { name: "바닐라라떼", price: 4800 },
                { name: "콜드브루", price: 5000 }
            ],
            selectedDrink: null,
            selectedOptions: null,
        }
    },
    methods: {
        handleSelectedDrink(drink) {
            this.selectedDrink = drink;
        },
        updatedOptions(options) {
            this.selectedOptions = options;
        }
    }
};
</script>

<style>
.app-container {
    background-color: white;
    color: black;
    padding: 20px;
}

.selected-drink,
.selected-options {
    margin-top: 20px;
    padding: 10px;
    border: 1px solid lightgray;
    background-color: #f4f4f4;
}
</style>