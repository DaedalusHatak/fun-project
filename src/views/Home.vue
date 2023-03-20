<template>
	<div
		class="w-988 bg-white text-black p-4 grid grid-cols-3 border-2 rounded-xl"
	>
		<div class="bg-sidebar rounded-xl h-full grid justify-items-center">
			<div class="uppercase top text-white ">
				<div class="text-left texting-body step-padding font-bold" v-for="step in steps">
					<p class="text-cgray step ">{{ step.stepNumber }}</p>
					<p>{{ step.stepName }}</p>
				</div>
			</div>
		</div>
		<div class="col-span-2 px-18 pt-10 text-left">
			<h1 class="pb-3 ">Personal info</h1>
			<p class="">Please provide your name, email address, and phone number.</p>
			<form action="submit">
				<div class="grid">
					<label for="name">Name</label>
					<input type="text" name="name" />
				</div>
				<div class="grid">
					<label for="name">Email Address</label>
					<input type="text" name="name" />
				</div>
				<div class="grid">
					<label for="name">Phone Number</label>
					<input type="text" name="name" />
				</div>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			steps: [
				{
					stepNumber: 'step 1',
					stepName: 'Your info',
				},
                {
					stepNumber: 'step 2',
					stepName: 'Select plan',
				},
                {
					stepNumber: 'step 3',
					stepName: 'Add-ons',
				},
                {
					stepNumber: 'step 4',
					stepName: 'Summary',
				},
			],
		};
	},
};
</script>

<style scoped>
.px-18{
    padding-left: 4.4rem;
}
.top{
    padding-top: 39px;
}
.step-padding{
    padding-bottom: 29px;
}
.w-988 {
	width: 940px;

	max-height: 866px;
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
	background-size: contain;
	width: 274px;
	height: 566px;
}

h1{
    letter-spacing: -0.020em;
    font-weight: 700;
    font-size: 33px;
}
</style>
