<template>
	<div
		class="multi-step   relative bg-white text-black desktop:p-4 desktop:grid desktop:grid-cols-3 desktop:border-2 desktop:rounded-xl"
	>
		<div class="bg-sidebar   desktop:rounded-xl h-full grid justify-items-center">
			<div class="uppercase grid   grid-cols-4 desktop:block gap-7  mt-10 desktop:pt-9.5 desktop:pr-14 text-white">
				<div
					class="step-grid text-left text-15 desktop:pb-7 font-bold"
					v-for="step in steps"
				>
					<div
						:class="currentStep === step.id ? '!text-black !bg-pastel ' : ''"
						class="mt-1  circle place-self-center !font-medium"
						>{{ step.id }}</div
					>

					<div clsass="invisible dekstop:visible"
						><p class="hidden desktop:flex text-cgray font-normal text-sm">{{ step.stepNumber }}</p>
						<p class="hidden desktop:flex">{{ step.stepName }}</p></div
					>
				</div>
			</div>
		</div>
		<div class="col-span-2 desktop:pl-17 mobile  desktop:w-11/12 pt-10 px-5 text-left ">
			<header-template
			v-if="summary===false"
				:header="steps[currentStep - 1].stepHeader"
				:para="steps[currentStep - 1].stepPara"
			></header-template>
			<your-info
			:error="errors"
				v-model:name="formName"
				v-model:email="formEmail"
				v-model:phone="formPhone"
				v-if="currentStep === 1"
				:something="something"
			></your-info>
			<select-plan
				v-if="currentStep === 2"
				:monthly-or-yearly="monthlyOrYearly"
				:backward="backward"
				:something="something"
				:plan="planChosed"
			></select-plan>
			<add-ons
				:backward="backward"
				:addons="addons"
				:monthly-or-yearly="monthlyOrYearly"
				v-if="currentStep === 3"
				:something="something"
			></add-ons>
			<your-summary
				:backward="backward"
				:addons="addons"
				:plan="planChosed"
				@change="changeStep"
				:monthly-or-yearly="monthlyOrYearly"
				v-if="currentStep === 4 && summary===false"

				:something="something"
			></your-summary>
			<final-step
			v-if="summary===true"
	></final-step>

		</div>
	</div>
</template>

<script>
import FinalStep from '../components/FinalStep.vue'
import HeaderTemplate from '../components/HeaderTemplate.vue';
import YourInfo from '../components/YourInfo.vue';
import AddOns from '../components/AddOns.vue';
import SelectPlan from '../components/SelectPlan.vue';
import YourSummary from '../components/YourSummary.vue';
export default {
	components: { YourInfo, YourSummary, AddOns, SelectPlan, HeaderTemplate,FinalStep },
	data() {
		return {
			formName: '',
			formEmail: '',
			formPhone: '',
			errors: false,
			currentStep: 1,
			monthlyOrYearly: false,
			summary: false,
			planChosed: {id:0},
			addons: [
				{
					id: 1,
					title: 'Online service',
					addonChecked: false,
					desc: 'Access to multiplayer games',
					priceMonthly: 1,
					priceYearly: 10,
				},
				{
					id: 2,
					title: 'Larger storage',
					addonChecked: false,
					desc: 'Extra 1TB of cloud save',
					priceMonthly: 2,
					priceYearly: 20,
				},
				{
					id: 3,
					title: 'Customizable profile',
					addonChecked: false,
					desc: 'Custom theme on your profile',
					priceMonthly: 2,
					priceYearly: 20,
				},
			],
			steps: [
				{
					id: 1,
					stepNumber: 'step 1',
					stepName: 'Your info',
					stepHeader: 'Personal info',
					stepPara:
						'Please provide your name, email address, and phone number.',
				},
				{
					id: 2,
					stepNumber: 'step 2',
					stepName: 'Select plan',
					stepHeader: 'Select your plan',
					stepPara: 'You have the option of monthly or yearly billing.',
				},
				{
					id: 3,
					stepNumber: 'step 3',
					stepName: 'Add-ons',
					stepHeader: 'Pick add-ons',
					stepPara: 'Add-ons help enhance your gaming experience.',
				},
				{
					id: 4,
					stepNumber: 'step 4',
					stepName: 'Summary',
					stepHeader: 'Finishing up',
					stepPara: 'Double-check everything looks OK before confirming.',
				},

			],
		};
	},
	methods: {
		changeStep(){
			this.currentStep = 2;
		},
		something(val, plan) {
			if(this.formName === '' || this.formEmail === '' || this.formPhone === ''){
				this.errors=true;
				return;
			}
			if (val === true || val === false) {
				this.monthlyOrYearly = val;
				this.planChosed = plan;
			} else {
				for (let i = 0; i >= 3; i++) {
					val[i].addonChecked;
				}
			};

			if (this.currentStep < 4) {
				this.currentStep++;
			}
			else{
	this.summary = true;
			}

			
			
		},
		backward() {
			this.errors=false;
			if (this.currentStep > 1) {
				this.currentStep--;
			}
		},
	},
};
</script>

<style scoped>
img{
	max-width: max-content;
}
.circle {
	border-radius: 100%;
	width: 32px;
	height: 32px;
	padding-top: 6px;
	margin-right: 20px;
	background: transparent;
	border: 1px solid #fff;
	color: #fff;
	text-align: center;
	font: 16px Arial, sans-serif;
}
.step-grid {
	
	display: grid;
	grid-template-columns: min-content 1fr;
	align-content: start;
}
.error {
	outline: 2px solid red;
}


.multi-step {
	width: 940px;
	height: 100vh;
	max-height: 600px;
}

.bg-sidebar {
	background-image: url('../assets/images/bg-sidebar-desktop.svg');
	/* background-repeat: no-repeat; */
	background-size: cover;
	background-repeat: no-repeat;
	width: 273px;
	height: 568px;
	
}

h1 {
	padding-top: 1px;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	letter-spacing: 0.005em;
	font-weight: 700;
	font-size: 32px;
}

@media screen and (max-width:940px) {
	.mobile{
	position: absolute;
	inset: 75px 0 0 0;
	background-color: #fff;
	border-radius: 10px;
	margin:15px;
	

}
	.circle{
		margin-right: 0;
	}

	.multi-step {
		max-height: 100%;
	
		width:100%;
	
}
.bg-sidebar {
	background-image: url('../assets/images/bg-sidebar-mobile.svg');
	/* background-repeat: no-repeat; */
	background-position: bottom;
	background-repeat: no-repeat;
	width: 100%;
	height: 171px;
	justify-content: space-evenly;
	align-items: baseline;
}
}
</style>
