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

        // console.log(this.state.singleQuiz)
        return <MainContent title={this.state.singleQuiz.title}>
            <div style={{ margin: "0 auto" }}>

            </div>
        </MainContent>

    }


}

export default SingleQuiz