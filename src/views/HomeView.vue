<template>
    <div>
        <h1 class="d-none">Counter:  {{ counter }}</h1>
        <div class="w-25 d-flex btn-group d-none">
            <Button @click="inEventHandler"> + </Button>
    
            <Button @click="deEventHandler"> - </Button>
        </div>
        
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <ArticleCard v-for="article in data" :key="article.id" :article="article"/>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import ArticleCard  from '@/components/ArticleCard.vue'
export default{
    components:{ArticleCard},
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
            error: state => state.articles.error,
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