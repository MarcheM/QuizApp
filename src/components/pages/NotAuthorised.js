import React from 'react';
import MainContent from '../templates/mainContent/MainContent'
import QuizTemplate from '../templates/quizTemplate/QuizTemplate'

const NotAuthorised = () => {
    return (
        <MainContent title="Nic tu nie ma">
            <QuizTemplate>
                <div>Musisz być zalogowany by zobaczyć tą stronę</div>
            </QuizTemplate>
        </MainContent>
    );
}

export default NotAuthorised