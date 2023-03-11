<template>
    <ul class="list-group mb-3">
        <li 
            v-for="errorMessage in errorMessages" 
            :key="errorMessage" 
            class="list-group-item list-group-item-action list-group-item-danger"
            style="font-size: 12px;"
        >
            {{ errorMessage }}
        </li>
    </ul>
</template>
<script>
export default {
    props:{
        validationError:{
            type: Object,
            required: true
        }
    },
    computed: {
        errorMessages(){
            return Object.keys(this.validationError).map(name => {
                const msg = this.validationError[name].join(', ')
                return `${name} ${msg}`
            })
        }
    }
}
</script>
<style>
    
</style>