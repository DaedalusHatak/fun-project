<template>

			
			
				<div class="grid gap-5 grid-cols-3 pt-10">
						<label  v-for="card in cards" >
							<input type="radio" class="card-input" name="radio"  :value="card.id" v-model="whatPlan"  >
							<div class="card pt-4">
								<img src="../assets/images/icon-arcade.svg" alt="">
							<p class="font-bold pt-2 pb-1">{{ card.name }}</p>
							<p class="flex text-cgray">${{!checked ? card.valueMonthly : card.valueYearly}}{{ !checked ? '/mo' : '/yr' }}
							</p>
					
							<p v-if="checked" class="f-13 pt-2">2 months free</p>
							</div>
						</label>
						
						
				</div>
				<div class="grid font-bold switch gap-7 mt-7 py-4 justify-center bg-magnolia">
					<span :class="checked ? 'text-cgray' : 'text-marine '" class="text-right">Monthly</span><label for="check"
					class=" bg-marine  w-9 relative h-5 rounded-full">
						<input 
						class="bg-red-400 sr-only peer"
						type="checkbox"
						v-model="checked"
					role="switch" id="check">
					<span class="circle-white bg-white absolute rounded-full left-1 top-1 peer-checked:bg-white peer-checked:left-5 transition-all duration-200"></span>
					</label><span :class="checked ? 'text-marine font-bold' : 'text-cgray'" class="text-left">Yearly</span>
				</div>

				<div class="w-full grid grid-cols-2 position absolute bottom-4 right-0">
					<button
			type="submit"
			@click.prevent="backward"
			class="mt-18 ml-20 !text-cgray !bg-transparent justify-self-start self-start font-medium"
			>Go back</button
		>
					<button type="submit" @click.prevent="something(checked,cards[whatPlan])" class="mt-18 justify-self-end self-end font-medium">Next Step</button>
				</div>
			
</template>

<script>
export default{
    data(){
        return{
			checked: this.monthlyOrYearly,
			whatPlan: this.plan.id,
			cards:[
				{id:0,name:'Arcade',valueMonthly:9, valueYearly:90},
				{id:1,name:'Advanced',valueMonthly:12, valueYearly:120},
				{id:2,name:'Pro',valueMonthly:15, valueYearly:150},
			],
			
		};
    },
	methods:{
		choosePlan(id){
	this.whatPlan = id;
			this.cards[id].planChecked = !this.card[id].planchecked;
			console.log(this.cards[id].planChecked);
		},
	},
	
	

    props:['backward','something', 'monthlyOrYearly','plan']
};
</script>

<style scoped>
input{
	display: none;
}
span{
	font-size: 15px;
	
}
.priceTag{font-size: 16px;}

button{
	color:var(--white);
	font-size: 16px;
	
	padding: 0.85em 1.55em;
	border-radius: 8px;
	background-color: var(--purplish-blue);
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

.card-input:checked + .card{
    background-color: red !important;
}
.card:hover{
	border: 1px solid var(--marine-blue);
}

</style>