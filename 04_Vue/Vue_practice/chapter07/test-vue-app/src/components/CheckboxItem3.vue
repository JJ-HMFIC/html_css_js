<template>
    <li><input type="checkbox" :checked="checked"> {{ id }} - {{ name }}
    </li>
</template>

<script>
export default {
    name: 'CheckboxItem3',
    props: {
        id : [Number,String],
        name : String,
        checked : {
            type : Boolean,
            required : false,
            default : false,
        }
    }

};
</script>