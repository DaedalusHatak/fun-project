<template>
    
			
			
				<div v-for="addon in addons" class="input-container  mt-9">
					<div  class="input-field items-center"><input class="m-5" type="checkbox" v-model="addon.addonChecked" :name="addon.title" value="onlineServices"><div><p>{{addon.title}}</p>
					<p>{{ addon.desc }}</p>
				</div> <p class="justify-self-end mr-5">+{{!monthlyOrYearly ? addon.priceMonthly : addon.priceYearly}}${{ !monthlyOrYearly ? '/mo' : '/yr' }}</p> </div>

				</div>
			
				<div class="w-full desktop:w-max grid desktop:gap-48 grid-cols-2 position absolute bottom-4 right-0  desktop:right-21">
					<button
			type="submit"
			@click.prevent="backward"
			class="mt-18 desktop:ml-20 !text-cgray !bg-transparent justify-self-start self-start font-medium"
			>Go back</button
		>
					<button type="submit" @click.prevent="something" class="mt-18 justify-self-end self-end font-medium">Next Step</button>
				</div>
</template>

<script>
export default{
    data(){
        return{
			
		};
    },
    props:['backward','something','monthlyOrYearly','addons']
};
</script>

<style scoped>
.input-container{
	border: 1px solid #000;
	border-radius: 5px;
}
.input-field{
	display: grid;
	grid-template-columns: min-content 1fr min-content;
}


button{
	color:var(--white);
	font-size: 16px;
	
	padding: 0.85em 1.55em;
	border-radius: 8px;
	background-color: var(--purplish-blue);
}


label{
	color:var(--marine-blue);
	font-size: 14.3px;
	padding-bottom: 7px;
	padding-top: 1.8px;
}
input{
	width:20px;
	border-radius: 0.5rem;
	
	height: 20px;
	background-color: white;
}
input:focus-visible,input:active{
	outline: none !important;
	border: 1px solid var(--purplish-blue);	
}
</style>