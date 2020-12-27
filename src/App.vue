<template>
    <div class="main">
        <Search />
        <Header />
        <GifsContainer />
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Search from "./components/Search";
import GifsContainer from "./components/GifsContainer";
import Header from './components/Header.vue';

export default {
    name: "App",
    components: {
        Search,
        Header,
        GifsContainer
    },
    created() {
        this.getGifs({loadType: 'first'});
        document.body.style.backgroundColor = '#222831'
    },
    methods: {
        ...mapActions(["getGifs"]),
    }
};
</script>

<style lang="scss" scoped>
.main {
    max-width: 992px;
    margin: 0 auto;
    padding: 64px 0;
}
</style>