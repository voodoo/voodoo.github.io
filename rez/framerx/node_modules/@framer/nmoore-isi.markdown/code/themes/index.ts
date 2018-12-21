const themeFiles = [
    "chota",
    "github",
    "marx",
    "sakura",
    "sakura-dark",
    "wing"
];

const niceThemeName = theme => {
    return theme
        .replace(/\s|\.|\_|\-/g, " ")
        .replace(/\b\w/g, f => f.toUpperCase());
};

const themes = themeFiles.reduce((obj, theme) => {
    obj[niceThemeName(theme)] = theme;
    return obj;
}, { Custom: true });

export default themes;
