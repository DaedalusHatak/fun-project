<template>
   <div class="w-988 bg-white text-black p-4 grid grid-cols-3 border-2 rounded-xl ">
   <div class="bg-sidebar rounded-xl h-full">
    <div class="grid gap-6 ">
        <h2>Your info</h2>
        <h2>Select Plan</h2>
        <h2>Add-ons</h2>
        <h2>Summary</h2>
    </div>
   </div>
   <div class="col-span-2 p-24">
    <h2>Personal info</h2>
    <p>Please provide your name, email address, and phone number.</p>
    <form action="submit" >
        <div class="grid">
            <label for="name">Name</label>
        <input type="text" name="name">
        </div>
        <div class="grid">
            <label for="name">Email Address</label>
        <input type="text" name="name">
        </div>
        <div class="grid">
            <label for="name">Phone Number</label>
        <input type="text" name="name">
        </div>
    </form>
   </div>
   </div>
</template>

<style scoped>
.w-988{
    width: 940px;
  
    max-height: 866px;
}
.bg-sidebar{
    background-image:url('../assets/images/bg-sidebar-desktop.svg');
    /* background-repeat: no-repeat; */
    background-size: contain;
    width:274px;
    height: 568px;
 
}
</style>