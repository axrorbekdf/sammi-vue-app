<template>
    <div class="d-flex flex-column flex-md-row align-items-center py-3 pb-3 mb-4 border-bottom">
        <a class="d-flex align-items-center text-dark text-decoration-none">
            <img :src="logo" alt="logo" style="width: 150px; cursor: pointer;" @click="toHomeEventHandle" />
        </a>

        <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
            <template v-if="isLoggedIn">
                <RouterLink :to="{name:'home'}" class="me-3 h5 py-2 text-dark text-decoration-none">
                    {{ user.username }}
                </RouterLink>

                <a href="#" @click="logout" class="me-3 h5 py-2 text-dark text-decoration-none">Logout</a>
            </template>
            <template v-else>
                <RouterLink :to="{name:'login'}" class="me-3 h5 py-2 text-dark text-decoration-none">
                    Login
                </RouterLink>
                <RouterLink :to="{name:'register'}" class="me-3 h5 py-2 text-dark text-decoration-none">
                    Register
                </RouterLink>
            </template>
            
        </nav>
    </div>
</template>

<script>
import {mapGetters, mapState} from 'vuex'
import {logo} from '../constants'
import {gettersTypes} from '../modules/types'
import { removeItem } from '../helpers/persistaneStorage'

export default {
    name: 'Navbar',
    data(){
        return {
            logo,
        }
    },
    computed:{
        ...mapState({
            // user: state => state.auth.user,
            // isLoggedIn: state => state.auth.isLoggedIn
        }),
        ...mapGetters({
            user: gettersTypes.currentUser,
            isLoggedIn: gettersTypes.isLoggedIn,
            isAnonymous: gettersTypes.isAnonymous,
        }),

        // user(){
        //     return this.$store.getters[gettersTypes.currentUser]
        // },
        // isLoggedIn(){
        //     return this.$store.getters[gettersTypes.isLoggedIn]
        // },
        // isAnonymous(){
        //     return this.$store.getters[gettersTypes.isAnonymous]
        // },
    },
    methods: {
        toHomeEventHandle(){
            return this.$router.push({name:'home'})
        },

        logout(){
            return this.$store.dispatch('logout')
        }
    }
}
</script>