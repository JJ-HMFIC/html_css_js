<template>
    <div>
        <!-- id, checked는 부모에게서 받은 props -->
        <!-- input이 변경될 때 check-changed라는 이벤트에 id와 현재 input 체크여부를 담아 부모에게 전송 -->
        <input
            type="checkbox"
            :value="id"
            :checked="checked"
            @change="
                $emit('check-changed', { id, checked: $event.target.checked })
            "
        />
        <slot>Item</slot>
    </div>
</template>
<script>
export default {
    name: "CheckBox1",
    props: ["id", "checked", "label"],
};
</script>
