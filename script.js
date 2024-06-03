// 全局变量，用于存储CSV内容
let csvData = '';

document.addEventListener('DOMContentLoaded', function() {
    const button3 = document.getElementById('button3');
    const button5 = document.getElementById('button5');

    if (button3) {
        button3.addEventListener('click', function(event) {
            toggleDropdown('dropdown3', event);
        });
    }

    if (button5) {
        button5.addEventListener('click', function(event) {
            toggleDropdown('dropdown5', event);
        });
    }

    // 点击页面其他地方关闭所有下拉菜单
    window.onclick = function(event) {
        if (!event.target.matches('#button3') && !event.target.matches('#button5')) {
            closeAllDropdowns();
        }
    };
});

// 显示或隐藏指定的下拉框
function toggleDropdown(dropdownId, event) {
    event.stopPropagation();
    closeAllDropdowns();
    const dropdown = document.getElementById(dropdownId);
    const button = event.target;

    // 获取按钮的位置和尺寸
    const rect = button.getBoundingClientRect();

    // 设置下拉框位置
    dropdown.style.left = `${rect.left}px`;
    dropdown.style.top = `${rect.bottom}px`;
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

// 关闭所有下拉框
function closeAllDropdowns() {
    const dropdowns = document.getElementsByClassName('dropdown');
    for (let i = 0; i < dropdowns.length; i++) {
        dropdowns[i].style.display = 'none';
    }
}

// 读取CSV文件的函数
function readCSV() {
    // 触发文件选择对话框
    const fileInput = document.getElementById('fileInput');
    fileInput.click();

    // 监听文件选择
    fileInput.onchange = function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                csvData = e.target.result;
                console.log(csvData);  // 输出CSV内容到控制台
            };
            reader.readAsText(file);
        } 
    };
}

// 切换侧边栏的显示与隐藏
function toggleSidebar(sidebarId) {
    const sidebar = document.getElementById(sidebarId);
    sidebar.style.display = sidebar.style.display === 'block' ? 'none' : 'block';
}
