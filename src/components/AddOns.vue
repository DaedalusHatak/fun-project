<template>
    
			
			
				<div class="grid pt-9">
					<label  for="name">Name</label>
					<input  type="text" name="name"  required  />
				</div>
				<div class="grid pt-5">
					<label for="name">Email Address</label>
					<input type="text" name="name" required />
				</div>
				<div class="grid pt-5">
					<label for="name">Phone Number</label>
					<input type="text" name="name" required />
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