<template>
	<div class="card bg-alabaster rounded-lg">
		<div class="grid grid-cols-2 items-center p-5">
			<div class="font-bold text-marine"
				>{{ whatPlan }} ({{ timeBilling ? 'Yearly' : 'Monthly' }})
				<a href="/" @click="choosePlan"	 class="font-medium text-cgray">Change</a></div
			>
			<div class="font-bold text-right "
				>${{
					timeBilling ? plan.valueYearly + '/yr' : plan.valueMonthly + '/mo'
				}}</div
			>
		</div>
		<hr class="mx-5 text-cgray mb-5"/>
		<div class="pb-5 "
			v-for="addon in whatAddons"
			v-show="addon.addonChecked"
			><p class="grid grid-cols-2 px-5  text-cgray"
				>{{ addon.title }}
				<span class="text-right text-black"
					>+${{
						timeBilling ? addon.priceYearly + '/yr' : addon.priceMonthly + '/mo'
					}}</span
				>
			</p>
			
		</div>
	</div>

	<div class=" grid grid-cols-2 px-5 py-5 text-cgray">Total ({{ !timeBilling ? 'per month' : 'per year' }}) <p class="text-right text-lg text-purplish font-bold">{{!timeBilling ? '+$'+total+'/mo' : '$'+total+'/yr'  }}</p></div>
	<div class="w-full grid grid-cols-2 position absolute bottom-4 right-0">
		<button
			type="submit"
			@click.prevent="backward"
			class="mt-18 ml-20 !text-cgray !bg-transparent justify-self-start self-start font-medium"
			>Go back</button
		>
		<button
			type="submit"
			@click.prevent="something"
			class="mt-18 justify-self-end self-end font-medium"
			>Confirm</button
		>
	</div>
</template>

<script>
export default {
	data() {
		return {
			whatPlan: this.plan.name,
			whatAddons: this.addons,
			timeBilling: this.monthlyOrYearly,
			total: 0,
		};
	},
	methods:{
		choosePlan(){
			this.$emit('change', 2);
		}
	},
	mounted() {
		if (!this.timeBilling) {
			
			for (let i = 0; i < this.whatAddons.length; i++) {
			if (this.whatAddons[i].addonChecked) {
				this.total += this.whatAddons[i].priceMonthly;
				
			}
			
		}
		this.total += this.plan.valueMonthly;
		} else {
			for (let i = 0; i < this.whatAddons.length; i++) {
			if (this.whatAddons[i].addonChecked) {
				this.total += this.whatAddons[i].priceYearly;
				
			}}
			this.total += this.plan.valueYearly;
		}

	},
	props: ['backward', 'something', 'addons', 'plan', 'monthlyOrYearly'],
};
</script>

<style scoped>
a{
	display:block;
	text-decoration: underline;
}
.mt-18 {
	margin-top: 90px;
}

button {
	color: var(--white);
	font-size: 16px;

	padding: 0.85em 1.55em;
	border-radius: 8px;
	background-color: var(--purplish-blue);
}

label {
	color: var(--marine-blue);
	font-size: 14.3px;
	padding-bottom: 7px;
	padding-top: 1.8px;
}
input {
	margin-top: -1px;
	margin-bottom: 1.5px;
	margin-left: 1px;
	width: 450px;
	border-radius: 0.5rem;
	border: 1px solid var(--light-gray);
	height: 48px;
	background-color: white;
}
input:focus-visible,
input:active {
	outline: none !important;
	border: 1px solid var(--purplish-blue);
}
</style>
