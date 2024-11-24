
const toggleTheme =(param)=>{
    const root = document.querySelector(':root');
    if(param){
        localStorage.setItem('theme',true)
        root.style.setProperty('--primary-color','#001524')
        root.style.setProperty('--complementary-color','white')
        root.style.setProperty('--box-shadow','rgba(255, 255, 255, 0.16) 0px 1px 4px')
        root.style.setProperty('--card-bg','#16364d')
        root.style.setProperty('--complementary-color-2','rgb(212, 212, 212)')
        root.style.setProperty('--primary-color-light','#10324b')
    }
    else{
        localStorage.setItem('theme',false) 
        root.style.setProperty('--primary-color','white')
        root.style.setProperty('--complementary-color','#001524')
        root.style.setProperty('--box-shadow','rgba(0, 0, 0, 0.16) 0px 1px 4px')
        root.style.setProperty('--card-bg','rgb(235, 235, 235)')
        root.style.setProperty('--complementary-color-2','rgb(41, 41, 41)')
        root.style.setProperty('--primary-color-light','rgb(219, 219, 219)')
    }
} 

export {toggleTheme};