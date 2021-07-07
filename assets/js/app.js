$('ul').on('click','li',function(){
    $(this).toggleClass('completed');
    
})

$('ul').on('click','span',function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    })
    event.stopPropagation();
})

$('input[type="text"]').keypress(function(e){
    if(e.which===13){
            const todoText = $(this).val();
            
            const todo = `<li><span><i class="far fa-trash-alt"></i></span>${todoText}</li>`;
            $('ul').append(todo);
            $(this).val("");
    }
    
})

$('#plus').click(function(){
    $('input[type="text"]').fadeToggle(500);
})


let date = new Date();
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
$('.container-fluid').append(`${days[date.getDay()]}  ${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`)