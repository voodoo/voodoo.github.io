import * as React from "react";
import * as marked from 'marked';
import * as styles from './MarkdownStyles';
import * as scope from 'scope-css';
import themes from './themes';
import { PropertyControls, ControlType } from "framer";

interface Props {
    id: string;
    sourceText: string;
    themeFile: string;
    overflowShown: boolean;
    style: string;
    padding: number;
    paddingPerSide: number;
    paddingTop: number;
    paddingRight: number;
    paddingBottom: number;
    paddingLeft: number;
}

interface State {
    theme: any;
    fetching: boolean;
    raw: string;
    content: string;
}

export class Markdown extends React.Component<Props, State> {

    state = {
        theme: null,
        fetching: false,
        raw: null,
        content: null
    }

    // Set default properties
    static defaultProps = {
        id: '',
        sourceText: null,
        width: 400,
        height: 600,
        overflowShown: false,
        style: 'Github'
    }

    // Items shown in property panel
    static propertyControls: PropertyControls = {
        sourceText: { type: ControlType.File, title: "Source", allowedFileTypes: ['md', 'markdown'] },
        style: {
            type: ControlType.Enum,
            title: "Theme",
            options: Object.keys(themes)
        },
        themeFile: {
            type: ControlType.File,
            title: "CSS File",
            allowedFileTypes: ['css'],
            hidden: (props) => props.style !== 'Custom'
        },
        padding: {
            type: ControlType.FusedNumber,
            toggleKey: "paddingPerSide",
            toggleTitles: ["All Sides", "Per Side"],
            valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
            valueLabels: ["T", "R", "B", "L"],
            min: 0,
            title: "Padding"
        },
        overflowShown: { type: ControlType.Boolean, title: "Overflow", defaultValue: false, enabledTitle: "Show", disabledTitle: "Hide" }
    }

    componentWillMount() {
        if (this.props.sourceText && !this.state.raw && !this.state.fetching) this.fetchSourceText();
        if (this.props.style && this.props.style !== 'Custom' && !this.state.theme) this.fetchTheme();
        if (this.props.style === 'Custom' && this.props.themeFile) {
            this.setState({ theme: null })
            this.fetchCustomTheme();
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.sourceText !== prevProps.sourceText) {
            this.fetchSourceText();
        }
        if (this.props.style !== 'Custom' && this.props.style !== prevProps.style) {
            this.fetchTheme();
        }
        if (this.props.style === 'Custom' && (this.props.style !== prevProps.style || this.props.themeFile !== prevProps.themeFile) ) {
            this.setState({ theme: null })
            this.fetchCustomTheme();
        }
    }

    private fetchSourceText() {
        this.setState({ fetching: true });
        fetch(this.props.sourceText)
            .then(response => response.text())
            .then(raw => this.setState({ raw }))
            .then(() => this.compile())
            .then(() => this.setState({ fetching: false }))
    }

    private async fetchTheme() {
        this.setState({ fetching: true });
        /// @ts-ignore
        let { default: theme } = require(`./themes/${themes[this.props.style]}`);
        theme = scope(theme, createScopedSelector(this.props));
        if (theme) {
            this.setState({ theme, fetching: false })
        }
    }

    private async fetchCustomTheme() {
        this.setState({ fetching: true });
        let theme = await fetch(this.props.themeFile).then(x => x.text());
        theme = scope(theme, createScopedSelector(this.props));
        if (theme) {
            this.setState({ theme, fetching: false })
        }
    }

    private compile() {
        const content = marked.parse(this.state.raw, { gfm: true, tables: true });
        this.setState({ content });
    }

    private renderCtaState(msg: string) {
        return (
            <div style={styles.connect}>
                {msg}&nbsp;→
            </div>
        )
    }

    private renderMarkdown() {
        const { theme } = this.state;
        const overflow = this.props.overflowShown ? 'visible' : 'hidden';
        const padding = this.props.paddingPerSide ? {
            paddingTop: this.props.paddingTop,
            paddingRight: this.props.paddingRight,
            paddingBottom: this.props.paddingBottom,
            paddingLeft: this.props.paddingLeft,
            } : {
                padding: this.props.padding
            };
        return (
            <div style={{ ...styles.content, overflow, ...padding }}>
                { theme ? <style>{theme}</style> : null }
                <div dangerouslySetInnerHTML={{ __html: this.state.content }} />
            </div>
        )
    }

    render() {
        if (!this.props.sourceText) {
            return this.renderCtaState(`Choose a Markdown file`);
        } else if (this.props.style === 'Custom' && !this.props.themeFile) {
            return this.renderCtaState(`Select a CSS File to use Custom theme`);
        } else {
            return this.renderMarkdown();
        }
    }
}

const createScopedSelector = (props: any) => `div#id_${props.id.split('.')[0].replace(/\@framer\/nmoore\-isi/g, '')}`;
