
const toggleTheme =(param)=>{
    const root = document.querySelector(':root');
    if(param){
        root.style.setProperty('--primary-color','black')
        root.style.setProperty('--complementary-color','white')
    }
    else{
        root.style.setProperty('--primary-color','white')
        root.style.setProperty('--complementary-color','black')
    }
} 

export {toggleTheme};