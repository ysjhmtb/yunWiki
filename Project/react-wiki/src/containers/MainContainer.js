import React, { useState } from 'react';
import img1 from '../assets/images/card-images/spring-boot-logo.png';
import img2 from '../assets/images/card-images/React-icon.png';
import img3 from '../assets/images/card-images/networkDesign.jpg';

import MainHeader from '../components/Main/MainHeader';
import MainBody from '../components/Main/MainBody';

const MainContainer = () => {

    const [menuArr, setMenuArr] = useState([
        {
            img: img1,
            title: 'Spring Boot',
            content: 'Lorem Ipsum is simply dummy text of the printing and \
                    typesetting industry. Lorem Ipsum has been the industry\'s \
                    standard dummy text ever since the 1500s, when an unknown \
                    printer took a galley of type and scrambled it to make \
                    '
        },
        {
            img: img2,
            title: 'React',
            content: 'Lorem Ipsum is simply dummy text of the printing and \
                    typesetting industry. Lorem Ipsum has been the industry\'s \
                    standard dummy text ever since the 1500s, when an unknown \
                    printer took a galley of type and scrambled it to make \
                    '
        },
        {
            img: img3,
            title: 'Network',
            content: 'Lorem Ipsum is simply dummy text of the printing and \
                    typesetting industry. Lorem Ipsum has been the industry\'s \
                    standard dummy text ever since the 1500s, when an unknown \
                    printer took a galley of type and scrambled it to make \
                    '
        }
    ]);

    
    return (
        <div>
            <MainHeader />
            <MainBody menuArr={menuArr} />
        </div>
    );

};

export default MainContainer;