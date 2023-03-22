<template>
	<div
		class="multi-step bg-white text-black p-4 grid grid-cols-3 border-2 rounded-xl"
	>
		<div class="bg-sidebar rounded-xl h-full grid justify-items-center">
			<div class="uppercase top-step-space pr-14 text-white ">
				<div class="step-grid  text-left fs-15 step-padding font-bold" v-for="step in steps">
					
						<div :class="currentStep === step.id ? 'current-step' : ''" class="mt-1 circle">{{step.id}}</div>
					
			<div><p class="text-cgray font-normal fs-14 ">{{ step.stepNumber }}</p>
					<p>{{ step.stepName }}</p></div>
				</div>
			</div>
		</div>
		<div class="col-span-2 section-placement pt-10 text-left">
			<header-template :header="steps[currentStep-1].stepHeader" :para="steps[currentStep-1].stepPara"></header-template>
			<your-info 
			v-model:name="formName"
			v-model:email="formEmail"
			v-model:phone="formPhone"
			v-if="currentStep===1" :something="something"></your-info>
		<select-plan v-if="currentStep===2" :something="something"></select-plan>
		<add-ons v-if="currentStep===3" :something="something"></add-ons>
		<your-summary v-if="currentStep===4" :something="something"></your-summary>
		</div>
	</div>
</template>

<script>
import HeaderTemplate from '../components/HeaderTemplate.vue';
import YourInfo from '../components/YourInfo.vue';
import AddOns from '../components/AddOns.vue';
import SelectPlan from '../components/SelectPlan.vue';
import YourSummary from '../components/YourSummary.vue';
export default {
	components:{YourInfo,YourSummary,AddOns,SelectPlan,HeaderTemplate},
	data() {
		return {
			formName:'',
			formEmail:'',
			formPhone:'',
			errors: false,
			currentStep: 1,
			steps: [
				{
					id:1,
					stepNumber: 'step 1',
					stepName: 'Your info',
					stepHeader: 'Personal info',
					stepPara: 'Please provide your name, email address, and phone number.',
				},
                {
					id:2,
					stepNumber: 'step 2',
					stepName: 'Select plan',
					stepHeader: 'Select your plan',
					stepPara: 'You have the option of monthly or yearly billing.',
				},
                {
					id:3,
					stepNumber: 'step 3',
					stepName: 'Add-ons',
					stepHeader: 'Pick add-ons',
					stepPara: 'Add-ons help enhance your gaming experience.',
				},
                {
					id:4,
					stepNumber: 'step 4',
					stepName: 'Summary',
					stepHeader: 'Finishing up',
					stepPara: 'Double-check everything looks OK before confirming.',
				},
			],
		};

	},
	methods:
	{
		something(){
			console.log(this.steps[this.currentStep-1].stepHeader);
			console.log(this.formName);
			console.log(this.formEmail);
			console.log(this.formPhone);
	if(this.currentStep<4){
		this.currentStep++;
	}

	},
	invalidateForm() {
      this.errors = true;
    }
	},
};
</script>

<style scoped>
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
.current-step{
	
	color:#000;
	background-color: white;
}
.step-grid{
	display: grid;
	grid-template-columns: min-content 1fr;
	align-content: left;
}
.error {
 
    outline: 2px solid red;
 
}

.section-placement{
    padding-left: 4.4rem;
	width:521px;
}

.top-step-space{
    padding-top: 39px;
}
.step-padding{
    padding-bottom: 26px;
}


.multi-step {
	width: 940px;

	max-height: 600px;
}



.fs-15{
    font-size: 15px;
}
.fs-14{
    font-size: 14px;
}
.bg-sidebar {
	background-image: url('../assets/images/bg-sidebar-desktop.svg');
	/* background-repeat: no-repeat; */
	background-size: cover;
	background-repeat: no-repeat;
	width: 273px;
	height: 568px;
}

h1{
	padding-top:1px;
	-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
    letter-spacing: 0.005em;
    font-weight: 700;
    font-size: 32px;
}


</style>
