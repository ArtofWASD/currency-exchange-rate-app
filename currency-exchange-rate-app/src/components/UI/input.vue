<template lang="">
    <div>
        <input type="text" :value="modelValue" @input="updateInput">
    </div>
</template>
<script>
export default {
    props:{
        modelValue:[Number]
    },

    data(){
        return{
            amount:''
        }
    },
    methods:{
        updateInput(event){
            this.$emit('update:ModelValue', event.target.value)
        }
    }
}
</script>
<style lang="">
    
</style>