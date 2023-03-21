<template>
	<div
		class="w-988 bg-white text-black p-4 grid grid-cols-3 border-2 rounded-xl"
	>
		<div class="bg-sidebar rounded-xl h-full grid justify-items-center">
			<div class="uppercase top pr-14 text-white ">
				<div class="stepgrid  text-left texting-body step-padding font-bold" v-for="step in steps">
					
						<div :class="currentStep === step.id ? 'current-step' : ''" class="mt-1 circle">{{step.id}}</div>
					
			<div><p class="text-cgray font-normal step ">{{ step.stepNumber }}</p>
					<p>{{ step.stepName }}</p></div>
				</div>
			</div>
		</div>
		<div class="col-span-2 px-18 pt-10 text-left">
			<h1 class="pb-2 text-marine">Personal info</h1>
			<p class="provide text-cgray">Please provide your name, email address, and phone number.</p>
			<form  action="submit" @submit.prevent="something">
				<div class="grid pt-9">
					<label  for="name">Name</label>
					<input  type="text" name="name" v-model="formName" required  />
				</div>
				<div class="grid pt-5">
					<label for="name">Email Address</label>
					<input type="text" name="name" required />
				</div>
				<div class="grid pt-5">
					<label for="name">Phone Number</label>
					<input type="text" name="name" required />
				</div>
				<div class="grid "><button type="submit" class="mt-18 justify-self-end self-end font-medium">Next Step</button></div>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			formName:'',
			formEmail:'',
			formPhone:'',
			errors: false,
			currentStep: '4',
			steps: [
				{
					id:'1',
					stepNumber: 'step 1',
					stepName: 'Your info',
				},
                {
					id:'2',
					stepNumber: 'step 2',
					stepName: 'Select plan',
				},
                {
					id:'3',
					stepNumber: 'step 3',
					stepName: 'Add-ons',
				},
                {
					id:'4',
					stepNumber: 'step 4',
					stepName: 'Summary',
				},
			],
		};

	},
	methods:
	{
		something(){
	console.log(this.errors)
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
.stepgrid{
	display: grid;
	grid-template-columns: min-content 1fr;
	align-content: left;
}
.error {
 
    outline: 2px solid red;
 
}
.mt-18{
	margin-top: 90px;
}
.px-18{
    padding-left: 4.4rem;
	width:521px;
}
.top{
    padding-top: 39px;
}
.step-padding{
    padding-bottom: 26px;
}
.w-988 {
	width: 940px;

	max-height: 600px;
}
button{
	color:var(--white);
	font-size: 16px;
	
	padding: 0.85em 1.55em;
	border-radius: 8px;
	background-color: var(--purplish-blue);
}
.provide{
	letter-spacing: -0.025em;
	padding-top: 3px;
	font-size: 17px;
}
.texting-body{
    font-size: 15px;
}
.step{
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

label{
	color:var(--marine-blue);
	font-size: 14.3px;
	padding-bottom: 7px;
	padding-top: 1.8px;
}
input{
	margin-top: -1px;
	margin-bottom: 1.5px;
	margin-left: 1px;
	width:450px;
	border-radius: 0.5rem;
	border: 1px solid var(--light-gray);
	height: 48px;
	background-color: white;
}
input:focus-visible,input:active{
	outline: none !important;
	border: 1px solid var(--purplish-blue);	
}
</style>
