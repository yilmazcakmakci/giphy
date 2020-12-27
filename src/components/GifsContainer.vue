<template>
    <Gifs v-if="gifs" :gifs="gifs" />
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import { isBottomOfThePage } from '../utils'
import Gifs from "./Gifs";
export default {
    name: "GifsContainer",
    data() {
        return {
            isScrolled: false
        }
    },
    components: {
        Gifs,
    },
    computed: {
        ...mapState(['gifs']),
        ...mapGetters(['contentType'])
    },
    mounted() {
        window.addEventListener('scroll', () => {
            if (isBottomOfThePage() && !this.isScrolled) {
                this.getGifs({
                    offset: this.gifs.length + 20,
                    loadType: 'more'
                })

                this.isScrolled = true
            }
        })
    },
    watch: {
        contentType: function() {
            this.isScrolled = false
        }
    },
    methods: {
        ...mapActions(['getGifs']),
    }
}
</script>