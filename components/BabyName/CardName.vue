
<script setup lang="ts">
    interface NameProps {
        names: string[]
    }
    const props= defineProps<NameProps>()

    const emit= defineEmits(["remove"])
    const removeName= (index: number)=> {
        emit("remove", index);
    }
</script>
<template>
  <div class="selected-names">
        <span class="name" v-for="(name, index) in names" :key="index">
            {{ name }}<i @click="removeName(index)" class="icon-remove"> X </i>
        </span>
    </div>
</template>

<style>
.selected-names {
    margin-top: 2em;
}
span.name {
    padding: 0.5em 2.5em 0.5em 1em;
    margin: 0 0.5em;
    border-radius: 1em;
    background-color: rgb(84, 48, 244);
    color: white;
    position: relative;
}
.icon-remove {
    position: absolute;
    right: 5px;
    font-size: 10px;
    top: 6px;
    cursor: pointer;
    padding: 5px;
}
</style>