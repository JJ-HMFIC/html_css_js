<template>
    <li>
        <i :class="song.done ? icons.checked : icons.unchecked"></i>
        {{ song.title }}
    </li>
</template>

<script>
export default {
    name: "SongListItem",
    inject: ["icons"],
    props: ["song"],
};
</script>

<template>
    <ul>
        <SongListItem v-for="s in songs" :key="s.id" :song="s" />
    </ul>
    <div>체크된 곡 수 : {{ doneCount }}</div>
</template>
<script>
import SongListItem from "./SongListItem.vue";
export default {
    name: "SongList",
    components: {
        SongListItem,
    },
    props: ["songs"],
    inject: ["doneCount"],
};
</script>
