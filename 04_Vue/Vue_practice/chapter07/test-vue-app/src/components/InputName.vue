<template>
    <div style="border : solid 1px gray; padding : 5px"></div>
    이름 <input type="text" v-model="name" />
    <button @click="$emit('nameChanged', { name })">이벤트 발신</button>
</template>

<script>
export default {
    name: 'InputName',
    data() {
        return { name: '' };
    }

};
</script>