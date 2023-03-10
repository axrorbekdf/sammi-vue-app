<template>
    <div class="form-floating mb-3">
        <input :type="type" class="form-control" :id="id" :placeholder="label">
        <label :for="id">{{ label }}</label>
        <span style="color: red;">{{ errors }}</span>
    </div>
</template>
<script>
export default {
    name: 'Input',
    props: {
        label: String,
        type: String,
        id: String,
        error: String,
    },
    computed: {
        errors(){
            console.log(this.error)
            return this.error
        }
    }
}
</script>
<style>
    
</style>