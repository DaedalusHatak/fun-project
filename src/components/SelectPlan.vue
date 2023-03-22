<template>

			
			
				<div class="grid gap-5 grid-cols-3 pt-9">
						<button class="card">
							<img src="../assets/images/icon-arcade.svg" alt="">
							<p class="font-bold">Arcade</p>
							<p class="text-cgray">$9/mo</p>
						</button>
						<button class="card">
							<img src="../assets/images/icon-advanced.svg" alt="">
							<p class="font-bold">Advanced</p>
							<p class="text-cgray">$12/mo</p>
						</button>
						<button class="card">
							<img src="../assets/images/icon-pro.svg" alt="">
							<p class="font-bold">Pro</p>
							<p class="text-cgray">$15/mo</p>
						</button>
				</div>
				<div class="grid pt-5">
					<label for="check"
					class="bg-gray-100 w-20 relative h-10 rounded-full">
						<input 
						class="sr-only peer"
						type="checkbox"
					role="switch" id="check">
					<span class="w-2/5 h-4/5 bg-rose-300 absolute rounded-full left-1 top-1 peer-checked:bg-rose-600 peer-checked:left-11 transition-all duration-300"></span>
					</label>
				</div>

				<div class="grid "><button type="submit" @click.prevent="something" class="mt-18 justify-self-end self-end font-medium">Next Step</button></div>
			
</template>

<script>
export default{
    data(){
        return{};
    },
    props:['something']
};
</script>

<style scoped>
.mt-18{
	margin-top: 90px;
}

img{
	padding-bottom: 40px;
}

button{
	color:var(--white);
	font-size: 16px;
	
	padding: 0.85em 1.55em;
	border-radius: 8px;
	background-color: var(--purplish-blue);
}
.card{
	text-align: left;
	width:135px;
	height:160px;
	border: 1px solid #000;
	color:var(--marine-blue);
	font-size: 16px;
	
	padding-left: 16px;
	border-radius: 8px;
	background-color: var(--white);
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