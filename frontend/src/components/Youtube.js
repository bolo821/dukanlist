import React from 'react';
import "./youtube.css"

const Youtube = () => {
    return (
        <div className="git_container" style={{ height: '500px', width: '80%', margin:'auto'}}>
          <h1> <b>Dukanlist Video</b> </h1>
          {/* <h1> <b>Dukanlist Videos</b> </h1>
              <div class="containers"> 
              <img src={'/homepage_banner.gif'} className="category_icon" style={{
                  height: 500,
                  width: 500
              }} />
          </div> */}
          <iframe width="100%" height="400px"  src="https://www.youtube.com/embed/885E62dIXLs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

          {/* <div style={{
              position: 'relative',
              textAlign: 'center',
              width: '100%',
              backgroundColor: 'white'
            }}>
            <img
              src={'/homepage_banner.gif'}
              alt="BluewebSurfer" 
              style={{ width: '100% !important' }} />
          </div> */}
        </div>
    );
}

export default Youtube;
