<template>
    <div style="display:flex;flex-direction:column">
        <Gifs v-if="gifs" :gifs="gifs" />
        <Button v-if="isScrolled" @click="loadMore">Show More</Button>
    </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import { isBottomOfThePage } from "../utils";
import Gifs from "./Gifs";
import Button from "./Button";

export default {
    name: "GifsContainer",
    data() {
        return {
            isScrolled: false,
            counter: 0,
        };
    },
    components: {
        Gifs,
        Button,
    },
    computed: {
        ...mapState(["gifs"]),
        ...mapGetters(["contentType"]),
    },
    mounted() {
        window.addEventListener("scroll", () => {
            if (isBottomOfThePage() && !this.isScrolled) {
                this.loadMore();
                this.isScrolled = true;
            }
        });
    },
    watch: {
        contentType: function () {
            this.isScrolled = false;
        },
    },
    methods: {
        ...mapActions(["getGifs"]),
        loadMore() {
            this.getGifs({
                offset: this.gifs.length + 20,
                loadType: "more",
            });
        },
    },
};
</script>