// $(function(){
//     var btn = $('#btn');
//         $(btn. eq(0) .addClass('active').find('a').attr('href')).siblings('.tab-inner').hide();
    
//         $li.click(function(){
//             $($(this).find('a'). attr ('href')).show().siblings ('.tab-inner').hide();
//             $(this).addClass('active'). siblings ('.active').removeClass('active');
//         });
//     });

// $(document).ready(function(){
//     $('.iconList #btn').click(function(){
//         $(this).addClass('btnClick').siblings().removeClass('btnClick');
//     })
// })

window.addEventListener("load" , function(){
    for(let i = 0 ; i < btn.length ; i++){
        var btns = btn[i];
        btns.addEventListener("click", function(){
            document.getElementById("btn").classList.add("btnClick");
        })
    }
})