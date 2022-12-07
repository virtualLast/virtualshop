<template>
    <div class="container-fluid">
        <div class="row">
            <aside class="col-xs-12 col-3">
                <div class="sidebar p-3 mb-5">
                    <legend-component />
                </div>
            </aside>
            <div class="col" />
        </div>
    </div>
</template>


<script>
import LegendComponent from '../components/legend';

export default {
    name: 'Products',
    components: {
        LegendComponent,
    },
    data() {
        return {
            legend: 'Shipping takes 10-12 weeks, and products probably won\'t work',
        };
    },
};
</script>

<style scoped lang="scss">
@import '../../scss/components/light-component';
.sidebar {
  @include light-component;
  ul {
    li a:hover {
      background: $blue-component-link-hover;
    }
  }
}
</style>
