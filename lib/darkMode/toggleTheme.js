
const toggleTheme =(param)=>{
    const root = document.querySelector(':root');
    if(param){
        localStorage.setItem('theme',true)
        root.style.setProperty('--primary-color','#001524')
        root.style.setProperty('--complementary-color','white')
        root.style.setProperty('--box-shadow','rgba(255, 255, 255, 0.16) 0px 1px 4px')
    }
    else{
        localStorage.setItem('theme',false)
        root.style.setProperty('--primary-color','white')
        root.style.setProperty('--complementary-color','#001524')
        root.style.setProperty('--box-shadow','rgba(0, 0, 0, 0.16) 0px 1px 4px')
    }
} 

export {toggleTheme};