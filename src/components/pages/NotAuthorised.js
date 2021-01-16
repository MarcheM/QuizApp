import React from 'react';
import MainContent from '../templates/mainContent/MainContent'
import CenterWrapper from '../templates/centerWrapper/CenterWrapper'
const NotAuthorised = () => {
    return (
        <MainContent title="Nic tu nie ma">
            <CenterWrapper>
                <div>Musisz być zalogowany by zobaczyć tą stronę</div>
            </CenterWrapper>
        </MainContent>
    );
}

export default NotAuthorised