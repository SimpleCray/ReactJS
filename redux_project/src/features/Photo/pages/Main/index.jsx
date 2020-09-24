import React from 'react';
import Banner from '../../../../components/banner/banner';

MainPage.propTypes = {};

function MainPage(props) {
  return (
    <div className="photo-main">
      <Banner title="Your awesome photo" backgroundUrl={Images.Pink_BG}/>
    </div>
  );
}

export default MainPage;