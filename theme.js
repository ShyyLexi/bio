var isDark;

function selectTheme(theme) {
    if (theme.matches) {
        dark();
    } else {
        light();
    }
}

function dark() {
    console.log("dark");
    isDark = true;
    document.getElementById("btn-darkmode").innerHTML = "<div>Dark</div>";
    VANTA.FOG({
        el: "#vanta",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        highlightColor: 0xf1a5b5,
        midtoneColor: 0x59c8f3,
        lowlightColor: 0x8d7be0,
        baseColor: 0x1b1b35
    })
}

function light() {
    console.log("light");
    isDark = false;
    document.getElementById("btn-darkmode").innerHTML = "<div>Light</div>";
    VANTA.FOG({
        el: "#vanta",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        highlightColor: 0xf1a5b5,
        midtoneColor: 0x59c8f3,
        lowlightColor: 0x8d7be0
    })
}

function switchTheme() {
    switch (isDark) {
        case true:
            light();
            break;
        case false:
            dark();
            break;
    
        default:
            break;
    }
}

window.addEventListener('DOMContentLoaded', () => {
    var theme = window.matchMedia("(prefers-color-scheme: dark)");
    selectTheme(theme);
    theme.addListener(selectTheme);
})