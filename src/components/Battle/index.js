import React from "react";
import PlayerInput from "./PlayerInput"
import { Link } from "react-router-dom"
import PlayerPreview from "./PlayerPreview";

class Battle extends React.Component {

    constructor() {
        super()
        this.state = {
            playerOneName: "",
            playerTwoName: "",
            playerOneImage: null,
            playerTwoImage: null
        }
    }

    handleSubmit = (id, userName) => {
        this.setState({
            [id + "Name"]: userName,
            [id + "Image"]: `https://github.com/${userName}.png?size200`
        })
    }

    handleReset = (id) => {
        this.setState({
            [id + "Name"]: "",
            [id + "Image"]: null
        })
    }



    render() {
        console.log(this.state)
        return (
            <>
                <div className="row">
                    {!this.state.playerOneName ? <PlayerInput
                        id="playerOne"
                        label="Player 1"
                        handleSubmit={this.handleSubmit}
                    /> :
                        <PlayerPreview
                            avatar={this.state.playerOneImage}
                            userName={this.state.playerOneName}
                            handleReset={this.handleReset}
                        >
                            <button className="reset" onClick={() => this.handleReset("playerOne")}>Reset</button>
                        </PlayerPreview>
                    }

                    {!this.state.playerTwoImage ?
                        <PlayerInput
                            id="playerTwo"
                            label="Player 2"
                            handleSubmit={this.handleSubmit}
                        /> :
                        <PlayerPreview
                            avatar={this.state.playerTwoImage}
                            userName={this.state.playerTwoName}
                            handleReset={this.handleReset}
                        >
                            <button className="reset" onClick={() => this.handleReset("playerTwo")}>Reset</button>
                        </PlayerPreview>
                    }
                    )
                </div>
                {this.state.playerOneName && this.state.playerTwoName &&
                    <Link className="button" to={{
                        pathname: "/battle/results",
                        search: `?playerOneName=${this.state.playerOneName}&playerTwoName=${this.state.playerTwoName}`
                    }}>Battle</Link>
                }
            </>
        )
    }
}

export default Battle