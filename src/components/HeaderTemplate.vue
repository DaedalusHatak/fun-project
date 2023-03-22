<template>
<h1>{{ header }}</h1>
<p class="provide text-cgray">{{ para }}</p>
</template>
<script>
export default{
    props:['header','para'],
}
</script>
<style scoped>
.provide{
	letter-spacing: -0.025em;
	padding-top: 11px;
	font-size: 17px;
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