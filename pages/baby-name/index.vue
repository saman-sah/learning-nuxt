<script setup lang="ts">
import { Gender, Popularity, Length, names } from '@/data/names'
interface OptionState {
    gender: Gender;
    popularity:Popularity ;
    length:Length;
}
const options= reactive<OptionState>({
    gender: Gender.GIRL,
    popularity: Popularity.TRENDY,
    length: Length.SHORT
})

const computeSelectedNames= () => {
    const filteredNames= names.filter((name)=> name.gender === options.gender)
    .filter((name)=> name.popularity=== options.popularity)
    .filter((name)=> {
        if(options.length === Length.ALL)  return true
        else return name.length === options.length
    })
    selectedNames.value= filteredNames.map((name)=> name.name)
}

const selectedNames= ref<string[]>([]);

const optionArray = [
    {
        title: "Choose a Gender",
        category: "gender",
        buttons : [
            Gender.BOY,
            Gender.GIRL,
            Gender.UNISEX
        ]
    },
    {
        title: "Choose name's popularity",
        category: "popularity",
        buttons : [
            Popularity.UNIQUE,
            Popularity.TRENDY, 
        ]
    },
    {
        title: "Choose name's length",
        category: "length",
        buttons : [
            Length.LONG,
            Length.ALL,
            Length.SHORT 
        ]
    }
]

const removeName= (index: number) => {
    const filteredNames= [...selectedNames.value];
    filteredNames.splice(index, 1);
    selectedNames.value= filteredNames
}
</script>

<template>
    <div class="container">
        <h1 class="text-center">Baby name generator</h1>
        <h5 class="text-center">Choose your Options and click the "Fine Names" Button</h5>
        <div class="options-container text-center">
            <BabyNameOption 
            v-for="option in optionArray" 
            :option=" option"
            :options="options"
            :key="option.title" />

            <div class="btn-find-names">
                <button @click="computeSelectedNames()">Find Names</button>
            </div>
        </div>
        
        <BabyNameCardName :names="selectedNames" @remove="removeName($event)"/>
    </div>
  
</template>



<style scoped>
.container,
.options-container {
    max-width: 800%;
    width: 90%;
    margin: 0 auto
}
.text-center {
    text-align: center;
}
.options-container {
    background-color: aqua;
    padding: 2em;
    border-radius: 1em;
}
.btn-find-names {
    margin-top: 3em;
}
.btn-find-names button {
    padding: 0.5em 1em;
    background-color: coral;
    border: 0;
    border-radius: 1em;    
    font-size: 18px;
    font-weight: 600;
}

</style>