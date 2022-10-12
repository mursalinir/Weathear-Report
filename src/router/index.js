import { createWebHistory, createRouter } from 'vue-router'
import BillPage from '@/views/BillPage.vue'
import Products from '@/views/Products.vue'

const routes = [
	{
		path: '/',
		name: 'products',
		component: Products
	},
    {
        path: '/billPage',
        name: 'BillPage',
        component: BillPage
    }
];

const router = createRouter({
	history: createWebHistory('/Weathear-Report/'),
	routes,
});

export default router;