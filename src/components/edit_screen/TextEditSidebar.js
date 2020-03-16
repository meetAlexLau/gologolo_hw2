import React, { Component } from 'react'

class TextEditSidebar extends Component {
    constructor() {
        super();

        
        // WE'LL MANAGE THE UI CONTROL
        // VALUES HERE
        this.state = {
            textColor : "#FF0000",
            fontSize : 24,
            backgroundColor: "#0000FF",
            borderColor: "#00FF00",
            borderRadius: 0,
            borderWidth: 0,
            padding: 0    
        }
    }

    handleUndo = () => {
        console.log(this);
        this.props.undoCallback();
    }

    handleRedo =() => {
        console.log(this);
        this.props.redoCallback();
    }

    handleTextEdit = (event) => {
        console.log("editing text");
        var newText = prompt("Please enter a new text");
        if(newText != null){
            newText = newText.trimLeft();
            console.log(newText);
            if(newText.trimLeft() && (newText.trim())){
                this.setState({text: newText, textColor: this.props.logo.textColor,
                fontSize: this.props.logo.fontSize, backgroundColor: this.props.logo.backgroundColor,
                borderColor: this.props.logo.borderColor, borderRadius: this.props.logo.borderRadius,
                borderWidth: this.props.logo.borderWidth, padding: this.props.logo.padding,
                margin: this.props.logo.margin}, this.completeUserEditing);
            }
        }
        console.log(this.props.logo.text);
    }

    handleTextColorChange = (event) => {
        console.log("handleTextColorChange to " + event.target.value);
        this.setState({ textColor: event.target.value, fontSize: this.props.logo.fontSize,
        text: this.props.logo.text, backgroundColor: this.props.logo.backgroundColor,
        borderColor: this.props.logo.borderColor, borderRadius: this.props.logo.borderRadius,
        borderWidth: this.props.logo.borderWidth, padding: this.props.logo.padding, margin: this.props.logo.margin}, this.completeUserEditing);
    }

    handleFontSizeChange = (event) => {
        console.log("handleFontSizeChange to " + event.target.value);
        document.getElementById("fontSizeValue").value = event.target.value;
        this.setState({ fontSize: event.target.value, textColor: this.props.logo.textColor,
        text: this.props.logo.text, backgroundColor: this.props.logo.backgroundColor,
        borderColor: this.props.logo.borderColor, borderRadius: this.props.logo.borderRadius,
        borderWidth: this.props.logo.borderWidth, padding: this.props.logo.padding, margin: this.props.logo.margin}, this.completeUserEditing);
        console.log(this);
    }

    handleBackgroundColorChange = (event) => {
        console.log("handleBackgroundColorChange to " + event.target.value);
        this.setState({ backgroundColor: event.target.value, textColor: this.props.logo.textColor,
        fontSize: this.props.logo.fontSize, text: this.props.logo.text, borderColor: this.props.logo.borderColor,
        borderRadius: this.props.logo.borderRadius, borderWidth: this.props.logo.borderWidth,
        padding: this.props.logo.padding, margin: this.props.logo.margin}, this.completeUserEditing);
    }

    handleBorderColorChange = (event) => {
        console.log("handleBorderColorChange to " + event.target.value);
        this.setState({borderColor: event.target.value, backgroundColor: this.props.logo.backgroundColor,
        textColor: this.props.logo.textColor, fontSize: this.props.logo.fontSize, text:this.props.logo.text,
        borderRadius: this.props.logo.borderRadius, borderWidth: this.props.logo.borderWidth,
        padding: this.props.logo.padding, margin: this.props.logo.margin}, this.completeUserEditing);
    }

    handleBorderRadiusChange = (event) => {
        console.log("handleBorderRadiusChange to " + event.target.value);
        document.getElementById("borderRadiusValue").value = event.target.value;
        this.setState({borderRadius: event.target.value, borderColor: this.props.logo.borderColor, backgroundColor: this.props.logo.backgroundColor,
        textColor: this.props.logo.textColor, fontSize: this.props.logo.fontSize, text: this.props.logo.text,
        borderWidth: this.props.logo.borderWidth, padding: this.props.logo.padding, margin: this.props.logo.margin}, this.completeUserEditing);
    }

    handleBorderThicknessChange = (event) => {
        console.log("handleBorderThicknessChange to " + event.target.value);
        document.getElementById("borderThicknessValue").value = event.target.value;
        this.setState({borderWidth: event.target.value, borderRadius: this.props.logo.borderRadius, borderColor: this.props.logo.borderColor,
        backgroundColor: this.props.logo.backgroundColor, textColor: this.props.logo.textColor, fontSize: this.props.logo.fontSize,
        text: this.props.logo.text, padding: this.props.logo.padding, margin: this.props.logo.margin}, this.completeUserEditing);
    }

    handlePaddingChange = (event) => {
        console.log("handlePaddingChange to " + event.target.value);
        document.getElementById("paddingValue").value = event.target.value;
        this.setState({padding: event.target.value, borderWidth: this.props.logo.borderWidth, borderRadius: this.props.logo.borderRadius,
        borderColor: this.props.logo.borderColor, backgroundColor: this.props.logo.backgroundColor, textColor: this.props.logo.textColor,
        fontSize: this.props.logo.fontSize, text: this.props.logo.text, margin: this.props.logo.margin}, this.completeUserEditing);
    }

    handleMarginChange = (event) => {
        console.log("handleMarginChange to " + event.target.value);
        document.getElementById("marginValue").value = event.target.value;
        this.setState({margin: event.target.value, padding: this.props.logo.padding, borderWidth: this.props.logo.borderWidth,
            borderRadius: this.props.logo.borderRadius, borderColor: this.props.logo.borderColor, backgroundColor: this.props.logo.backgroundColor,
            textColor: this.props.logo.textColor, fontSize: this.props.logo.fontSize, text: this.props.logo.text}, this.completeUserEditing);
    }

    completeUserEditing = () => {
        console.log("completeUserEditing");
        console.log("this.state.fontSize: " + this.state.fontSize);
        console.log("this.state.textColor: " + this.state.textColor);
        this.props.changeLogoCallback(this.props.logo, this.props.logo.key, this.state.text, this.state.textColor, this.state.fontSize,
            this.state.backgroundColor, this.state.borderColor, this.state.borderRadius, this.state.borderWidth, this.state.padding,
            this.state.margin);
    }
    

    render() {
        console.log(this);
        let undoDisabled = !this.props.canUndo();
        let redoDisabled = !this.props.canRedo();
        let undoClass = "waves-effect waves-light btn-small";
        let redoClass = "waves-effect waves-light btn-small";
        if (undoDisabled)
            undoClass += " disabled";
        if (redoDisabled)
            redoClass += " disabled";
        
        /*document.addEventListener("keydown", (e) => {
            if(e.which == (17 && 90)){
                this.handleUndo();
                return;
            }
            </div>onClick= {this.handleTextEdit}>&#9998;</button>
        }) */

        return (
            <div className="card-panel col s3">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <button className="waves-effect waves-light btn-small"
                        onClick= {this.handleTextEdit}>&#9998;</button>
                        <button className={undoClass} onClick={this.handleUndo}>Undo</button>
                        <button className={redoClass} onClick={this.handleRedo}>Redo</button>
                    </div>
                </div>
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Text</span>
                        <div className="row">
                            <div className="col s4">Text Color:</div>
                            <div className="col s8">
                                <input type="color"
                                        onChange={this.handleTextColorChange}
                                        value={this.props.logo.textColor}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Font Size:</div>
                            <div className="col s8">
                                <output id="fontSizeValue" >{this.props.logo.fontSize}</output>
                                <input type="range" min="4" max="144" 
                                    onChange={this.handleFontSizeChange}
                                    value={this.props.logo.fontSize} />
                            </div>
                        </div>
                        <div className="row">
                            <div className= "col s4">Background Color:</div>
                            <div className="col s8">
                                <input type="color"
                                        onChange={this.handleBackgroundColorChange}
                                        value={this.props.logo.backgroundColor}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className = "col s4">Border Color</div>
                            <div className = "col s8">
                                <input type = "color"
                                        onChange = {this.handleBorderColorChange}
                                        value = {this.props.logo.borderColor}/>
                            </div>
                        </div>
                        <div className = "row">
                            <div className = "col s4">Border Radius</div>
                            <div className = "col s8">
                                <output id = "borderRadiusValue">{this.props.logo.borderRadius}</output>
                                <input type = "range"
                                        onChange = {this.handleBorderRadiusChange}
                                        value = {this.props.logo.borderRadius}/>
                            </div>
                        </div>
                        <div className = "row">
                            <div className = "col s4">Border Thickness</div>
                            <div className = "col s8">
                                <output id="borderThicknessValue">{this.props.logo.borderWidth}</output>
                                <input type = "range"
                                        onChange = {this.handleBorderThicknessChange}
                                        value = {this.props.logo.borderWidth}/>

                            </div>
                        </div>
                        <div className = "row">
                            <div className = "col s4">Padding</div>
                            <div className = "col s8">
                                <output id="paddingValue">{this.props.logo.padding}</output>
                                <input type = "range"
                                        onChange = {this.handlePaddingChange}
                                        value = {this.props.logo.padding}/>
                            </div>
                        </div>
                        <div className = "row">
                            <div className = "col s4">Margin</div>
                            <div className = "col s8">
                                <output id="marginValue">{this.props.logo.margin}</output>
                                <input type = "range"
                                        onChange = {this.handleMarginChange}
                                        value = {this.props.logo.margin}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TextEditSidebar