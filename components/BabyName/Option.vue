
<script setup lang="ts">
    import { Gender, Popularity, Length } from '@/data/names'
    interface OptionProps {
        option: {
            title: string;
            category: string,
            buttons: Gender[] | Popularity[] | Length[]
        };
        options: {
            gender: Gender,
            popularity: Popularity,
            length: Length
        }
    }

    const props= defineProps<OptionProps>()
</script>
<template>
    <div class="gender-option"> 
        <h4>{{ option.title }}</h4>               
        <span class="btn"
        v-for=" (value, index) in option.buttons"
        :key="index"
        :class="options[option.category] === value && 'option-active'"
        @click="options[option.category]= value"
        >{{ value }}</span> 
    </div>
</template>


<style>
span.btn {
    padding: 0.4em 1em;
    margin: 0 0.5em;
    border-radius: 1em;
    background-color: white;
    /* border: 1px solid #000; */
    cursor: pointer;
}

span.btn.option-active {
    background-color: #000 ;
    color: #fff
}
</style>