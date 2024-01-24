import * as React from 'react';
import './index.css';
interface IFunnelChartProps {
    data: any;
    title?: string;
    showValues: boolean;
    showNames: boolean;
    pallette: string[];
    showRunningTotal: boolean;
    heightRelativeToValue: boolean;
    chartHeight?: number;
    chartWidth?: number;
    style?: React.CSSProperties;
    funnelShape?: 'standard' | 'flat';
    getRowStyle?: (row: any) => React.CSSProperties;
    getRowNameStyle?: (row: any) => React.CSSProperties;
    getRowValueStyle?: (row: any) => React.CSSProperties;
    getTitleStyle?: (title: any) => React.CSSProperties;
    decorateValue?: (row: any, index: number, data: any) => any;
    getToolTip?: (row: any) => string;
    onRowClick?: (row: any) => void;
}
interface IFunnelChartState {
}
declare class FunnelChart extends React.Component<IFunnelChartProps, IFunnelChartState> {
    static defaultProps: {
        showValues: boolean;
        showNames: boolean;
        pallette: string[];
        showRunningTotal: boolean;
        heightRelativeToValue: boolean;
        funnelShape: string;
    };
    constructor(props: IFunnelChartProps);
    setFunnelRows(): React.JSX.Element[];
    getTotalValue(): number;
    render(): React.JSX.Element;
}
export default FunnelChart;
