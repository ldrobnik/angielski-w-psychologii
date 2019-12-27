import React, {useState, useEffect} from 'react';
import {createGlobalStyle} from 'styled-components';

import NavigationBar from "../NavigationBar/NavigationBar";
import SideMenu from "../SideMenu/SideMenu";

/* STYLED COMPONENTS */
const GlobalStyle = createGlobalStyle`
    body {
        font-family: ${props => props.theme.serif};
        color: ${props => props.theme.darkColor};
        background: linear-gradient(${props => props.theme.themeColor}, ${props => props.theme.darkThemeColor});
        min-height: 100vh;
        }
        
    a {
        text-decoration: none;
        color: ${props => props.theme.darkColor};

    }
     
     ::selection {
        color: ${props => props.theme.lightColor};
        background-color: ${props => props.theme.themeColor};
     }
`;

const Home = (props) => {

    //window width at which side menu is changed to top menu
    const mobileBreakpoint = 700;

    // Specifies the current window width
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // Updates the window width
    const handleWindowSizeChange = () => {
        setWindowWidth(window.innerWidth);
    };

    // Specifies whether the app is displayed on a mobile device
    const isMobile = windowWidth <= mobileBreakpoint;

    // Adds an event listener to monitor the screen width and remove the listener when the component unmounts
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);

        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    });

    //display top menu on larger screens and side menu on small screens
    const menu = isMobile ? <SideMenu /> : <NavigationBar />;

    return (
        <div id="outer-container">
            <GlobalStyle />
            {menu}
            <div id="page-wrap">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto aut beatae doloremque ducimus eligendi enim eveniet excepturi fuga fugiat ipsa magni nam nemo, nesciunt officia officiis perferendis qui, quisquam rem sapiente sunt tempore unde, voluptatum. Autem deserunt iste iusto officiis, quo reiciendis saepe. Ea et, iste iure molestiae molestias nam non voluptas! Corporis doloremque est eum eveniet, impedit nam nihil omnis optio placeat provident, qui quidem quisquam sint sit suscipit. Adipisci consequuntur, eius laboriosam obcaecati quidem ut. Maxime quibusdam quod vel. A alias autem consequatur eius et excepturi exercitationem illo ipsa ipsam libero maiores numquam odio quae quos, sunt temporibus veritatis. Aspernatur atque, delectus eos facere fugit numquam placeat quod repudiandae. Distinctio dolores nisi obcaecati. Atque, delectus ea earum est, excepturi iusto laudantium nam nemo neque nesciunt pariatur perferendis quo, quod. Accusamus atque commodi cum dolorem earum eligendi facilis fuga, ipsa ipsum minus, molestias nam odit optio quod soluta totam vero voluptates. Alias consequatur cupiditate error impedit, laborum maxime molestiae natus neque obcaecati officia qui quibusdam, quis rem repellat sed sit voluptates? Ad, ea et hic id ipsa iusto nemo numquam, obcaecati odio, quaerat quibusdam totam? Alias aliquid delectus dolor modi perferendis quasi quisquam vero! Accusantium aliquid animi aperiam architecto atque debitis dignissimos dolor dolores eligendi eveniet fugit illum maiores maxime modi, molestiae neque nihil non nulla praesentium quam qui quidem quisquam quos, sit unde veniam voluptatum. Eligendi, iusto, placeat? Accusamus atque consequatur error eum modi quas quisquam? Amet at consequuntur cum, ex impedit incidunt ipsum, iste iure nulla obcaecati porro quas saepe tempora? Deserunt dicta dolore earum in laborum officiis perferendis quae quo rerum totam! Asperiores assumenda, aut autem, distinctio dolorem doloribus eaque exercitationem illo ipsa itaque, molestias odit pariatur perspiciatis placeat possimus quidem sequi voluptate! Asperiores aut cum dolorem dolores eos et neque nulla odit, provident repudiandae.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto aut beatae doloremque ducimus eligendi enim eveniet excepturi fuga fugiat ipsa magni nam nemo, nesciunt officia officiis perferendis qui, quisquam rem sapiente sunt tempore unde, voluptatum. Autem deserunt iste iusto officiis, quo reiciendis saepe. Ea et, iste iure molestiae molestias nam non voluptas! Corporis doloremque est eum eveniet, impedit nam nihil omnis optio placeat provident, qui quidem quisquam sint sit suscipit. Adipisci consequuntur, eius laboriosam obcaecati quidem ut. Maxime quibusdam quod vel. A alias autem consequatur eius et excepturi exercitationem illo ipsa ipsam libero maiores numquam odio quae quos, sunt temporibus veritatis. Aspernatur atque, delectus eos facere fugit numquam placeat quod repudiandae. Distinctio dolores nisi obcaecati. Atque, delectus ea earum est, excepturi iusto laudantium nam nemo neque nesciunt pariatur perferendis quo, quod. Accusamus atque commodi cum dolorem earum eligendi facilis fuga, ipsa ipsum minus, molestias nam odit optio quod soluta totam vero voluptates. Alias consequatur cupiditate error impedit, laborum maxime molestiae natus neque obcaecati officia qui quibusdam, quis rem repellat sed sit voluptates? Ad, ea et hic id ipsa iusto nemo numquam, obcaecati odio, quaerat quibusdam totam? Alias aliquid delectus dolor modi perferendis quasi quisquam vero! Accusantium aliquid animi aperiam architecto atque debitis dignissimos dolor dolores eligendi eveniet fugit illum maiores maxime modi, molestiae neque nihil non nulla praesentium quam qui quidem quisquam quos, sit unde veniam voluptatum. Eligendi, iusto, placeat? Accusamus atque consequatur error eum modi quas quisquam? Amet at consequuntur cum, ex impedit incidunt ipsum, iste iure nulla obcaecati porro quas saepe tempora? Deserunt dicta dolore earum in laborum officiis perferendis quae quo rerum totam! Asperiores assumenda, aut autem, distinctio dolorem doloribus eaque exercitationem illo ipsa itaque, molestias odit pariatur perspiciatis placeat possimus quidem sequi voluptate! Asperiores aut cum dolorem dolores eos et neque nulla odit, provident repudiandae.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto aut beatae doloremque ducimus eligendi enim eveniet excepturi fuga fugiat ipsa magni nam nemo, nesciunt officia officiis perferendis qui, quisquam rem sapiente sunt tempore unde, voluptatum. Autem deserunt iste iusto officiis, quo reiciendis saepe. Ea et, iste iure molestiae molestias nam non voluptas! Corporis doloremque est eum eveniet, impedit nam nihil omnis optio placeat provident, qui quidem quisquam sint sit suscipit. Adipisci consequuntur, eius laboriosam obcaecati quidem ut. Maxime quibusdam quod vel. A alias autem consequatur eius et excepturi exercitationem illo ipsa ipsam libero maiores numquam odio quae quos, sunt temporibus veritatis. Aspernatur atque, delectus eos facere fugit numquam placeat quod repudiandae. Distinctio dolores nisi obcaecati. Atque, delectus ea earum est, excepturi iusto laudantium nam nemo neque nesciunt pariatur perferendis quo, quod. Accusamus atque commodi cum dolorem earum eligendi facilis fuga, ipsa ipsum minus, molestias nam odit optio quod soluta totam vero voluptates. Alias consequatur cupiditate error impedit, laborum maxime molestiae natus neque obcaecati officia qui quibusdam, quis rem repellat sed sit voluptates? Ad, ea et hic id ipsa iusto nemo numquam, obcaecati odio, quaerat quibusdam totam? Alias aliquid delectus dolor modi perferendis quasi quisquam vero! Accusantium aliquid animi aperiam architecto atque debitis dignissimos dolor dolores eligendi eveniet fugit illum maiores maxime modi, molestiae neque nihil non nulla praesentium quam qui quidem quisquam quos, sit unde veniam voluptatum. Eligendi, iusto, placeat? Accusamus atque consequatur error eum modi quas quisquam? Amet at consequuntur cum, ex impedit incidunt ipsum, iste iure nulla obcaecati porro quas saepe tempora? Deserunt dicta dolore earum in laborum officiis perferendis quae quo rerum totam! Asperiores assumenda, aut autem, distinctio dolorem doloribus eaque exercitationem illo ipsa itaque, molestias odit pariatur perspiciatis placeat possimus quidem sequi voluptate! Asperiores aut cum dolorem dolores eos et neque nulla odit, provident repudiandae.
            </div>
        </div>
    );
};

export default Home;