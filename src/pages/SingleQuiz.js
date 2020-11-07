import React from "react"
import { DATABASE_URL } from '../index'
import MainContent from '../components/templates/MainContent'

class SingleQuiz extends React.Component {

    state = {
        singleQuiz: []
    }


    fetchQuizData = () => {
        fetch(`${DATABASE_URL}/quiz/${this.props.match.params.id}.json`)
            .then(res => res.json())
            .then(ques => {
                this.setState({
                    singleQuiz: ques
                })
            })
    }

    componentDidMount() {
        this.fetchQuizData()
    }

    render() {

        return <MainContent title={this.state.singleQuiz.title}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                <div style={{ width: "75%", height: "75%", backgroundColor: "orange" }}>

                </div>
            </div>
        </MainContent>

    }


}

export default SingleQuiz