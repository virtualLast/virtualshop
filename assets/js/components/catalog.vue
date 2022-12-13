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
            :products="filteredProducts"
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
            searchTerm: '',
            loading: false,
        };
    },
    computed: {
        filteredProducts() {
            if (!this.searchTerm) {
                return this.products;
            }
            return this.products.filter((product) => (
                product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
            ));
        },
    },
    async created() {
        const params = {};
        if (this.currentCategoryId) {
            params.category = this.currentCategoryId;
        }
        this.loading = true;
        let response;
        try {
            response = await fetchProducts(this.currentCategoryId);
            this.loading = false;
        } catch (e) {
            this.loading = false;

            return;
        }

        this.products = response.data['hydra:member'];
    },
    methods: {
        onSearchProducts(event) {
            this.searchTerm = event.term;
        },
    },
};
</script>

<style scoped>

</style>
