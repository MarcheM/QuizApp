import React from 'react';
import MainContent from '../components/templates/MainContent'
import QuizTemplate from '../components/templates/QuizTemplate'

const NotAuthorised = () => {
    return (
        <MainContent title="Nic tu nie ma">
            <QuizTemplate>
                <div>Musisz być zalogowany by zobaczyć tą stronę</div>
            </QuizTemplate>
        </MainContent>
    );
}

export default NotAuthorised;