<template>
    <div>
        <div class="row">
            <div class="col-3">
                <title-component
                    :current-category-id="currentCategoryId"
                    :categories="categories"
                />
            </div>
            <div class="col-9">
                <search-bar @search-products="onSearchProducts" />
            </div>
        </div>
        <product-list
            :products="products"
            :loading="loading"
        />
        <div class="row">
            <legend-component :title="legend" />
        </div>
    </div>
</template>

<script>
import LegendComponent from '@/components/legend.vue';
import TitleComponent from '@/components/title.vue';
import ProductList from '@/components/product-list/index.vue';
import SearchBar from '@/components/search-bar.vue';

import { fetchProducts } from '@/services/products-service';

export default {
    name: 'Catalog',
    components: {
        SearchBar,
        TitleComponent,
        LegendComponent,
        ProductList,
    },
    props: {
        currentCategoryId: {
            type: String,
            default: null,
        },
        categories: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            legend: 'Shipping takes 10-12 weeks, and products probably won\'t work',
            products: [],
            loading: false,
            searchTerm: null,
        };
    },
    watch: {
        currentCategoryId() {
            this.loadProducts();
        },
    },
    created() {
        this.loadProducts();
    },
    methods: {
        /**
       *
       * @param {string} term
       */
        onSearchProducts({ term }) {
            this.searchTerm = term;
            this.loadProducts(term);
        },
        async loadProducts() {
            this.loading = true;
            let response;
            try {
                response = await fetchProducts(this.currentCategoryId, this.searchTerm);
                this.loading = false;
            } catch (e) {
                console.log(e);
                this.loading = false;
                return;
            }
            this.products = response.data['hydra:member'];
        },
    },
};
</script>

<style scoped>

</style>
