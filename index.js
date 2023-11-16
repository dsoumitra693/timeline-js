let timelineRef = document.getElementById('timeline')

let removeFirstElem = (arr) => {
    let temp = arr.reverse()
    temp.pop()

    return temp.reverse()
}

let createTimeline = (timelines) => {
    if (timelines == undefined || timelines.length == 0) return


    drawPoint(timelines[0], timelines.length)
    if (timelines.length == 1) return

    let newTimelines = removeFirstElem(timelines)
    createTimeline(newTimelines)
}


let drawPoint = (point, length) => {
    let title = !!point.title ? point.title : point
    let text = !!point.title ? point.text : ''
    let color = !!point.title ? point.color : '#ffffff'

    let html = `
    <div class="point" style="border-color:${color}">
        <div class="lable">${title}</div>
    </div>
    ${length != 1 ? '<div class="line"></div>' : ''}
    `
    timelineRef.innerHTML += html
}

createTimeline([
    {
        title: 'Eat',
        text: 'Everything you find in the fridge',
        color: '#AEC9F3'
    },
    'Code', 'enjoy', 'Sleep', 'Repeat',])