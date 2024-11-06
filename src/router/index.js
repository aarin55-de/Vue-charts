import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import DefectDensity from '../views/DefectDensity.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/dashboard',
			component: Dashboard
		},
		{
			path: '/defect-density',
			component: DefectDensity
			// component: Dashboard
		},
	],
})

export default router