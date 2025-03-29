<template>
    <div class="options-container">
        <h3>{{ selectedDrink }} 옵션 선택</h3>
        <!-- 사이즈 선택 -->
        <div>
            <label> <input type="radio" value="small" v-model="options.size" @change="emitOptions"> small</label>
            <label><input type="radio" value="medium" v-model="options.size" @change="emitOptions"> medium </label>
            <label><input type="radio" value="large" v-model="options.size" @change="emitOptions"> large</label>
        </div>
        <!-- 샷추가 -->
        <div>
            <label><input type="checkbox" v-model="options.extraShot" @change="emitOptions" :true-value="'추가함'"
                    :false-value="'없음'">샷 추가</label>
        </div>
        <!-- 얼음양 -->
        <div>
            <select @change="emitOptions" v-model="options.ice">
                <option value="적게">적게</option>
                <option value="보통">보통</option>
                <option value="많이">많이</option>
            </select>
        </div>
    </div>
</template>
<script>
export default {
    name: 'DrinkOptions',
    props: {
        selectedDrink: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            options: {
                size: 'medium',
                extraShot: false,
                ice: '보통',
            },
        }
    },
    methods: {
        emitOptions() {
            this.$emit('options-changed', { ...this.options });
        }
    },
}
</script>