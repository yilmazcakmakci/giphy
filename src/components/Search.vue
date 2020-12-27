<template>
    <div class="input-container">
        <input
            type="text"
            placeholder="Search GIFs"
            v-model="searchTerm"
            @input="search"
        />

        <v-icon name="search" class="icon" />
    </div>
</template>

<script>
import { mapActions } from "vuex";
import debounce from "lodash.debounce";

export default {
    name: "Search",
    computed: {
        searchTerm: {
            get() {
                return this.$store.state.searchTerm;
            },
            set(value) {
                this.$store.commit("updateSearchTerm", value);
            },
        },
    },
    methods: {
        ...mapActions(["getGifs"]),
        search: debounce(function () {
            this.getGifs({
                loadType: 'first'
            })
        }, 500),
    },
};
</script>

<style lang="scss" scoped>
.input-container {
    position: relative;
    max-width: 554px;
    margin: 0 auto;

    input {
        width: 100%;
        outline: none;
        border: none;
        padding: 12px;
        padding-left: 48px;
        background-color: transparent;
        font-size: 16px;
        border-bottom: 2px solid $color-gray;
        color: $color-text;
        transition: 0.2s;

        &:focus {
            border-bottom-color: $color-primary;
        }
    }

    .icon {
        position: absolute;
        top: 50%;
        left: 12px;
        transform: translate(0, -50%);
        color: $color-primary;
    }
}
</style>