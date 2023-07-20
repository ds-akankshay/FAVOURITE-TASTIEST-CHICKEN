import {
    ChatHeadlessProvider,
    HeadlessConfig,
  } from "@yext/chat-headless-react";
  import {ChatInput, ChatPanel, ChatPopUp, MessageBubble } from "@yext/chat-ui-react";
  import * as React from "react";
  import "@yext/chat-ui-react/bundle.css";
  
  // sessionStorage.setItem('checkhead', "plop")
  const config: HeadlessConfig = {
    apiKey: "ecfbbe3ca5b1b06960b13fcb5a9f5dd7",
    botId: "favourite-fried-chicken", 
    saveToSessionStorage: false,
    // apiDomain: "sbx-cdn.yextapis.com",
  };
  
  const MyChat =()=> {
    return (
      <ChatHeadlessProvider config={config} >
        <ChatPopUp  title="Favourite Fried Chicken"
          showRestartButton={false}
          placeholder="Write your query here"
          stream={false}
          showTimestamp={false} />
     
        
      </ChatHeadlessProvider>
    );
  }
  
  export default MyChat;