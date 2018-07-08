import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './dice.scss';

export interface DiceState {
    DiceValue: number
}

export interface DiceProp {
    disabled?: boolean;

    onClick?(e: any): void;
}

export class Dice extends React.Component<DiceProp, DiceState> {
    private checkBoxElement: HTMLInputElement;

    static defaultProps: Partial<DiceProp> = {
        disabled: false
    }

    constructor(props?: any, context?: any) {
        super(props, context);
        this.onDiceClick = this.onDiceClick.bind(this);
        this.state = { DiceValue: 1 };
    }

    public RollDice(): number {
        let diceVal: number = this.state.DiceValue;
        if (!this.checkBoxElement.checked && !this.props.disabled) {
            diceVal = Math.floor((Math.random() * Math.floor(6)) + 1) ;
            this.checkBoxElement.checked = !this.checkBoxElement.checked;
            setTimeout(
                () => {
                    this.setState({ DiceValue: diceVal });
                    this.checkBoxElement.checked = false;
                },
                2000
            );
        }
        return diceVal;
    }

    private onDiceClick(e: any) {
        if (!this.checkBoxElement.checked && !this.props.disabled) {
            this.checkBoxElement.checked = !this.checkBoxElement.checked;
            setTimeout(
                () => {
                    this.setState({ DiceValue: Math.floor((Math.random() * Math.floor(6)) + 1) });
                    this.checkBoxElement.checked = false;
                },
                2000
            );
        }
    }

    public render(): JSX.Element {
        return (
            <div className="margin-100">
                <input className="hideMe" id="roll" ref={ref => (this.checkBoxElement = ref)} name="roll" type="checkbox"></input>
                <div id="dice" onClick={this.props.onClick}>
                    <div className="side front">
                        <div className="dot center"></div>
                    </div>
                    <div className="side front inner"></div>
                    <div className="side top">
                        <div className="dot dtop dleft"></div>
                        <div className="dot dbottom dright"></div>
                    </div>
                    <div className="side top inner"></div>
                    <div className="side right">
                        <div className="dot dtop dleft"></div>
                        <div className="dot center"></div>
                        <div className="dot dbottom dright"></div>
                    </div>
                    <div className="side right inner"></div>
                    <div className="side left">
                        <div className="dot dtop dleft"></div>
                        <div className="dot dtop dright"></div>
                        <div className="dot dbottom dleft"></div>
                        <div className="dot dbottom dright"></div>
                    </div>
                    <div className="side left inner"></div>
                    <div className="side bottom">
                        <div className="dot center"></div>
                        <div className="dot dtop dleft"></div>
                        <div className="dot dtop dright"></div>
                        <div className="dot dbottom dleft"></div>
                        <div className="dot dbottom dright"></div>
                    </div>
                    <div className="side bottom inner"></div>
                    <div className="side back">
                        <div className="dot dtop dleft"></div>
                        <div className="dot dtop dright"></div>
                        <div className="dot dbottom dleft"></div>
                        <div className="dot dbottom dright"></div>
                        <div className="dot center dleft"></div>
                        <div className="dot center dright"></div>
                    </div>
                    <div className="side back inner"></div>
                    <div className="side cover x"></div>
                    <div className="side cover y"></div>
                    <div className="side cover z"></div>

                    {
                        this.state.DiceValue === 1 &&
                        <div className="side front">
                            <div className="dot center"></div>
                        </div>
                    }
                    {
                        this.state.DiceValue === 2 &&
                        <div className="side front">
                            <div className="dot dtop dleft"></div>
                            <div className="dot dbottom dright"></div>
                        </div>
                    }
                    {
                        this.state.DiceValue === 3 &&
                        <div className="side front">
                            <div className="dot dtop dleft"></div>
                            <div className="dot center"></div>
                            <div className="dot dbottom dright"></div>
                        </div>
                    }
                    {
                        this.state.DiceValue === 4 &&
                        <div className="side front">
                            <div className="dot dtop dleft"></div>
                            <div className="dot dtop dright"></div>
                            <div className="dot dbottom dleft"></div>
                            <div className="dot dbottom dright"></div>
                        </div>
                    }
                    {
                        this.state.DiceValue === 5 &&
                        <div className="side front">
                            <div className="dot center"></div>
                            <div className="dot dtop dleft"></div>
                            <div className="dot dtop dright"></div>
                            <div className="dot dbottom dleft"></div>
                            <div className="dot dbottom dright"></div>
                        </div>
                    }
                    {
                        this.state.DiceValue === 6 &&
                        <div className="side front">
                            <div className="dot dtop dleft"></div>
                            <div className="dot dtop dright"></div>
                            <div className="dot dbottom dleft"></div>
                            <div className="dot dbottom dright"></div>
                            <div className="dot center dleft"></div>
                            <div className="dot center dright"></div>
                        </div>
                    }
                </div>
            </div>
        )
    }
}
