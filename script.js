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

    const typeOfSkills = ['Tech skills', 'Soft skills', 'Languages'];
    const techSkills = ['HTML5', 'CSS', 'JavaScript', 'React JS', 'React Native', 'Redux', 'Git & GitHub'];
    const softSkills = ['Fast-learner', 'Team Work', 'Responsible', 'Sociable'];
    const languages = ['Russian: native', 'English: A1 - A2 (level up)'];

    const renderTypeOfSkill = () => {
        typeOfSkills.forEach((type, index) => {
            const styleItem = index === 0 ? 'tech-skills' : index === 1 ? 'soft-skills' : 'langs';
            const typeOfSkill = createElement(
                'div',
                `<h3 class="skill-type-item__title">${type}</h3>`,
                `skill-type-item ${styleItem} _anim-items `  /* _anim-no-hide */
            );
            document.querySelector('.skills-container').append(typeOfSkill);
        });   
    } 
    renderTypeOfSkill();

    const renderTechSkills = () => {
        techSkills.forEach(skill => {
            const techSkill = createElement(
                'p',
                skill,
                'tech-skill-item'
            );
            document.querySelector('.tech-skills').append(techSkill);
        });
    }
    renderTechSkills();
    
    const renderSoftSkills = () => {
        softSkills.forEach(skill => {
            const softSkill = createElement(
                'p',
                skill,
                'soft-skill-item'
            );
            document.querySelector('.soft-skills').append(softSkill);
        });
    }
    renderSoftSkills();
    
    const renderLanguages = () => {
        languages.forEach(lang => {
            const langSkill = createElement(
                'p',
                lang,
                'lang-skill-item'
            );
            document.querySelector('.langs').append(langSkill);
        });
    }
    renderLanguages();


    const animItems = document.querySelectorAll('._anim-items');
    if(animItems.length > 0) {
        window.addEventListener('scroll', animOnScroll);

        function animOnScroll() {
            animItems.forEach(item => {
                const animItemHeigth = item.offsetHeight;
                const animItemOffset = offset(item).top;
                const animStart = 4;

                let animItemPoint = window.innerHeight - animItemHeigth / animStart;
                if (animItemHeigth > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight / animStart;
                }

                if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeigth)) {
                    item.classList.add('_active');
                } else {
                    if (!elem.classList.contains('_anim-no-hide')) {
                       item.classList.remove('_active'); 
                    }
                    
                }

            });
        }

        function offset(elem) {
            const rect = elem.getBoundingClientRect(),
                scrollLeft = window.pageXOffset ||  document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset ||  document.documentElement.scrollTop;
            return {top: rect.top + scrollTop, left: rect.left + scrollLeft};
        }

    } 
    
    

    
    
    
    


});