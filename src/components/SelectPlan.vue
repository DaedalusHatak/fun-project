<template>

			
			
				<div class="grid gap-5 grid-cols-3 pt-10">
						<button v-for="card in cards" class="card">
							<img src="../assets/images/icon-arcade.svg" alt="">
							<p class="font-bold pt-2 pb-1">{{ card.name }}</p>
							<p class="flex text-cgray">${{ card.valueMonthly}} <span v-if="!checked">/mo</span> <span v-else>/yr </span> 
							</p>
							<p v-if="checked" class="f-13 pt-2">2 months free</p>
						</button>
						
				</div>
				<div class="grid font-bold switch gap-7 mt-7 py-4 justify-center bg-magnolia">
					<span :class="checked ? 'text-cgray' : 'text-marine '" class="text-right">Monthly</span><label for="check"
					class=" bg-marine  w-9 relative h-5 rounded-full">
						<input 
						class="bg-red-400 sr-only peer"
						type="checkbox"
						v-model="checked"
					role="switch" id="check">
					<span class="circle-white bg-white absolute rounded-full left-1 top-1 peer-checked:bg-white peer-checked:left-5 transition-all duration-300"></span>
					</label><span :class="checked ? 'text-marine font-bold' : 'text-cgray'" class="text-left">Yearly</span>
				</div>

				<div class="grid position absolute bottom-4 right-0"><button type="submit" @click.prevent="something" class="mt-18 justify-self-end self-end font-medium">Next Step</button></div>
			
</template>

<script>
export default{
    data(){
        return{
			checked: true,
			cards:[
				{id:1,name:'Arcade',valueMonthly:9, valueYearly:90},
				{id:2,name:'Advanced',valueMonthly:12, valueYearly:120},
				{id:3,name:'Pro',valueMonthly:15, valueYearly:150},
			],
			
		};
    },
    props:['something']
};
</script>

<style scoped>
span{
	font-size: 15px;
	
}
.f-13{
	font-size: 13px;
}
.circle-white{
	width:12px;
	height:12px;
}
.w-9{
	width:37px
}
.switch{
	display: grid;
	grid-template-columns: 1fr min-content 1fr;
	text-align: center;
}
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
	min-height:160px;

	color:var(--marine-blue);
	font-size: 16px;
	border: 1px solid var(--light-gray);
	padding-left: 16px;
	border-radius: 8px;
	background-color: var(--white);
}
.card:hover{
	border: 1px solid var(--marine-blue);
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