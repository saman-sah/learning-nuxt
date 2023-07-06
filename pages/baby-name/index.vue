<script setup lang="ts">

enum Gender {
    GIRL= 'Girl',
    BOY= 'Boy',
    UNISEX= 'Unisex'
}

enum Popularity {
    UNIQUE= 'Unique',
    TRENDY= 'Trendy',
}

enum Length {
    LONG= 'Long',
    ALL= 'All',
    SHORT= 'Short'
}

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
</script>

<template>
    <div class="container">
        <h1 class="text-center">Baby name generator</h1>
        <h5 class="text-center">Choose your Options and click the "Fine Names" Button</h5>
        <div class="options-container">
            
            <div class="gender-option"> 
                <h4>Choose a Gender</h4>               
                <span class="btn"
                :class="options.gender === Gender.BOY && 'option-active'"
                >Boys</span>
                <span class="btn"
                :class="options.gender === Gender.UNISEX && 'option-active'"
                >Unisex</span>
                <span class="btn"
                :class="options.gender === Gender.GIRL && 'option-active'"
                >Girls</span>   
            </div>
            <div class="popularity-option">  
                <h4>Choose name's popularity</h4>              
                <span class="btn"
                :class="options.popularity === Popularity.UNIQUE && 'option-active'"
                >Unique</span>
                <span class="btn"
                :class="options.popularity === Popularity.TRENDY && 'option-active'"
                >Trendy</span>
            </div>
            <div class="gender-option"> 
                <h4>Choose name's length</h4>               
                <span class="btn"
                :class="options.length === Length.LONG && 'option-active'"
                >Long</span>
                <span class="btn"
                :class="options.length === Length.ALL && 'option-active'"
                >All</span>
                <span class="btn"
                :class="options.length === Length.SHORT && 'option-active'"
                >Short</span>   
            </div>
                     
            <div class="btn-find-names">
                <button>Find Names</button>
            </div>
        </div>        
    </div>
  
</template>



<style scoped>
.container,
.options-container {
    max-width: 800%;
    width: 90%;
    margin: 0 auto
}
.text-center,
.options-container {
    text-align: center;
}
.options-container {
    background-color: aqua;
    padding: 2em;
    border-radius: 1em;
}
span.btn {
    padding: 0.4em 1em;
    margin: 0 0.5em;
    border-radius: 1em;
    background-color: white;
    /* border: 1px solid #000; */
}

span.btn.option-active {
    background-color: #000 ;
    color: #fff
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