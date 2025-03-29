<script setup>
import LineReadyButton from "./components/LineReadyButton.vue";
</script>

<template>
    <div>
        <h1>improv-acting-lab 🎭</h1>
        <LineReadyButton @ready="handleReady">
            넌 강해졌다! 돌격해!
        </LineReadyButton>
    </div>
</template>

<script>
export default {
    name: "App",
    components: { LineReadyButton },
    methods: {
        handleReady(message) {
            console.log(message);
        },
    },
};
</script>
