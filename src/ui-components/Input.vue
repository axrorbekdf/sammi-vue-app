<template>
    <div class="form-floating mb-3">
        <input :type="type" class="form-control" :id="id" :placeholder="label">
        <label :for="id">{{ label }}</label>
    </div>
</template>
<script>
export default {
    name: 'Input',
    props: {
        label: String,
        type: String,
        id: String,
    }
}
</script>
<style>
    
</style>