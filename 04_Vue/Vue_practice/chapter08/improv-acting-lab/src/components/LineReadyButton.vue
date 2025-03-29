<template>
    <div>
        <button class="ready-button" @click="handleClick">
            🎬 대사 준비 완료
        </button>
        <p>버튼을 누른 횟수: {{ count }}회</p>
        <!-- <div class="slot-box">
        <slot>여기에 서윤이의 코멘트가 들어갑니다.</slot> -->
    </div>
</template>

<script>
export default {
    name: "LineReadyButton",
    data() {
        return {
            count: 0,
        };
    },
    methods: {
        handleClick() {
            this.count++;
            this.$emit("ready", `대사 준비 완료! (총 ${this.count}회 눌림)`);
        },
    },
};
</script>

<style scoped>
.ready-button {
    background-color: #ff7675;
    color: white;
    border: none;
    border-radius: 12px;
    padding: 12px 24px;
    margin: 10px;
    cursor: pointer;
    font-size: 18px;
    transition: background-color 0.3s;
}
.ready-button:hover {
    background-color: #d63031;
}
.slot-box {
    background-color: #f1f2f6;
    border: 1px solid #dfe4ea;
    border-radius: 12px;
    padding: 14px;
    margin: 20px auto;
    max-width: 400px;
    color: #333;
}
</style>
