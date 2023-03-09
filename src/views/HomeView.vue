<template>
    <div>
        <h1>Home Page  {{ counter }}</h1>
        <div class="w-25 d-flex btn-group">
            <Button @click="inEventHandler"> + </Button>
    
            <Button @click="deEventHandler"> - </Button>
        </div>
    </div>
</template>

<script>
export default{
    methods: {
        inEventHandler(){
            this.$store.commit('increment')
        },
        deEventHandler(){
            this.$store.commit('decrement')
        }
    },
    computed: {
        counter(){
            return this.$store.state.count
        }
    }
}
</script>

<style>
</style>