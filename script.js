document.addEventListener('DOMContentLoaded', () => {

    const hamburger = document.querySelector('.hamburger-nav');
    const nav = document.querySelector('.nav');

    function toggleMenu() {
        hamburger.classList.toggle('open');
        nav.classList.toggle('open-nav');
    }
    hamburger.addEventListener('click', toggleMenu);

    const createElement = (elem, html, className) => {
        const el = document.createElement(elem);
        el.innerHTML = html;
        el.className = className; 
        return el;
    }

    /* const typeOfSkills = ['Tech skills', 'Soft skills', 'Languages'];
    const techSkills = ['HTML5', 'CSS', 'JavaScript', 'React JS', 'React Native', 'Redux', 'Git & GitHub'];


    const renderSkills = () => {
        const skillTech = createElement(
            'ul',
            `<li class="">
                <div>HTML5</div>
                <div></div>
            </li>`,
            'skill-item-ul'
        );

        document.querySelector('.skill-tech').append(skillTech);
    } */
    
    


    
    

    
    
    
    


});