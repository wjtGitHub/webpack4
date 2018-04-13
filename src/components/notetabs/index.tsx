import * as React from "react";
import { Button, Icon, Input, Tabs } from "antd";
const { TextArea } = Input;
const { TabPane } = Tabs;
import { connect } from "react-redux";
import { IStore } from "@store/store";
import { ITabType, updateTab, delTab, addTab } from "@components/notetabs/redux";
import "./style.styl";
import { isString } from "util";
import { MDRichEditor } from "@components/editor";


interface INoteTabType {
    noteTabStore: ITabType[];
    updateTab: (opt: ITabType) => void;
    delTab: (opt: string) => void;
    addTab: (opt: ITabType) => void;
}


class NoteTabs extends React.Component<INoteTabType, {
    activeKey: string;
}> {
    constructor(props: INoteTabType) {
        super(props);
        const { addTab } = this.props;
        this.state = {
            activeKey: "welcome",
        };
        addTab({
            key: "welcome",
            title: "欢迎页",
        });
    }

    public onChange = (activeKey: string) => {
        this.setState({ activeKey });
    }


    public remove = (targetKey: string) => {
        const { delTab } = this.props;
        delTab(targetKey);
    }

    public onEdit = (targetKey: string | React.MouseEvent<HTMLElement>, action: string) => {
        if (action === "remove" && isString(targetKey)) {
            this.remove(targetKey);
        }
    }

    public render() {
        const { noteTabStore } = this.props;
        return (
            <div className="note-tabs">
                <Tabs
                    defaultActiveKey="1"
                    size="small"
                    onChange={this.onChange}>
                    {noteTabStore.map((pane, $index) => {
                        return (
                            <TabPane tab={
                                <React.Fragment>
                                    <span title={pane.title} style={{ marginRight: "5px" }}>{pane.title}</span>
                                    <Icon type="close" />
                                </React.Fragment>
                            } key={pane.key}>
                            </TabPane>
                        );
                    })}

                    <TabPane tab="Tab 2" key="2"></TabPane>
                    <TabPane tab="Tab 3" key="31"></TabPane>
                    <TabPane tab="Tab 3" key="32"></TabPane>
                    <TabPane tab="Tab 3" key="33"></TabPane>
                    <TabPane tab="Tab 3" key="34"></TabPane>
                    <TabPane tab="Tab 3" key="35"></TabPane>
                    <TabPane tab="Tab 3" key="36"></TabPane>
                    <TabPane tab="Tab 3" key="37"></TabPane>
                    <TabPane tab="Tab 3" key="38"></TabPane>
                    <TabPane tab="Tab 3" key="39"></TabPane>
                    <TabPane tab="Tab 3" key="311"></TabPane>
                    <TabPane tab="Tab 3" key="322"></TabPane>
                    <TabPane tab="Tab 3" key="333"></TabPane>
                    <TabPane tab="Tab 3" key="344"></TabPane>
                    <TabPane tab="Tab 3" key="355"></TabPane>
                    <TabPane tab="Tab 3" key="366"></TabPane>
                    <TabPane tab="Tab 3" key="377"></TabPane>
                    <TabPane tab="Tab 3" key="388"></TabPane>
                    <TabPane tab="Tab 3" key="399"></TabPane>
                    <TabPane tab="Tab 3" key="3123"></TabPane>
                    <TabPane tab="Tab 3" key="3"></TabPane>
                </Tabs>
                <div className="MD">
                    <Input
                        className="note-title"
                        placeholder="标题"
                        size="large"
                        style={{
                            borderWidth: "0",
                            boxShadow: "0 0 0 0 transparent",
                        }} />

                    <MDRichEditor />
                    {/* <div className="EDITOR" contentEditable={true}></div> */}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state: IStore) {
    return {
        noteTabStore: state.handleTab,
    };
}

function mapDispatchToProps(dispatch: (p: any) => void) {
    return {
        updateTab: (opt: ITabType) => {
            dispatch(updateTab(opt));
        },
        delTab: (key: string) => {
            dispatch(delTab(key));
        },
        addTab: (opt: ITabType) => {
            dispatch(addTab(opt));
        },
    };
}


export const NoteTabsComponent = connect(mapStateToProps, mapDispatchToProps)(NoteTabs);
