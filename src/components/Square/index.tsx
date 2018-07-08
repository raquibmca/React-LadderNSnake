import * as React from 'react';

export interface SquareProps {
    value: number;
    onClick?(): void
}

export class Square extends React.Component<SquareProps, {}> {
    constructor(props?: SquareProps, context?: any) {
        super(props, context);
    }

    private getClassName(indx: number): string {
        if ((indx % 2) == 0)
            return "square square-even";
        else
            return "square square-odd";
    }

    render(): JSX.Element {
        return (
            <div
                className={this.props.value === null ? "square" : this.getClassName(this.props.value)}
                onClick={this.props.onClick}
            >
                {this.props.value}
            </div>
        );
    }
}
