const mode = document.getElementById('modeIcon'); // selecionando

mode.addEventListener('click', () => {
    const form = document.getElementById('loginForm');/*retancle*/
    if(mode.classList.contains('fa-moon')){/*verificacao*/
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');

        form.classList.add('dark');
        return;
    }
    mode.classList.add('fa-moon');
    mode.classList.remove('fa-sun');
    form.classList.remove('dark');


});
 