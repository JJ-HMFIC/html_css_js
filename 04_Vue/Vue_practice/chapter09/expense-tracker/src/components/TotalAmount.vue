<template>
    <div class="container">
        <h2>📊 총 지출: {{ formatNumber(total) }}</h2>
    </div>
</template>
<script setup>
import { defineProps } from "vue";

const props = defineProps({
    total: {
        type: Number,
        required: true,
    },
    formatNumber: {
        type: Function,
        required: true,
    },
});
</script>
