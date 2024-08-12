var tl = gsap.timeline({scrollTrigger:{
    trigger:".two",
    start:"0% 95%",
    end:"70% 50%",
    scrub:"true",
}
  
})

tl.to("#fanta",{
    top:"120%",
    left:"5%"
},'orange')

tl.to("#slice-orange",{
    top:"160%",
    left:"26%"
},'orange')

tl.to("#full-orange",{
    top:"163%",
    left:"80%"
},'orange')

tl.to("#leaf",{
    top:"113%",
    left:"75%"
},'orange')

tl.to("#leaf-2",{
    top:"150%",
    left:"10%"
},'orange')

var tl_2 = gsap.timeline({scrollTrigger:{
    trigger:".three",
    start:"0% 95%",
    end:"70% 50%",
    scrub:"true",
   
}
  
})

tl_2.from(".lemon1",{
    rotate:'-90deg',
    left:'-45%',
    top:'100%',

},'ca')

tl_2.from("#sprite",{
    rotate:'-0deg',
    left:'-40%',
    top:'50%'

},'ca')

tl_2.from(".lemon2",{
    rotate:'90deg',
    left:'45%',
    top:'100%',

},'ca')

tl_2.from("#pepsi",{
    rotate:'0deg',
    left:'10%',
    top:'-10%'

},'ca')

tl_2.to("#slice-orange",{
    left:'40%',
    top:'209%',
    width: '20%'
},'ca')

tl_2.to("#fanta",{
   top:'215%',
   left:'33%',
   width: '35%'

},'ca')