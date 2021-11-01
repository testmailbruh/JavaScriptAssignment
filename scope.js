var x = 10; // x defined globally

{
    let x = 5;
    function scopeBlock(){
        alert("Value of variable x in the block: " + x)
    }
}

function scopeFunction(){
    var x = 20;
    alert("Value of variable x in the function: " + x)
}

function scopeGlobal(){
    alert("Value of variable x globally: " + x)
}