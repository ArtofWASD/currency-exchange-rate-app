<template>
    <div>
        <input type="text" :value="modelValue" @input="updateInput" class="rounded py-1 px-5">
    </div>
</template>
<script>
export default {
    props:{
        modelValue:[String, Number]
    },
    methods:{
        updateInput(event){
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>