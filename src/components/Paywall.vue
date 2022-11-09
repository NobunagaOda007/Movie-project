<template>
    <div class="popup">
        <div class="popup-inner">
            <slot />
    
        </div>
    </div>


</template>


<script>
export default{
    props: ['TogglePopup']
}


</script>


<style lang="scss" scoped>
.popup {
    position:fixed;
    top: 0;
    left:0;
    right:0;
    bottom:0;
    z-index: 99;
    background-color: rgba(0,0,0,0.2);

    display: flex;
    align-items: center;
    justify-content: center;
}

.popup-inner{
    padding:32px;
}
button{
    appearance: none;
    outline: none;
    border: none;
    background: none;
    display:block;
    width:fit-content;
    margin: 0 auto;
    font-size: 1.5rem;
    font-weight: 700;
    color:white;
    background-color: red;
    padding: 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: 0.2s ease;
}


button:hover {
    background-color: darkred;
}


</style>