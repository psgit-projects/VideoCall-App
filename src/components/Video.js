import React from 'react'
import { useParams } from 'react-router-dom' 
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Video = () => {
    const {id}=useParams()
    const roomId = id;
    let myMeeting = async (element) => {
  
   // generate Kit Token
   const appID = YOUR_APP_ID;
   const serverSecret = "Secret_CODE";
   const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(),"ps-project");
  
   // Create instance object from Kit Token.
   const zp = ZegoUIKitPrebuilt.create(kitToken);
   // start the call
   zp.joinRoom({
          container: element,
          sharedLinks: [
            {
              name: 'Personal link',
              url:
               window.location.protocol + '//' + 
               window.location.host + window.location.pathname +
                '?roomId=' +
                roomId,
            },
          ],
          scenario: {
           mode: ZegoUIKitPrebuilt.OneONoneCall,
          },
     });
    };
  

  return (
    <div ref={myMeeting}>

    </div>
  )
}

export default Video
