// 获取按钮元素
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');
const button5 = document.getElementById('button5');

// 获取侧边栏元素
const leftSidebar = document.getElementById('leftSidebar');
const rightSidebar = document.getElementById('rightSidebar');

// 给按钮添加点击事件处理程序
button1.addEventListener('click', () => {
    // 处理按钮1的点击事件
    console.log("Button 1 clicked");
});

button2.addEventListener('click', () => {
    // 处理按钮2的点击事件
    console.log("Button 2 clicked");
});

button3.addEventListener('click', () => {
    // 处理按钮3的点击事件
    console.log("Button 3 clicked");
});

button4.addEventListener('click', () => {
    // 处理按钮4的点击事件
    console.log("Button 4 clicked");
});

button5.addEventListener('click', () => {
    // 处理按钮5的点击事件
    console.log("Button 5 clicked");
});

// 切换侧边栏的显示/隐藏状态
function toggleSidebar(sidebarId) {
    const sidebar = document.getElementById(sidebarId);
    sidebar.classList.toggle('closed');
}
