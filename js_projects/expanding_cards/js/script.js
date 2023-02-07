// const panels = document.querySelectorAll('.panel')

// panels.forEach((panel) => {
//     panel.addEventListener('click', () => {
//         removeActiveClasses()
//         panel.classList.add('active')
//     })
// })

// function removeActiveClasses() {
//     panels.forEach((panel) => {
//         panel.classList.remove('active')
//     })
// }
const panels = document.querySelectorAll('.panel')

panels.forEach((panel,i) => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
        // console.log(i);
    });
});

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active');
    });
}