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
import { mapState } from 'vuex'
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
        ...mapState({
            data: state => state.articles.data,
            isLoading: state => state.articles.isLoading,
            data: state => state.articles.error,
        }),
        counter(){
            return this.$store.state.counter.count
        }
    },
    mounted(){
        this.$store.dispatch('articles')
    }
}
</script>

<style>
</style>