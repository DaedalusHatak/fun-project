<template>
    	
			
			<form action="submit" @submit.prevent="something">
				
				<div  class="grid pt-9 desktop:max-w-md">
					<div class="flex place-content-between"><label  for="name">Name</label><p v-show="error  && name===''" class="font-medium text-strawberry">This field is required</p></div>
					<input :class="name==='' && error ? '!border !border-strawberry' : ''"  autocomplete="name" type="text" name="name" :value="name" placeholder="e.g Stephen King" @input="$emit('update:name',$event.target.value)"    />
				</div>
				<div class="grid pt-5 desktop:max-w-md">
					<div class="flex place-content-between"><label  for="email">Email <Address></Address></label><p v-show="error && email===''" class="font-medium text-strawberry">This field is required</p></div>
					<input :class="email==='' && error ? '!border !border-strawberry' : ''"  autocomplete="email" type="email" name="email" :value="email" placeholder="e.g stephenking@lorem.com" @input="$emit('update:email',$event.target.value)"  />
				</div>
				<div class="grid pt-5 desktop:max-w-md">
					<div class="flex place-content-between"><label  for="phone">Phone Number</label><p v-show="error  && phone===''" class="font-medium text-strawberry">This field is required</p></div>
					<input :class="phone==='' && error ? '!border !border-strawberry' : ''"  autocomplete="phone"  type="number" name="phone" :value="phone" placeholder="e.g +1 234 567 890" @input="$emit('update:phone',$event.target.value)"  />
				</div>
				<div class=" grid position absolute bottom-4 right-0 desktop:right-21">
					<button
			type="submit"
			
			class="mt-18 justify-self-end self-end font-medium"
			>Next Step</button
		></div>
			</form>
		
	
	
</template>

<script>
export default{
    emits: ['update:name', 'update:email', 'update:phone'],
    data(){
        return{

        };
    },
    props:['something','name','email','phone','error']
};
</script>

<style scoped>

label{
	color:var(--marine-blue);
	font-size: 14.3px;
	padding-bottom: 7px;
	padding-top: 1.8px;
}
input{
	margin-top: -1px;
	margin-bottom: 1.5px;
	padding-left: 20px;
	width:100%;
	border-radius: 0.5rem;
	border: 1px solid var(--light-gray);
	height: 48px;
	background-color: white;
}
input:focus-visible,input:active{
	outline: none !important;
	border: 1px solid var(--purplish-blue);	
}


button{
	color:var(--white);
	font-size: 16px;
	
	padding: 0.85em 1.55em;
	border-radius: 8px;
	background-color: var(--purplish-blue);
}
@media screen and (min-width:940px) {
	
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
}
</style>