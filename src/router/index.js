import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import DefectDensity from '../views/DefectDensity.vue'
import CodeInsight from '../views/CodeInsight.vue'

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
		},
		{
			path: '/code-insight',
			component: CodeInsight
		},
	],
})

export default router