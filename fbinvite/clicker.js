const targetClass = 'to-click';
const processingDelay = 1000;

function runOnSchedule() {
    const target = document.getElementsByClassName(targetClass).item(0);
    if (target) {
        target.setAttribute('class', target.getAttribute('class').replace(targetClass, ''));
        target.click();
        console.log(target, `clicked!`);
    }
    setTimeout(runOnSchedule, processingDelay);
}

setTimeout(runOnSchedule, processingDelay);
